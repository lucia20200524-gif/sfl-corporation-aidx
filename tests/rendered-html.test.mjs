import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { calculateReskillingEstimate } from "../app/lib/reskilling.ts";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

const siteOrigin = "https://sfl-corporation-aidx.lucia20200524.chatgpt.site";

async function render(pathname) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set(
    "test",
    `${process.pid}-${Date.now()}-${pathname}`,
  );
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders production metadata without the temporary preview marker", async () => {
  const response = await render("/");

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  assert.doesNotMatch(await response.text(), developmentPreviewMeta);
});

test("keeps page scrolling stable and avoids heavy touch-device motion", async () => {
  const [css, trainingTabs] = await Promise.all([
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/components/TrainingProgramTabs.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(css, /html\s*\{[^}]*scroll-behavior:\s*auto/s);
  assert.match(css, /body\s*\{[^}]*overflow-anchor:\s*none/s);
  assert.doesNotMatch(css, /body::before/);
  assert.match(css, /@media \(max-width: 900px\), \(pointer: coarse\)/);
  assert.match(trainingTabs, /focus\(\{ preventScroll: true \}\)/);
});

test("uses distinct corporate and individual training backgrounds", async () => {
  const [css, trainingTabs] = await Promise.all([
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/components/TrainingProgramTabs.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(trainingTabs, /training-tabs-\$\{activeTab\}/);
  assert.match(css, /\.training-tabs-corporate\s*\{/);
  assert.match(css, /\.training-tabs-individual\s*\{/);
  assert.match(css, /\.training-tabs-individual \.trust-program-grid > article\s*\{/);
});

test("calculates capped training costs separately from wage aid for every offered group size", () => {
  for (const [size, expensePerPerson, tuitionPerPerson, wagePerPerson] of [
    ["small", 270_000, 90_000, 15_000],
    // 360,000 × 60% = 216,000, limited to 200,000 per person.
    ["large", 200_000, 160_000, 7_500],
  ]) {
    for (let participants = 1; participants <= 5; participants++) {
      const result = calculateReskillingEstimate(size, participants);
      assert.equal(result.trainingFee, 360_000 * participants);
      assert.equal(result.expenseAid, expensePerPerson * participants);
      assert.equal(result.tuitionBurden, tuitionPerPerson * participants);
      assert.equal(result.tuitionBurdenPerPerson, tuitionPerPerson);
      assert.equal(result.wageAid, wagePerPerson * participants);
      assert.equal(result.wageAidPerPerson, wagePerPerson);
      assert.equal(result.tuitionBurden + result.expenseAid, result.trainingFee);
    }
  }
});

test("provides separate tuition and wage subsidy estimates with live training conditions", async () => {
  const response = await render("/reskilling-subsidy-simulator");
  const html = await response.text();

  assert.equal(response.status, 200);
  for (const text of [
    "リスキリング助成シミュレーション",
    "中小企業",
    "大企業",
    "受講人数",
    "賃金助成の対象時間",
    "15時間固定",
    "研修費の負担目安（税抜ベース）",
    "90,000円",
    "270,000円",
    "別途、賃金助成見込",
    "15,000円",
    "同時双方向型",
    "所定労働時間内",
    "eラーニング・通信制はこの試算の対象外",
    "中小企業15万円・大企業10万円",
    "支給申請までに研修費全額を支払い",
  ]) {
    assert.match(html, new RegExp(text));
  }

  assert.doesNotMatch(html, /75,000円|285,000円|実質自己負担|支給後の差引目安/);
  assert.match(html, /001731978\.pdf/);
});

test("keeps homepage and Lark training subsidy examples consistent", async () => {
  for (const route of ["/", "/lark-dx"]) {
    const response = await render(route);
    const html = await response.text();
    assert.equal(response.status, 200);
    assert.match(html, /90,000円/);
    assert.match(html, /15,000円/);
    assert.match(html, /税抜ベース/);
    assert.match(html, /所定労働時間内/);
    assert.doesNotMatch(html, /75,000円|285,000円|実質自己負担/);
  }
});

test("publishes dedicated AI training and subsidy guidance pages", async () => {
  const [aiResponse, subsidyResponse] = await Promise.all([
    render("/ai-dx-training"),
    render("/reskilling-subsidy-simulator"),
  ]);
  const aiHtml = await aiResponse.text();
  const subsidyHtml = await subsidyResponse.text();

  for (const text of [
    "法人向け生成AI・Webアプリ研修｜合同会社SFL",
    "ChatGPT × CODEX",
    "3時間×5コマ",
    "360,000円",
    "研修後1か月無料",
    "法人向け生成AI研修について相談する",
  ]) {
    assert.match(aiHtml, new RegExp(text, "i"));
  }

  for (const text of [
    "人材開発支援助成金シミュレーション｜15時間DX研修｜合同会社SFL",
    "適用条件の事前チェック",
    "対象外になりやすいケース",
    "相談から申請・支給まで",
    "最終確認：2026年9月7日",
    "受給を保証するものではありません",
  ]) {
    assert.match(subsidyHtml, new RegExp(text));
  }
});

test("publishes concise services search metadata without a duplicated company name", async () => {
  const response = await render("/services");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /<title>事業・サービス｜Lark・AI・官公庁入札｜合同会社SFL<\/title>/);
  assert.doesNotMatch(html, /合同会社SFL[^<]*合同会社SFL<\/title>/);
  for (const text of ["生成AI研修", "Cycle Pro", "個人向け講座", "SFL Academy"]) {
    assert.match(html, new RegExp(text));
  }
});

test("renders visible breadcrumbs and lightweight font setup", async () => {
  const [larkResponse, aiResponse, layoutSource, analyticsSource, tagsSource] = await Promise.all([
    render("/lark-dx"),
    render("/ai-dx-training"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/AnalyticsEvents.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/AnalyticsTags.tsx", import.meta.url), "utf8"),
  ]);

  for (const html of [await larkResponse.text(), await aiResponse.text()]) {
    assert.match(html, /aria-label=["']パンくずリスト["']/);
    assert.match(html, /href="\/services#courses">講座・研修<\/a>/);
  }
  assert.doesNotMatch(layoutSource, /next\/font/);
  assert.match(analyticsSource, /line_button_click/);
  assert.match(analyticsSource, /free_consultation_start/);
  assert.match(analyticsSource, /window\.gtag\?\.\("event", analyticsEvent/);
  assert.match(tagsSource, /NEXT_PUBLIC_GA4_ID/);
  assert.match(tagsSource, /NEXT_PUBLIC_GOOGLE_ADS_ID/);
});

test("serves page-specific SEO metadata on every canonical route", async () => {
  const titles = new Set();
  const descriptions = new Set();
  const routes = [
    ["/", "仕事の流れを整える。"],
    ["/services", "3つの事業と、SFLのサービス。"],
    ["/lark-dx", "Larkを使える"],
    ["/ai-dx-training", "法人向け生成AI研修で"],
    ["/reskilling-subsidy-simulator", "15時間DX研修の負担目安と、別途の賃金助成"],
    ["/instructors", "実務で使う力を育てる"],
    ["/ai-setup", "Claude Code・Codexを"],
    ["/case-study", "導入・研修・取引実績"],
    ["/company", "合同会社SFLについて"],
    ["/information-security-policy", "情報セキュリティ基本方針"],
    ["/support-policy", "支援・契約・データ取扱いガイド"],
    ["/contact", "仕事の流れを整理するところから"],
  ];

  for (const [pathname, h1Text] of routes) {
    const response = await render(pathname);
    const html = await response.text();
    const canonical = pathname === "/" ? `${siteOrigin}/` : `${siteOrigin}${pathname}`;
    const head = html.split("</head>")[0];
    const titleTags = [...head.matchAll(/<title>([^<]+)<\/title>/g)];
    const descriptionTags = [...head.matchAll(/<meta\b[^>]*name="description"[^>]*content="([^"]+)"/g)];
    assert.equal(titleTags.length, 1, `${pathname}: exactly one title`);
    assert.equal(descriptionTags.length, 1, `${pathname}: exactly one description`);
    const title = titleTags[0][1];
    const description = descriptionTags[0][1];
    assert.equal((title.match(/合同会社SFL/g) ?? []).length, 1, `${pathname}: company name appears once`);
    assert.ok(!titles.has(title), `${pathname}: distinct title`);
    assert.ok(!descriptions.has(description), `${pathname}: distinct description`);
    titles.add(title);
    descriptions.add(description);
    assert.equal(head.match(/<meta\b[^>]*property="og:title"[^>]*content="([^"]+)"/)?.[1], title, `${pathname}: social title agrees`);
    assert.equal(head.match(/<meta\b[^>]*property="og:description"[^>]*content="([^"]+)"/)?.[1], description, `${pathname}: social description agrees`);
    assert.doesNotMatch(head, /<meta\b[^>]*(?:name="robots"|name="googlebot")[^>]*content="[^"]*noindex/i, pathname);
    const nodes = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
      .flatMap(([, json]) => JSON.parse(json));
    const companies = nodes.filter((node) => node["@type"] === "Organization" && node.legalName);
    assert.equal(companies.length, 1, `${pathname}: one complete company identity`);
    assert.equal(companies[0]["@id"], `${siteOrigin}/#organization`, pathname);
    assert.equal(companies[0].name, "合同会社SFL", pathname);
    assert.equal(companies[0].contactPoint.url, `${siteOrigin}/contact`, pathname);
    if (pathname === "/") {
      const websites = nodes.filter((node) => node["@type"] === "WebSite");
      assert.equal(websites.length, 1);
      assert.equal(websites[0].alternateName, "SFL");
    }

    assert.equal(response.status, 200, pathname);
    assert.match(html, /<meta[^>]+name=["']description["'][^>]+content=["'][^"']+["']/i, pathname);
    assert.match(html, new RegExp(`<link[^>]+rel=["']canonical["'][^>]+href=["']${canonical.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["']`, "i"), pathname);
    assert.match(html, new RegExp(h1Text), pathname);
    assert.equal((html.match(/<h1(?:\s[^>]*)?>/gi) ?? []).length, 1, pathname);
    if (pathname !== "/") {
      const breadcrumb = html.match(/<nav\b[^>]*aria-label="パンくずリスト"[^>]*>([\s\S]*?)<\/nav>/)?.[1];
      assert.ok(breadcrumb, `${pathname}: visible breadcrumb`);
      assert.equal((breadcrumb.match(/aria-current="page"/g) ?? []).length, 1, `${pathname}: one current breadcrumb`);
    }
    assert.match(html, new RegExp(`<meta[^>]+property=["']og:url["'][^>]+content=["']${canonical.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["']`, "i"), pathname);
    assert.doesNotMatch(
      html,
      /href=["']\/(?:services|lark-dx|ai-dx-training|reskilling-subsidy-simulator|instructors|ai-setup|case-study|company|contact)\/["']/i,
      pathname,
    );
  }
});

test("publishes focused home SEO signals and a location-specific case study", async () => {
  const [homeResponse, caseResponse] = await Promise.all([
    render("/"),
    render("/case-study"),
  ]);

  const homeHtml = await homeResponse.text();
  const caseHtml = await caseResponse.text();

  for (const text of [
    "合同会社SFL｜Lark導入・構築・研修・伴走支援",
    "自社の業務を整理し、Larkや生成AIを使って改善する。",
    "「DX社員」を育てる。",
    "全国オンライン対応",
    "SFLが育成する「DX社員」とは、どのような人材ですか？",
    "助成金・補助金の活用は相談できますか？",
    "FAQPage",
    "DX社員育成｜Lark・DX実務研修",
    "個人向け実務講座",
    "人材開発支援助成金の費用目安",
  ]) {
    assert.match(homeHtml, new RegExp(text));
  }
  assert.match(homeHtml, /property=["']og:image["'][^>]+sfl-logo-20260907\.jpg/i);
  assert.match(
    homeHtml,
    /name=["']twitter:card["'][^>]+content=["']summary["']/i,
  );

  for (const text of [
    "滋賀県のアイラッシュサロンDX導入事例",
    "滋賀県草津市",
    "contentLocation",
    "mainEntityOfPage",
  ]) {
    assert.match(caseHtml, new RegExp(text));
  }
});

test("keeps sitemap URLs aligned with canonical URLs", async () => {
  const sitemap = await readFile(
    new URL("../public/sitemap.xml", import.meta.url),
    "utf8",
  );

  for (const pathname of [
    "/services",
    "/lark-dx",
    "/ai-dx-training",
    "/reskilling-subsidy-simulator",
    "/instructors",
    "/ai-setup",
    "/case-study",
    "/company",
    "/information-security-policy",
    "/support-policy",
    "/contact",
  ]) {
    assert.match(sitemap, new RegExp(`<loc>${siteOrigin}${pathname}</loc>`));
    assert.doesNotMatch(
      sitemap,
      new RegExp(`<loc>${siteOrigin}${pathname}/</loc>`),
    );
  }

  const dates = [...sitemap.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map(([, date]) => date);
  assert.equal(dates.length, 12);
  for (const date of dates) {
    assert.match(date, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(Number.isFinite(Date.parse(date)));
  }
  const robots = await readFile(new URL("../public/robots.txt", import.meta.url), "utf8");
  assert.ok(robots.includes(`Sitemap: ${siteOrigin}/sitemap.xml`));
  assert.doesNotMatch(robots, /^Disallow:\s*\/\s*$/m);
});

test("publishes the information security policy wording", async () => {
  const response = await render("/information-security-policy");
  const html = await response.text();

  assert.equal(response.status, 200);
  for (const text of [
    "中小企業の情報セキュリティ対策ガイドライン 付録2",
    "合同会社SFL（以下、当社）は、お客様からお預かりした情報資産および当社の情報資産を事故・災害・犯罪などの脅威から守り、お客様ならびに社会の信頼に応えるべく、以下の方針に基づき全社で情報セキュリティに取り組みます。",
    "1.経営者の責任",
    "2.社内体制の整備",
    "3.従業員の取組み",
    "4.法令及び契約上の要求事項の遵守",
    "5.違反及び事故への対応",
    "制定日:2026年8月14日",
    "代表社員　大城 未緒",
  ]) {
    assert.match(html, new RegExp(text));
  }
});

test("routes corporate consultation through a formal 60-minute counseling page", async () => {
  const routes = [
    "/",
    "/services",
    "/lark-dx",
    "/ai-dx-training",
    "/reskilling-subsidy-simulator",
    "/instructors",
    "/ai-setup",
    "/case-study",
    "/company",
    "/information-security-policy",
    "/support-policy",
    "/contact",
  ];

  for (const pathname of routes) {
    const response = await render(pathname);
    const html = await response.text();

    assert.equal(response.status, 200, pathname);
    assert.match(html, /https:\/\/lin\.ee\/NrJGMVt/, pathname);
    const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1];
    assert.ok(main, `${pathname}: main content exists`);
    if (pathname !== "/contact") {
      assert.doesNotMatch(main, /href="https:\/\/lin\.ee\//, `${pathname}: general inquiries go through the audience selection`);
    }
    const footer = html.match(/<footer\b[^>]*>([\s\S]*?)<\/footer>/)?.[1];
    assert.match(footer ?? "", /個人事業主・フリーランスのLINE相談/);
    assert.match(footer ?? "", /法人向けお問い合わせフォーム/);
  }

  const homeResponse = await render("/");
  const homeHtml = await homeResponse.text();
  assert.match(homeHtml, /href=["']\/contact["']/i);
  assert.match(homeHtml, /<a\b[^>]*href=["']\/contact["'][^>]*>60分無料相談/);

  const contactResponse = await render("/contact");
  const contactHtml = await contactResponse.text();

  assert.match(contactHtml, /href=["']https:\/\/bjp66vk3my8x\.jp\.larksuite\.com\/share\/base\/form\/shrjpRix2tACyaiGsWFkjy98FYk["']/i);
  assert.doesNotMatch(contactHtml, /<(?:form|input|textarea|select)\b/i);
  assert.match(contactHtml, /60分の無料相談を申し込む/);
  assert.match(contactHtml, /フロー【業務整理】/);
  assert.match(contactHtml, /支援・契約・データ取扱いガイド/);
});

test("shows consultation flow navigation above four closed stages and preserves optional guidance without amounts", async () => {
  for (const pathname of ["/", "/contact"]) {
    const html = await (await render(pathname)).text();
    const disclosures = [...html.matchAll(/<details\b([^>]*\bclass="consultation-disclosure[^"]*"[^>]*)>([\s\S]*?)<\/details>/g)];
    const journey = html.match(/<section\b([^>]*\bclass="consultation-journey"[^>]*)>/);
    assert.ok(journey, pathname);
    const overview = html.match(/<nav\b[^>]*class="consultation-flow-nav"[^>]*>([\s\S]*?)<\/nav>/)?.[1];
    assert.ok(overview, `${pathname}: flow is visible outside the stage disclosures`);
    assert.equal((overview.match(/class="consultation-flow-link"/g) ?? []).length, 4, pathname);
    assert.match(overview, /無料相談から、直接ご提案へ/, pathname);
    assert.equal(disclosures.length, 4, pathname);
    for (const [, attributes, body] of disclosures) {
      assert.doesNotMatch(attributes, /\bopen(?:\s|=|$)/, pathname);
      const id = attributes.match(/\bid="([^"]+)"/)?.[1];
      assert.ok(id, pathname);
      assert.ok(overview.includes(`href="#${id}"`), `${pathname}: each flow link reaches a stage`);
      assert.match(attributes, /\bname="[^"]+-stage"/, `${pathname}: stages form one accordion group`);
      assert.match(body, new RegExp(`^<summary aria-controls="${id}-content">`), pathname);
      assert.ok(body.includes(`id="${id}-content"`), pathname);
      assert.doesNotMatch(body.match(/^<summary[^>]*>([\s\S]*?)<\/summary>/)?.[1] ?? "", /<(?:a|button|input)\b/, pathname);
    }
    assert.match(disclosures[0][2], /有料の業務整理（02）は必須ではありません/, pathname);
    assert.match(disclosures[1][2].split("</summary>")[0], /個人事業主：3時間／法人：5時間/, pathname);
    assert.doesNotMatch(disclosures[1][2], /40,000|70,000|税別|consultation-plan-price|・料金/, pathname);
    assert.match(disclosures[1][2], /ご契約は必須ではありません/, pathname);
    assert.match(disclosures[2][2], /架空の業務例/, pathname);
    assert.match(disclosures[3][2], /サービス・商品のご提案、お見積もり/, pathname);
    assert.match(disclosures[3][2], /内容を確認して、ご契約/, pathname);
    if (pathname === "/") assert.match(disclosures[3][2], /支援・契約ガイド/, pathname);
  }
});

test("publishes separate corporate and individual training portfolios and current service terms", async () => {
  const [homeResponse, servicesResponse, larkResponse, companyResponse] =
    await Promise.all([
      render("/"),
      render("/services"),
      render("/lark-dx"),
      render("/company"),
    ]);

  const homeHtml = await homeResponse.text();
  const servicesHtml = await servicesResponse.text();
  const larkHtml = await larkResponse.text();
  const companyHtml = await companyResponse.text();

  for (const text of [
    "社員の育成に取り組む法人向け研修",
    "DX社員育成｜Lark・DX実務研修",
    "3時間×5コマ",
    "15時間 360,000円（税別）",
    "研修後1か月無料伴走",
    "個人向け実務講座の一覧を見る",
  ]) {
    assert.match(homeHtml, new RegExp(text));
  }
  assert.doesNotMatch(homeHtml, /DX社員育成｜AI実務活用研修/);
  assert.doesNotMatch(homeHtml, /DX社員育成｜AI・Webアプリ業務改善研修/);
  assert.doesNotMatch(homeHtml, /DX社員育成｜Webアプリ・業務改善研修/);
  for (const text of [
    "人材開発支援助成金の費用目安",
    "人材開発支援助成金の費用を試算する",
    "受給を保証するものではありません",
    "60分無料相談",
    "研修後1か月無料伴走",
  ]) {
    assert.match(homeHtml, new RegExp(text));
  }

  for (const text of [
    "Claude Code・Codex×Lark連携 初期設定支援",
    "実務講座とSFL Academy",
    "3時間×5コマ（計15時間）",
    "法人研修後1か月間は月2回面談プランを無料",
  ]) {
    assert.match(servicesHtml, new RegExp(text));
  }
  for (const html of [servicesHtml, larkHtml]) {
    assert.match(html, /5万円[^<]*定例0回|定例なし[^<]*月額5万円/);
    assert.match(html, /10万円[^<]*月2回|月2回[^<]*10万円/);
    assert.match(html, /20万円[^<]*月4回|月4回[^<]*20万円/);
    assert.doesNotMatch(html, /FLOW Start|FLOW Standard|FLOW Growth/);
  }

  assert.match(
    larkHtml,
    /https:\/\/sfl-lark-supportdesk\.lucia20200524\.chatgpt\.site\//,
  );
  assert.match(larkHtml, /3時間×5コマの実務研修/);
  assert.match(larkHtml, /事前ヒアリングで内容を調整/);
  assert.match(larkHtml, /Lark FLOW ONEの月2回オンライン面談/);
  assert.match(larkHtml, /SFL Larkサポートデスクを1か月無料/);
  for (const html of [homeHtml, servicesHtml, larkHtml]) {
    assert.doesNotMatch(html, /研修後2か月|2か月無料|2 MONTHS/);
  }
  assert.doesNotMatch(homeHtml, /10時間 240,000円（税別）/);
  assert.doesNotMatch(servicesHtml, /10時間 240,000円（税別）/);
  assert.doesNotMatch(larkHtml, /法人・10時間・1名／最大5名/);
  assert.match(larkHtml, /2期生：2026年11月募集予定/);
  assert.match(larkHtml, /0期生終了・1期生進行中・次回2期生募集/);
  assert.match(companyHtml, /官公庁入札事業/);
});

test("makes SFL people and confirmed achievements visible", async () => {
  const [homeResponse, companyResponse, caseResponse, instructorsResponse] = await Promise.all([
    render("/"),
    render("/company"),
    render("/case-study"),
    render("/instructors"),
  ]);

  const homeHtml = await homeResponse.text();
  const companyHtml = await companyResponse.text();
  const caseHtml = await caseResponse.text();
  const instructorsHtml = await instructorsResponse.text();
  const homeText = homeHtml.replace(/<[^>]+>/g, "");

  for (const text of [
    "現場の声から、",
    "使い続けられる仕組みを。",
    "LARK MASTER 2026",
    "Cycle Pro / FINALIST",
    "Eyelash Salon Lucia",
    "月間来店数",
    "再来率",
    "大城 未緒",
    "Kazu先生",
    "提携企業",
    "株式会社KAIEI",
    "株式会社UNIQS",
  ]) {
    assert.match(homeText, new RegExp(text));
  }
  assert.doesNotMatch(homeText, /0期モニター|4名/);

  for (const text of [
    "大城 未緒",
    "Kazu先生",
    "Lark統括・講師",
    "営業・事業設計・講師",
    "統括・事務",
    "AI顧問チーム",
    "相談内容に合わせて、担当を編成。",
  ]) {
    assert.match(companyHtml, new RegExp(text));
  }

  for (const privateName of [
    "後藤 和輝",
    "小寺 健太",
    "山﨑 ひかる",
    "森山 達成",
    "遠藤 匠馬",
    "MANABU",
  ]) {
    assert.doesNotMatch(homeHtml, new RegExp(privateName));
    assert.doesNotMatch(companyHtml, new RegExp(privateName));
  }

  assert.match(companyHtml, /Lark Japanの認定はKazu先生個人に付与/);
  assert.match(companyHtml, /SFL講座修了パートナー.*SFLの講座修了者/s);
  assert.match(companyHtml, /Lark Japan、OpenAIその他のサービス提供企業による公式認定を示すものではありません/);
  assert.match(companyHtml, /同様の成果を保証するものではありません/);
  assert.match(caseHtml, /現場から生まれたCycle Proを、実装事例として発表。/);
  assert.match(caseHtml, /2026年6月19日、渋谷ヒカリエ/);
  assert.match(caseHtml, /発表者/);
  assert.match(caseHtml, /大城 未緒/);
  assert.match(caseHtml, /Eyelash Salon Lucia 運営担当/);
  assert.match(caseHtml, /azumi/);
  for (const text of ["Kazu先生", "Lark実務教育", "生成AI"] ) {
    assert.match(instructorsHtml, new RegExp(text));
  }
  assert.match(instructorsHtml, /統括講師／Lark実務教育/);
  for (const removedText of [
    "山﨑 ?ひかる",
    "森山 ?達成",
    "衛藤",
    "3名の講師",
    "講師／オンライン秘書・実務運用",
    "講師／生成AI・業務改善",
    "講師／教育設計・学習定着",
  ]) {
    assert.doesNotMatch(instructorsHtml, new RegExp(removedText));
  }
});

test("keeps the home focused, concise, and accessible", async () => {
  const response = await render("/");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.ok((html.match(/<h2(?:\s[^>]*)?>/gi) ?? []).length <= 14);
  assert.ok((html.match(/<h3(?:\s[^>]*)?>/gi) ?? []).length <= 24);

  for (const text of [
    "自社の業務を整理し、Larkや生成AIを使って改善する。",
    "自社で改善を続ける、",
    "社員の育成に取り組む法人向け研修",
    "現場の声から、",
    "提携企業",
    "無料相談からご提案まで。進め方は、ご希望に合わせて。",
    "支援・契約ガイド",
    "人材開発支援助成金の費用を試算する",
  ]) {
    assert.match(html, new RegExp(text));
  }

  assert.match(html, /<div[^>]+role=["']tablist["'][^>]+aria-label=["']研修対象を選択["']/i);
  assert.match(html, /<button(?=[^>]*role=["']tab["'])(?=[^>]*aria-selected=["']true["'])(?=[^>]*aria-controls=["']training-panel-corporate["'])[^>]*>/i);
  assert.match(html, /<section(?=[^>]*id=["']training-panel-individual["'])(?=[^>]*role=["']tabpanel["'])(?=[^>]*hidden)[^>]*>/i);

  assert.match(
    html,
    /<button(?=[^>]*aria-expanded=["']false["'])(?=[^>]*aria-controls=["']sfl-mobile-navigation["'])[^>]*>/i,
  );
  assert.match(html, /<nav[^>]+id=["']sfl-mobile-navigation["'][^>]+hidden/i);
  assert.match(
    html,
    /<img(?=[^>]*src=["']\/lark-master-2026-event\.webp["'])(?=[^>]*alt=["']2026年6月19日に渋谷ヒカリエで開催されたLark Master 2026会場["'])[^>]*>/i,
  );
  assert.match(
    html,
    /<img(?=[^>]*src=["']\/representative-mio-profile\.jpeg["'])(?=[^>]*alt=["']合同会社SFL 代表社員 大城 未緒["'])[^>]*>/i,
  );
});

test("publishes support, contract, data, and partner responsibility guidance", async () => {
  const response = await render("/support-policy");
  const html = await response.text();

  assert.equal(response.status, 200);
  for (const text of [
    "支援・契約・データ取扱いガイド",
    "納品物と支援範囲",
    "対象外となる業務",
    "料金と外部サービス利用料",
    "変更・中止・解約",
    "データの保管・削除・権限",
    "契約終了時のデータ移行",
    "障害・情報セキュリティ事故への対応",
    "提携先との役割分担",
    "SFL講座修了パートナー",
  ]) {
    assert.match(html, new RegExp(text));
  }
});

test("protects every link that opens a new tab", async () => {
  const routes = [
    "/",
    "/services",
    "/lark-dx",
    "/ai-dx-training",
    "/reskilling-subsidy-simulator",
    "/instructors",
    "/ai-setup",
    "/case-study",
    "/company",
    "/information-security-policy",
    "/support-policy",
    "/contact",
  ];

  for (const pathname of routes) {
    const response = await render(pathname);
    const html = await response.text();
    const externalAnchors = html.match(/<a(?=[^>]*target=["']_blank["'])[^>]*>/gi) ?? [];

    for (const anchor of externalAnchors) {
      assert.match(anchor, /rel=["'][^"']*noopener[^"']*noreferrer[^"']*["']/i, pathname);
    }
  }
});

test("corporate navigation reaches existing pages and in-page destinations", async () => {
  const cache = new Map();
  const htmlFor = async (path) => {
    if (!cache.has(path)) {
      const response = await render(path);
      assert.equal(response.status, 200, path);
      cache.set(path, await response.text());
    }
    return cache.get(path);
  };
  const sitemap = await readFile(new URL("../public/sitemap.xml", import.meta.url), "utf8");
  const routes = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => new URL(url).pathname);
  for (const source of routes) {
    const html = await htmlFor(source);
    for (const [, rawHref] of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
      if (!rawHref.startsWith("/") && !rawHref.startsWith("#")) continue;
      // Fresh homepage entries deliberately reset to the first view. Cross-page
      // section links must use a destination that preserves its fragment.
      assert.ok(!rawHref.startsWith("/#"), `${source} → ${rawHref} would reset to the hero`);
      const target = new URL(rawHref, siteOrigin + source);
      if (target.origin !== siteOrigin) continue;
      // Static files are served by the hosting asset layer, not this worker's
      // deliberately empty ASSETS mock. Check that the build actually ships them.
      if (/\.(?:png|jpe?g|webp|svg|gif|ico|pdf)$/i.test(target.pathname)) {
        const file = await readFile(new URL(`../dist/client${decodeURIComponent(target.pathname)}`, import.meta.url));
        assert.ok(file.length > 0, `${source} → ${rawHref}`);
        continue;
      }
      const targetHtml = await htmlFor(target.pathname);
      if (target.hash) {
        const id = decodeURIComponent(target.hash.slice(1));
        assert.ok(targetHtml.includes(`id="${id}"`), `${source} → ${rawHref}`);
      }
    }
  }
});

test("keeps search URLs canonical and returns real 404s for missing pages", async () => {
  const missing = await render("/seo-missing-page-check");
  assert.equal(missing.status, 404);
  const trailing = await render("/services/");
  assert.equal(trailing.status, 308);
  assert.equal(trailing.headers.get("location"), "/services");
  const campaign = await render("/services?utm_source=seo-check");
  assert.equal(campaign.status, 200);
  assert.match(await campaign.text(), /rel="canonical"[^>]*href="https:\/\/sfl-corporation-aidx\.lucia20200524\.chatgpt\.site\/services"/);
});

test("course and service structured data point to the matching content", async () => {
  const jsonNodes = (html) => [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .flatMap(([, json]) => JSON.parse(json));
  const home = await (await render("/")).text();
  const courses = jsonNodes(home).find((node) => node["@id"] === `${siteOrigin}/#training-programs`);
  const personal = courses.itemListElement.find((entry) => entry.item.name === "SFL Lark導入講座").item;
  assert.equal(personal.url, `${siteOrigin}/lark-dx#individual-course`);
  const lark = await (await render("/lark-dx")).text();
  assert.match(lark, /<article id="individual-course">[\s\S]*?<h3>SFL Lark導入講座<\/h3>/);
  for (const entry of courses.itemListElement) assert.equal(entry.item.provider.name, "合同会社SFL");
  const services = await (await render("/services")).text();
  const catalog = jsonNodes(services).find((node) => node["@type"] === "ItemList");
  assert.equal(catalog.numberOfItems, 12);
  assert.equal(catalog.itemListElement.length, 12);
  assert.deepEqual(catalog.itemListElement.map((entry) => entry.position), Array.from({ length: 12 }, (_, i) => i + 1));
  assert.equal(catalog.itemListElement.filter((entry) => entry.item.name === "SFL Lark導入講座").length, 1);
  for (const entry of catalog.itemListElement) {
    const url = new URL(entry.item.url);
    assert.equal(url.origin, siteOrigin);
    assert.equal(url.pathname, "/services");
    assert.ok(services.includes(`id="${url.hash.slice(1)}"`));
  }
});
