import type { ReactNode } from "react";

export function SectionAccordion({
  id, title, description, label, children, compact = false,
}: {
  id: string;
  title: string;
  description: string;
  label?: string;
  children: ReactNode;
  compact?: boolean;
}) {
  return (
    <details id={`${id}-accordion`} className={`section-accordion${compact ? " section-accordion-compact" : ""}`}>
      <summary aria-controls={`${id}-panel`}>
        <span className="section-accordion-copy">
          {label && <span className="section-accordion-label">{label}</span>}
          <strong className="section-accordion-title">{title}</strong>
          <span className="section-accordion-description">{description}</span>
        </span>
        <span className="section-accordion-action" aria-hidden="true">
          <span className="section-accordion-open">詳細を見る</span>
          <span className="section-accordion-close">閉じる</span>
          <span className="section-accordion-icon" />
        </span>
      </summary>
      <div id={`${id}-panel`} className="section-accordion-panel">{children}</div>
    </details>
  );
}
