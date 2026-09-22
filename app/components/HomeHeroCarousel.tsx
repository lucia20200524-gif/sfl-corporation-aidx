import Image from "next/image";
import Link from "next/link";
import "../home-hero.css";

export function HomeHeroCarousel() {
  return (
    <section className="sfl-masthead" aria-labelledby="brand-hero-title">
      <div className="sfl-masthead-stage">
        <div className="sfl-masthead-scenery" aria-hidden="true">
          <Image src="/kobe-waterfront.jpg" alt="" fill sizes="100vw" priority unoptimized />
        </div>
        <div className="shell sfl-masthead-main">
          <div className="sfl-masthead-copy">
            <p className="sfl-masthead-eyebrow">Lark導入・業務改善・DX支援｜合同会社SFL</p>
            <h1 id="brand-hero-title"><span><em>Lark</em>で、</span><span>仕事の流れを整える。</span></h1>
            <p className="sfl-masthead-lead">構築・教育・伴走まで、SFL。</p>
            <p className="sfl-masthead-description">現場の業務を整理し、Larkで使いやすい仕組みを構築。社員が使いこなすための教育と、導入後の改善まで支援します。</p>
            <ul className="sfl-masthead-support-tags" aria-label="Larkによる4つの支援">
              <li>業務改善</li><li>構築</li><li>教育</li><li>伴走支援</li>
            </ul>
            <div className="sfl-masthead-actions">
              <Link className="sfl-masthead-primary" href="/contact">60分無料相談<span aria-hidden="true">→</span></Link>
              <Link className="sfl-masthead-secondary" href="#lark-support-title">Larkの支援内容を見る<span aria-hidden="true">↓</span></Link>
            </div>
          </div>
          <figure className="sfl-masthead-art">
            <Image src="/sfl-ai-dx-learning.png" alt="ノートパソコンとタブレットを使い、AI・DXを一緒に学ぶ男女のイラスト" width={1366} height={1152} sizes="(max-width: 700px) calc(100vw - 64px), (max-width: 1100px) 43vw, 550px" priority unoptimized />
            <figcaption className="sfl-masthead-art-caption">
              <span>業務の整理から、運用の定着まで。</span>
              <strong>Larkを、現場で使える力に。</strong>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="shell sfl-masthead-proof">
        <Link href="/case-study" className="sfl-masthead-case">
          <Image src="/lark-master-2026-event.webp" alt="Lark Master 2026の会場" width={112} height={70} sizes="112px" unoptimized />
          <span><small>LARK MASTER 2026</small><strong>Cycle Pro<span className="sfl-case-divider" aria-hidden="true"> / </span><span>ファイナリスト</span></strong></span>
          <span className="sfl-masthead-case-link">実績を見る <span aria-hidden="true">→</span></span>
        </Link>
        <p className="sfl-masthead-location"><span>KOBE, JAPAN</span><span>神戸を拠点に、全国オンライン対応</span></p>
      </div>
    </section>
  );
}
