import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";
import test from "node:test";
import ts from "typescript";

const source = await readFile(new URL("../app/components/AnalyticsEvents.tsx", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;

function mountAnalytics(gtag) {
  let onClick;
  let cleanup;
  const win = { gtag, location: { origin: "https://example.test", pathname: "/contact" } };
  class Element {
    constructor(attributes = {}) { this.attributes = attributes; }
    closest() { return this; }
    getAttribute(name) { return this.attributes[name] ?? null; }
  }
  class Anchor extends Element {}
  const module = { exports: {} };
  vm.runInNewContext(compiled, {
    exports: module.exports, module, URL, Element, HTMLAnchorElement: Anchor, window: win,
    document: {
      addEventListener(name, listener) { if (name === "click") onClick = listener; },
      removeEventListener(name, listener) { if (name === "click" && onClick === listener) onClick = undefined; },
    },
    require(name) {
      assert.equal(name, "react");
      return { useEffect(effect) { cleanup = effect(); } };
    },
  });
  module.exports.AnalyticsEvents();
  return { click: attributes => onClick({ target: new Anchor(attributes) }), cleanup: () => cleanup(), active: () => Boolean(onClick) };
}

test("sends consultation actions to gtag without inquiry text or URL parameters", () => {
  const events = [];
  const analytics = mountAnalytics((...args) => events.push(args));
  analytics.click({ href: "https://salonflowlab.com/contact/?email=visitor@example.test#message", "data-analytics-event": "contact_form_open" });
  analytics.click({ href: "https://lin.ee/NrJGMVt?visitor=private" });
  analytics.click({ href: "/contact" });
  analytics.click({ href: "/company" });
  assert.equal(events.length, 3);
  assert.equal(events[0][0], "event");
  assert.equal(events[0][1], "contact_form_open");
  assert.equal(events[0][2].link_url, "https://salonflowlab.com/contact/");
  assert.equal(events[1][1], "line_button_click");
  assert.equal(events[2][1], "free_consultation_start");
  assert.doesNotMatch(JSON.stringify(events), /visitor|private|email|message/);
  analytics.cleanup();
  assert.equal(analytics.active(), false);
});

test("unconfigured analytics does not interrupt consultation links", () => {
  const analytics = mountAnalytics(undefined);
  assert.doesNotThrow(() => analytics.click({ href: "https://lin.ee/NrJGMVt" }));
  analytics.cleanup();
});
