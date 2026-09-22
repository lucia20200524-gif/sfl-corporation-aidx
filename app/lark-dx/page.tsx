import { SectionAccordion } from "../components/SectionAccordion";
import { LearningJourney } from "../components/LearningJourney";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LarkSupportNote } from "../components/LarkBrand";
import { WorkflowExample } from "../components/WorkflowExample";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { HeroTicker } from "../components/HeroTicker";
import { ConsultationLink } from "../components/ConsultationLink";
import { LarkTrainingLink } from "../components/LarkTrainingLink";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import {
  organizationReference,
  breadcrumbSchema,
  pageSocialMetadata,
} from "../seo";

const pageTitle = "Lark法人研修・導入支援｜DX社員を育てる";
const pageDescription =
  "Larkを使って自社の業務改善を続けられる「DX社員」を育成。3時間×5コマの法人向け実務研修で、自社業務を題材に操作・構築を学びます。研修後1か月の無料伴走付き。全国オンラインで導入・定着を支援します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/lark-dx",
  },
  keywords: [
    "Lark導入支援",
    "Lark研修 法人",
    "DX社員 Lark研修",
    "DX社員 育成",
    "中小企業 DX教育",
    "中小企業 DX研修",
    "Lark Base構築",
    "Lark構築代行",
    "Larkサポートデスク",
    "Lark伴走支援",
    "Lark FLOW ONE",
    "人材開発支援助成金",
    "事業展開等リスキリング支援コース",
    "業務改善助成金2026",
    "デジタル化・AI導入補助金2026",
  ],
  ...pageSocialMetadata(pageTitle, pageDescription, "/lark-dx"),
};

const larkFunctions = [
  {
    name: "Messenger",
    jp: "チャット",
    text: "部署や拠点を越えた連絡を整理し、情報の分断を減らします。",
  },
  {
    name: "Meetings",
    jp: "オンライン会議",
    text: "日程調整から会議、議事録・共有までをスムーズにつなぎます。",
  },
  {
    name: "Docs",
    jp: "文書・ナレッジ",
    text: "マニュアルや会議資料を共同編集し、最新情報をひとつに保ちます。",
  },
  {
    name: "Base",
    jp: "業務データベース",
    text: "案件、顧客、申請などを現場に合う形で管理し、自動化へつなげます。",
  },
];

const courseStages = [
  ["01", "理解する", "Larkの全体像と基本操作"],
  ["02", "整理する", "自社業務と課題の棚卸し"],
  ["03", "設計する", "情報・権限・運用ルール"],
  ["04", "つくる", "Base構築と自動化の実践"],
  ["05", "運用する", "定着と継続改善の進め方"],
];

const supportPrograms = [
  {
    code: "IMPLEMENT / EDUCATE / ADOPT",
    title: "DX社員育成｜Lark導入・教育・定着支援パッケージ",
    subtitle: "人材開発支援助成金｜事業展開等リスキリング支援コース",
    text: "Larkを使い、自社の課題を整理し、Baseを設計・改善できるDX社員を育てる法人向けパッケージです。導入、Lark Japan認定のKazu先生による実務教育、現場定着までを一体で支援します。認定はKazu先生個人に付与されたものです。",
    points: [
      "60分無料相談で課題と研修の目的を確認",
      "現状の業務整理とLark導入設計",
      "Lark Japan認定のKazu先生によるDX実践教育",
      "3時間×5コマ・計15時間・1名あたり360,000円（税別）",
      "1回最大5名の少人数設計",
      "研修後はLark FLOW ONEとサポートデスクを1か月無料提供",
    ],
    packages: [
      {
        label: "CORPORATE / 1名あたりの料金・1回最大5名",
        hours: "15時間（3時間×5コマ）",
        price: "360,000",
        content: "DX社員育成｜Lark・DX実務研修",
      },
    ],
    href: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/d01-1.html",
    linkLabel: "厚生労働省の最新制度情報",
  },
  {
    code: "DIGITAL & AI",
    title: "デジタル化・AI導入補助金2026パッケージ",
    subtitle: "旧IT導入補助金｜株式会社UNIQS連携パッケージ",
    text: "Lark・AIの導入パッケージをご案内し、公募要領に沿って、対象となる条件を事前に確認します。SFLは導入目的、業務改善計画、運用定着まで伴走します。補助対象となることや採択を保証するものではありません。",
    points: [
      "株式会社UNIQSとの連携パッケージ",
      "改善対象となる業務と導入目的を整理",
      "対象ツール・申請枠・導入条件を事前整理",
      "導入後の教育・運用・定着まで伴走",
    ],
    solutions: [
      {
        label: "LARK PACKAGE",
        name: "Lark業務改善パッケージ",
        price: "2,300,000",
        text: "Larkを活用し、情報共有と業務フローをひとつに整理します。",
      },
      {
        label: "AI & DIGITAL TRANSFORMATION",
        name: "DX ONE",
        price: "2,600,000",
        text: "AIとデジタルツールを組み合わせ、中小企業の業務改善を支援します。",
      },
    ],
    href: "https://it-shien.smrj.go.jp/",
    linkLabel: "デジタル化・AI導入補助金2026の公式情報",
    partnerHref: "https://www.uniq-s.co.jp/",
    partnerLinkLabel: "提携企業・株式会社UNIQS",
  },
  {
    code: "WAGE & PRODUCTIVITY",
    title: <>業務改善助成金</>,
    subtitle: "令和8年度｜2026年9月1日から受付開始",
    text: "事業場内最低賃金を50円以上引き上げ、生産性向上につながる設備投資等を行う中小企業・小規模事業者向けの制度です。SFLは、現状業務と導入目的を整理し、システム化による生産性向上の可能性を確認します。",
    points: [
      "事業場内最低賃金の50円・70円・90円以上の引上げ",
      "助成率は事業場内最低賃金に応じて4分の3または5分の4",
      "顧客管理のシステム化・機器導入などを個別に確認",
      "交付決定前の契約・導入・支払いは助成対象外",
      "申請期限は地域別最低賃金の発効日前日または2026年11月30日の早い日",
    ],
    highlights: [
      { label: "賃金引上げ", value: "50円以上", note: "50円・70円・90円コース" },
      { label: "助成率", value: "3/4・4/5", note: "事業場内最低賃金で決定" },
      { label: "助成上限", value: "最大600万円", note: "特例事業者・10人以上などの要件あり" },
    ],
    href: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoukijun/zigyonushi/shienjigyou/03.html",
    linkLabel: "厚生労働省・業務改善助成金の最新情報",
  },
];

const continuitySupport = [
  {
    code: "SUPPORT DESK",
    title: "SFL Larkサポートデスク",
    price: "月額980円（税込）",
    text: "いつでもLarkの質問を送れる、合同会社SFL独自の相談窓口です。法人研修の受講企業には、研修終了後の伴走期間中1か月間、無料で提供します。Lark公式ヘルプデスクではありません。",
    points: ["法人研修後1か月間は無料", "いつでも質問を送信可能", "通常は月額980円（税込）", "SFL独自サービス"],
    href: "https://sfl-lark-supportdesk.lucia20200524.chatgpt.site/",
    action: "サポートデスクを見る",
    external: true,
  },
  {
    code: "Lark FLOW ONE",
    title: "Lark FLOW ONE",
    price: "月額5万円・10万円・20万円（税別）",
    text: "法人研修の終了後、月2回のオンライン面談を含む伴走支援を1か月無料で提供。導入直後の悩みや改善方法を一緒に整理します。無料期間終了後は通常プランで継続できます。",
    points: [
      "法人研修後1か月間は月2回面談プランを無料提供",
      "月額5万円（税別）｜定例0回",
      "月額10万円（税別）｜月2回",
      "月額20万円（税別）｜月4回",
    ],
    href: "/contact",
    action: "60分無料相談を申し込む",
    external: false,
  },
];

const relatedSupport = {
  code: "RELATED SERVICE / KAIEI",
  title: "Larkが使えるオンライン秘書",
  text: "株式会社KAIEIと連携し、Larkを使える複数名の秘書が日々の実務を支援。SFLの構築・教育・AI・Web支援へつなぐ窓口も担います。",
};

const faq = [
  {
    question: "DX社員とは、どのような人材ですか？",
    answer:
      "SFLでは、専門エンジニアだけを指す言葉としてではなく、現場の課題を整理し、LarkやAIを使って必要な仕組みをつくり、社内で改善を続けられる人材を「DX社員」と表現しています。特定の資格名ではありません。",
  },
  {
    question: "Larkをまだ導入していなくても相談できますか？",
    answer:
      "はい。現在の情報共有や業務管理の方法を伺い、Larkで改善しやすい領域を整理するところから対応します。",
  },
  {
    question: "法人向け研修はどのような流れですか？",
    answer:
      "まず60分無料相談で現状と目的を伺い、改善したい業務と研修で身につけたいスキルを確認します。その後、事前ヒアリングをもとに各コマの内容を調整し、3時間×5コマ（計15時間）の実務研修を実施します。研修終了後はLark FLOW ONEの月2回オンライン面談とSFL Larkサポートデスクを1か月無料で提供します。",
  },
  {
    question: "法人向け研修と個人向け講座の時間・料金は？",
    answer:
      "法人向けのDX社員育成研修は、事前ヒアリングで内容を調整する3時間×5コマ（計15時間）、1名あたり360,000円（税別）です。1回最大5名で実施します。個人向けのSFL Lark導入講座は別サービスです。0期生は終了し、現在は1期生が進行中です。次回は2期生を2026年11月に募集予定です。2期以降は10時間180,000円（税別）です。",
  },
  {
    question: "SFLの研修を受けていなくても相談できますか？",
    answer:
      "はい。SFL Larkサポートデスクは研修受講歴を問わず、通常は月額980円（税込）でご利用いただけます。法人研修の受講企業には、研修終了後の1か月間、無料で提供します。合同会社SFL独自の質問・相談サービスであり、Lark公式ヘルプデスクではありません。",
  },
  {
    question: "導入後も継続して支援してもらえますか？",
    answer:
      "はい。法人研修の終了後は、Lark FLOW ONEの月2回オンライン面談とSFL Larkサポートデスクを1か月無料で提供します。無料期間終了後は、定例なしの月額5万円、月2回定例の10万円、月4回定例の20万円（いずれも税別）から必要な支援量に合わせて継続できます。",
  },
  {
    question: "助成金や補助金は必ず利用できますか？",
    answer:
      "利用・受給・採択を保証するものではありません。SFLは企業の状況、研修内容、導入ツールを伺い、制度の対象要件を一緒に確認します。対象可否、支給・採択は各制度の審査機関が個別に判断し、必要に応じて社会保険労務士などの専門家と連携します。",
  },
  {
    question: "業務改善助成金では、何が助成対象になりますか？",
    answer:
      "生産性向上に資する設備投資等が対象で、令和8年度の公式資料ではPOSレジ、顧客管理情報のシステム化、一定の経営コンサルティングなどが例示されています。ただし、LarkやSFLの各サービスが一律に対象となるわけではありません。事業場の賃金、導入内容、生産性向上の根拠などを確認したうえで個別に判断されます。",
  },
  {
    question: "申請手続きもSFLに任せられますか？",
    answer:
      "SFLは導入目的、業務、研修計画、運用計画の整理を支援します。独占業務にあたる申請代行などは、必要に応じて各制度に対応する専門家・支援機関と連携します。",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "中小企業のDX社員を育てるLark法人研修・導入支援",
  description: "60分無料相談で課題と研修の目的を確認し、事前ヒアリングで内容を調整する3時間×5コマの実務研修を実施。研修後はLark FLOW ONEの月2回オンライン面談とSFL Larkサポートデスクを1か月無料で提供します。",
  url: "https://sfl-corporation-aidx.lucia20200524.chatgpt.site/lark-dx",
  provider: organizationReference,
  areaServed: "JP",
  serviceType: [
    "Lark導入支援",
    "DX社員育成",
    "中小企業向けDX教育",
    "Lark法人研修",
    "Larkサポートデスク",
    "Lark伴走支援",
    "Larkオンライン秘書",
    "人材開発支援助成金活用支援",
    "業務改善助成金活用支援",
    "デジタル化・AI導入支援",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Lark導入・教育・継続支援プラン",
    itemListElement: [
      {
        "@type": "Offer",
        price: "180000",
        priceCurrency: "JPY",
        description: "0期生終了・1期生進行中。次回は2期生を2026年11月募集予定。2期以降の料金・税別。",
        itemOffered: {
          "@type": "Course",
          name: "SFL Lark導入講座（個人・2期生・10時間）",
          url: "https://sfl-corporation-aidx.lucia20200524.chatgpt.site/lark-dx#individual-course",
          provider: organizationReference,
        },
      },
      {
        "@type": "Offer",
        price: "360000",
        priceCurrency: "JPY",
        description: "1名あたりの料金・税別。1回最大5名。",
        itemOffered: {
          "@type": "Course",
          name: "DX社員育成｜Lark・DX実務研修（法人・3時間×5コマ・計15時間）",
          url: "https://sfl-corporation-aidx.lucia20200524.chatgpt.site/lark-dx#course",
          provider: organizationReference,
        },
      },
      {
        "@type": "Offer",
        price: "2300000",
        priceCurrency: "JPY",
        itemOffered: {
          "@type": "Service",
          name: "Lark業務改善パッケージ",
        },
      },
      {
        "@type": "Offer",
        price: "2600000",
        priceCurrency: "JPY",
        itemOffered: {
          "@type": "Service",
          name: "DX ONE",
        },
      },
      {
        "@type": "Offer",
        price: "980",
        priceCurrency: "JPY",
        itemOffered: {
          "@type": "Service",
          name: "SFL Larkサポートデスク（月額）",
        },
      },
      ...[
        ["50000", "Lark FLOW ONE（月額・定例0回）"],
        ["100000", "Lark FLOW ONE（月額・定例月2回）"],
        ["200000", "Lark FLOW ONE（月額・定例月4回）"],
      ].map(([price, name]) => ({
        "@type": "Offer",
        price,
        priceCurrency: "JPY",
        itemOffered: {
          "@type": "Service",
          name,
        },
      })),
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const breadcrumbs = breadcrumbSchema([
  { name: "ホーム", path: "/" },
  { name: "講座・研修", path: "/services#courses" },
  { name: "Lark・DX研修", path: "/lark-dx" },
]);

export default function LarkDxPage() {
  return (
    <>
      <SiteHeader />
      <main className="lark-hub-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([serviceSchema, faqSchema, breadcrumbs]),
          }}
        />

        <Breadcrumbs items={[{ label: "ホーム", href: "/" }, { label: "講座・研修", href: "/services#courses" }, { label: "Lark・DX研修" }]} />
        <section className="lark-hub-hero">
          <div className="lark-hub-orbit" aria-hidden="true" />
          <div className="shell lark-hub-hero-grid">
            <div>
              <p className="eyebrow">
                <span aria-hidden="true" />
                LARK × LEARNING × SUPPORT PROGRAMS
              </p>
              <h1>
                Larkを使える
                <br />
                <em>「DX社員」を、社内に。</em>
                <br />
                構築・研修・伴走で育てる。
              </h1>
              <p className="lark-hub-lead">
                全国の中小企業へ、現場で使えるDX教育を。60分無料相談で課題と研修の目的を確認し、事前ヒアリングで内容を調整する3時間×5コマの実務研修を実施。研修後はLark FLOW ONEの月2回オンライン面談とSFL Larkサポートデスクを1か月無料で提供します。
              </p>
              <div className="button-row">
                <ConsultationLink className="button button-primary" />
                <LarkTrainingLink />
              </div>
            </div>

            <div className="lark-hub-map" aria-label="Lark導入から制度活用までの支援領域">
              <div className="lark-hub-map-center">
                <Image
                  src="/logo-lark-official.png"
                  alt="Lark"
                  width={700}
                  height={700}
                  priority
                  unoptimized
                />
                <strong>Lark</strong>
                <span>SFL DESIGN &amp; ADOPTION</span>
              </div>
              <span className="map-node map-node-1">DX社員</span>
              <span className="map-node map-node-2">教育</span>
              <span className="map-node map-node-3">サポート</span>
              <span className="map-node map-node-4">伴走</span>
            </div>
          </div>
          <HeroTicker />
        </section>

        <div className="sfl-workflow-section"><div className="shell"><WorkflowExample id="lark-workflow-example" kind="lark" /></div></div>

        <SectionAccordion id="lark-platform" title="Larkでできること" description="情報共有と業務をつなぐ機能、活用例、関連情報。" label="01 / PLATFORM">
        <section className="lark-intro lark-section">
          <div className="shell">
            <div className="lark-section-heading">
              <p className="section-label">01 / PLATFORM</p>
              <div className="lark-heading-brand">
                <Image
                  src="/logo-lark-official.png"
                  alt="Lark"
                  width={700}
                  height={700}
                  unoptimized
                />
                <h2>
                  Lark導入で、情報共有と業務を
                  <br />
                  ひとつの流れへ。
                </h2>
              </div>
              <p>
                Larkは、仕事に必要なコミュニケーションと共同作業を統合するプラットフォーム。
                SFLはチャット、会議、文書作成のDocs、業務データベースのBaseを組み合わせ、
                現場の仕事が迷わず進む設計と教育を大切にします。
              </p>
            </div>

            <div className="lark-function-grid">
              {larkFunctions.map((item, index) => (
                <article key={item.name}>
                  <span>0{index + 1}</span>
                  <small>{item.name}</small>
                  <h3>{item.jp}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <div className="lark-resource-links" aria-label="Lark関連情報">
              <a
                className="lark-official-link"
                href="https://sfl-lark-guide.lucia20200524.chatgpt.site/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Larkとは？ 基礎ガイドを見る
                <span aria-hidden="true">↗</span>
              </a>
              <a
                className="lark-official-link"
                href="https://www.larksuite.com/ja_jp/product/overview"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lark公式の製品概要を見る
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <LarkSupportNote />
            <p className="lark-independent-note">LarkロゴはLark Technologies Pte. Ltd.の商標です。</p>
          </div>
        </section>
        </SectionAccordion>

        <SectionAccordion id="lark-course" title="法人向けLark研修｜リスキリング" description="自社業務の改善に活かすLark研修。研修内容・受講条件は専用ページからも確認できます。" label="02 / TRAINING">
        <section className="lark-course lark-section" id="course">
          <div className="shell lark-course-grid">
            <div>
              <p className="section-label">02 / LARK LEARNING</p>
              <h2>
                DX社員を育てる、
                <br />
                法人向けLark・DX研修。
              </h2>
              <p>
                法人向けリスキリングのLark研修では、自社の業務を整理し、Baseを設計・改善できる社員を育成します。
                個人向け講座は別プランとして明確に分け、目的と契約主体に合う学びをご案内します。
                60分無料相談から、事前ヒアリングで内容を調整する3時間×5コマの実務研修、研修後1か月の無料伴走まで一貫して支援します。
              </p>
              <LarkTrainingLink />
              <div className="course-spec-grid">
                <div>
                  <span>対象</span>
                  <strong>中小企業</strong>
                  <small>DX社員を育てたい法人</small>
                </div>
                <div>
                  <span>学習時間</span>
                  <strong>15時間</strong>
                  <small>3時間×5コマ</small>
                </div>
                <div>
                  <span>講師</span>
                  <strong>Kazu先生</strong>
                  <small><mark className="sfl-marker">Lark Japan認定</mark></small>
                </div>
                <div>
                  <span>教材</span>
                  <strong>26本</strong>
                  <small>学習動画</small>
                </div>
              </div>
            </div>

            <div className="course-stage-grid">
              {courseStages.map(([number, title, text]) => (
                <article key={number}>
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="shell course-pricing-block">
            <div className="course-pricing-heading">
              <span>COURSE &amp; PRICE</span>
              <h3>受講プラン</h3>
              <p>法人はDX社員育成研修、個人は実務スキル講座として分けてご案内します。</p>
            </div>
            <div className="course-pricing-grid" aria-label="法人向けLark・DX研修とSFL Lark導入講座の料金">
              <article id="individual-course">
                <span>PERSONAL / 2期生：2026年11月募集予定</span>
                <h3>SFL Lark導入講座</h3>
                <strong>10時間</strong>
                <p>
                  <small>¥</small>
                  180,000
                  <em>税別</em>
                </p>
                <small className="course-next-price">
                  2期以降の料金 ／ 0期生終了・1期生進行中・次回2期生募集
                </small>
                <a
                  className="course-price-link"
                  href="https://dandeproject.com/lark/sfl/lp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  個人講座の詳細を見る
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
              <article id="corporate-course">
                <span>CORPORATE / 1名あたりの料金・1回最大5名</span>
                <h3>DX社員育成研修（法人）</h3>
                <strong>3時間×5コマ／計15時間</strong>
                <p>
                  <small>¥</small>
                  360,000
                  <em>税別</em>
                </p>
              </article>
            </div>
            <p className="course-standard-note">
              ※法人向け研修は、人材開発支援助成金（事業展開等リスキリング支援コース）の活用もご相談いただけます。
              助成金の受給を保証するものではありません。法人研修終了後は、Lark FLOW ONE（月2回オンライン面談）とSFL Larkサポートデスクを1か月無料で提供します。個人向け講座の受講後にSFL Academyへ加入した方は、会員特典としてサポートデスクをご利用いただけます。加入条件・費用はSFL Academyの案内をご確認ください。
            </p>
            <LearningJourney id="lark-individual-journey" audience="individual" />
          </div>
        </section>
        </SectionAccordion>

        <SectionAccordion id="lark-funding" title="助成金・補助金の活用" description="研修や導入に関する制度の概要と、利用時に確認する条件。" label="03 / FUNDING">
        <section className="funding-support lark-section" id="support-programs">
          <div className="shell">
            <div className="lark-section-heading funding-heading">
              <p className="section-label">03 / IMPLEMENTATION PACKAGES</p>
              <h2>
                DX社員の育成とLark・AI導入を、
                <br />
                制度活用まで
                <br />
                ひとつに。
              </h2>
              <p>
                人材育成には人材開発支援助成金（事業展開等リスキリング支援コース）、賃上げと生産性向上には業務改善助成金、Lark・AIの導入には株式会社UNIQS連携のデジタル化・AI導入補助金2026パッケージ。目的に合う制度の対象要件を確認し、導入後の定着まで伴走します。
              </p>
            </div>

            <div className="funding-grid">
              {supportPrograms.map((program, index) => (
                <article
                  id={
                    program.code === "DIGITAL & AI"
                      ? "digital-ai-subsidy"
                      : program.code === "WAGE & PRODUCTIVITY"
                        ? "business-improvement-grant"
                        : undefined
                  }
                  className={`funding-card ${
                    program.code === "DIGITAL & AI" ? "funding-card-featured" : ""
                  } ${
                    program.code === "WAGE & PRODUCTIVITY" ? "funding-card-business" : ""
                  }`}
                  key={program.code}
                >
                  <div className="funding-card-top">
                    <span>0{index + 1}</span>
                    <small>{program.code}</small>
                  </div>
                  {program.code === "DIGITAL & AI" ? (
                    <strong className="funding-recommended-badge">SFL RECOMMENDED</strong>
                  ) : null}
                  <h3>{program.title}</h3>
                  <p className="funding-subtitle">{program.subtitle}</p>
                  <p className="funding-text">{program.text}</p>
                  {"highlights" in program && program.highlights ? (
                    <div className="grant-highlight-grid" aria-label="令和8年度業務改善助成金の概要">
                      {program.highlights.map((item) => (
                        <div key={item.label}>
                          <span>{item.label}</span>
                          <strong>{item.value}</strong>
                          <small>{item.note}</small>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  {"packages" in program && program.packages ? (
                    <>
                      <div className="education-package-grid">
                        {program.packages.map((item) => (
                          <div className="education-package" key={item.label}>
                            <span>{item.label}</span>
                            <div className="education-package-price">
                              <strong>{item.hours}</strong>
                              <p>
                                <small>¥</small>
                                {item.price}
                                <em>税別</em>
                              </p>
                            </div>
                            <h4>{item.content}</h4>
                          </div>
                        ))}
                      </div>
                      <div className="self-pay-estimate">
                        <div className="self-pay-estimate-heading">
                          <span>ESTIMATED COST / PERSON</span>
                          <strong>1人あたりの研修費負担目安</strong>
                        </div>
                        <div className="self-pay-estimate-grid">
                          <div>
                            <span>3時間×5コマ・計15時間研修</span>
                            <strong>
                              90,000円<small>／人・税抜ベース</small>
                            </strong>
                            <p>受講料36万円 − 経費助成27万円</p>
                          </div>
                          <div className="self-pay-wage-support">
                            <span>別途、賃金助成見込</span>
                            <strong>15,000円<small>／人</small></strong>
                            <p>1時間1,000円 × 対象15時間。研修中に支払う給与への助成です。</p>
                          </div>
                        </div>
                        <p className="self-pay-estimate-note">
                          ※中小企業・対面または同時双方向型オンライン研修で経費助成率75％が適用される場合の概算です。賃金助成は全15時間が所定労働時間内で対象となる場合に別途支給されます。消費税・実際の給与・申請費用等は含みません。対象要件・支給限度額などにより金額は異なり、受給を保証するものではありません。
                        </p>
                        <p className="self-pay-estimate-note">2026年9月7日確認（厚生労働省・2026年8月3日版）。<Link href="/reskilling-subsidy-simulator">研修形態ごとの条件と根拠資料を見る →</Link></p>
                      </div>
                    </>
                  ) : null}
                  {"solutions" in program && program.solutions ? (
                    <div className="subsidy-solution-grid">
                      {program.solutions.map((item) => (
                        <div className="subsidy-solution" key={item.name}>
                          <span>{item.label}</span>
                          <strong>{item.name}</strong>
                          <p className="subsidy-solution-price">
                            <span>¥</span>
                            {item.price}
                            <em>税別</em>
                          </p>
                          <small>{item.text}</small>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  <ul>
                    {program.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <a href={program.href} target="_blank" rel="noopener noreferrer">
                    {program.linkLabel}
                    <span aria-hidden="true">↗</span>
                  </a>
                  {"partnerHref" in program && program.partnerHref ? (
                    <a href={program.partnerHref} target="_blank" rel="noopener noreferrer">
                      {program.partnerLinkLabel}
                      <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                </article>
              ))}
            </div>

            <aside className="funding-disclaimer">
              <strong>制度活用について</strong>
              <p>
                最終確認：2026年9月7日。助成金・補助金は、企業、研修内容、導入ツール、
                公募時期などにより対象要件が異なります。SFLは導入目的・業務内容・研修計画を整理しますが、
                対象可否、支給・採択は各制度の審査機関が個別に判断します。受給・採択を保証するものではありません。
                申請手続きは、必要に応じて社会保険労務士などの専門家や支援機関と連携します。
              </p>
            </aside>
          </div>
        </section>
        </SectionAccordion>

        <SectionAccordion id="lark-support" title="導入後のサポート・伴走支援" description="LarkサポートデスクとLark FLOW ONEの支援内容。" label="04 / SUPPORT">
        <section className="continuity-support lark-section">
          <div className="shell">
            <div className="lark-section-heading">
              <p className="section-label">04 / AFTERCARE PACKAGE</p>
              <h2>
                Lark導入後の
                <br />
                サポート・伴走支援
              </h2>
              <p>
                法人研修の終了後は、Lark FLOW ONEの月2回オンライン面談とSFL Larkサポートデスクを1か月無料で提供。無料期間終了後も、通常の月額プランで継続できます。
              </p>
            </div>
            <div className="continuity-support-grid continuity-support-grid-two">
              {continuitySupport.map((service) => (
                <article key={service.code}>
                  <span>{service.code}</span>
                  <h3>{service.title}</h3>
                  <strong>{service.price}</strong>
                  <p>{service.text}</p>
                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <a
                    href={service.href}
                    target={service.external ? "_blank" : undefined}
                    rel={service.external ? "noopener noreferrer" : undefined}
                  >
                    {service.action}
                    <span aria-hidden="true">{service.external ? "↗" : "→"}</span>
                  </a>
                </article>
              ))}
            </div>
            <aside className="continuity-related-card">
              <div>
                <span>{relatedSupport.code}</span>
                <h3>{relatedSupport.title}</h3>
              </div>
              <p>{relatedSupport.text}</p>
              <ConsultationLink />
            </aside>
          </div>
        </section>
        </SectionAccordion>

        <section id="lark-flow-accordion" className="lark-flow lark-section">
          <div className="shell">
            <div className="lark-section-heading">
              <p className="section-label">05 / PROCESS</p>
              <h2>
                ご相談から研修、
                <br />
                研修後1か月の伴走まで。
              </h2>
            </div>

            <p className="consultation-reference">無料相談から直接お見積もりへ進むことも、有料の業務整理だけを利用することもできます。進め方と料金は、<Link href="/contact#contact-flow-title">相談ページ</Link>でご確認ください。</p>
            <LearningJourney id="lark-corporate-journey" audience="corporate" showHeading={false} />
          </div>
        </section>

        <section className="lark-faq lark-section" id="faq">
          <div className="shell lark-faq-shell">
            <div className="lark-section-heading">
              <p className="section-label">06 / FAQ</p>
              <h2>DX社員育成・Lark導入・制度活用のよくあるご質問</h2>
            </div>
            <div className="lark-faq-list">
              {faq.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="lark-final-cta">
          <div className="shell lark-final-cta-inner">
            <p>LARK × LEARNING × SUPPORT PROGRAMS</p>
            <h2>
              自社でDXを進める社員を、
              <br />
              一緒に育てませんか。
            </h2>
            <span>
              60分無料相談で、改善したい業務と身につけたいスキルを確認します。
              事前ヒアリングで内容を調整する3時間×5コマの実務研修と、研修後1か月の無料伴走まで一貫して支援します。
            </span>
            <ConsultationLink />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
