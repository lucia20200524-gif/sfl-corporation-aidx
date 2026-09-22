"use client";

import { useEffect } from "react";

export function HomeMotion() {
  useEffect(() => {
    const root = document.querySelector(".trust-home");
    if (!root || !("IntersectionObserver" in window) || !("animate" in Element.prototype)) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    const stopAnimations = () => {
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        if (preference.matches || entry.target.contains(document.activeElement)) return;

        // Content is visible by default, including before hydration and without JS.
        const animation = entry.target.animate(
          [{ opacity: 0.45, transform: "translateY(16px)" }, { opacity: 1, transform: "translateY(0)" }],
          { duration: 550, delay: (index % 3) * 70, easing: "cubic-bezier(.2,.65,.3,1)", fill: "backwards" },
        );
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
        animation.oncancel = () => animations.delete(animation);
      });
    }, { threshold: 0.12 });

    root.querySelectorAll("[data-home-reveal]").forEach((element) => observer.observe(element));
    const onPreferenceChange = () => { if (preference.matches) stopAnimations(); };
    preference.addEventListener("change", onPreferenceChange);
    root.addEventListener("focusin", stopAnimations);
    return () => {
      observer.disconnect();
      stopAnimations();
      preference.removeEventListener("change", onPreferenceChange);
      root.removeEventListener("focusin", stopAnimations);
    };
  }, []);

  return null;
}
