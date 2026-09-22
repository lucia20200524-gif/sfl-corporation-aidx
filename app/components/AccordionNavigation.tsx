"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Keep existing deep links useful when their destination is inside closed details.
export function AccordionNavigation() {
  const pathname = usePathname();
  useEffect(() => {
    let frame = 0;
    const revealHash = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!location.hash) return;
        let id: string;
        try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
        const target = document.getElementById(id);
        if (!target) return;
        let element: HTMLElement | null = target;
        let opened = false;
        while (element) {
          if (element instanceof HTMLDetailsElement && !element.open) {
            element.open = true;
            opened = true;
          }
          element = element.parentElement;
        }
        if (opened) target.scrollIntoView({ block: "start" });
      });
    };
    const onClick = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!(link instanceof HTMLAnchorElement) || link.target === "_blank") return;
      const url = new URL(link.href);
      if (url.origin === location.origin && url.pathname === location.pathname && url.hash) revealHash();
    };
    revealHash();
    window.addEventListener("hashchange", revealHash);
    document.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", revealHash);
      document.removeEventListener("click", onClick);
    };
  }, [pathname]);
  return null;
}
