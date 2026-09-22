// Run in the document head, before native fragment/scroll restoration.
// Only a fresh homepage entry or a restored document resets the first view;
// subsequent section links and the visitor's scrolling remain under their control.
export const homeEntryScript = `(() => {
  let interacted = false;
  const isHome = () => window.location.pathname === "/";
  const reset = () => {
    if (!isHome()) return;
    window.history.scrollRestoration = "manual";
    if (window.location.hash) {
      window.history.replaceState(
        window.history.state,
        "",
        window.location.pathname + window.location.search
      );
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  reset();
  for (const type of ["pointerdown", "touchstart", "wheel", "keydown", "hashchange"]) {
    window.addEventListener(type, () => { interacted = true; }, { passive: true });
  }
  window.addEventListener("pageshow", (event) => {
    if (!isHome() || (!event.persisted && interacted)) return;
    interacted = false;
    reset();
    window.requestAnimationFrame(() => {
      if (!interacted && isHome()) reset();
    });
  });
})();`;
