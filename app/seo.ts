import type { Metadata } from "next";

export const SITE_URL =
  "https://sfl-corporation-aidx.lucia20200524.chatgpt.site";
export const HOME_TITLE = "合同会社SFL｜Lark導入・構築・研修・伴走支援";
export const HOME_DESCRIPTION =
  "合同会社SFLは、Larkを軸に業務改善・構築・教育・伴走支援を提供。業務の整理から社員研修、運用の定着まで支援します。Lark・AI・官公庁入札の3事業を展開。神戸を拠点に全国オンライン対応。";
export const OFFICIAL_LINE_URL = "https://lin.ee/NrJGMVt";
export const OFFICIAL_CONTACT_FORM_URL = "https://bjp66vk3my8x.jp.larksuite.com/share/base/form/shrjpRix2tACyaiGsWFkjy98FYk";
export const LUSH_CYCLE_PRO_SAMPLE_URL =
  "https://bjp66vk3my8x.jp.larksuite.com/base/CyUhb47braUdwTsSJ0YjtDFNpjg?from=from_copylink";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function pageSocialMetadata(
  title: string,
  description: string,
  path: string,
): Pick<Metadata, "openGraph" | "twitter"> {
  const fullTitle = title.includes("合同会社SFL") ? title : `${title}｜合同会社SFL`;

  return {
    openGraph: {
      type: "website",
      locale: "ja_JP",
      siteName: "合同会社SFL",
      title: fullTitle,
      description,
      url: path,
      images: [
        {
          url: "/sfl-logo-20260907.jpg",
          width: 1080,
          height: 1080,
          alt: "合同会社SFL SALON FLOW LAB. ロゴ",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description,
      images: ["/sfl-logo-20260907.jpg"],
    },
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

// Shared entity: keep the company identity available on every indexed page.
export const organizationReference = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "合同会社SFL",
  url: `${SITE_URL}/`,
};

export const organizationSchema = {
  "@context": "https://schema.org",
  ...organizationReference,
  legalName: "合同会社SFL",
  alternateName: "SFL",
  logo: { "@type": "ImageObject", url: `${SITE_URL}/sfl-logo-20260907.jpg`, width: 1080, height: 1080 },
  identifier: "8140003023662",
  sameAs: ["https://note.com/sfl_lark_dx_ai", "https://salonflowlab.com/"],
  address: {
    "@type": "PostalAddress",
    addressCountry: "JP",
    addressRegion: "兵庫県",
    addressLocality: "神戸市中央区",
    postalCode: "651-0084",
    streetAddress: "磯辺通1丁目1番18号 カサベラ国際プラザビル707号室",
  },
  areaServed: { "@type": "Country", name: "日本" },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: `${SITE_URL}/contact`,
    areaServed: "JP",
    availableLanguage: "Japanese",
  },
  description: HOME_DESCRIPTION,
};
