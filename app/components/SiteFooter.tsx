import { SFL_PROCUREMENT_COURSE_URL } from "../courses";
import Image from "next/image";
import Link from "next/link";
import { OfficialLineLink } from "./OfficialLineLink";
import { OFFICIAL_CONTACT_FORM_URL } from "../seo";
import { LARK_ACCOUNT_REGISTRATION_URL } from "../lark-links";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <div className="footer-identity">
          <span className="footer-logo">
            <Image
              src="/sfl-logo-20260907.jpg"
              alt="合同会社SFL SALON FLOW LAB. ロゴ"
              width={1080}
              height={1080}
              unoptimized
            />
          </span>
          <div>
            <strong>合同会社SFL</strong>
            <small>LARK / AI / PUBLIC PROCUREMENT</small>
            <p>
              Larkを軸に、業務改善・構築・教育・伴走支援を提供。AI・官公庁入札の事業にも取り組んでいます。
            </p>
            <p>合同会社SFLはLark Japanの代理店ではありません。</p>
            <address>
              〒651-0084
              <br />
              兵庫県神戸市中央区磯辺通1丁目1番18号
              <br />
              カサベラ国際プラザビル707号室
            </address>
            <a
              className="footer-note-button"
              href="https://note.com/sfl_lark_dx_ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              SFL公式note
              <span aria-hidden="true">↗</span>
            </a>
            <OfficialLineLink className="footer-line-button" label="個人事業主・フリーランスのLINE相談" />
          </div>
        </div>

        <div className="footer-links">
          <div>
            <p>SITE</p>
            <Link href="/">ホーム</Link>
            <Link href="/services#courses">SFLの講座・研修</Link>
            <Link href="/services">事業・サービス一覧</Link>
            <Link href="/lark-dx">法人向けLark・DX研修の詳細</Link>
            <a href={LARK_ACCOUNT_REGISTRATION_URL} target="_blank" rel="noopener noreferrer" aria-label="Lark公式のアカウント登録ページを開く（新しいタブ）">Lark公式｜アカウント登録 <span aria-hidden="true">↗</span></a>
            <Link href="/ai-dx-training">法人向け生成AI研修のカリキュラム</Link>
            <a href={SFL_PROCUREMENT_COURSE_URL} target="_blank" rel="noopener noreferrer">SFL 官公庁入札講座の案内 ↗</a>
            <Link href="/reskilling-subsidy-simulator">人材開発支援助成金の費用試算</Link>
            <Link href="/case-study">導入・研修・取引実績</Link>
          </div>
          <div>
            <p>COMPANY</p>
            <Link href="/contact">60分無料相談・お問い合わせ</Link>
            <a href={OFFICIAL_CONTACT_FORM_URL} target="_blank" rel="noopener noreferrer" data-analytics-event="contact_form_open">法人向けお問い合わせフォーム ↗</a>
            <Link href="/company#people">実績・メンバー・会社概要</Link>
            <Link href="/instructors">法人向けDX研修の講師紹介</Link>
            <Link href="/information-security-policy">
              情報セキュリティ基本方針
            </Link>
            <Link href="/support-policy">支援・契約・データ取扱いガイド</Link>
            <a
              href="https://salonflowlab.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              プライバシーポリシー
            </a>
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>法人番号 8140003023662</p>
        <p>© 2026 SFL LLC.</p>
      </div>
    </footer>
  );
}
