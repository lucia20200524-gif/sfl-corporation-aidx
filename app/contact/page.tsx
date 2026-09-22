import { SFL_PROCUREMENT_COURSE_URL } from "../courses";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ConsultationFlow } from "../components/ConsultationFlow";
import { OfficialLineLink } from "../components/OfficialLineLink";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import {
  organizationReference,
  OFFICIAL_CONTACT_FORM_URL,
  SITE_URL,
  breadcrumbSchema,
  pageSocialMetadata,
} from "../seo";

const pageTitle = "60分無料相談・業務整理フロー｜AI・DX支援";
const pageDescription =
  "合同会社SFLの60分無料相談。Lark・AIの導入、業務整理、法人研修、実務講座をご相談いただけます。個人事業主・フリーランスは公式LINE、法人はお問い合わせフォームへ。無料相談から直接お見積もりへ進むことも、業務整理だけのご利用も可能です。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/contact",
  },
  keywords: [
    "合同会社SFL 問い合わせ",
    "Lark導入 無料相談",
    "Lark Base構築 相談",
    "Lark法人研修 相談",
    "DX社員育成 相談",
    "法人研修 無料相談",
    "業務整理 フロー図",
    "個人事業主 AI DX 相談",
  ],
  ...pageSocialMetadata(pageTitle, pageDescription, "/contact"),
};

const topics = [
  {
    number: "01",
    title: "業務の整理・AIやDXの活用",
    text: "仕事の流れを見直したい、AIやDXをどこに活用できるか知りたい方へ。",
  },
  {
    number: "02",
    title: "DX社員育成・法人研修",
    text: "Lark・AIを業務で使える社員を育てたい方へ。対象社員、研修内容、費用、実施時期をご相談いただけます。",
  },
  {
    number: "03",
    title: "Lark導入・構築・運用改善",
    text: "Base、申請、権限、通知、ダッシュボードの構築や、導入後の運用について。",
  },
  {
    number: "04",
    title: "美容サロンDX・AI活用",
    text: "Cycle Proの運用事例や、LarkとAIを組み合わせた業務改善について。",
  },
  {
    number: "05",
    title: "官公庁入札事業・実務講座",
    text: "官公庁入札事業についてのご相談。講座内容・受講方法は、講座の専用案内ページをご覧ください。",
  },
];

const breadcrumbs = breadcrumbSchema([
  { name: "ホーム", path: "/" },
  { name: "60分無料相談・業務整理フロー", path: "/contact" },
]);

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "合同会社SFL 60分無料相談・業務整理フロー",
  description: pageDescription,
  url: `${SITE_URL}/contact`,
  about: organizationReference,
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="corporate-contact-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([contactPageSchema, breadcrumbs]),
          }}
        />
        <Breadcrumbs items={[{ label: "ホーム", href: "/" }, { label: "無料相談・業務整理" }]} />
        <PageHero
          index="05"
          eyebrow="FREE CONSULTATION / 60 MIN"
          title="仕事の流れを整理するところから、ご相談ください。"
          description="個人事業主・フリーランスから法人まで、初回60分は無料。無料相談から直接お見積もりへ進むことも、業務整理だけを利用することもできます。全国オンラインで対応し、訪問での業務整理もご相談いただけます。"
        />



        <section className="contact-content section-light">
          <div className="shell contact-grid">
            <div>
              <p className="section-label">CONSULTATION TOPICS</p>
              <h2>こんなことをご相談いただけます。</h2>
              <div className="contact-topic-list">
                {topics.map((topic) => (
                  <article key={topic.number}>
                    <span>{topic.number}</span>
                    <div>
                      <h3>{topic.title}</h3>
                      <p>{topic.text}</p>
                      {topic.number === "05" ? <a className="text-link" href={SFL_PROCUREMENT_COURSE_URL} target="_blank" rel="noopener noreferrer">SFL 官公庁入札講座の案内を見る ↗</a> : null}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="contact-panel">
              <div className="contact-panel-heading">
                <p>60 MIN / ONLINE / FREE</p>
                <h2>60分の無料相談を申し込む。</h2>
                <p className="contact-no-pressure">合同会社SFLはLark Japanの代理店ではありません。アカウント契約や有料プランの利用を無理に勧めることはありません。</p>
              </div>
              <div className="contact-panel-body">
                <p className="contact-channel-guide">個人事業主・フリーランスの方は公式LINE、法人の方はお問い合わせフォームからお申し込みください。</p>
                <div className="contact-channel-grid">
                  <div className="contact-channel contact-channel-line">
                    <strong className="contact-channel-audience">個人事業主・フリーランス向け</strong>
                    <h3>公式LINE</h3>
                    <p>個人で事業を営む方のご相談窓口です。公式LINEから「無料相談希望」とお送りください。担当者が内容を確認し、オンライン相談の日程候補をご案内します。</p>
                    <OfficialLineLink className="button button-line" label="LINEで相談する" />
                    <small>公式LINE（lin.ee）が開きます。</small>
                  </div>
                  <div className="contact-channel contact-channel-form">
                    <strong className="contact-channel-audience">法人向け</strong>
                    <h3>お問い合わせフォーム</h3>
                    <p>企業・団体向けのご相談窓口です。無料相談をご希望の方は、お問い合わせの目的で「60分無料相談を希望」をお選びください。研修・導入支援やお見積もりのご相談も受け付けています。</p>
                    <a className="button contact-form-button" href={OFFICIAL_CONTACT_FORM_URL} target="_blank" rel="noopener noreferrer" data-analytics-event="contact_form_open">
                      法人向けフォームを開く <span aria-hidden="true">↗</span>
                    </a>
                    <small>お問い合わせフォームが別タブで開きます。ログインは不要です。</small>
                  </div>
                </div>
                <p className="contact-disclaimer">会社名・屋号、お名前、現在の課題、希望時期が分かると、相談をスムーズに進められます。具体的な返信目安は受付時にご案内します。</p>
                <small className="contact-price-note">初回60分の相談は無料です。有料の「フロー【業務整理】」は必須ではなく、無料相談から直接お見積もりへ進めます。ご契約は任意です。</small>
                <div className="contact-guide-links">
                  <Link className="contact-policy-link" href="#contact-flow-title">無料相談・業務整理の流れを見る →</Link>
                  <Link className="contact-policy-link" href="/support-policy">支援・契約・データ取扱いガイドを見る →</Link>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="consultation-flow-section" aria-labelledby="contact-flow-title">
          <div className="shell"><ConsultationFlow titleId="contact-flow-title" /></div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
