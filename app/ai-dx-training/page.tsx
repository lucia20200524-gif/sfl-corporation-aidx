import { SectionAccordion } from "../components/SectionAccordion";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { organizationReference, SITE_URL, breadcrumbSchema, pageSocialMetadata } from "../seo";

const pageTitle = "法人向け生成AI・Webアプリ研修｜合同会社SFL";
const pageDescription =
  "ChatGPT・Codexを業務で活かす法人向け生成AI研修。調査・資料作成・業務改善からWebページ・業務アプリ制作まで、自社の課題を題材に実践します。3時間×5コマの計15時間。研修後1か月の伴走支援付き。";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: "/ai-dx-training" },
  keywords: [
    "法人向け生成AI研修",
    "生成AI研修 法人",
    "AI人材育成",
    "ChatGPT研修 法人",
    "Codex研修",
    "Webアプリ研修",
    "DX人材育成",
    "中小企業 AI研修",
    "人材開発支援助成金 AI研修",
  ],
  ...pageSocialMetadata(pageTitle, pageDescription, "/ai-dx-training"),
};

const outcomes = [
  { code: "01", title: "生成AIを業務で使い分ける", text: "調査、要約、整理、提案、文書作成など、担当業務に直結する活用方法を身につけます。" },
  { code: "02", title: "改善案を仕組みに変える", text: "課題と要件を整理し、必要な入力・処理・出力を説明できるDX人材を育てます。" },
  { code: "03", title: "Webアプリを自ら制作する", text: "ChatGPTやCodexを使い、業務ページや小規模なWebアプリを形にする流れを実践します。" },
];

const curriculum = [
  ["01", "業務課題と生成AIの基本", "現状業務、改善したい作業、情報管理上の注意を整理し、ChatGPT等の基本的な使い方を確認します。"],
  ["02", "調査・整理・提案の実務", "検索、比較、要約、議事録、提案書など、自社で頻度の高い仕事を題材に演習します。"],
  ["03", "要件整理と画面設計", "誰が、何を入力し、どの結果を得るのかを整理し、制作する仕組みの設計図をつくります。"],
  ["04", "Codexによる制作実践", "AIと対話しながらWebページまたは業務アプリを制作し、表示・動作・文章を調整します。"],
  ["05", "公開・運用・社内展開", "安全な運用、更新方法、社内共有、改善サイクルを整理し、研修後に実行する計画へ落とし込みます。"],
];

const deliverables = [
  "社内向け情報共有・手順ページ",
  "入力内容を整理・集計する業務アプリ",
  "顧客案内・採用・研修用Webページ",
  "調査・提案・議事録作成のAI活用フロー",
];

const faqs = [
  { question: "AIやプログラミング未経験でも受講できますか？", answer: "はい。事前ヒアリングで習熟度を確認し、生成AIの基本操作から段階的に進めます。" },
  { question: "5コマの内容は固定ですか？", answer: "時間は3時間×5コマの計15時間ですが、各コマの題材と比重は事前ヒアリングで貴社の業務に合わせて調整します。" },
  { question: "研修中に必ず完成品ができますか？", answer: "制作対象の規模や必要な連携により異なります。研修前に実現範囲を確認し、研修内で扱う範囲と別途開発が必要な範囲を分けます。" },
  { question: "助成金は必ず利用できますか？", answer: "利用・受給は保証できません。対象者、訓練内容、実施時間、申請期限などの要件を確認し、最終判断は管轄労働局が行います。" },
];

const breadcrumbs = breadcrumbSchema([
  { name: "ホーム", path: "/" },
  { name: "講座・研修", path: "/services#courses" },
  { name: "法人向け生成AI・Webアプリ研修", path: "/ai-dx-training" },
]);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "法人向け生成AI・Webアプリ研修",
  description: pageDescription,
  url: `${SITE_URL}/ai-dx-training`,
  provider: organizationReference,
  timeRequired: "PT15H",
  inLanguage: "ja-JP",
  offers: { "@type": "Offer", price: "360000", priceCurrency: "JPY", description: "1名あたりの料金・税別。1回最大5名。" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function AiDxTrainingPage() {
  return (
    <>
      <SiteHeader />
      <main className="seo-detail-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, faqSchema, breadcrumbs]) }} />
        <Breadcrumbs items={[
          { label: "ホーム", href: "/" },
          { label: "講座・研修", href: "/services#courses" },
          { label: "生成AI・Webアプリ研修" },
        ]} />
        <PageHero
          index="02"
          eyebrow="GENERATIVE AI TRAINING"
          title="法人向け生成AI研修で、改善を形にできるAI人材を育てる。"
          description="ChatGPT・Codexを使い、日常業務の改善からWebページ・業務アプリの制作まで実践。自社業務を題材に、3時間×5コマの内容を調整します。"
        />

        <SectionAccordion id="ai-outcomes" title="研修で身につく実務力" description="生成AIを自社の業務で活用するための3つの力。" label="OUTCOMES">
        <section className="seo-detail-section section-light" aria-labelledby="ai-outcome-title">
          <div className="shell">
            <div className="seo-detail-heading">
              <div><p className="section-label">DX EMPLOYEE / AI</p><h2 id="ai-outcome-title">研修で育てる、3つの実務力。</h2></div>
              <p>SFLの「DX社員」は資格名ではありません。現場の課題を整理し、生成AIを安全に使い、必要な仕組みを社内で改善できる人材を表します。</p>
            </div>
            <div className="seo-feature-grid">
              {outcomes.map((item) => <article key={item.code}><span>{item.code}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
            </div>
          </div>
        </section>
        </SectionAccordion>

        <SectionAccordion id="ai-curriculum" title="15時間の実務カリキュラム" description="各回の学習テーマと、実際に手を動かす内容。" label="CURRICULUM">
        <section className="seo-detail-section seo-detail-dark" aria-labelledby="ai-curriculum-title">
          <div className="shell">
            <div className="seo-detail-heading seo-detail-heading-light">
              <div><p className="section-label">3 HOURS × 5 SESSIONS</p><h2 id="ai-curriculum-title">15時間の実務カリキュラム。</h2></div>
              <p>時間は15時間で固定し、扱う業務・制作物・各コマの比重は事前ヒアリングで調整します。</p>
            </div>
            <ol className="seo-step-grid">
              {curriculum.map(([number, title, text]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></li>)}
            </ol>
          </div>
        </section>
        </SectionAccordion>

        <SectionAccordion id="ai-build" title="研修で制作するもの" description="学びを業務につなげる、制作物と活用例。" label="PRACTICE">
        <section className="seo-detail-section section-light" aria-labelledby="ai-build-title">
          <div className="shell seo-split-layout">
            <div>
              <p className="section-label">CHATGPT × CODEX</p>
              <h2 id="ai-build-title">学ぶだけで終わらず、業務で使うものを制作。</h2>
              <p>ChatGPTは調査・整理・文章・企画に、CodexはWebページや業務アプリの制作・修正に活用します。個人情報や機密情報の扱い、公開範囲、確認手順も研修内で整理します。</p>
            </div>
            <ul className="seo-deliverable-list">
              {deliverables.map((item, index) => <li key={item}><span>0{index + 1}</span><strong>{item}</strong></li>)}
            </ul>
          </div>
        </section>
        </SectionAccordion>

        <SectionAccordion id="ai-plan" title="研修条件・料金・伴走支援" description="受講条件と、研修終了後1か月のサポート内容。" label="PLAN & SUPPORT">
        <section className="seo-detail-section seo-plan-section" aria-labelledby="ai-plan-title">
          <div className="shell">
            <div className="seo-detail-heading seo-detail-heading-light">
              <div><p className="section-label">TRAINING PLAN</p><h2 id="ai-plan-title">研修条件と、研修後1か月の伴走。</h2></div>
              <p>対象社員と業務に合わせた研修をご提案します。無料相談から直接お見積もりへ進むことができ、有料の業務整理は必須ではありません。相談の流れ・業務整理の料金は、<Link href="/contact#contact-flow-title">相談ページ</Link>でご案内しています。</p>
            </div>
            <div className="seo-plan-grid">
              <article><span>TIME</span><strong>3時間×5コマ</strong><p>計15時間／事前ヒアリングで内容調整</p></article>
              <article><span>PRICE</span><strong>360,000円</strong><p>税別／1名あたり・1回最大5名</p></article>
              <article><span>FOLLOW-UP</span><strong>研修後1か月無料</strong><p>月2回オンライン面談＋SFL Larkサポートデスク</p></article>
            </div>
            <div className="seo-note-panel">
              <div><strong>人材開発支援助成金を検討する企業さまへ</strong><p>制度の対象可否・対象経費・支給額は個別審査です。SFLの研修が一律に対象になるものではなく、受給を保証しません。</p></div>
              <Link href="/reskilling-subsidy-simulator">人材開発支援助成金の費用を試算する<span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>
        </SectionAccordion>

        <section className="seo-detail-section section-light" aria-labelledby="ai-faq-title">
          <div className="shell seo-faq-layout">
            <div><p className="section-label">FAQ</p><h2 id="ai-faq-title">法人向け生成AI研修のよくあるご質問。</h2></div>
            <div>{faqs.map((item, index) => <details key={item.question}><summary>{item.question}<span>＋</span></summary><p>{item.answer}</p></details>)}</div>
          </div>
        </section>

        <section className="seo-detail-cta" aria-labelledby="ai-cta-title">
          <div className="shell"><p className="section-label">FREE CONSULTATION / 60 MIN</p><h2 id="ai-cta-title">自社の仕事に合う生成AI研修を、ご相談ください。</h2><p>60分の無料相談で、改善したい業務、対象社員、制作したい仕組みを伺い、研修の目的と内容を整理します。</p><Link href="/contact">法人向け生成AI研修について相談する<span aria-hidden="true">→</span></Link></div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
