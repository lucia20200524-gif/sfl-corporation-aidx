import Image from "next/image";

const tickerItems = [
  {
    text: "講師はLark Japan認定のKazu先生",
    logo: "/logo-lark-official.png",
  },
  {
    text: "SFLの強み｜実務教育・構築・伴走支援・サポートデスク",
  },
  {
    text: "法人研修｜60分無料相談・3時間×5コマ（事前ヒアリングで内容調整）・研修後1か月無料伴走",
  },
  {
    text: "株式会社UNIQS連携｜Lark業務改善パッケージ・DX ONE",
  },
  {
    text: "SFL Larkサポートデスク｜研修受講歴を問わず月額980円（税込）",
  },
  {
    text: "研修後特典｜Lark FLOW ONE月2回面談＋SFL Larkサポートデスクを1か月無料提供",
  },
  {
    text: "人材開発支援助成金｜デジタル化・AI導入補助金2026の制度活用相談",
  },
  {
    text: "Eyelash Salon Lucia｜美容DX・Cycle Proの現場実証",
  },
];

export function HeroTicker() {
  return (
    <div
      className="hero-ticker"
      aria-label={tickerItems.map((item) => item.text).join("。")}
    >
      <div className="hero-ticker-track" aria-hidden="true">
        {[0, 1].map((group) => (
          <div className="hero-ticker-group" key={group}>
            {tickerItems.map((item) => (
              <span className="hero-ticker-item" key={`${group}-${item.text}`}>
                {item.logo ? (
                  <span className="hero-ticker-logo">
                    <Image
                      src={item.logo}
                      alt=""
                      width={700}
                      height={700}
                      unoptimized
                    />
                  </span>
                ) : (
                  <i />
                )}
                {item.text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
