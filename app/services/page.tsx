import { SectionAccordion } from "../components/SectionAccordion";
import type { Metadata } from "next";
import { SFL_BUSINESSES } from "../businesses";
import { SFL_AI_COURSE_URL, SFL_PROCUREMENT_COURSE_URL } from "../courses";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CourseCatalog } from "../components/CourseCatalog";
import { LarkProductMark, LarkSupportNote } from "../components/LarkBrand";
import { ConsultationLink } from "../components/ConsultationLink";
import { LarkTrainingLink } from "../components/LarkTrainingLink";
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

const pageTitle = "事業・サービス｜Lark・AI・官公庁入札｜合同会社SFL";
const pageDescription =
  "合同会社SFLのLark・AI・官公庁入札の3事業をご紹介。Larkを軸に業務改善・構築・教育・伴走支援を提供し、現場の業務整理から運用の定着まで支援します。";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: [
    "合同会社SFL サービス",
    "Lark DX AI支援サービス",
    "Lark法人研修",
    "法人向けDX研修",
    "法人向け生成AI研修",
    "中小企業 業務改善",
    "DX社員 研修",
    "DX社員 育成",
    "中小企業 DX教育",
    "Lark伴走支援",
    "Larkが使えるオンライン秘書",
    "美容サロンDX",
    "Lark AI連携",
    "SFL Academy",
    "Webアプリ制作研修",
    "官公庁入札研修",
  ],
  alternates: {
    canonical: "/services",
  },
  ...pageSocialMetadata(pageTitle, pageDescription, "/services"),
};

const larkServiceIds = new Set([
  "subsidy-package", "cycle-pro", "lark-education", "lark-intro-course", "support-desk",
  "lark-flow-one", "online-secretary", "ai-setup",
]);

const serviceDetails = [
  {
    number: "workflow",
    id: "workflow-review",
    name: "WORKFLOW REVIEW",
    jp: "フロー【業務整理】",
    lead: "ヒアリングをもとに、現在の業務フローを可視化。",
    description:
      "オンライン面談または訪問でお話を伺い、担当者・使用ツール・作業の順番や受け渡しをフロー図にまとめます。お客様と現在の業務を確認したうえで、AI・DX活用の方向性もアドバイス。作成したフロー図等をお渡しし、業務整理だけのご利用も歓迎します。有料の業務整理は必須ではなく、無料相談から直接お見積もりへ進むこともできます。",
    deliverables: ["個人事業主・フリーランス 3時間40,000円（税別）", "法人 5時間70,000円（税別）", "業務フローの整理", "AI・DX活用のアドバイス", "作成したフロー図等のお渡し"],
    audience: "個人事業主・フリーランス、法人",
    href: "/contact#contact-flow-title",
    action: "相談の流れ・料金を見る",
    external: false,
  },
  {
    number: "01",
    id: "subsidy-package",
    name: "UNIQS PARTNERSHIP PACKAGE",
    jp: "デジタル化・AI導入補助金2026を見据えたDX導入パッケージ",
    lead: "Lark・AIの導入と、補助金の活用を一緒に検討。",
    description:
      "株式会社UNIQSと連携し、「Lark業務改善パッケージ」2,300,000円（税別）と「DX ONE」2,600,000円（税別）をご案内します。デジタル化・AI導入補助金2026（旧IT導入補助金）の公募要領に沿って対象となる条件を確認し、導入目的、業務改善計画、運用定着までを支援します。補助対象となることや採択を保証するものではありません。",
    deliverables: ["Lark業務改善パッケージ 2,300,000円（税別）", "DX ONE 2,600,000円（税別）", "対象要件を事前に確認", "Lark構築・運用計画"],
    audience: "補助金を活用してLark・DXを進めたい中小企業",
    href: "/lark-dx#support-programs",
    action: "補助金パッケージの詳細",
    external: false,
  },
  {
    number: "02",
    id: "business-improvement-grant",
    name: "BUSINESS IMPROVEMENT GRANT",
    jp: "業務改善助成金の活用に向けた業務整理・DX支援",
    lead: "賃上げと生産性向上を、ひとつの計画に。",
    description:
      "令和8年度の業務改善助成金は、事業場内最低賃金を50円以上引き上げ、生産性向上に資する設備投資等を行う中小企業・小規模事業者向けの制度です。SFLは業務の現状と導入目的を整理し、顧客管理のシステム化や設備投資等について、対象要件を事前に確認します。対象可否と支給は審査機関が個別に判断します。",
    deliverables: ["50円・70円・90円以上の賃金引上げ", "助成率 4分の3または5分の4", "助成上限 最大600万円（特例要件あり）", "申請期限は地域別最低賃金の発効日等で異なります"],
    audience: "賃上げと設備・システム導入を同時に進めたい中小企業・小規模事業者",
    href: "/lark-dx#business-improvement-grant",
    action: "業務改善助成金の詳細",
    external: false,
  },
  {
    number: "03",
    id: "cycle-pro",
    name: "CYCLE PRO",
    jp: "美容サロンDXシステム「Cycle Pro」",
    lead: "美容現場には、専用のCycle Proを。",
    description:
      "Cycle Proは、Eyelash Salon Luciaでの実店舗運用を通じて得た知見を反映した、美容サロン向けのLark業務改善システムです。顧客情報、電子カルテ、同意書、売上、再来率、教育資料を一元化し、現場が迷わず動ける運用をつくります。",
    deliverables: ["顧客・電子カルテ管理", "電子同意書・LINE導線", "売上・再来率の可視化", "教育・運用定着"],
    audience: "まつげ・眉毛・ネイル・エステなどの美容サロン",
    href: "/case-study#lucia-case",
    action: "アイラッシュサロン導入事例を見る",
    external: false,
  },
  {
    number: "04",
    id: "lark-education",
    name: "CORPORATE DX TRAINING",
    jp: "DX社員育成｜法人向けLark・生成AI研修",
    lead: "法人向けリスキリングで、Lark・生成AIを業務改善に活かす社員を育てる。",
    description:
      "Lark・Baseを使うDX実務研修と、ChatGPT・Codexを使う生成AI・Webアプリ研修をご用意。それぞれ別の研修として、事前ヒアリングをもとに自社業務に合わせた内容へ調整します。研修後はLark FLOW ONEとSFL Larkサポートデスクを1か月無料で提供。Lark Japanの認定は、Lark領域を担当するKazu先生個人に付与されたものです。",
    deliverables: ["60分無料相談", "各研修3時間×5コマ（計15時間）", "事前ヒアリングで内容調整", "各研修1名あたり360,000円（税別）", "1回最大5名", "研修後1か月無料伴走"],
    audience: "DX社員を育てたい中小企業／DX推進担当者／現場リーダー",
    href: "/lark-dx#course",
    action: "法人向けLark・DX研修の詳細",
    external: false,
  },
  {
    number: "lark-intro-course",
    id: "lark-intro-course",
    name: "SFL LARK COURSE",
    jp: "SFL Lark導入講座",
    lead: "基本操作からBase構築まで。Larkを仕事で使える力に。",
    description:
      "Larkの基本操作からBaseの設計・構築まで、実務で使うためのスキルを学ぶ10時間の個人向け講座です。法人向け研修とは別のサービスとして、ご本人のスキル習得や仕事での活用を支援します。0期生は終了し、現在は1期生が進行中です。次回は2期生を2026年11月に募集予定です。",
    deliverables: ["10時間の実務講座", "2期以降 180,000円（税別）", "0期生終了・1期生進行中・次回2期生募集", "基本操作・Base設計・構築"],
    audience: "Larkを実務に活かしたい個人・フリーランス／スキルを身につけたい方",
    href: "/lark-dx#individual-course",
    action: "SFL Lark導入講座の内容・料金を見る",
    external: false,
  },
  {
    number: "05",
    id: "support-desk",
    name: "SFL LARK SUPPORT DESK",
    jp: "SFL Larkサポートデスク",
    lead: "Larkが気になる。その段階から相談できます。",
    description:
      "SFLの研修を受けていない方も月額で利用できる、合同会社SFL独自のLark質問・相談サービスです。法人研修の受講企業には、研修終了後のLark FLOW ONE伴走期間中1か月間、無料で提供します。Lark公式ヘルプデスクではありません。",
    deliverables: ["法人研修後1か月間は無料", "いつでも質問を送信可能", "通常は月額980円（税込）", "SFL独自サービス"],
    audience: "Larkを試したい方／学び始めたい個人・企業",
    href: "https://sfl-lark-supportdesk.lucia20200524.chatgpt.site/",
    action: "サポートデスクの詳細",
    external: true,
  },
  {
    number: "06",
    id: "lark-flow-one",
    name: "Lark FLOW ONE",
    jp: "Lark FLOW ONE｜導入後の伴走支援",
    lead: "導入後の改善を、相談できるチームと続ける。",
    description:
      "法人研修の終了後、月2回のオンライン面談を含む伴走支援を1か月無料で提供します。導入直後の悩み、運用改善、追加設計を一緒に整理。無料期間終了後も、必要な支援量に合わせて通常プランを継続できます。",
    deliverables: ["法人研修後1か月間は月2回面談プランを無料", "月額5万円（税別）｜定例0回", "月額10万円（税別）｜月2回", "月額20万円（税別）｜月4回"],
    audience: "Lark導入後も継続的に業務改善を進めたい企業",
    href: "/contact",
    action: "60分無料相談を申し込む",
    external: false,
  },
  {
    number: "07",
    id: "online-secretary",
    name: "LARK ONLINE SECRETARY",
    jp: "Larkが使えるオンライン秘書（株式会社KAIEI連携）",
    lead: "Larkが使える秘書が、改善と日々の実務をつなぐ。",
    description:
      "株式会社KAIEIと連携し、Larkを使える複数名のオンライン秘書をご用意しています。日々の業務を支援しながら、課題に応じてSFLの構築・教育・AI・Webの専門スタッフへつなぐ窓口を担います。",
    deliverables: ["Larkを使った実務支援", "複数名の秘書体制", "業務改善のサポート", "専門スタッフへの連携"],
    audience: "実務を任せながら業務改善も進めたい企業・事業者",
    href: "/contact",
    action: "60分無料相談を申し込む",
    external: false,
  },
  {
    number: "08",
    id: "web-line",
    name: "WEB & CUSTOMER JOURNEY",
    jp: "ホームページ・LP・公式LINE構築",
    lead: "WebからLINEまで、顧客との接点を整える。",
    description:
      "Webデザイナーとエンジニアが、ホームページ・LP・公式LINEの導線を設計。UTAGEやプロラインを含め、集客・案内・顧客対応がつながる状態を構築します。",
    deliverables: ["ホームページ・LP", "公式LINE設計", "UTAGE構築", "プロライン構築"],
    audience: "Web集客と顧客対応の導線を見直したい企業・店舗",
    href: "/contact",
    action: "60分無料相談を申し込む",
    external: false,
  },
  {
    number: "09",
    id: "ai-setup",
    name: "AI SETUP",
    jp: "Claude Code・Codex×Lark連携 初期設定支援",
    lead: "研修とは別に、まず動く環境を整える。",
    description:
      "Claude Code・Codex・Lark-CLI・Lark Channel Bridgeの導入と認証を原則2時間で支援。99,000円（税込）で、ターミナルの基本操作と3か月のアフターサポートを含みます。",
    deliverables: ["2時間のセットアップ", "99,000円（税込）", "Lark×AIの接続", "3か月アフターサポート"],
    audience: "LarkからAIを使う初期環境を整えたい方",
    href: "/ai-setup",
    action: "AI初期設定支援を見る",
    external: false,
  },
  {
    number: "10",
    id: "learning-academy",
    name: "SFL LEARNING & ACADEMY",
    jp: "実務講座とSFL Academy",
    lead: "目的別に学び、受講後も成長を続ける。",
    description:
      "SFL AI導入講座は、2026年10月開始の、AI・プログラミング初心者向けオンライン講座です。体験編4時間ではChatGPTで保存なしWebアプリを制作・共有し、希望者は仕事編6時間でCodexを使った保存機能の実装と公開を学びます。体験編のみの参加も可能です。SFL 官公庁入札講座も2026年10月開始です。専用ページで講座内容・受講方法をご案内しています。SFL Lark導入講座を含む講座の受講後にSFL Academyへ加入すると、各講座のアーカイブを使って学習を続けられます。",
    deliverables: ["SFL AI導入講座", "体験編4時間｜ChatGPT", "仕事編6時間｜Codex・希望者のみ", "SFL 官公庁入札講座｜専用ページでご案内", "SFL Academy｜講座受講者向け"],
    audience: "Lark・AI・入札の実務力を段階的に身につけたい方",
    href: "https://sfl-lark-graduate-community.lucia20200524.chatgpt.site/#join",
    action: "SFL Academyを見る",
    external: true,
  },
];

const serviceOrder = ["workflow-review", "lark-education", "lark-intro-course", "learning-academy", "cycle-pro", "subsidy-package", "business-improvement-grant", "web-line", "ai-setup", "support-desk", "lark-flow-one", "online-secretary"];
serviceDetails.sort((a, b) => serviceOrder.indexOf(a.id) - serviceOrder.indexOf(b.id));

const serviceCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "合同会社SFL サービス一覧",
  numberOfItems: serviceDetails.length,
  description:
    "業務整理、Lark・生成AIの法人研修、個人向け講座、システム構築、運用サポートなど、12サービスの一覧です。SFL 官公庁入札講座の専用案内ページも掲載しています。",
  itemListElement: serviceDetails.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.jp,
      alternateName: service.name,
      description: service.description,
      provider: organizationReference,
      areaServed: "JP",
      "@id": `${SITE_URL}/services#${service.id}`,
      url: `${SITE_URL}/services#${service.id}`,
    },
  })),
};

const breadcrumbs = breadcrumbSchema([
  { name: "ホーム", path: "/" },
  { name: "サービス一覧", path: "/services" },
]);

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="corporate-services-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([serviceCatalogSchema, breadcrumbs]),
          }}
        />
        <Breadcrumbs items={[{ label: "ホーム", href: "/" }, { label: "事業・サービス一覧" }]} />
        <PageHero
          index="01"
          eyebrow="SERVICES"
          title="3つの事業と、SFLのサービス。"
          description="Lark・AIによる研修・業務システム構築・運用支援を提供しています。官公庁入札事業は、開始に向けて準備を進めています。"
        />

        <SectionAccordion id="services-business" title="SFLの3つの事業" description="Lark・AI・官公庁入札の事業内容と、関連サービス。" label="OUR BUSINESS">
        <section className="service-overview" aria-labelledby="service-overview-title">
          <div className="shell">
            <div className="service-overview-heading">
              <p className="section-label">OUR 3 BUSINESSES</p>
              <h2 id="service-overview-title">
                SFLの3つの事業
              </h2>
              <p>
                事業ごとの取り組みと、関連するサービスをご紹介します。
              </p>
            </div>
            <div className="service-overview-grid">
              {SFL_BUSINESSES.map((group) => (
                <a href={group.href} key={group.number} target={group.external ? "_blank" : undefined} rel={group.external ? "noopener noreferrer" : undefined}>
                  <span>{group.number}</span>
                  <h3>{group.name}</h3>
                  <p>{group.description}</p>
                  <small>
                    {group.action}
                    <i aria-hidden="true">{group.external ? "↗" : "→"}</i>
                  </small>
                </a>
              ))}
            </div>
            <LarkSupportNote />
          </div>
        </section>
        </SectionAccordion>

        <SectionAccordion id="services-courses" title="講座・研修一覧" description="個人向け講座と法人向け研修、5つのメニュー。" label="COURSES & TRAINING">
        <section className="course-catalog-section" id="courses" aria-labelledby="service-courses-title">
          <div className="shell">
            <CourseCatalog titleId="service-courses-title" />
          </div>
        </section>
        </SectionAccordion>

        <section className="service-detail-list section-light">
          <div className="shell">
            <div className="service-catalog-heading">
              <p className="section-label">SERVICE MENU</p>
              <h2>ご相談いただける{serviceDetails.length}のサービス</h2>
              <p>業務整理・研修・システム構築・運用支援を、目的に合わせてお選びいただけます。</p>
            </div>
            {serviceDetails.map((service, index) => (
              <SectionAccordion compact id={`service-${service.id}`} key={service.id} label={String(index + 1).padStart(2, "0")} title={service.jp} description={service.lead}>
              <article className={`service-detail${service.id === "lark-intro-course" ? " service-detail-enrollment" : ""}`} id={service.id} key={service.number}>
                <div className="service-detail-index">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{service.name}</p>
                </div>
                <div className="service-detail-main">
                  {larkServiceIds.has(service.id) ? <div className="service-tool-mark"><span>活用ツール</span><LarkProductMark /></div> : null}
                  {service.id === "lark-intro-course" ? <p className="service-enrollment-badge">2期生｜2026年11月募集予定</p> : null}
                  <h2 className="service-detail-jp">{service.jp}</h2>
                  <h3 className="service-detail-lead">{service.lead}</h3>
                  <p>{service.description}</p>
                  <div className="deliverable-grid">
                    {service.deliverables.map((item) => <span key={item}>{item}</span>)}
                  </div>
                  <div className="service-detail-links">
                  {service.id === "learning-academy" ? (
                    <a className="service-detail-link" href={SFL_AI_COURSE_URL} target="_blank" rel="noopener noreferrer">
                      SFL AI導入講座の詳細を見る
                      <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                  {service.id === "learning-academy" ? (
                    <a className="service-detail-link" href={SFL_PROCUREMENT_COURSE_URL} target="_blank" rel="noopener noreferrer">
                      SFL 官公庁入札講座の案内を見る<span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                  {service.id === "lark-education" ? <LarkTrainingLink /> : <a
                    className="service-detail-link"
                    href={service.href}
                    target={service.external ? "_blank" : undefined}
                    rel={service.external ? "noopener noreferrer" : undefined}
                  >
                    {service.action}
                    <span aria-hidden="true">{service.external ? "↗" : "→"}</span>
                  </a>}
                  {service.id === "lark-education" ? (
                    <a className="service-detail-link" id="ai-training" href="/ai-dx-training">
                      生成AI・Webアプリ研修のカリキュラムを見る
                      <span aria-hidden="true">→</span>
                    </a>
                  ) : null}
                  {service.id === "cycle-pro" ? (
                    <a className="service-detail-link" href={LUSH_CYCLE_PRO_SAMPLE_URL} target="_blank" rel="noopener noreferrer">
                      Lush Cycle Proの見本を見る（別タブ）
                      <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                  </div>
                </div>
                <div className="service-audience">
                  <span>FOR</span>
                  <p>{service.audience}</p>
                </div>
              </article>
              </SectionAccordion>
            ))}
          </div>
        </section>

        <section className="selection-guide section-dark">
          <div className="shell selection-guide-inner">
            <div>
              <p className="section-label">NOT SURE WHERE TO START?</p>
              <h2>
                サービス名を決めてから
                <br />
                相談する必要はありません。
              </h2>
            </div>
            <div>
              <p>
                「情報共有がうまくいかない」「紙や表計算を減らしたい」「AIを使いたいが進め方が分からない」。
                いま困っていることから、Lark導入・DX・AI活用に必要な支援を整理します。
              </p>
              <ConsultationLink className="button button-inverse" />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
