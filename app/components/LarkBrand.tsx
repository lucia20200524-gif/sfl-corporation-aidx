import Image from "next/image";
import { LARK_ACCOUNT_REGISTRATION_URL } from "../lark-links";

export function LarkProductMark() {
  return (
    <span className="lark-product-mark">
      <Image src="/logo-lark-official.png" alt="" width={36} height={36} unoptimized />
      <span>Lark</span>
    </span>
  );
}

export function LarkSupportNote() {
  return (
    <aside className="lark-support-note" aria-label="SFLのLark導入支援について">
      <div className="lark-support-note-brand"><LarkProductMark /><span>SFLの導入・教育・運用支援</span></div>
      <div className="lark-support-note-copy">
        <strong><mark className="sfl-marker">合同会社SFLはLark Japanの代理店ではありません。</mark></strong>
        <p>Larkアカウントの契約や有料プランの利用を無理に勧めることはありません。お客様の業務や目的に合わせて、必要な教育・構築・運用支援をご案内します。</p>
        <p className="lark-support-certification"><mark className="sfl-marker">Lark Japan認定のKazu先生</mark>が実務教育を担当します。認定は講師個人に付与されたもので、合同会社SFL自体の公式認定を示すものではありません。</p>
        <div className="lark-registration-guide">
          <p>アカウント未登録の方は、Lark公式ページから登録できます。</p>
          <a className="lark-registration-button" href={LARK_ACCOUNT_REGISTRATION_URL} target="_blank" rel="noopener noreferrer" aria-label="Lark公式のアカウント登録ページを開く（新しいタブ）">
            <span>Lark公式｜アカウント登録</span><span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
