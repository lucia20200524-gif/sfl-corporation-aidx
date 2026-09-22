import { SectionAccordion } from "../components/SectionAccordion";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { breadcrumbSchema, pageSocialMetadata } from "../seo";

const pageTitle = "講師紹介｜Kazu先生・Lark法人研修｜合同会社SFL";
const pageDescription =
  "合同会社SFLの統括講師・Kazu先生をご紹介。Lark Japan認定者として、Larkの基本操作、Base設計・構築、社内運用までを指導します。法人研修での担当領域と、実務で使える力を育てる方針を掲載。";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: "/instructors" },
  ...pageSocialMetadata(pageTitle, pageDescription, "/instructors"),
};

const instructor = {
  name: "Kazu先生",
  role: "統括講師／Lark実務教育",
  profile: <><mark className="sfl-marker">Lark Japan認定者</mark>として、Larkの基本操作、Base設計・構築、社内運用までを段階的に指導。法人向け研修の全体設計とLark領域を担当します。</>,
  fields: ["Lark法人研修", "Base設計・構築", "運用定着"],
};

const breadcrumbs = breadcrumbSchema([{ name: "ホーム", path: "/" }, { name: "法人向けDX研修の講師紹介", path: "/instructors" }]);

export default function InstructorsPage() {
  return (
    <>
      <SiteHeader />
      <main className="seo-detail-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
        <Breadcrumbs items={[{ label: "ホーム", href: "/" }, { label: "法人向けDX研修の講師紹介" }]} />
        <PageHero index="04" eyebrow="INSTRUCTORS" title="実務で使う力を育てる、講師・支援体制。" description="統括講師のKazu先生が、Larkの基本操作から社内運用まで段階的に指導します。受講者の習熟度や自社業務に合わせて、研修内容をご提案します。" />
        <SectionAccordion id="instructor-kazu" title="Kazu先生｜統括講師・Lark実務教育" description="プロフィール、担当領域、研修で大切にしていること。" label="INSTRUCTOR">
        <section className="seo-detail-section section-light">
          <div className="shell instructor-profile-grid">
            <article className="instructor-profile-feature" aria-labelledby="kazu-profile-title">
              <figure className="instructor-profile-photo">
                <Image
                  src="/kazu-lark-master-photo.png"
                  alt="Lark Master 2026の会場で撮影された記念写真"
                  width={1122}
                  height={1402}
                  sizes="(max-width: 760px) 100vw, 45vw"
                  unoptimized
                />
                <figcaption><span>LARK MASTER 2026</span><p>会場にて</p></figcaption>
              </figure>
              <div className="instructor-profile-copy">
                <p className="instructor-profile-label">LEAD INSTRUCTOR</p>
                <p className="instructor-profile-role">{instructor.role}</p>
                <h2 id="kazu-profile-title">{instructor.name}</h2>
                <p className="instructor-profile-message">学びを、現場で使える力へ。</p>
                <p className="instructor-profile-description">{instructor.profile}</p>
                <ul aria-label="担当領域">{instructor.fields.map((field) => <li key={field}>{field}</li>)}</ul>
                <div className="instructor-profile-approach">
                  <span>研修で大切にすること</span>
                  <p>基本を学ぶ。<mark className="sfl-marker">自社の業務で実践する。</mark><br />使い続けられる運用につなげる。</p>
                </div>
              </div>
            </article>
          </div>
          <div className="shell instructor-note">※Lark Japanの認定はKazu先生個人に付与されたものであり、合同会社SFL自体がLark公式認定パートナーであることを示すものではありません。担当講師は研修内容と日程に応じて編成します。</div>
        </section>
        </SectionAccordion>
        <section className="seo-detail-cta"><div className="shell"><p className="section-label">TRAINING DESIGN</p><h2>課題に合わせて、研修内容をご提案します。</h2><p>60分無料相談で、対象社員の習熟度と改善したい業務を確認します。</p><Link href="/contact">法人向けDX研修について相談する<span aria-hidden="true">→</span></Link></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
