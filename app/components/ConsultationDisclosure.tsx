import type { ReactNode } from "react";

type ConsultationDisclosureProps = {
  id: string;
  label: string;
  title: string;
  description: string;
  number?: string;
  className?: string;
  name?: string;
  children: ReactNode;
};

export function ConsultationDisclosure({ id, label, title, description, number, className = "", name, children }: ConsultationDisclosureProps) {
  return (
    <details id={id} name={name} className={`consultation-disclosure ${className}`}>
      <summary aria-controls={`${id}-content`}>
        {number ? <span className="consultation-step-number" aria-hidden="true">{number}</span> : null}
        <span className="consultation-disclosure-copy">
          <span className="consultation-disclosure-label">{label}</span>
          <span className="consultation-disclosure-title">{title}</span>
          <span className="consultation-disclosure-description">{description}</span>
        </span>
        <span className="consultation-disclosure-action">
          <span className="consultation-disclosure-open-label">詳しく見る</span>
          <span className="consultation-disclosure-close-label">閉じる</span>
          <span className="consultation-disclosure-icon" aria-hidden="true" />
        </span>
      </summary>
      <div id={`${id}-content`} className="consultation-disclosure-content">{children}</div>
    </details>
  );
}
