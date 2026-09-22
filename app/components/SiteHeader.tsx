"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const navigation = [
  { href: "/services", label: "事業紹介" },
  { href: "/case-study", label: "実績・事例" },
  { href: "/company", label: "会社案内" },
  { href: "/instructors", label: "支援体制" },
  { href: "/reskilling-subsidy-simulator", label: "助成金試算" },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const mobileMenuId = "sfl-mobile-navigation";

  const closeMobileMenu = () => setMobileMenuOpen(false);
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [mobileMenuOpen]);

  return (
    <header className="site-header">
        <a className="brand" href="/" aria-label="合同会社SFL ホーム">
          <span className="brand-logo">
            <Image
              src="/sfl-logo-20260907.jpg"
              alt=""
              width={1080}
              height={1080}
              priority
              unoptimized
            />
          </span>
          <span className="brand-copy">
            <strong>合同会社SFL</strong>
            <small>Lark導入・業務改善・DX支援</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="メインナビゲーション">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href} aria-current={pathname === item.href ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
          <a
            className="desktop-note-button"
            href="https://note.com/sfl_lark_dx_ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            公式note
            <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <Link className="header-contact" href="/contact">
          60分無料相談
          <span aria-hidden="true">→</span>
        </Link>

        <div className={`mobile-menu${mobileMenuOpen ? " is-open" : ""}`}>
          <button
            ref={menuButtonRef}
            className="mobile-menu-trigger"
            type="button"
            aria-label={mobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={mobileMenuOpen}
            aria-controls={mobileMenuId}
            onClick={() => setMobileMenuOpen((current) => !current)}
          >
            <span />
            <span />
          </button>
          <nav
            id={mobileMenuId}
            aria-label="モバイルナビゲーション"
            hidden={!mobileMenuOpen}
          >
            {navigation.map((item) => (
              <Link href={item.href} key={item.href} onClick={closeMobileMenu} aria-current={pathname === item.href ? "page" : undefined}>
                {item.label}
                <span aria-hidden="true">→</span>
              </Link>
            ))}
            <a
              href="https://note.com/sfl_lark_dx_ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              SFL公式note
              <span aria-hidden="true">↗</span>
            </a>
            <Link className="mobile-line-link" href="/contact" onClick={closeMobileMenu}>
              60分無料相談
              <span aria-hidden="true">→</span>
            </Link>
          </nav>
        </div>
      </header>
  );
}
