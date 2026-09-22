"use client";

import { useEffect, useState } from "react";

const stages = [
  { suffix: "free", number: "01", title: "無料相談", note: "60分・無料" },
  { suffix: "workshop", number: "02", title: "業務整理", note: "希望者向け・有料" },
  { suffix: "sample-disclosure", number: "03", title: "フロー図の共有・確認", note: "業務整理後・見本あり" },
  { suffix: "optional", number: "04", title: "ご提案・お見積もり", note: "無料相談から直接でもOK" },
];

export function ConsultationFlowNav({ titleId }: { titleId: string }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const journey = document.getElementById(`${titleId}-accordion`);
    if (!journey) return;
    const sync = () => {
      const current = journey.querySelector<HTMLDetailsElement>(".consultation-disclosure[open]");
      setActiveId(current?.id ?? null);
    };
    sync();
    journey.addEventListener("toggle", sync, true);
    return () => journey.removeEventListener("toggle", sync, true);
  }, [titleId]);

  return (
    <nav className="consultation-flow-nav" aria-label="無料相談からご提案までの4ステージ">
      <p className="consultation-flow-hint">各ステージを選ぶと、詳しい内容をご覧いただけます。</p>
      <ol className="consultation-flow-overview">
        {stages.map((stage) => {
          const id = `${titleId}-${stage.suffix}`;
          return (
            <li key={stage.suffix}>
              <a href={`#${id}`} className="consultation-flow-link" aria-controls={`${id}-content`} aria-expanded={activeId === id}>
                <span className="consultation-flow-number"><small>STEP</small>{stage.number}</span>
                <span className="consultation-flow-stage-copy"><strong>{stage.title}</strong><small>{stage.note}</small></span>
              </a>
            </li>
          );
        })}
      </ol>
      <a className="consultation-flow-shortcut" href={`#${titleId}-optional`} aria-controls={`${titleId}-optional-content`}>
        <span className="consultation-flow-shortcut-numbers">01 <span aria-hidden="true">→</span> 04</span>
        <span><strong>無料相談から、直接ご提案へ</strong><small>02・03はご希望に応じて。業務整理は必須ではありません。</small></span>
        <span className="consultation-flow-shortcut-arrow" aria-hidden="true">→</span>
      </a>
    </nav>
  );
}
