import { SectionAccordion } from "./components/SectionAccordion";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SFL_BUSINESSES } from "./businesses";
import { SFL_COURSES } from "./courses";
import { CourseCatalog } from "./components/CourseCatalog";
import { ConsultationFlow } from "./components/ConsultationFlow";
import { BusinessTrackRecord } from "./components/BusinessTrackRecord";
import { LarkSupportNote } from "./components/LarkBrand";
import { HomeHeroCarousel } from "./components/HomeHeroCarousel";
import { HomeMotion } from "./components/HomeMotion";
import { LarkSupportServices } from "./components/LarkSupportServices";
import { WorkflowExample } from "./components/WorkflowExample";
import { StageNavigation } from "./components/StageNavigation";
import "./lark-home.css";
import { PartnerCompanies } from "./components/PartnerCompanies";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { TrainingProgramTabs } from "./components/TrainingProgramTabs";
import {
  HOME_TITLE as homeTitle,
  HOME_DESCRIPTION as homeDescription,
  LUSH_CYCLE_PRO_SAMPLE_URL,
  organizationReference,
  SITE_URL,
  WEBSITE_ID,
  pageSocialMetadata,
} from "./seo";

export const metadata: Metadata = {
  title: { absolute: homeTitle },
  description: homeDescription,
  alternates: {
    canonical: "/",
    languages: { "ja-JP": "/" },
  },
  keywords: [
    "合同会社SFL",
    "法人向けDX研修",
    "Lark法人研修",
    "Lark導入支援",
    "Lark Base構築",
    "AI研修 法人",
    "DX人材育成",
    "DX社員 研修",
    "DX社員 育成",
    "中小企業 DX教育",
    "中小企業 社員研修",
    "社内DX人材育成",
    "人材開発支援助成金",
    "事業展開等リスキリング支援コース",
    "リスキリング研修",
    "法人向けリスキリング",
    "SFL Lark導入講座",
    "中小企業 DX支援",
    "神戸 DX研修",
    "全国オンライン研修",
  ],
  ...pageSocialMetadata(homeTitle, homeDescription, "/"),
};

const learningSteps = [
  {
    number: "01",
    title: "業務を理解する",
    english: "UNDERSTAND",
    text: "いま誰が、何を、どの順番で行っているかを整理し、改善すべき課題を言葉にします。",
  },
  {
    number: "02",
    title: "実際に操作する",
    english: "PRACTICE",
    text: "講師の画面を見るだけでなく、自分で手を動かしながらLark・AIの使い方を身につけます。",
  },
  {
    number: "03",
    title: "自社業務でつくる",
    english: "IMPLEMENT",
    text: "顧客、案件、申請、教育など、自社で使う題材をもとに仕組みを設計・構築します。",
  },
  {
    number: "04",
    title: "使いながら改善する",
    english: "IMPROVE",
    text: "運用後のつまずきを確認し、画面・権限・ルール・教育内容を更新します。",
  },
];

const faqs = [
  {
    question: "Larkアカウントの契約を無理に勧められませんか？",
    answer: "合同会社SFLはLark Japanの代理店ではありません。アカウントの契約や有料プランの利用を無理に勧めることはなく、お客様の業務や目的に合わせて必要な教育・構築・運用支援をご案内します。Lark Japanの認定は講師個人に付与されたもので、SFL自体の公式認定を示すものではありません。",
  },
  {
    question: "業務整理だけでも利用できますか？",
    answer: "はい。「フロー【業務整理】」までのご利用も歓迎です。ヒアリングをもとに現在の業務フローを可視化し、作成したフロー図等をお渡しします。整理した業務に対するAI・DX活用のアドバイスも行います。その後のサービス・商品のご契約は必須ではありません。追加の支援をご希望の場合に、お見積もりをご案内します。",
  },
  {
    question: "無料相談と、有料の業務整理の違いは何ですか？",
    answer: "60分の無料相談では、現在の業務やお困りごと、実現したいことを伺います。有料の業務整理では、オンライン面談または訪問で詳しくヒアリングし、担当者・使用ツール・作業の順番を整理して、現在の業務フローを可視化します。作成したフロー図を一緒に確認し、AI・DX活用の方向性もアドバイスします。個人事業主・フリーランスは3時間40,000円、法人は5時間70,000円（各税別）です。業務整理は必須ではなく、無料相談から直接サービスのご提案・お見積もりへ進むことも可能です。",
  },
  {
    question: "SFLが育成する「DX社員」とは、どのような人材ですか？",
    answer: "SFLでは、専門エンジニアだけを指す言葉としてではなく、現場の課題を整理し、LarkやAIを使って必要な仕組みをつくり、社内で改善を続けられる人材を「DX社員」と表現しています。特定の資格名ではありません。",
  },
  {
    question: "操作に慣れていない社員でも受講できますか？",
    answer: "はい。現在の習熟度を事前に確認し、基本操作から段階的に進めます。自社の業務を題材にするため、学ぶ理由と使う場面を結びつけながら理解できます。",
  },
  {
    question: "研修だけでなく、Lark Baseの構築も依頼できますか？",
    answer: "可能です。業務整理、データ項目、権限、申請、通知、ダッシュボードの設計・構築と、社内研修を一体で支援できます。",
  },
  {
    question: "法人研修後の1か月無料伴走には何が含まれますか？",
    answer: "法人向け研修の終了後1か月間、Lark FLOW ONEを無料で提供します。月2回のオンライン面談と、いつでも質問を送れるSFL Larkサポートデスクが含まれ、導入直後の悩みや改善方法を一緒に整理します。個人向け講座のサポート条件は、各講座の案内をご確認ください。",
  },
  {
    question: "神戸以外の企業も相談できますか？",
    answer: "はい。合同会社SFLは神戸市中央区を拠点に、全国オンラインで対応しています。訪問研修は、内容と地域に応じて個別にご相談ください。",
  },
  {
    question: "助成金・補助金の活用は相談できますか？",
    answer: "はい。人材開発支援助成金などの活用に向け、研修目的、対象者、時間、実施方法を整理します。対象可否・支給額は制度要件と個別審査で決まり、受給・採択を保証するものではありません。申請に専門判断が必要な場合は社会保険労務士などの専門家と連携します。",
  },
  {
    question: "個人向け講座と法人向け研修は何が違いますか？",
    answer: "法人向け研修は、社員の育成と業務での活用を目的に、自社業務を題材として設計します。個人向け講座は、ご本人のスキル習得や仕事での活用を目的とした別サービスです。対象者、料金、カリキュラムをそれぞれご案内します。",
  },
];

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "合同会社SFL",
  alternateName: "SFL",
  url: `${SITE_URL}/`,
  description: homeDescription,
  inLanguage: "ja-JP",
  publisher: organizationReference,
};

const homeWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: `${SITE_URL}/`,
  name: homeTitle,
  description: homeDescription,
  inLanguage: "ja-JP",
  dateModified: "2026-09-20",
  isPartOf: { "@type": "WebSite", "@id": WEBSITE_ID },
  about: organizationReference,
};

const coreServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/#training-service`,
  name: "Larkによる業務改善・構築・教育・伴走支援",
  serviceType: ["DX社員育成", "中小企業向けDX教育", "法人向けリスキリング研修", "人材開発支援助成金活用相談", "Lark実務研修", "AI活用研修", "Lark Base構築", "導入後の伴走支援"],
  description: "業務の整理からLarkの設計・構築、社員教育、導入後の運用改善まで、現場の状況に合わせて支援します。",
  provider: organizationReference,
  audience: { "@type": "Audience", audienceType: "中小企業・小規模事業者の経営者、人事・教育担当者、DX推進担当者" },
  areaServed: { "@type": "Country", name: "日本" },
  url: `${SITE_URL}/#lark-support`,
};

const trainingCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE_URL}/#training-programs`,
  name: "SFLの講座・研修",
  numberOfItems: SFL_COURSES.length,
  itemListElement: SFL_COURSES.map((course, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Course",
      name: course.name,
      description: course.description,
      url: new URL(course.href, SITE_URL).href,
      inLanguage: "ja-JP",
      provider: organizationReference,
    },
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="trust-home">
        <HomeMotion />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([websiteSchema, homeWebPageSchema, coreServiceSchema, trainingCatalogSchema, faqSchema]) }}
        />

        <HomeHeroCarousel />

        <section id="home-business" className="corporate-business sfl-business-intro" aria-labelledby="business-title">
          <div className="shell">
            <div className="corporate-section-heading">
              <div><p className="section-label">OUR BUSINESS</p><h2 id="business-title">SFLが展開する、<br />3つの事業。</h2></div>
              <p>Larkによる業務改善を中心に、AIの活用・教育、<br className="wide-only" />官公庁入札への取り組みを展開しています。</p>
            </div>
            <StageNavigation rootId="home-business" label="目的から事業を選ぶ" branches items={SFL_BUSINESSES.map((business, index) => ({ id: `${business.id}-disclosure`, panelId: `${business.id}-details`, title: ["業務を整えたい", "AIを活用したい", "入札を学びたい"][index], note: business.name }))} />
            <div className="sfl-business-cards">
              {SFL_BUSINESSES.map((business) => (
                <article id={business.id} key={business.id} className="sfl-business-card">
                  <div className="corporate-service-index"><span>{business.number}</span><small>{business.english}</small></div>
                  <h3>{business.name}</h3>
                  <p>{business.summary}</p>
                  <details id={`${business.id}-disclosure`}>
                    <summary aria-controls={`${business.id}-details`}>
                      <span><span className="section-accordion-open">事業の詳細を見る</span><span className="section-accordion-close">閉じる</span></span>
                      <span className="section-accordion-icon" aria-hidden="true" />
                    </summary>
                    <div id={`${business.id}-details`} className="sfl-business-detail">
                      <p>{business.description}</p>
                      <ul>{business.services.map((service) => <li key={service}>{service}</li>)}</ul>
                      <a href={business.href} target={business.external ? "_blank" : undefined} rel={business.external ? "noopener noreferrer" : undefined}>{business.action}<span aria-hidden="true">{business.external ? "↗" : "→"}</span></a>
                    </div>
                  </details>
                </article>
              ))}
            </div>
            <LarkSupportNote />
            <div className="corporate-section-end"><p>各事業の取り組みと、具体的なサービスをご紹介します。</p><Link className="corporate-text-link" href="/services">事業・サービス一覧を見る<span aria-hidden="true">→</span></Link></div>
          </div>
        </section>

        <LarkSupportServices>
        <SectionAccordion id="home-education" title="「DX社員」を育てる学び方" description="業務の理解から操作・構築・改善まで、4つのステップ。" label="EDUCATION">
        <section className="trust-education" aria-labelledby="education-title">
          <div className="shell">
            <div className="trust-section-heading">
              <div>
                <p className="section-label">SFL EDUCATION METHOD</p>
                <h2 id="education-title">自社で改善を続ける、<br /><em>「DX社員」を育てる。</em></h2>
              </div>
              <p>自社の業務を整理し、Larkや生成AIを使って改善する。操作の練習から仕組みづくり、運用の見直しまで、自分の手を動かしながら学びます。</p>
            </div>

            <div className="trust-learning-grid">
              {learningSteps.map((step) => (
                <article key={step.number}>
                  <div><span>{step.number}</span><small>{step.english}</small></div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>

            <div className="trust-outcomes">
              <div><p>AFTER THE PROGRAM</p><h3>DX社員に求める、3つの実務力。</h3></div>
              <ol>
                <li><span>01</span><strong>情報の流れを整理し、課題を説明できる</strong></li>
                <li><span>02</span><strong>Lark・AIを自分の業務で使い分けられる</strong></li>
                <li><span>03</span><strong>必要な仕組みを社内で改善し続けられる</strong></li>
              </ol>
            </div>
          </div>
        </section>
        </SectionAccordion>

        </LarkSupportServices>

        <div className="sfl-workflow-section">
          <div className="shell">
            <WorkflowExample id="home-lark-workflow" kind="lark" />
            <WorkflowExample id="home-cycle-workflow" kind="cycle" />
          </div>
        </div>

        <SectionAccordion id="home-proof" title="導入・研修・取引実績と講座の開催状況" description="サロンDX・企業向けAI研修・官公庁との取引実績、各講座の開催状況をご紹介。SFL Academyは1期生が活動中です。" label="TRACK RECORD">
        <section className="trust-proof" aria-labelledby="proof-title">
          <div className="shell"><BusinessTrackRecord titleId="home-track-record-title" /></div>
          <div className="shell trust-proof-grid">
            <div className="trust-proof-copy">
              <p className="section-label">CASE STUDY / CYCLE PRO</p>
              <h2 id="proof-title">SFLのDXは、<br /><em>実際の現場から。</em></h2>
              <p>滋賀県草津市のEyelash Salon Luciaでは、電子同意書、顧客カルテ、売上、再来管理をLarkでつなぐ「Cycle Pro」を運用。現場の課題から設計し、使いながら改善してきた経験を、研修と導入支援へ活かしています。</p>
              <div className="trust-proof-actions">
                <Link className="button button-primary" href="/case-study">導入・研修・取引実績を見る<span aria-hidden="true">→</span></Link>
                <a className="button cycle-pro-sample-link" href={LUSH_CYCLE_PRO_SAMPLE_URL} target="_blank" rel="noopener noreferrer"><span>Lush Cycle Proの見本を見る<small>Lark Baseで開く（別タブ）</small></span><span aria-hidden="true">↗</span></a>
                <Link className="trust-text-link" href="/lark-dx">法人向けLark・DX研修の詳細を見る<span aria-hidden="true">→</span></Link>
              </div>
            </div>

            <div className="trust-proof-visual">
              <figure>
                <Image src="/lark-master-2026-event.webp" alt="2026年6月19日に渋谷ヒカリエで開催されたLark Master 2026会場" fill sizes="(max-width: 900px) 100vw, 48vw" unoptimized />
                <figcaption><span>LARK MASTER 2026</span><strong>Cycle Pro / FINALIST</strong><small>2026.06.19 / SHIBUYA HIKARIE</small></figcaption>
              </figure>
              <div className="trust-proof-metrics" aria-label="Eyelash Salon Luciaの店舗運営実績">
                <article><strong>82%</strong><span>再来率</span></article>
                <article><strong>100+</strong><span>月間来店数</span></article>
                <article><strong>5週</strong><span>平均来店周期</span></article>
              </div>
              <p>※数値は2026年8月8日時点の店舗運営実績です。SFL導入のみの効果を示すものではなく、同様の成果を保証するものではありません。</p>
            </div>
          </div>
        </section>
        <SectionAccordion id="home-programs" title="個人向け講座・法人向け研修" description="Lark・AI・官公庁入札の学びを、目的や対象に合わせて確認。" label="COURSES & TRAINING">
        <section className="trust-programs" id="training-programs" aria-labelledby="programs-title">
          <div className="shell">
            <CourseCatalog titleId="programs-title" />
            <TrainingProgramTabs />
          </div>
        </section>
        </SectionAccordion>

        </SectionAccordion>

        <SectionAccordion id="home-about" title="代表メッセージ・会社概要・支援体制" description="SFLの想いと、会社情報、講師・支援チーム、提携企業をご紹介します。" label="ABOUT SFL">
        <SectionAccordion id="home-message" title="代表メッセージ" description="代表社員・大城未緒が語る、SFLの支援に込めた想い。" label="MESSAGE">
        <section className="trust-message" aria-labelledby="representative-message-title">
          <div className="shell trust-message-grid">
            <div className="trust-message-portrait">
              <figure>
                <Image
                  src="/representative-mio-profile.jpeg"
                  alt="合同会社SFL 代表社員 大城 未緒"
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                  unoptimized
                />
                <figcaption>
                  <span>REPRESENTATIVE</span>
                  <strong>大城 未緒</strong>
                  <small>合同会社SFL 代表社員</small>
                </figcaption>
              </figure>
              <div className="trust-message-mark" aria-hidden="true">
                <Image src="/sfl-logo-20260907.jpg" alt="" width={1080} height={1080} unoptimized />
              </div>
            </div>

            <div className="trust-message-copy">
              <p className="section-label">MESSAGE FROM REPRESENTATIVE</p>
              <h2 id="representative-message-title">
                現場の声から、
                <br />
                <em>使い続けられる仕組みを。</em>
              </h2>
              <div className="trust-message-body">
                <p>
                  合同会社SFLは、LarkやAIを導入すること自体を目的にしていません。大切にしているのは、働く人が自ら使い、改善し、次の人へ伝えられる状態をつくることです。
                </p>
                <p>
                  アイラッシュサロンの現場で見えてきた、紙や手作業、情報の分散という課題。現場で必要とされた仕組みを「Cycle Pro」として形にし、その経験を法人研修や導入支援へ展開しています。
                </p>
                <p>
                  全国の中小企業へ、現場の社員が自ら課題を見つけ、仕組みをつくり、改善を続けられるDX教育を届けたい。教育・構築・伴走を分けず、経営と現場の間に入りながら「DX社員」が育つ流れを共につくることが、SFLの役割だと考えています。
                </p>
              </div>
              <div className="trust-message-signature">
                <div><span>合同会社SFL 代表社員</span><strong>大城 未緒</strong></div>
                <Link href="/company">代表・会社情報を見る<span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </div>
        </section>
        </SectionAccordion>

        <SectionAccordion id="home-company" title="会社概要・支援体制" description="会社情報、対応エリア、講師・支援チームについて。" label="ABOUT SFL">
        <section className="corporate-company" aria-labelledby="corporate-company-title">
          <div className="shell corporate-company-grid">
            <div><p className="section-label">ABOUT SFL</p><h2 id="corporate-company-title">顔が見える。<br />役割がわかる。<br />安心して相談できる。</h2><p>代表を窓口に、Lark・AI・実務運用の担当が連携。目的、費用、支援範囲を共有し、ご相談内容に合った体制を組みます。</p></div>
            <div className="corporate-company-details">
              <dl><div><dt>商号</dt><dd>合同会社SFL</dd></div><div><dt>代表社員</dt><dd>大城 未緒</dd></div><div><dt>拠点・対応</dt><dd>神戸市中央区 / 全国オンライン</dd></div><div><dt>法人番号</dt><dd>8140003023662</dd></div></dl>
              <nav aria-label="会社と支援体制"><Link href="/company#company-profile">会社概要・所在地<span aria-hidden="true">→</span></Link><Link href="/instructors">講師・支援チーム<span aria-hidden="true">→</span></Link><Link href="/support-policy">支援範囲・契約・データの取扱い<span aria-hidden="true">→</span></Link></nav>
              <p className="corporate-certified-note"><mark className="sfl-marker">Lark Japan認定のKazu先生</mark>が実務教育を担当。認定は講師個人に付与されたもので、合同会社SFL自体の公式認定を示すものではありません。</p>
            </div>
          </div>
        </section>
        </SectionAccordion>

        <div className="trust-partners">
          <SectionAccordion id="partners" title="提携企業" description="KAIEI・UNIQSとの連携と、それぞれの役割。" label="PARTNERS"><PartnerCompanies compact /></SectionAccordion>
        </div>
        </SectionAccordion>

        <div className="sfl-consultation-end">
        <section className="trust-flow" aria-labelledby="flow-title">
          <div className="shell">
            <ConsultationFlow titleId="flow-title">
            <div className="trust-policy-panel">
              <div><span>TRUST &amp; GOVERNANCE</span><strong>契約・費用・データの取扱いも、事前に確認できます。</strong><p>支援範囲、対象外業務、費用区分、情報管理、契約終了時の対応を公開しています。</p></div>
              <nav aria-label="支援方針へのリンク">
                <Link href="/support-policy">支援・契約ガイド<span>→</span></Link>
                <Link href="/information-security-policy">情報セキュリティ基本方針<span>→</span></Link>
                <Link href="/company">会社概要<span>→</span></Link>
              </nav>
            </div>
            </ConsultationFlow>
          </div>
        </section>

        <section className="trust-faq" aria-labelledby="faq-title">
          <div className="shell trust-faq-grid">
            <div><p className="section-label">FAQ</p><h2 id="faq-title">よくあるご質問</h2><p>無料相談・業務整理・研修・各種支援について、よくいただくご質問をまとめました。</p></div>
            <div>
              {faqs.map((faq, index) => (
                <details key={faq.question}>
                  <summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.question}<i aria-hidden="true">＋</i></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="trust-cta" aria-labelledby="cta-title">
          <div className="shell trust-cta-inner">
            <p className="section-label">FREE CONSULTATION / 60 MIN</p>
            <h2 id="cta-title">まずは、現場のお話を<br />聞かせてください。</h2>
            <p>個人事業主・フリーランスから法人まで。60分の無料相談で、いまのお困りごとを伺います。業務整理までのご利用も歓迎です。</p>
            <div>
              <Link className="button button-primary" href="/contact">60分無料相談へ<span aria-hidden="true">→</span></Link>
              <Link className="button button-ghost" href="/lark-dx">法人向け研修を見る<span aria-hidden="true">→</span></Link>
            </div>
            <small>合同会社SFL｜神戸市中央区｜全国オンライン対応</small>
          </div>
        </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
