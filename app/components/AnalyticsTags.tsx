const ga4Value = process.env.NEXT_PUBLIC_GA4_ID;
const googleAdsValue = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const ga4Id = /^G-[A-Z0-9]+$/.test(ga4Value ?? "") ? ga4Value : undefined;
const googleAdsId = /^AW-\d+$/.test(googleAdsValue ?? "") ? googleAdsValue : undefined;
const primaryTagId = ga4Id || googleAdsId;

export function AnalyticsTags() {
  if (!primaryTagId) return null;

  const configuration = [ga4Id, googleAdsId]
    .filter((id): id is string => Boolean(id))
    .map((id) => `gtag('config', '${id}');`)
    .join("\n");

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
window.gtag('js', new Date());
${configuration}`,
        }}
      />
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${primaryTagId}`} />
    </>
  );
}
