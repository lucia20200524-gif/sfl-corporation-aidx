import type { ReactNode } from "react";
import Link from "next/link";
import { SectionAccordion } from "./SectionAccordion";
import { LarkTrainingLink } from "./LarkTrainingLink";
import { StageNavigation } from "./StageNavigation";

const supports = [
  {
    id: "workflow", label: "01 / 業務改善", title: "まず、仕事の流れを整理する",
    description: "担当者・情報・作業の流れを見える形にし、改善の優先順位を一緒に整理します。",
    points: ["現場へのヒアリングと業務フローの可視化", "二重入力・情報の分散・引き継ぎの課題整理", "Larkを活用できる業務と進め方のご提案"],
    href: "/contact#contact-flow-title", action: "無料相談・業務整理の流れを見る",
  },
  {
    id: "build", label: "02 / 構築", title: "自社に合う仕組みをLarkでつくる",
    description: "顧客管理や案件管理、社内申請など、現場に合う使いやすい仕組みを設計・構築します。",
    points: ["Lark Baseによる顧客・案件・売上管理", "申請・通知・ダッシュボードの設計", "権限と運用ルールの整理、Cycle Proの導入"],
    href: "/services#cycle-pro", action: "構築サービス・Cycle Proを見る",
  },
  {
    id: "education", label: "03 / 教育", title: "社員が使いこなせるようにする",
    description: "法人向けリスキリングのLark研修。基本操作から自社業務での実践まで、改善を進める人材を育てます。",
    points: ["自社の業務を題材とした法人向けLark・DX研修", "基本操作からBaseの設計・構築まで実践", "個人の学びにはSFL Lark導入講座"],
    href: "/lark-dx#individual-course", action: "個人向けのSFL Lark導入講座を見る",
  },
  {
    id: "support", label: "04 / 伴走支援", title: "現場で使いながら、改善を続ける",
    description: "導入後のつまずきや運用の変化を確認し、社内で使い続けられる状態を支援します。",
    points: ["Lark FLOW ONEによる運用相談・面談", "SFL Larkサポートデスクでの質問対応", "画面・権限・運用ルールの見直しと定着支援"],
    href: "/services#lark-flow-one", action: "伴走支援の内容を見る",
  },
] as const;

export function LarkSupportServices({ children }: { children?: ReactNode }) {
  return (
    <section id="lark-support" className="sfl-support-section" aria-labelledby="lark-support-title">
      <div className="shell">
        <div className="corporate-section-heading">
          <div><p className="section-label">LARK / DX SUPPORT</p><h2 id="lark-support-title">Larkによる、<br />4つの支援。</h2></div>
          <p>業務改善・構築・教育・伴走を、現場の状況に合わせて。<br />必要な支援からご相談いただけます。</p>
        </div>
        <p className="sfl-support-flow-note">業務整理から、構築・社員研修・伴走支援へ。必要な支援だけでもご相談いただけます。各ステップを選ぶと詳細が開きます。</p>
        <StageNavigation rootId="lark-support" label="Lark支援の全体像" items={supports.map((support, index) => ({ id: `lark-${support.id}-accordion`, panelId: `lark-${support.id}-panel`, title: ["業務整理", "構築", "社員研修", "伴走支援"][index], note: ["仕事の流れを見える化", "自社に合う仕組みづくり", "現場で使える力を育てる", "使いながら改善する"][index] }))} />
        <div className="sfl-support-grid">
          {supports.map((support) => (
            <SectionAccordion key={support.id} id={`lark-${support.id}`} label={support.label} title={support.title} description={support.description} compact>
              <div className="sfl-support-detail">
                <ul>{support.points.map((point) => <li key={point}>{point}</li>)}</ul>
                {support.id === "education" ? <LarkTrainingLink /> : null}
                <Link href={support.href}>{support.action}<span aria-hidden="true">→</span></Link>
              </div>
            </SectionAccordion>
          ))}
        </div>
        {children}
        <SectionAccordion id="home-funding" title="助成金・補助金の活用相談" description="研修や導入の目的に合わせて、活用できる制度と条件を確認します。" compact>
          <div className="sfl-support-detail">
            <p>人材開発支援助成金、デジタル化・AI導入補助金、業務改善助成金などの活用をご相談いただけます。必要に応じて専門家と連携し、対象要件を確認します。</p>
            <p>対象可否・支給額は制度要件と審査で決まります。受給・採択を保証するものではありません。</p>
            <Link href="/lark-dx#support-programs">助成金・補助金の詳細を見る<span aria-hidden="true">→</span></Link>
          </div>
        </SectionAccordion>
      </div>
    </section>
  );
}
