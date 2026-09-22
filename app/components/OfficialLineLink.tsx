import { OFFICIAL_LINE_URL } from "../seo";

type OfficialLineLinkProps = {
  className?: string;
  tabIndex?: number;
  label?: string;
};

export function OfficialLineLink({
  className,
  tabIndex,
  label = "公式LINEで相談する",
}: OfficialLineLinkProps) {
  return (
    <a
      className={className}
      href={OFFICIAL_LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={tabIndex}
      aria-label={`${label}（個人事業主・フリーランス向け／新しいタブ）`}
      data-analytics-event="line_button_click"
    >
      {label}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
