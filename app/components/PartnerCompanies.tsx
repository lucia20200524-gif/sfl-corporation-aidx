import Image from "next/image";

type Partner = {
  index: string;
  name: string;
  role: string;
  monogram?: string;
  logo?: string;
  logoAlt?: string;
  href?: string;
};

const partners: Partner[] = [
  {
    index: "01",
    name: "株式会社KAIEI",
    logo: "/logo-kaiei.png",
    logoAlt: "株式会社KAIEI ロゴ",
    role: "Larkが使えるオンライン秘書・実務支援",
  },
  {
    index: "02",
    name: "株式会社UNIQS",
    logo: "/logo-uniqs.png",
    logoAlt: "株式会社UNIQS ロゴ",
    role: "補助金対応パッケージ・DX導入支援",
    href: "https://www.uniq-s.co.jp/",
  },
];

type PartnerCompaniesProps = {
  compact?: boolean;
};

export function PartnerCompanies({
  compact = false,
}: PartnerCompaniesProps) {
  return (
    <section
      className={`partner-companies${compact ? " partner-companies-compact" : ""}`}
      aria-labelledby={compact ? "home-partner-heading" : "partner-heading"}
    >
      <div className="shell partner-companies-inner">
        <div className="partner-companies-heading">
          <p className="section-label">PARTNER COMPANIES</p>
          <h2 id={compact ? "home-partner-heading" : "partner-heading"}>
            提携企業
          </h2>
          <p>
            KAIEIとの実務支援、UNIQSとの補助金パッケージ連携を通じて、
            導入前から運用定着までを支える体制をつくります。
          </p>
        </div>

        <div className="partner-company-list">
          {partners.map((partner) => {
            const content = (
              <>
                <span className="partner-index">{partner.index}</span>
                {partner.logo ? (
                  <span className="partner-logo">
                    <Image
                      src={partner.logo}
                      alt={partner.logoAlt ?? `${partner.name} ロゴ`}
                      width={480}
                      height={600}
                      unoptimized
                    />
                  </span>
                ) : (
                  <span className="partner-monogram" aria-hidden="true">
                    {partner.monogram}
                  </span>
                )}
                <div>
                  <small>PARTNER COMPANY</small>
                  <strong>{partner.name}</strong>
                  <p className="partner-company-role">{partner.role}</p>
                </div>
                {partner.href ? (
                  <span className="partner-link-arrow" aria-hidden="true">
                    ↗
                  </span>
                ) : null}
              </>
            );

            return partner.href ? (
              <a
                className="partner-company-card"
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                key={partner.name}
                aria-label={`${partner.name}の公式ホームページを開く`}
              >
                {content}
              </a>
            ) : (
              <article className="partner-company-card" key={partner.name}>
                {content}
              </article>
            );
          })}
        </div>

        <p className="partner-company-note">
          ※
          本項は合同会社SFLの事業提携企業を示すもので、各サービス提供元からの認定を示すものではありません。
        </p>
      </div>
    </section>
  );
}
