"use client";

import { useEffect, useState } from "react";

type StageLink = { id: string; panelId: string; title: string; note: string };

export function StageNavigation({ rootId, label, items, branches = false }: {
  rootId: string;
  label: string;
  items: StageLink[];
  branches?: boolean;
}) {
  const [openIds, setOpenIds] = useState<string[]>([]);

  useEffect(() => {
    const root = document.getElementById(rootId);
    if (!root) return;
    const sync = () => setOpenIds(items.filter(({ id }) => {
      const target = document.getElementById(id);
      return target instanceof HTMLDetailsElement && target.open;
    }).map(({ id }) => id));
    sync();
    root.addEventListener("toggle", sync, true);
    return () => root.removeEventListener("toggle", sync, true);
  }, [rootId, items]);

  const List = branches ? "ul" : "ol";
  return (
    <nav className={`sfl-stage-navigation${branches ? " sfl-purpose-navigation" : ""}`} aria-label={label}>
      {branches ? <p className="sfl-purpose-root">どのようなことを実現したいですか？</p> : null}
      <List className={branches ? "sfl-purpose-branches" : "consultation-flow-overview"}>
        {items.map((item, index) => (
          <li key={item.id}>
            <a className={branches ? "sfl-purpose-link" : "consultation-flow-link"} href={`#${item.id}`} aria-controls={item.panelId} aria-expanded={openIds.includes(item.id)}>
              {branches ? null : <span className="consultation-flow-number"><small>STEP</small>{String(index + 1).padStart(2, "0")}</span>}
              <span className="consultation-flow-stage-copy"><strong>{item.title}</strong><small>{item.note}</small></span>
              {branches ? <span aria-hidden="true">↓</span> : null}
            </a>
          </li>
        ))}
      </List>
    </nav>
  );
}
