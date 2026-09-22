import { StageNavigation } from "./StageNavigation";

const journeys = {
  corporate: {
    title: "法人向け研修の進め方",
    introduction: "ご相談から受講後の活用まで。各ステップを選ぶと、進め方を確認できます。",
    steps: [
      { title: "ご相談", note: "現状と目的を整理", description: "現在の業務、社員の習熟度、改善したいことを伺い、研修で目指す状態を一緒に整理します。", href: "/contact", action: "60分無料相談の案内を見る" },
      { title: "研修内容を確認", note: "内容・条件・お見積もり", description: "事前ヒアリングをもとに、学ぶ内容や演習の題材、受講方法を確認します。支援範囲・受講条件・お見積もりにご納得いただいてから進めます。", href: "/lark-dx#course", action: "法人向けLark研修の内容を見る" },
      { title: "受講・実践", note: "自社業務を題材に", description: "講師の説明を聞くだけでなく、自分で操作しながら学びます。Larkや生成AIを、自社の情報共有・管理・日々の業務にどう活かすかを実践します。" },
      { title: "研修後サポート", note: "現場での活用・定着", description: "受講後に生まれる疑問や運用上の課題について、必要な支援をご案内します。法人向けLark研修では、研修終了後1か月、月2回のオンライン面談とサポートデスクで定着を支えます。", href: "/lark-dx#lark-support-accordion", action: "Lark研修後のサポートを見る" },
    ],
  },
  individual: {
    title: "個人向け講座から、その先の学びへ",
    introduction: "目的に合う講座を選び、仕事での活用へ。SFL Academyへの参加は希望者向けです。",
    steps: [
      { title: "講座を選ぶ", note: "Lark・AI・官公庁入札", description: "身につけたいスキルや取り組みたい仕事に合わせて、SFL Lark導入講座・SFL AI導入講座・SFL 官公庁入札講座から選びます。各講座の内容・日程・受講条件をご確認ください。", href: "/services#courses", action: "講座・研修一覧を見る" },
      { title: "受講する", note: "基礎から実務へ", description: "各講座のカリキュラムに沿って、基礎知識や操作、実務での進め方を学びます。受講方法・学習時間は、各講座の案内でご確認いただけます。" },
      { title: "仕事で活用", note: "学びを実践に", description: "学んだ内容を、情報整理・業務改善・アプリ制作・案件調査など、ご自身の仕事や取り組みに活かしていきます。" },
      { title: "SFL Academyへ", note: "受講後・希望者向け", description: "講座受講後、希望される方はSFL Academyへの加入をご検討いただけます。加入後は各講座のアーカイブで学びを継続できます。参加は任意です。加入条件・費用は案内ページをご確認ください。", href: "/services#learning-academy", action: "SFL Academyの案内を見る" },
    ],
  },
};

export function LearningJourney({ id, audience, showHeading = true }: { id: string; audience: keyof typeof journeys; showHeading?: boolean }) {
  const journey = journeys[audience];
  const items = journey.steps.map((step, index) => ({ id: `${id}-step-${index + 1}`, panelId: `${id}-panel-${index + 1}`, title: step.title, note: step.note }));
  return (
    <section id={id} className="sfl-learning-journey" aria-label={journey.title}>
      {showHeading ? <h4>{journey.title}</h4> : null}
      <p>{journey.introduction}</p>
      <StageNavigation rootId={id} label={journey.title} items={items} />
      <div className="sfl-learning-details">
        {journey.steps.map((step, index) => (
          <details key={items[index].id} id={items[index].id} name={`${id}-steps`}>
            <summary aria-controls={items[index].panelId}>
              <span className="sfl-learning-detail-number">{String(index + 1).padStart(2, "0")}</span>
              <strong>{step.title}</strong>
              <span className="section-accordion-icon" aria-hidden="true" />
            </summary>
            <div id={items[index].panelId}>
              <p>{step.description}</p>
              {"href" in step ? <a href={step.href}>{step.action}<span aria-hidden="true">→</span></a> : null}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
