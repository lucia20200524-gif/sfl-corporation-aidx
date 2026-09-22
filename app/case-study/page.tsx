import { SectionAccordion } from "../components/SectionAccordion";
import { WorkflowExample } from "../components/WorkflowExample";
import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { BUSINESS_TRACK_RECORDS, COURSE_TRACK_RECORDS, BusinessTrackRecord } from "../components/BusinessTrackRecord";
import { ConsultationLink } from "../components/ConsultationLink";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import {
  organizationReference,
  LUSH_CYCLE_PRO_SAMPLE_URL,
  SITE_URL,
  breadcrumbSchema,
  pageSocialMetadata,
} from "../seo";

const pageTitle =
  "導入・研修・取引実績と講座開催状況｜サロンDX・Lark・AI・官公庁入札";
const pageDescription =
  "サロンへの導入・広島県の不動産業界で実施中の企業向けAI研修・官公庁との取引実績をご紹介。SFL Lark導入講座は0期生終了・1期生進行中・次回2期生募集。SFL AI導入講座とSFL 官公庁入札講座は2026年10月開始。SFL Academyは1期生が活動中です。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/case-study",
  },
  keywords: [
    "合同会社SFL 実績",
    "静岡県 ヘアーサロン 導入実績",
    "広島県 不動産業界 企業向けAI研修",
    "SFL AI導入講座 開始時期",
    "SFL Lark導入講座 実績",
    "官公庁入札 取引実績",
    "アイラッシュサロンDX導入事例",
    "滋賀県 アイラッシュサロンDX",
    "草津市 アイラッシュサロンDX",
    "アイラッシュサロンDX",
    "Eyelash Salon Lucia",
    "Cycle Pro",
    "アイラッシュサロン 顧客管理",
    "アイラッシュサロン 電子カルテ",
    "アイラッシュサロン 電子同意書",
    "アイラッシュサロン 再来率",
  ],
  ...pageSocialMetadata(pageTitle, pageDescription, "/case-study"),
};

const caseMetrics = [
  { value: "82%", label: "再来率" },
  { value: "4%", label: "キャンセル率" },
  { value: "5週", label: "平均来店周期" },
  { value: "460", label: "LINE登録者" },
  { value: "100+", label: "月間来店数" },
];

const challenges = [
  "紙カルテや施術写真が分散し、必要な情報をすぐ確認できない",
  "同意書や予約案内を毎回手作業で送っている",
  "売上・再来率・来店周期を感覚で判断している",
  "スタッフ教育やマニュアルが整っていない",
];

const actions = [
  "顧客情報・施術履歴・写真をひとつの画面へ集約",
  "LINE連携による同意書案内と予約導線を整備",
  "売上、再来率、来店周期を確認できるダッシュボードを構築",
  "運用後の改善相談とスタッフ教育を仕組み化",
];

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "滋賀県のアイラッシュサロンDX導入事例｜Lucia × Cycle Pro",
  description: "滋賀県草津市のEyelash Salon Luciaで、電子カルテ、同意書、顧客情報、売上、再来管理をLarkで一元化したCycle Proの導入事例。",
  "@id": `${SITE_URL}/case-study#lucia-case`,
  url: `${SITE_URL}/case-study#lucia-case`,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/case-study`,
  },
  image: `${SITE_URL}/lark-master-2026-event.webp`,
  dateModified: "2026-09-07",
  inLanguage: "ja-JP",
  about: [
    "アイラッシュサロンDX",
    "アイラッシュサロン顧客管理",
    "電子カルテ",
    "電子同意書",
    "Lark",
  ],
  publisher: organizationReference,
  author: organizationReference,
  contentLocation: {
    "@type": "Place",
    name: "Eyelash Salon Lucia",
    address: {
      "@type": "PostalAddress",
      addressCountry: "JP",
      addressRegion: "滋賀県",
      addressLocality: "草津市",
    },
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "ホーム", path: "/" },
  { name: "導入・研修・取引実績", path: "/case-study" },
]);

const trackRecordPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/case-study`,
  url: `${SITE_URL}/case-study`,
  name: pageTitle,
  description: pageDescription,
  about: organizationReference,
  hasPart: { "@id": `${SITE_URL}/case-study#lucia-case` },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [...BUSINESS_TRACK_RECORDS, ...COURSE_TRACK_RECORDS].map((record, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${record.title}｜${record.result}`,
      description: record.description,
      url: `${SITE_URL}/case-study#case-track-record-title-${record.id}`,
    })),
  },
};

export default function CaseStudyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([trackRecordPageSchema, caseStudySchema, breadcrumbs]),
          }}
        />
        <Breadcrumbs items={[{ label: "ホーム", href: "/" }, { label: "導入・研修・取引実績" }]} />
        <PageHero
          index="03"
          eyebrow="TRACK RECORD / CASE STUDY"
          title="導入・研修・取引実績と講座の開催状況"
          description="サロンへのシステム導入・広島県の不動産業界で実施中の企業向けAI研修・官公庁との取引実績をご紹介します。Lark導入講座は1期生進行中。AI導入講座・官公庁入札講座は2026年10月開始。SFL Academyは1期生が活動中です。"
        />

        <div className="shell case-track-record"><BusinessTrackRecord titleId="case-track-record-title" heading="事業実績と講座の開催状況" /></div>

        <div className="sfl-workflow-section"><div className="shell"><WorkflowExample id="cycle-pro-workflow" kind="cycle" /></div></div>

        <SectionAccordion id="case-overview" title="アイラッシュサロンのDX導入事例" description="滋賀県・Eyelash Salon Luciaでの取り組みと店舗運営実績。" label="CASE STUDY">
        <section className="case-overview section-light" id="lucia-case">
          <div className="shell">
            <div className="case-overview-heading">
              <div>
                <p className="section-label">EYELASH SALON LUCIA</p>
                <h2>滋賀県のアイラッシュサロンDX導入事例</h2>
              </div>
              <p>
                滋賀県草津市のアイラッシュサロンで、紙カルテ、同意書案内、売上集計、教育資料が分散していた状態から、
                来店対応と経営判断をひとつの流れで管理できる体制へ移行しました。
                <a
                  className="case-official-link"
                  href="https://eyelash-salon-lucia.lucia20200524.chatgpt.site/#top"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Eyelash Salon Lucia 公式ホームページ
                  <span aria-hidden="true">↗</span>
                </a>
              </p>
            </div>
            <div className="case-sample-action">
              <a className="button cycle-pro-sample-link" href={LUSH_CYCLE_PRO_SAMPLE_URL} target="_blank" rel="noopener noreferrer">
                <span>Lush Cycle Proの見本を見る<small>Lark Baseで開く（別タブ）</small></span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="case-metric-grid">
              {caseMetrics.map((metric) => (
                <article key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </article>
              ))}
            </div>
            <p className="case-metric-note">
              ※数値はEyelash Salon Luciaの店舗運営実績として2026年8月8日時点で確認した情報です。
              指標ごとに集計期間・条件は異なります。Cycle Proの導入だけによる効果を示すものではなく、同様の成果を保証するものではありません。
            </p>
          </div>
        </section>
        </SectionAccordion>

        <SectionAccordion id="case-recognition" title="Lark Master 2026での発表" description="現場から生まれたCycle Proを、実装事例として紹介。" label="LARK MASTER 2026">
        <section className="case-recognition" aria-labelledby="case-recognition-title">
          <div className="shell case-recognition-grid">
            <figure>
              <Image
                src="/lark-master-2026-event.webp"
                alt="2026年6月19日に渋谷ヒカリエで開催されたLark Master 2026会場"
                fill
                sizes="(max-width: 820px) 100vw, 52vw"
                unoptimized
              />
            </figure>
            <div>
              <p className="section-label">LARK MASTER 2026 / FINALIST</p>
              <h2 id="case-recognition-title">
                現場から生まれたCycle Proを、実装事例として発表。
              </h2>
              <p>
                2026年6月19日、渋谷ヒカリエで開催されたLark Master 2026に代表社員・大城未緒が登壇。
                Eyelash Salon Luciaの運用から生まれたCycle Proを発表し、ファイナリストに選出されました。
              </p>
              <div className="case-recognition-meta">
                <span>発表者</span>
                <strong>大城 未緒</strong>
                <span>テーマ</span>
                <strong>Cycle Pro</strong>
              </div>
            </div>
          </div>
        </section>
        </SectionAccordion>

        <SectionAccordion id="case-before-after" title="導入前と導入後の業務" description="紙カルテ・同意書・売上集計から、Larkでの一元管理へ。" label="BEFORE / AFTER">
        <section className="before-after section-dark">
          <div className="shell before-after-grid">
            <article>
              <p>BEFORE</p>
              <h2>紙カルテ・同意書・売上集計が分散。</h2>
              <ul>
                {challenges.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <p>AFTER</p>
              <h2>顧客情報と経営指標をLarkで一元化。</h2>
              <ul>
                {actions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>
        </SectionAccordion>

        <SectionAccordion id="case-process" title="導入・運用の進め方" description="日々の仕事に合わせた設計と、使いながら改善するプロセス。" label="PROCESS">
        <section className="case-process section-light">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-label">IMPLEMENTATION</p>
                <h2>
                  アイラッシュサロンDXを入れるだけでなく、
                  <br />
                  毎日の動きに合わせる。
                </h2>
              </div>
              <p>
                現在の接客フローを崩さず、少しずつ紙と手作業を減らしました。運用後の声を反映しながら画面とルールを更新しています。
              </p>
            </div>
            <div className="case-process-grid">
              <article>
                <span>01</span>
                <h3>業務を観察する</h3>
                <p>来店前・施術中・会計後に、誰が何を確認しているかを整理。</p>
              </article>
              <article>
                <span>02</span>
                <h3>情報をつなぐ</h3>
                <p>顧客情報、カルテ、同意書、売上をひとつの流れへ設計。</p>
              </article>
              <article>
                <span>03</span>
                <h3>使いながら直す</h3>
                <p>スタッフの声と数字を確認し、入力や確認の手順を改善。</p>
              </article>
            </div>
          </div>
        </section>
        </SectionAccordion>

        <SectionAccordion id="case-voice" title="現場の声" description="実際に運用する立場からのコメント。" label="VOICE">
        <section className="quote-section">
          <figure className="shell quote-inner">
            <p className="section-label">OWNER&apos;S VOICE</p>
            <blockquote>
              紙カルテの管理や同意書の案内、売上集計に追われていましたが、
              すべてがひとつにつながり、サロンワークに集中できるようになりました。
              数字が見えることで改善点も明確になりました。
            </blockquote>
            <figcaption>
              <strong>Eyelash Salon Lucia 運営担当</strong>
              <span>azumi</span>
            </figcaption>
          </figure>
        </section>
        </SectionAccordion>

        <section className="global-cta compact-cta">
          <div className="shell global-cta-inner">
            <p className="section-label">YOUR NEXT STEP</p>
            <h2>同じような課題から、相談できます。</h2>
            <ConsultationLink className="button button-primary" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
