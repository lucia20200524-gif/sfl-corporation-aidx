import { StageNavigation } from "./StageNavigation";

const examples = {
  lark: {
    label: "LARK / WORKFLOW EXAMPLE",
    title: "Larkで、日々の仕事をひとつの流れに。",
    introduction: "顧客情報と案件、担当者の動きをつなぐ活用イメージです。自社の業務に合わせて、管理する項目や共有方法を設計します。",
    steps: [
      { title: "顧客情報", note: "必要な情報をまとめる", description: "会社名・担当者・連絡先・相談内容など、仕事に必要な顧客情報をLark Baseにまとめます。情報を探す場所をそろえ、案件管理の起点にします。", points: ["顧客ごとに情報を整理", "相談・対応履歴を確認"] },
      { title: "案件管理", note: "期限と進捗を見える化", description: "顧客にひもづく案件ごとに、担当者・期限・進捗を整理します。「どの案件が、どこまで進んでいるか」を確認できる形にします。", points: ["案件と顧客情報をひもづけ", "担当者・期限・進捗を管理"] },
      { title: "担当者へ共有", note: "次の対応につなぐ", description: "案件の情報を、対応するメンバーへ共有します。Larkのチャットや通知を組み合わせ、次に何を確認・対応するかが分かる運用を整えます。", points: ["案件情報を見ながら相談", "通知のタイミングと共有先を設計"] },
      { title: "対応確認", note: "完了・次の予定を記録", description: "対応結果や次の予定を記録し、チームで状況を確認します。未対応の案件や期限が近い仕事を把握し、次の対応へつなげます。", points: ["対応状況・結果を更新", "一覧やダッシュボードで確認"] },
    ],
  },
  cycle: {
    label: "CYCLE PRO / SALON WORKFLOW",
    title: "Cycle Proで、来店前から次の来店まで。",
    introduction: "滋賀県草津市のEyelash Salon Luciaで運用するCycle Pro。電子同意書・顧客カルテ・売上・再来管理をLarkでつなぎ、日々のサロン業務に活用しています。",
    steps: [
      { title: "電子同意書", note: "来店前の確認", description: "施術に必要な同意内容を電子フォームで受け付け、回答を確認します。来店前の案内から当日の確認へ、必要な情報をつなぎます。", points: ["同意書の案内・回答受付", "来店時に回答内容を確認"] },
      { title: "顧客カルテ", note: "施術履歴をまとめる", description: "顧客情報・施術履歴・写真をまとめて管理します。前回の内容を確認しながら、今回の施術記録を残せるようにします。", points: ["顧客ごとに履歴・写真を集約", "前回と今回の施術内容を確認"] },
      { title: "売上管理", note: "日々の実績を確認", description: "日々の売上を記録・集計し、店舗の状況を確認します。顧客への対応と売上の記録をつなぎ、経営判断に使う情報を整理します。", points: ["売上の記録・集計", "ダッシュボードで店舗状況を確認"] },
      { title: "再来管理", note: "次の来店を考える", description: "来店履歴や来店周期、再来率を確認します。お客様の状況を把握し、次のご案内や日々の運用の見直しに活かします。", points: ["来店履歴・来店周期を確認", "再来の状況をもとに運用を改善"] },
    ],
  },
};

export function WorkflowExample({ id, kind }: { id: string; kind: keyof typeof examples }) {
  const example = examples[kind];
  const items = example.steps.map((step, index) => ({ id: `${id}-step-${index + 1}`, panelId: `${id}-panel-${index + 1}`, title: step.title, note: step.note }));
  return (
    <section id={id} className="sfl-learning-journey sfl-workflow-example" aria-labelledby={`${id}-title`}>
      <p className="section-label">{example.label}</p>
      <h2 id={`${id}-title`}>{example.title}</h2>
      <p>{example.introduction}</p>
      <p className="sfl-workflow-hint">各項目を選ぶと、詳しい業務内容が開きます。</p>
      <StageNavigation rootId={id} label={kind === "lark" ? "Larkの業務活用イメージ" : "Cycle Proのサロン業務フロー"} items={items} />
      <div className="sfl-learning-details">
        {example.steps.map((step, index) => (
          <details key={items[index].id} id={items[index].id} name={`${id}-steps`}>
            <summary aria-controls={items[index].panelId}>
              <span className="sfl-learning-detail-number">{String(index + 1).padStart(2, "0")}</span>
              <strong>{step.title}</strong>
              <span className="section-accordion-icon" aria-hidden="true" />
            </summary>
            <div id={items[index].panelId}>
              <p>{step.description}</p>
              <ul>{step.points.map((point) => <li key={point}>{point}</li>)}</ul>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
