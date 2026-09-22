"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const overview = {
  tab: "Larkの全体像",
  eyebrow: "01 / PLATFORM OVERVIEW",
  title: "企業向けDX基盤としてのLark",
  description:
    "Larkのチャット・会議・Docs・Baseによる業務の一元化と、企業利用を前提としたセキュリティ基準を1枚でご覧いただけます。",
  src: "/lark-overview-platform.webp",
  alt: "企業向けDX基盤Larkのチャット・会議・Docs・Base、セキュリティ基準、Kazu先生を紹介する資料",
} as const;

export function LarkOverviewGallery() {
  const [isEnlarged, setIsEnlarged] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isEnlarged && !dialog.open) {
      dialog.showModal();
    } else if (!isEnlarged && dialog.open) {
      dialog.close();
    }
  }, [isEnlarged]);

  return (
    <div className="lark-overview-gallery" aria-labelledby="lark-overview-title">
      <div className="lark-overview-intro">
        <div>
          <p className="section-label">ABOUT LARK</p>
          <h3 id="lark-overview-title">企業向けDX基盤「Lark」の全体像を知る。</h3>
        </div>
        <p>
          Larkの全体像を、実際の案内資料でご覧いただけます。
        </p>
      </div>

      <div className="lark-overview-panel">
        <div className="lark-overview-toolbar">
          <div>
            <span>{overview.eyebrow}</span>
            <strong>{overview.title}</strong>
          </div>
          <button onClick={() => setIsEnlarged(true)} type="button">
            大きく表示
            <span aria-hidden="true">↗</span>
          </button>
        </div>

        <div
          aria-label={`${overview.tab}の資料。スマートフォンでは横にスクロールできます。`}
          className="lark-overview-scroll"
          role="region"
          tabIndex={0}
        >
          <div className="lark-overview-canvas">
            <Image
              alt={overview.alt}
              height={994}
              sizes="(max-width: 760px) 980px, (max-width: 1320px) calc(100vw - 96px), 1240px"
              src={overview.src}
              unoptimized
              width={2047}
            />
          </div>
        </div>

        <div className="lark-overview-caption">
          <p>{overview.description}</p>
          <span>
            <i aria-hidden="true">↔</i>
            スマートフォンでは横にスワイプしてご覧ください
          </span>
        </div>
      </div>

      <dialog
        aria-labelledby="lark-image-dialog-title"
        className="lark-image-dialog"
        onCancel={(event) => {
          event.preventDefault();
          setIsEnlarged(false);
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setIsEnlarged(false);
          }
        }}
        onClose={() => setIsEnlarged(false)}
        ref={dialogRef}
      >
        <div className="lark-image-dialog-inner">
          <div className="lark-image-dialog-header">
            <div>
              <span>{overview.eyebrow}</span>
              <h4 id="lark-image-dialog-title">{overview.title}</h4>
            </div>
            <button
              aria-label="拡大表示を閉じる"
              onClick={() => setIsEnlarged(false)}
              type="button"
            >
              閉じる
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div
            aria-label="拡大したLark紹介資料"
            className="lark-image-dialog-scroll"
            role="region"
            tabIndex={0}
          >
            <div className="lark-image-dialog-canvas">
              <Image
                alt={overview.alt}
                height={994}
                sizes="1800px"
                src={overview.src}
                unoptimized
                width={2047}
              />
            </div>
          </div>
          <p>画像は上下・左右に動かして確認できます。</p>
        </div>
      </dialog>
    </div>
  );
}
