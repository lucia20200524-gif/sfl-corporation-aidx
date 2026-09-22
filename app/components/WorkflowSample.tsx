import Image from "next/image";

export function WorkflowSample({ id }: { id: string }) {
  return (
    <figure className="workflow-sample" aria-labelledby={`${id}-title`}>
      <figcaption className="workflow-sample-heading">
        <div>
          <span className="workflow-sample-label">お渡しするフロー図の見本</span>
          <h4 id={`${id}-title`}>ヒアリングをもとに、現在の業務フローを可視化。</h4>
        </div>
        <span className="workflow-sample-fiction">架空の業務例</span>
      </figcaption>
      <p className="workflow-sample-intro">オンライン面談、または訪問でお話を伺い、「誰が・何を使い・どの順番で進めているか」を一緒に整理します。</p>
      <p className="workflow-sample-scenario"><span>アイラッシュサロンの業務例</span>予約から来店受付までのフロー図（一部）</p>

      <a className="workflow-sample-image-link" href="/eyelash-salon-workflow-sample.png" target="_blank" rel="noopener noreferrer">
        <Image
          src="/eyelash-salon-workflow-sample.png"
          alt="アイラッシュサロンの業務フロー図の見本。お客様・受付・アイリスト・予約管理システムの役割を分け、予約から来店受付までの流れと空き枠による分岐を示しています。"
          width={2048}
          height={1400}
          sizes="(max-width: 700px) calc(100vw - 80px), 1200px"
          loading="lazy"
          unoptimized
        />
        <span className="workflow-sample-image-action">画像を大きく見る（別タブ）<span aria-hidden="true">↗</span></span>
      </a>

      <div className="workflow-sample-takeaway">
        <strong>いまの仕事の全体像を、一緒に確認できる一枚へ。</strong>
        <p>伺った内容をフロー図にまとめ、お客様と確認しながら整理します。作成したフロー図等はプレゼント。業務整理までのご利用も歓迎です。</p>
        <p>可視化した業務をもとに、AI・DXを活用できそうな箇所や改善の方向性もアドバイスします。</p>
      </div>
      <p className="workflow-sample-note">画像は架空のアイラッシュサロンを題材にした見本の一部です。実際の内容はお客様の業務に合わせて整理します。システムの構築・自動化の実装は業務整理の料金に含まれず、ご希望の場合に別途お見積もりします。</p>
    </figure>
  );
}
