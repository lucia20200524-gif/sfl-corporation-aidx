import type { Metadata } from "next";
import { AnalyticsEvents } from "./components/AnalyticsEvents";
import { AccordionNavigation } from "./components/AccordionNavigation";
import { AnalyticsTags } from "./components/AnalyticsTags";
import { homeEntryScript } from "./home-entry-script";
import { HOME_TITLE, HOME_DESCRIPTION, SITE_URL, pageSocialMetadata, organizationSchema } from "./seo";
import "./globals.css";
import "./site-refresh.css";
import "./accordions.css";

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "合同会社SFL",
  title: {
    default: HOME_TITLE,
    template: "%s｜合同会社SFL",
  },
  description: HOME_DESCRIPTION,
  keywords: [
    "合同会社SFL",
    "Lark法人研修",
    "AI研修 法人",
    "DX社員 研修",
    "DX社員 育成",
    "中小企業 DX教育",
    "中小企業 社員研修",
    "人材開発支援助成金",
    "事業展開等リスキリング支援コース",
    "リスキリング研修",
    "法人向けリスキリング",
    "SFL Lark導入講座",
    "Lark導入支援",
    "Lark Base構築",
    "中小企業 DX支援",
    "神戸 DX研修",
    "全国オンライン研修",
  ],
  ...pageSocialMetadata(HOME_TITLE, HOME_DESCRIPTION, "/"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: googleSiteVerification ? { google: googleSiteVerification } : undefined,
  other: {
    "geo.region": "JP-28",
    "geo.placename": "神戸市",
  },
  icons: {
    icon: [
      { url: "/sfl-logo-20260907.jpg", type: "image/jpeg", sizes: "1080x1080" },
    ],
    shortcut: "/sfl-logo-20260907.jpg",
    apple: "/sfl-logo-20260907.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <script id="sfl-home-entry" dangerouslySetInnerHTML={{ __html: homeEntryScript }} />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <AnalyticsTags />
        <AnalyticsEvents />
        <AccordionNavigation />
        {children}
      </body>
    </html>
  );
}
