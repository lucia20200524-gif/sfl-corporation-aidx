"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const DIGITAL_AI_DEADLINE = "2026-08-25T17:00:00+09:00";
const BUSINESS_IMPROVEMENT_START = "2026-09-01T00:00:00+09:00";
const DAY_IN_MS = 24 * 60 * 60 * 1000;

type RemainingTime = {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getRemainingTime(target: string): RemainingTime {
  const total = Math.max(0, new Date(target).getTime() - Date.now());
  const days = Math.floor(total / DAY_IN_MS);
  const hours = Math.floor((total / (60 * 60 * 1000)) % 24);
  const minutes = Math.floor((total / (60 * 1000)) % 60);
  const seconds = Math.floor((total / 1000) % 60);

  return { total, days, hours, minutes, seconds };
}

function useCountdown(target: string) {
  const [remaining, setRemaining] = useState<RemainingTime | null>(null);

  useEffect(() => {
    const update = () => setRemaining(getRemainingTime(target));
    update();
    const timer = window.setInterval(update, 1000);

    return () => window.clearInterval(timer);
  }, [target]);

  return remaining;
}

function DeadlineClock() {
  const remaining = useCountdown(DIGITAL_AI_DEADLINE);

  if (remaining?.total === 0) {
    return <strong className="grant-countdown-complete">4次締切は終了しました</strong>;
  }

  const units = [
    { label: "日", value: remaining?.days },
    { label: "時間", value: remaining?.hours },
    { label: "分", value: remaining?.minutes },
    { label: "秒", value: remaining?.seconds },
  ];

  return (
    <div
      className="grant-countdown-clock"
      aria-label="2026年8月25日17時の締切までの残り時間"
    >
      {units.map((unit) => (
        <span key={unit.label}>
          <strong>{unit.value === undefined ? "--" : String(unit.value).padStart(2, "0")}</strong>
          <small>{unit.label}</small>
        </span>
      ))}
    </div>
  );
}

function OpeningDayCountdown() {
  const remaining = useCountdown(BUSINESS_IMPROVEMENT_START);

  if (remaining?.total === 0) {
    return <strong className="grant-countdown-complete">受付開始済み</strong>;
  }

  const calendarDays = remaining ? Math.ceil(remaining.total / DAY_IN_MS) : null;

  return (
    <div
      className="grant-countdown-days"
      aria-label="2026年9月1日の受付開始日までの日数"
    >
      <span>あと</span>
      <strong>{calendarDays ?? "--"}</strong>
      <small>日</small>
    </div>
  );
}

export function GrantTopNews() {
  return (
    <aside
      className="grant-top-news"
      aria-label="補助金・助成金の最新申請スケジュール"
    >
      <div className="shell grant-top-news-inner">
        <div className="grant-top-news-heading">
          <div className="grant-top-news-label">
            <span>TOP NEWS</span>
            <strong>
              <i aria-hidden="true" />
              申請スケジュール
            </strong>
          </div>
          <p>2026.08.08時点の公式発表に基づく日程</p>
        </div>

        <div className="grant-countdown-grid">
          <article className="grant-countdown-card grant-countdown-card-digital">
            <div className="grant-countdown-copy">
              <span>SUBSIDY / 4TH DEADLINE</span>
              <strong className="grant-countdown-title">
                デジタル化・AI導入補助金2026
              </strong>
              <time dateTime={DIGITAL_AI_DEADLINE}>
                通常枠4次｜2026.08.25（火）17:00締切
              </time>
            </div>
            <DeadlineClock />
            <Link
              aria-label="デジタル化・AI導入補助金2026の詳細"
              href="/lark-dx#digital-ai-subsidy"
            >
              詳細
              <span aria-hidden="true">→</span>
            </Link>
          </article>

          <article className="grant-countdown-card grant-countdown-card-business">
            <div className="grant-countdown-copy">
              <span>GRANT / APPLICATION OPENS</span>
              <strong className="grant-countdown-title">
                令和8年度 業務改善助成金
              </strong>
              <time dateTime="2026-09-01">2026.09.01（火）受付開始</time>
            </div>
            <OpeningDayCountdown />
            <Link
              aria-label="令和8年度業務改善助成金の詳細"
              href="/lark-dx#business-improvement-grant"
            >
              詳細
              <span aria-hidden="true">→</span>
            </Link>
          </article>
        </div>

        <p className="grant-top-news-note">
          ※業務改善助成金は受付開始時刻が公表されていないため、日数で表示しています。
        </p>
      </div>
    </aside>
  );
}
