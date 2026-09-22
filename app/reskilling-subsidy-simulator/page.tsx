import { SectionAccordion } from "../components/SectionAccordion";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { PageHero } from "../components/PageHero";
import { ReskillingSimulator } from "../components/ReskillingSimulator";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { organizationReference, SITE_URL, breadcrumbSchema, pageSocialMetadata } from "../seo";

const pageTitle = "人材開発支援助成金シミュレーション｜15時間DX研修｜合同会社SFL";
const pageDescription = "15時間・360,000円（税別）の法人向けDX研修について、研修費の負担目安と別途の賃金助成を試算。中小企業・大企業、受講人数1〜5名に対応し、ライブ研修の適用条件と申請の流れを解説。";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: "/reskilling-subsidy-simulator" },
  keywords: ["人材開発支援助成金 シミュレーション", "リスキリング助成金 計算", "15時間 DX研修", "事業展開等リスキリング支援コース", "法人向けDX研修 助成金"],
  ...pageSocialMetadata(pageTitle, pageDescription, "/reskilling-subsidy-simulator"),
};

const requirements = [
  "雇用保険適用事業所で、対象者が雇用保険被保険者である",
  "具体的な職務に直接関連する10時間以上のOFF-JT（通常業務を離れて行う研修）として実施する",
  "DX・事業展開等に必要な知識や技能を習得する訓練である",
  "原則として訓練開始1か月前までに訓練実施計画を提出する",
  "訓練時間・出席・費用支払いを確認できる書類を保管する",
];

const excluded = [
  "期限までに計画届を提出せずに研修を開始している",
  "所定労働時間外の訓練を賃金助成時間に含めている",
  "趣味・教養中心で、職務との関連を説明できない",
  "具体的な業務への活用を伴わない汎用的なプロンプトの作成方法や、DXの概念・概要の理解にとどまる",
  "実訓練時間が10時間未満、または出席要件を満たさない",
  "対象経費の支払い・領収・受講記録を確認できない",
];

const applicationFlow = [
  ["01", "60分無料相談", "対象社員、DX計画、研修目的、実施時期を確認します。"],
  ["02", "制度要件と研修計画を確認", "必要に応じて社会保険労務士等の専門家と役割を分けて確認します。"],
  ["03", "計画書類を期限までに提出", "原則として訓練開始1か月前までの提出が必要です。"],
  ["04", "15時間研修を実施・記録", "3時間×5コマの出席、内容、賃金、支払いに関する資料を整えます。"],
  ["05", "支給申請・審査・支給", "研修費を先に支払い、研修終了後に申請。支給可否と金額は審査で決まります。"],
];

const breadcrumbs = breadcrumbSchema([
  { name: "ホーム", path: "/" },
  { name: "講座・研修", path: "/services#courses" },
  { name: "人材開発支援助成金シミュレーション", path: "/reskilling-subsidy-simulator" },
]);

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "人材開発支援助成金シミュレーション",
  description: pageDescription,
  url: `${SITE_URL}/reskilling-subsidy-simulator`,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  provider: organizationReference,
};

export default function ReskillingSubsidySimulatorPage() {
  return (
    <>
      <SiteHeader />
      <main className="seo-detail-page subsidy-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([webAppSchema, breadcrumbs]) }} />
        <Breadcrumbs items={[
          { label: "ホーム", href: "/" },
          { label: "講座・研修", href: "/services#courses" },
          { label: "人材開発支援助成金シミュレーション" },
        ]} />
        <PageHero
          index="03"
          eyebrow="RESKILLING SUBSIDY SIMULATOR"
          title="15時間DX研修の負担目安と、別途の賃金助成を試算。"
          description="対面・同時双方向型オンラインの15時間研修を想定。企業区分と受講人数を選び、経費助成後の研修費と、給与への助成をそれぞれ確認できます。"
        />

        <section className="subsidy-simulator-stage" aria-label="助成金シミュレーター">
          <div className="shell"><ReskillingSimulator /></div>
        </section>

        <SectionAccordion id="sim-formula" title="計算式と費用の内訳" description="シミュレーションで使用する計算方法。" label="CALCULATION">
        <section className="seo-detail-section section-light" aria-labelledby="formula-title">
          <div className="shell">
            <div className="seo-detail-heading"><div><p className="section-label">CALCULATION</p><h2 id="formula-title">シミュレーションの計算式。</h2></div><p>研修費は1名360,000円（税別）、研修時間は15時間固定です。人数は1〜5名で試算できます。</p></div>
            <div className="formula-grid">
              <article><span>01</span><strong>経費助成</strong><p>研修費 × 経費助成率。ただし企業区分ごとの1人あたり上限額まで。</p></article>
              <article><span>02</span><strong>研修費の負担目安</strong><p>研修費合計 − 経費助成見込。税抜ベースで算定し、給与への助成は差し引きません。</p></article>
              <article><span>03</span><strong>別途の賃金助成</strong><p>賃金助成単価 × 対象15時間 × 受講人数。全15時間が所定労働時間内で対象となる場合の、給与への助成です。</p></article>
            </div>
          </div>
        </section>
        </SectionAccordion>

        <SectionAccordion id="sim-conditions" title="適用条件の事前チェック" description="利用の検討時に確認する要件。" label="CONDITIONS">
        <section className="seo-detail-section seo-detail-dark" aria-labelledby="eligibility-title">
          <div className="shell">
            <div className="seo-detail-heading seo-detail-heading-light"><div><p className="section-label">ELIGIBILITY CHECK</p><h2 id="eligibility-title">適用条件の事前チェック。</h2></div><p>すべてに該当しても受給が確定するものではありません。制度改定と個別事情を確認してください。</p></div>
            <ul className="seo-check-grid">{requirements.map((item) => <li key={item}><span aria-hidden="true">✓</span><p>{item}</p></li>)}</ul>
          </div>
        </section>
        </SectionAccordion>

        <SectionAccordion id="sim-excluded" title="対象外になりやすいケース" description="対象要件を確認するときの注意点。" label="CHECK POINTS">
        <section className="seo-detail-section section-light" aria-labelledby="excluded-title">
          <div className="shell seo-split-layout">
            <div><p className="section-label">COMMON EXCLUSIONS</p><h2 id="excluded-title">対象外になりやすいケース。</h2><p>計画届の提出期限、具体的な職務との関連、記録を確認してください。2026年8月3日の改正では、汎用的なプロンプトの作成方法やDXの概念・概要にとどまる訓練の対象外例も明確化されています。</p></div>
            <ul className="seo-warning-list">{excluded.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </section>
        </SectionAccordion>

        <SectionAccordion id="sim-flow" title="相談から申請・支給まで" description="制度活用を進める際の手順。" label="FLOW">
        <section className="seo-detail-section subsidy-flow-section" aria-labelledby="application-flow-title">
          <div className="shell">
            <div className="seo-detail-heading seo-detail-heading-light"><div><p className="section-label">APPLICATION FLOW</p><h2 id="application-flow-title">相談から申請・支給まで。</h2></div><p>助成金は後払いです。研修費の支払い時期と申請期限を含め、資金の流れを事前に確認します。</p></div>
            <ol className="seo-application-flow">{applicationFlow.map(([number, title, text]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
          </div>
        </section>
        </SectionAccordion>

        <SectionAccordion id="sim-sources" title="根拠資料と最終更新日" description="制度の公式資料と、このページの確認時点。" label="SOURCES">
        <section className="seo-detail-section section-light" aria-labelledby="source-title">
          <div className="shell source-panel">
            <div><p className="section-label">OFFICIAL SOURCE / LAST UPDATED</p><h2 id="source-title">根拠資料と最終更新日。</h2><p>最終確認：2026年9月7日。厚生労働省の2026年8月3日版資料に基づく概算です。制度は変更される場合があります。</p></div>
            <a href="https://www.mhlw.go.jp/content/11800000/001731978.pdf" target="_blank" rel="noopener noreferrer">厚生労働省「事業展開等リスキリング支援コース」2026年8月3日版<span aria-hidden="true">↗</span></a>
            <a href="https://www.mhlw.go.jp/content/11800000/001731966.pdf" target="_blank" rel="noopener noreferrer">2026年8月3日の改正内容を見る<span aria-hidden="true">↗</span></a>
            <p className="source-disclaimer">SFLの研修が一律に助成対象となるものではありません。対象可否、対象経費、支給額は管轄労働局の審査で決定され、受給を保証するものではありません。専門判断や申請代行が必要な場合は、社会保険労務士等の専門家へご相談ください。</p>
          </div>
        </section>
        </SectionAccordion>

        <section className="seo-detail-cta" aria-labelledby="subsidy-cta-title">
          <div className="shell"><p className="section-label">FREE CONSULTATION / 60 MIN</p><h2 id="subsidy-cta-title">研修の目的と助成金の対象要件を、実施前に確認します。</h2><p>対象社員、研修目的、DX計画、開始時期を伺い、確認すべき要件を整理します。</p><Link href="/contact">60分無料相談を申し込む<span aria-hidden="true">→</span></Link></div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
