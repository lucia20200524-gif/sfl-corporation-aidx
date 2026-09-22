"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { calculateReskillingEstimate, subsidyProfiles, TRAINING_FEE_PER_PERSON, type CompanySize } from "../lib/reskilling";

const yenFormatter = new Intl.NumberFormat("ja-JP");

function formatYen(value: number) {
  return `${yenFormatter.format(value)}円`;
}

export function ReskillingSimulator() {
  const [companySize, setCompanySize] = useState<CompanySize>("small");
  const [participants, setParticipants] = useState(1);

  const estimate = useMemo(
    () => calculateReskillingEstimate(companySize, participants),
    [companySize, participants],
  );

  return (
    <section className="reskilling-simulator" aria-labelledby="reskilling-simulator-title">
      <div className="reskilling-simulator-heading">
        <div>
          <span>RESKILLING SUBSIDY SIMULATOR</span>
          <h3 id="reskilling-simulator-title">リスキリング助成シミュレーション</h3>
        </div>
        <p>人材開発支援助成金（事業展開等リスキリング支援コース）が適用された場合の目安です。対面・同時双方向型のオンライン研修を前提に、研修費の負担と別途の賃金助成を試算します。</p>
      </div>

      <div className="reskilling-simulator-body">
        <div className="reskilling-simulator-controls">
          <fieldset>
            <legend>企業区分</legend>
            <div className="reskilling-company-buttons">
              {(Object.keys(subsidyProfiles) as CompanySize[]).map((size) => (
                <button
                  key={size}
                  type="button"
                  aria-pressed={companySize === size}
                  className={companySize === size ? "is-active" : ""}
                  onClick={() => setCompanySize(size)}
                  data-analytics-event="subsidy_simulator_use"
                >
                  {subsidyProfiles[size].label}
                </button>
              ))}
            </div>
          </fieldset>

          <label className="reskilling-range-control">
            <span>受講人数 <output>{participants}名</output></span>
            <input
              type="range"
              aria-label="受講人数"
              aria-valuetext={`${participants}名`}
              min="1"
              max="5"
              step="1"
              value={participants}
              onChange={(event) => setParticipants(Number(event.target.value))}
              data-analytics-event="subsidy_simulator_use"
            />
            <small><span>1名</span><span>最大5名</span></small>
          </label>

          <div className="reskilling-fixed-hours" aria-label="賃金助成の対象時間 15時間固定">
            <span>賃金助成の対象時間</span>
            <strong>15時間</strong>
            <small>3時間×5コマ・15時間固定</small>
            <small>全15時間が所定労働時間内で対象になる場合</small>
          </div>

          <dl className="reskilling-simulator-basis">
            <div><dt>研修費</dt><dd>{formatYen(TRAINING_FEE_PER_PERSON)}／人（税別）</dd></div>
            <div><dt>研修時間</dt><dd>3時間×5コマ・計15時間</dd></div>
            <div><dt>経費助成率</dt><dd>{estimate.profile.expenseRate * 100}%</dd></div>
            <div><dt>1人あたり上限</dt><dd>{formatYen(estimate.profile.expenseCap)}</dd></div>
            <div><dt>賃金助成単価</dt><dd>{formatYen(estimate.profile.wageRate)}／時間</dd></div>
          </dl>
        </div>

        <div className="reskilling-simulator-results" aria-live="polite">
          <div className="reskilling-net-burden">
            <span>研修費の負担目安（税抜ベース）</span>
            <strong>{formatYen(estimate.tuitionBurden)}</strong>
            <small>1人あたり {formatYen(estimate.tuitionBurdenPerPerson)}</small>
          </div>

          <dl className="reskilling-result-grid">
            <div><dt>研修費合計（税抜）</dt><dd>{formatYen(estimate.trainingFee)}</dd></div>
            <div><dt>経費助成見込</dt><dd>− {formatYen(estimate.expenseAid)}</dd></div>
            <div className="is-total"><dt>研修費の負担目安</dt><dd>{formatYen(estimate.tuitionBurden)}</dd></div>
          </dl>

          <div className="reskilling-wage-support">
            <span>別途、賃金助成見込</span>
            <strong>{formatYen(estimate.wageAid)}</strong>
            <small>1人あたり {formatYen(estimate.wageAidPerPerson)}／対象15時間</small>
            <p>研修中に支払う給与への助成です。上記の研修費負担には差し引いていません。</p>
          </div>

          <div className="reskilling-cashflow-note">
            <span>先に必要な支払い</span>
            <p>支給申請までに研修費全額を支払い、審査後に助成金が支給される流れです。</p>
          </div>
        </div>
      </div>

      <div className="reskilling-simulator-notes">
        <p>※2026年9月7日確認（厚生労働省・2026年8月3日版）。税抜受講料を基にした参考試算で、消費税・従業員への実際の給与・申請費用等は含みません。消費税を対象経費に含める場合の支給額は別途算定します。賃金助成は全15時間が所定労働時間内のOFF-JTとして対象となる前提です。</p>
        <p>※eラーニング・通信制はこの試算の対象外です。経費助成の1人あたり上限は中小企業15万円・大企業10万円で、賃金助成はありません。これらを組み合わせた訓練にも、この経費助成上限が適用されます。</p>
        <p>※具体的な職務に直接関連する10時間以上のOFF-JT、雇用保険適用事業所・雇用保険被保険者、DX等に関する計画、原則として訓練開始1か月前までの計画提出などが必要です。SFLの研修が一律に助成対象となるものではなく、助成の可否・対象経費・支給額は管轄労働局の審査で決定されます。</p>
      </div>

      <div className="reskilling-simulator-actions">
        <a href="https://www.mhlw.go.jp/content/11800000/001731978.pdf" target="_blank" rel="noopener noreferrer">
          厚生労働省の案内（2026年8月3日版）<span aria-hidden="true">↗</span>
        </a>
        <Link href="/contact">60分無料相談で確認する<span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}
