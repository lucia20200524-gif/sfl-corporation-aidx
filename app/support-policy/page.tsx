import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ConsultationLink } from "../components/ConsultationLink";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import {
  organizationReference,
  SITE_URL,
  breadcrumbSchema,
  pageSocialMetadata,
} from "../seo";

const pageTitle = "支援・契約・データ取扱いガイド";
const pageDescription =
  "合同会社SFLのLark導入・Base構築・法人研修・伴走支援について、支援範囲、費用区分、データ取扱い、契約終了時の対応、提携先との役割分担をまとめています。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/support-policy" },
  ...pageSocialMetadata(pageTitle, pageDescription, "/support-policy"),
};

const policySections = [
  {
    number: "01",
    title: "相談から導入まで",
    text: "個人事業主・法人ともに、初回60分の無料相談で現状や目的を伺います。無料相談から直接サービスのご提案・お見積もりへ進むこともできます。有料の「フロー【業務整理】」をご希望の場合は、オンライン面談または訪問でのヒアリングをもとに現在の業務フローを可視化し、AI・DX活用のアドバイスと作成したフロー図等のお渡しを行います。業務整理のみのご利用も歓迎します。追加の支援は任意で、お見積もりと契約条件にご納得いただいてからご契約へ進みます。",
  },
  {
    number: "02",
    title: "納品物と支援範囲",
    text: "Base、ドキュメント、運用ルール、研修資料、設定内容など、提供する成果物は案件ごとに異なります。対象業務と完成条件を、お見積書・提案書・個別契約で明示します。",
  },
  {
    number: "03",
    title: "対象外となる業務",
    text: "各サービス提供元との利用契約、法務・税務・労務上の専門判断、補助金・助成金の採択や受給の保証、契約外の追加開発は、原則としてSFLの基本支援には含みません。必要な場合は提携先・専門家の役割と費用を分けてご案内します。",
  },
  {
    number: "04",
    title: "料金と外部サービス利用料",
    text: "初回60分の相談は無料です。任意の業務整理は、個人事業主・フリーランスが3時間40,000円、法人が5時間70,000円（各税別）。研修・構築・伴走等は別のサービスとしてご案内します。Lark、AI、API等の外部サービス利用料を含め、お見積もり時に含まれる費用と別途必要な費用を区分します。",
  },
  {
    number: "05",
    title: "変更・中止・解約",
    text: "日程変更、キャンセル、途中解約、返金、最低利用期間の条件は、サービス内容によって異なります。契約・申込み前に適用条件を提示し、個別契約または申込条件を優先します。",
  },
  {
    number: "06",
    title: "サポート窓口と対応時間",
    text: "窓口、対応日、対応時間、返信目安、緊急時の連絡方法は、契約するサービスごとに事前にご案内します。一般相談は、個人事業主・フリーランスの方は公式LINE、法人の方はお問い合わせフォームで受け付けます。担当者が内容を確認して日程候補をご案内します。",
  },
  {
    number: "07",
    title: "データの保管・削除・権限",
    text: "取り扱うデータ、保存場所、管理者、アクセス権、保存期間、削除方法は、利用するサービスと案件内容に応じて確認します。必要最小限の権限で作業し、契約終了時の権限停止・削除・返却条件を事前に定めます。",
  },
  {
    number: "08",
    title: "契約終了時のデータ移行",
    text: "契約終了時は、利用サービスが提供する機能の範囲で、データの書き出し、管理者権限の移管、運用資料の引渡し方法を確認します。対応形式、期限、追加作業の有無は個別契約で定めます。",
  },
  {
    number: "09",
    title: "障害・情報セキュリティ事故への対応",
    text: "障害や情報セキュリティ上の事故を確認した場合は、影響拡大の防止、事実確認、関係先への連絡、復旧、再発防止を進めます。通知対象・方法は、影響範囲、法令、契約上の義務に基づいて判断します。",
  },
];

const partnerRoles = [
  ["合同会社SFL", "相談受付、業務整理、導入・研修設計、全体調整"],
  ["Kazu先生", "Lark実務教育・法人研修"],
  ["SFL講座修了パートナー", "担当範囲に応じたAI活用、Lark・DX運用、Web・業務導線支援"],
  ["株式会社KAIEI", "Larkを使ったオンライン秘書・実務支援"],
  ["株式会社UNIQS", "補助金対応パッケージ・DX導入支援"],
  ["連携専門家", "必要に応じた申請・法務・税務・労務等の専門判断"],
];

const breadcrumbs = breadcrumbSchema([
  { name: "ホーム", path: "/" },
  { name: "支援・契約ガイド", path: "/support-policy" },
]);

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: pageTitle,
  description: pageDescription,
  url: `${SITE_URL}/support-policy`,
  inLanguage: "ja-JP",
  about: organizationReference,
};

export default function SupportPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([pageSchema, breadcrumbs]) }}
        />
        <Breadcrumbs items={[{ label: "ホーム", href: "/" }, { label: "支援・契約・データ取扱いガイド" }]} />
        <PageHero
          index="06"
          eyebrow="SUPPORT & CONTRACT GUIDE"
          title="支援・契約・データ取扱いガイド。"
          description="安心してご相談いただくために、支援範囲、費用区分、データ、契約終了時の対応について、現在の基本方針を公開します。"
        />

        <section className="support-policy-page section-light">
          <div className="shell">
            <div className="support-policy-intro">
              <p className="section-label">BASIC POLICY</p>
              <h2>契約前に、曖昧な部分を残さない。</h2>
              <p>
                このページは合同会社SFLの基本的な考え方をまとめたものです。実際の条件はサービスと案件内容により異なり、個別のお見積書、提案書、契約書、申込条件が優先されます。
              </p>
              <p>合同会社SFLはLark Japanの代理店ではありません。Larkアカウントの契約や有料プランの利用を無理に勧めることはなく、お客様の業務や目的に合わせて教育・構築・運用を支援します。Lark Japanの認定は講師個人に対するもので、SFL自体の公式認定を示すものではありません。</p>
            </div>
            <div className="support-policy-list">
              {policySections.map((item) => (
                <article key={item.number}>
                  <span>{item.number}</span>
                  <div><h2>{item.title}</h2><p>{item.text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="support-role-section section-dark">
          <div className="shell support-role-grid">
            <div>
              <p className="section-label">ROLE & RESPONSIBILITY</p>
              <h2>提携先との役割分担。</h2>
              <p>案件ごとに、誰が何を担当するかを契約前に明示します。</p>
            </div>
            <dl>
              {partnerRoles.map(([name, role]) => (
                <div key={name}><dt>{name}</dt><dd>{role}</dd></div>
              ))}
            </dl>
          </div>
        </section>

        <section className="support-policy-legal section-light">
          <div className="shell">
            <div>
              <p className="section-label">LEGAL INFORMATION</p>
              <h2>個人向けオンライン販売について。</h2>
              <p>
                この公式サイトは相談受付を目的としており、サイト内で決済を完了する仕組みは設けていません。個人向け有料講座等をオンライン販売する場合は、販売ページまたは申込画面で、特定商取引法に基づく表記、利用条件、キャンセル・返金条件を申込み前に案内します。
              </p>
            </div>
            <div>
              <Link href="/information-security-policy">情報セキュリティ基本方針 →</Link>
              <a href="https://salonflowlab.com/privacy/" target="_blank" rel="noopener noreferrer">プライバシーポリシー ↗</a>
            </div>
          </div>
        </section>

        <section className="global-cta compact-cta">
          <div className="shell global-cta-inner">
            <p className="section-label">CONFIRM BEFORE START</p>
            <h2>気になる条件は、契約前に確認できます。</h2>
            <ConsultationLink className="button button-primary" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
