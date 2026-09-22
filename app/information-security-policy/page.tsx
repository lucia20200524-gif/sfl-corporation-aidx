import type { Metadata } from "next";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import {
  organizationReference,
  SITE_URL,
  breadcrumbSchema,
  pageSocialMetadata,
} from "../seo";

const pageTitle = "情報セキュリティ基本方針";
const pageDescription =
  "合同会社SFLの情報セキュリティ基本方針です。お客様からお預かりした情報資産および当社の情報資産を守るための取り組みを公開しています。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/information-security-policy",
  },
  keywords: [
    "合同会社SFL 情報セキュリティ基本方針",
    "合同会社SFL 情報セキュリティ",
    "情報セキュリティ基本方針",
  ],
  ...pageSocialMetadata(
    pageTitle,
    pageDescription,
    "/information-security-policy",
  ),
};

const breadcrumbs = breadcrumbSchema([
  { name: "ホーム", path: "/" },
  { name: "会社概要", path: "/company" },
  {
    name: "情報セキュリティ基本方針",
    path: "/information-security-policy",
  },
]);

const securityPolicySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "合同会社SFL 情報セキュリティ基本方針",
  description: pageDescription,
  url: `${SITE_URL}/information-security-policy`,
  inLanguage: "ja-JP",
  about: organizationReference,
};

const policyItems = [
  {
    title: "1.経営者の責任",
    text: "当社は、経営者主導で組織的かつ継続的に情報セキュリティの改善・向上に努めます。",
  },
  {
    title: "2.社内体制の整備",
    text: "当社は、情報セキュリティの維持及び改善のために組織を設置し、情報セキュリティ対策を社内の正式な規則として定めます。",
  },
  {
    title: "3.従業員の取組み",
    text: "当社の従業員は、情報セキュリティのために必要とされる知識、技術を習得し、情報セキュリティへの取り組みを確かなものにします。",
  },
  {
    title: "4.法令及び契約上の要求事項の遵守",
    text: "当社は、情報セキュリティに関わる法令、規制、規範、契約上の義務を遵守するとともに、お客様の期待に応えます。",
  },
  {
    title: "5.違反及び事故への対応",
    text: "当社は、情報セキュリティに関わる法令違反、契約違反及び事故が発生した場合には適切に対処し、再発防止に努めます。",
  },
];

export default function InformationSecurityPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([securityPolicySchema, breadcrumbs]),
          }}
        />

        <Breadcrumbs items={[{ label: "ホーム", href: "/" }, { label: "会社・支援体制", href: "/company" }, { label: "情報セキュリティ基本方針" }]} />
        <PageHero
          index="06"
          eyebrow="INFORMATION SECURITY POLICY"
          title="情報セキュリティ基本方針"
          description="合同会社SFLが、情報資産を守り、お客様ならびに社会の信頼に応えるために定めた基本方針です。"
        />

        <section className="policy-page section-light">
          <div className="shell">
            <article className="policy-document">
              <p className="policy-reference">
                中小企業の情報セキュリティ対策ガイドライン 付録2
              </p>

              <header className="policy-document-heading">
                <p>情報セキュリティ基本方針</p>
                <h2>情報セキュリティ基本方針</h2>
              </header>

              <p className="policy-introduction">
                合同会社SFL（以下、当社）は、お客様からお預かりした情報資産および当社の情報資産を事故・災害・犯罪などの脅威から守り、お客様ならびに社会の信頼に応えるべく、以下の方針に基づき全社で情報セキュリティに取り組みます。
              </p>

              <div className="policy-items">
                {policyItems.map((item) => (
                  <section key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </section>
                ))}
              </div>

              <div className="policy-signature">
                <p>制定日:2026年8月14日</p>
                <p>合同会社SFL</p>
                <p>代表社員　大城 未緒</p>
              </div>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
