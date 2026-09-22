import { SectionAccordion } from "../components/SectionAccordion";
import type { Metadata } from "next";
import Link from "next/link";
import { SFL_BUSINESSES } from "../businesses";
import { LarkSupportNote } from "../components/LarkBrand";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ConsultationLink } from "../components/ConsultationLink";
import { PageHero } from "../components/PageHero";
import { PartnerCompanies } from "../components/PartnerCompanies";
import { PeopleAndProof } from "../components/PeopleAndProof";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import {
  organizationReference,
  SITE_URL,
  breadcrumbSchema,
  pageSocialMetadata,
} from "../seo";

const pageTitle = "会社案内・会社概要";
const pageDescription =
  "合同会社SFLの会社概要、代表社員・大城未緒、支援体制、実績をご紹介。Lark・AIの業務支援に加え、官公庁入札事業の開始を準備しています。所在地・法人番号も掲載しています。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/company",
  },
  keywords: [
    "合同会社SFL",
    "合同会社SFL 会社概要",
    "神戸市中央区 DX支援会社",
    "神戸 Lark導入支援会社",
    "合同会社SFL メンバー",
    "合同会社SFL 実績",
    "大城未緒",
    "SFL Academy",
    "官公庁入札研修",
  ],
  ...pageSocialMetadata(pageTitle, pageDescription, "/company"),
};

const companyRows = [
  ["商号", "合同会社SFL"],
  ["代表社員", "大城 未緒"],
  [
    "所在地",
    "〒651-0084 兵庫県神戸市中央区磯辺通1丁目1番18号 カサベラ国際プラザビル707号室",
  ],
  ["法人番号", "8140003023662"],
  ["取引銀行", "三井住友銀行"],
  [
    "事業内容",
    SFL_BUSINESSES.map((business) => `${business.name}｜${business.summary}`).join("／"),
  ],
];

const breadcrumbs = breadcrumbSchema([
  { name: "ホーム", path: "/" },
  { name: "会社概要", path: "/company" },
]);

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "合同会社SFL 会社概要・事業内容",
  description: pageDescription,
  url: `${SITE_URL}/company`,
  mainEntity: organizationReference,
};

export default function CompanyPage() {
  return (
    <>
      <SiteHeader />
      <main className="corporate-company-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([aboutPageSchema, breadcrumbs]),
          }}
        />
        <Breadcrumbs items={[{ label: "ホーム", href: "/" }, { label: "会社・支援体制" }]} />
        <PageHero
          index="04"
          eyebrow="ABOUT SFL"
          title="合同会社SFLについて。Lark・AI・官公庁入札。"
          description="神戸市中央区を拠点に、Lark・AIによる業務支援を提供しています。官公庁入札事業の開始に向けて準備しています。"
        />

        <SectionAccordion id="company-info" title="会社概要" description="商号、代表、所在地、事業内容などの基本情報。" label="COMPANY">
        <section className="company-profile section-light" id="company-profile">
          <div className="shell company-profile-grid">
            <div>
              <p className="section-label">COMPANY PROFILE</p>
              <h2>会社概要</h2>
            </div>
            <div className="company-profile-content">
              <dl>
                {companyRows.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{label === "事業内容" ? <ul className="company-business-list">{value.split("／").map((item) => <li key={item}>{item}</li>)}</ul> : value}</dd>
                  </div>
                ))}
              </dl>

              <LarkSupportNote />

              <aside
                className="security-policy-cta"
                aria-labelledby="security-policy-title"
              >
                <div>
                  <p>INFORMATION SECURITY</p>
                  <h3 id="security-policy-title">情報セキュリティ基本方針</h3>
                  <span>
                    情報資産を守り、お客様ならびに社会の信頼に応えるための基本方針を公開しています。
                  </span>
                </div>
                <Link
                  className="button button-primary security-policy-button"
                  href="/information-security-policy"
                >
                  基本方針を見る
                  <span aria-hidden="true">↗</span>
                </Link>
              </aside>
            </div>
          </div>
        </section>
        </SectionAccordion>

        <SectionAccordion id="company-philosophy" title="SFLの考え方" description="現場を知り、人を育て、仕組みを整える支援方針。" label="PHILOSOPHY">
        <section className="philosophy section-light">
          <div className="shell philosophy-grid">
            <p className="section-label">PHILOSOPHY</p>
            <div>
              <h2>
                現場を知り、人を育て、
                <br />
                仕組みを整える。
              </h2>
              <p>
                誰が、どの作業で困っているのか。まずは現場の声を聞き、仕事の流れを整理します。
                使う人への教育と導入後の支援を通じて、日々の業務で活用できる状態を目指します。
              </p>
              <p>
                私たちは現場の業務を一緒に整理し、Lark・AI・Webアプリを情報と仕事の流れへつなぎます。実務講座とSFL Academy、導入後の伴走を通じて、働く人が自ら使い、改善できる状態を目指します。
              </p>
            </div>
          </div>
        </section>
        </SectionAccordion>

        <PeopleAndProof context="company" />

        <SectionAccordion id="company-values" title="大切にしている3つの姿勢" description="SFLが仕事に向き合ううえで大切にすること。" label="VALUES">
        <section className="values section-dark">
          <div className="shell">
            <div className="section-heading section-heading-light">
              <div>
                <p className="section-label">OUR VALUES</p>
                <h2>大切にしている、3つの姿勢。</h2>
              </div>
            </div>
            <div className="values-grid">
              <article>
                <span>01</span>
                <h3>FIELD FIRST</h3>
                <strong>現場から考える</strong>
                <p>実際に働く人の動きと声をもとに、必要な支援を考えます。</p>
              </article>
              <article>
                <span>02</span>
                <h3>MAKE IT VISIBLE</h3>
                <strong>見える状態をつくる</strong>
                <p>担当者の経験や工夫を共有し、仕事の流れや判断の根拠を見える形にします。</p>
              </article>
              <article>
                <span>03</span>
                <h3>GROW TOGETHER</h3>
                <strong>一緒に育てる</strong>
                <p>教育と伴走を通じて、使いながら改善できる関係をつくります。</p>
              </article>
            </div>
          </div>
        </section>
        </SectionAccordion>

        <SectionAccordion id="partners" title="提携企業" description="KAIEI・UNIQSとの連携と、それぞれの役割。" label="PARTNERS"><PartnerCompanies /></SectionAccordion>

        <section className="global-cta compact-cta">
          <div className="shell global-cta-inner">
            <p className="section-label">WORK WITH US</p>
            <h2>現場を変える一歩を、一緒に。</h2>
            <ConsultationLink className="button button-primary" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
