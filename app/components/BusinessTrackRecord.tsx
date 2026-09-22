export const BUSINESS_TRACK_RECORDS = [
  {
    id: "hair-salon-record",
    category: "導入・研修・伴走支援",
    title: "ヘアーサロン（静岡県）",
    result: "5店舗に導入",
    description: "静岡県のヘアーサロン5店舗で、Cycle Proの導入、Lark（DX）研修、伴走支援の実績があります。",
  },
  {
    id: "real-estate-ai-training-record",
    category: "企業向けAI研修",
    title: "不動産業界（広島県）",
    result: "現在実施中",
    description: "広島県の不動産業界で、企業向けのAI研修を実施しています。",
  },
  {
    id: "online-assistant-lark-training-record",
    category: "企業向けLark研修",
    title: "オンライン秘書事業の企業",
    result: "Lark研修 提供済",
    description: "オンライン秘書事業を行う企業に、Lark研修を提供しました。",
  },
  {
    id: "public-procurement-record",
    category: "入札・取引実績",
    title: "官公庁入札・取引",
    result: "陸上自衛隊 等",
    description: "陸上自衛隊等に関する官公庁入札・取引の実績があります。",
  },
] as const;

export const COURSE_TRACK_RECORDS = [
  {
    id: "lark-course-record",
    category: "開催中",
    title: "SFL Lark導入講座",
    result: "1期生進行中",
    description: "0期生終了。現在は1期生の講座を進行中です。次回は2期生を募集します。",
  },
  {
    id: "ai-course-record",
    category: "開催予定",
    title: "SFL AI導入講座",
    result: "2026年10月開始",
    description: "2026年10月に講座を開始します。内容・受講方法は講座の案内ページをご覧ください。",
  },
  {
    id: "procurement-course-record",
    category: "開催予定",
    title: "SFL 官公庁入札講座",
    result: "2026年10月開始",
    description: "2026年10月に講座を開始します。内容・受講方法は講座の案内ページをご覧ください。",
  },
  {
    id: "academy-record",
    category: "活動中",
    title: "SFL Academy",
    result: "1期生 活動中",
    description: "各講座のアーカイブを活用し、受講後も学びを継続できる場です。",
  },
] as const;

export function BusinessTrackRecord({
  titleId,
  heading = "導入・研修・取引実績と講座の開催状況",
}: {
  titleId: string;
  heading?: string;
}) {
  return (
    <section className="business-track-record" aria-labelledby={titleId}>
      <div className="business-track-record-heading">
        <p>TRACK RECORD</p>
        <h2 id={titleId}>{heading}</h2>
      </div>
      <div className="business-track-record-grid business-track-record-grid-two">
        {BUSINESS_TRACK_RECORDS.map((record) => (
          <article id={`${titleId}-${record.id}`} key={record.id}>
            <span className="business-track-record-category">{record.category}</span>
            <h3>{record.title}</h3>
            <strong>{record.result}</strong>
            <p>{record.description}</p>
          </article>
        ))}
      </div>
      <h3 className="course-progress-heading">講座の開催・コミュニティの活動状況</h3>
      <div className="business-track-record-grid business-track-record-grid-two">
        {COURSE_TRACK_RECORDS.map((record) => (
          <article id={`${titleId}-${record.id}`} key={record.id}>
            <span className="business-track-record-category">{record.category}</span>
            <h4>{record.title}</h4>
            <strong>{record.result}</strong>
            <p>{record.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
