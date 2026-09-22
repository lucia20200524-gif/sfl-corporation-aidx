"use client";

import Link from "next/link";
import { type KeyboardEvent, useRef, useState } from "react";
import { LarkProductMark } from "./LarkBrand";
import { LarkTrainingLink } from "./LarkTrainingLink";
import { LearningJourney } from "./LearningJourney";
import { SFL_AI_COURSE_URL, SFL_PROCUREMENT_COURSE_URL } from "../courses";

type TrainingAudience = "corporate" | "individual";

type TrainingProgram = {
  code: string;
  category: string;
  title: string;
  lead: string;
  text: string;
  tags: string[];
  href: string;
  action: string;
  usesLark?: boolean;
};

const corporatePrograms: TrainingProgram[] = [
  {
    code: "01",
    category: "DX EMPLOYEE / LARK",
    usesLark: true,
    title: "DX社員育成｜Lark・DX実務研修",
    lead: "現場の課題を整理し、Larkで改善を続けられる社員へ。",
    text: "法人向けリスキリングとして、Larkの基本操作から業務整理、Base設計、運用ルールまで、自社業務を題材に実践します。研修の詳細は、専用ページの「Lark研修」でご確認いただけます。",
    tags: ["3時間×5コマ", "事前ヒアリングで内容調整", "15時間 360,000円（税別）", "研修後1か月無料伴走", "1名あたりの料金・最大5名"],
    href: "/lark-dx#course",
    action: "法人向けLark・DX研修の詳細を見る",
  },
];

function ProgramCards({
  programs,
}: {
  programs: TrainingProgram[];
}) {
  return (
    <div className={`trust-program-grid${programs.length === 1 ? " trust-program-grid-single" : programs.length === 2 ? " trust-program-grid-two" : ""}`}>
      {programs.map((program) => (
        <article key={program.code}>
          <div className="trust-program-topline">
            <span>{program.code}</span>
            <small>{program.category}</small>
          </div>
          {program.usesLark ? <div className="training-tool-mark"><LarkProductMark /></div> : null}
          <h3>{program.title}</h3>
          <strong>{program.lead}</strong>
          <p>{program.text}</p>
          <ul>
            {program.tags.map((tag) => <li className={tag.includes("360,000円") ? "program-fee" : undefined} key={tag}>{tag}</li>)}
          </ul>
          {program.usesLark ? <LarkTrainingLink /> : <Link href={program.href}>{program.action}<span aria-hidden="true">→</span></Link>}
        </article>
      ))}
    </div>
  );
}

export function TrainingProgramTabs() {
  const [activeTab, setActiveTab] = useState<TrainingAudience>("corporate");
  const corporateTabRef = useRef<HTMLButtonElement>(null);
  const individualTabRef = useRef<HTMLButtonElement>(null);

  const activateTab = (tab: TrainingAudience, moveFocus = false) => {
    setActiveTab(tab);
    if (moveFocus) {
      const target = tab === "corporate" ? corporateTabRef : individualTabRef;
      target.current?.focus({ preventScroll: true });
    }
  };

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      event.preventDefault();
      activateTab(event.key === "ArrowLeft" || event.key === "Home" ? "corporate" : "individual", true);
    }
  };

  return (
    <div className={`training-tabs training-tabs-${activeTab}`} data-audience={activeTab}>
      <div className="training-tab-list" role="tablist" aria-label="研修対象を選択" aria-orientation="horizontal">
        <button
          ref={corporateTabRef}
          id="training-tab-corporate"
          type="button"
          role="tab"
          aria-selected={activeTab === "corporate"}
          aria-controls="training-panel-corporate"
          tabIndex={activeTab === "corporate" ? 0 : -1}
          className={activeTab === "corporate" ? "is-active" : ""}
          onClick={() => activateTab("corporate")}
          onKeyDown={handleTabKeyDown}
        >
          <span>FOR COMPANIES</span>
          <strong>法人向け研修</strong>
          <small>DX社員育成・リスキリング</small>
        </button>
        <button
          ref={individualTabRef}
          id="training-tab-individual"
          type="button"
          role="tab"
          aria-selected={activeTab === "individual"}
          aria-controls="training-panel-individual"
          tabIndex={activeTab === "individual" ? 0 : -1}
          className={activeTab === "individual" ? "is-active" : ""}
          onClick={() => activateTab("individual")}
          onKeyDown={handleTabKeyDown}
        >
          <span>FOR INDIVIDUALS</span>
          <strong>個人向け講座</strong>
          <small>スキル習得・仕事での活用</small>
        </button>
      </div>

      <section
        id="training-panel-corporate"
        role="tabpanel"
        aria-labelledby="training-tab-corporate"
        hidden={activeTab !== "corporate"}
        className="training-tab-panel"
      >
        <div className="training-tab-intro">
          <div>
            <span>DX EMPLOYEE DEVELOPMENT</span>
            <h3>自社の業務を題材に、15時間で実践する。</h3>
          </div>
          <p>事前ヒアリングで、3時間×5コマの内容を調整。研修後1か月は、月2回の面談とサポートデスクで社内定着を支えます。</p>
        </div>
        <p className="training-dx-definition">※SFLでは「DX社員」を、特定の資格名ではなく、現場の課題をデジタルで整理・改善し、社内で運用を続けられる人材を表す言葉として使用しています。</p>
        <LearningJourney id="home-corporate-journey" audience="corporate" />
        <ProgramCards programs={corporatePrograms} />
        <section className="reskilling-summary" aria-labelledby="reskilling-summary-title">
          <div>
            <span>RESKILLING SUBSIDY / QUICK ESTIMATE</span>
            <h3 id="reskilling-summary-title">人材開発支援助成金の費用目安</h3>
            <p>中小企業・1名・15時間の対面・同時双方向型オンライン研修が対象となる場合、経費助成率75％で研修費の負担目安は90,000円（税抜ベース）です。</p>
            <p className="reskilling-summary-wage">別途、賃金助成15,000円。全15時間が所定労働時間内で対象となる場合の、給与への助成です。</p>
          </div>
          <dl>
            <div><dt>研修費（税抜）</dt><dd>360,000円</dd></div>
            <div><dt>経費助成</dt><dd>270,000円</dd></div>
            <div><dt>負担目安</dt><dd>90,000円</dd></div>
          </dl>
          <Link href="/reskilling-subsidy-simulator" data-analytics-event="subsidy_simulator_open">人材開発支援助成金の費用を試算する<span aria-hidden="true">→</span></Link>
          <small>※消費税・実際の給与・申請費用等は含みません。受給を保証するものではありません。研修形態などの適用条件と根拠資料は専用ページでご確認ください。</small>
        </section>
      </section>

      <section
        id="training-panel-individual"
        role="tabpanel"
        aria-labelledby="training-tab-individual"
        hidden={activeTab !== "individual"}
        className="training-tab-panel"
      >
        <div className="training-tab-intro">
          <div>
            <span>INDIVIDUAL SKILL DEVELOPMENT</span>
            <h3>仕事につながる実務力を育てる、個人向け講座。</h3>
          </div>
          <p>個人向け講座は、勤務先の人材育成計画に基づく法人研修とは別のサービスです。自分の仕事や案件獲得に必要なスキルを、目的別に学びます。</p>
        </div>
        <div className="training-individual-panel training-individual-summary">
          <div>
            <span>INDIVIDUAL COURSES</span>
            <strong>Lark・Webアプリ・官公庁入札を、目的別に学ぶ。</strong>
          </div>
          <p><Link href="/lark-dx#individual-course">SFL Lark導入講座</Link>や、初心者向けの<a href={SFL_AI_COURSE_URL} target="_blank" rel="noopener noreferrer">SFL AI導入講座</a>をご案内しています。SFL Lark導入講座は0期生終了・1期生進行中で、次回は2期生募集です。SFL AI導入講座は2026年10月開始。ChatGPTを使う体験編4時間のみの参加も可能。希望者は、Codexで保存機能の実装・公開を学ぶ仕事編6時間へ進めます。<a href={SFL_PROCUREMENT_COURSE_URL} target="_blank" rel="noopener noreferrer">SFL 官公庁入札講座の案内</a>もご覧いただけます。官公庁入札講座も2026年10月開始です。受講後にSFL Academyへ加入すると、各講座のアーカイブを使って学習を続けられます。</p>
          <Link href="/services#learning-academy">個人向け実務講座の一覧を見る<span aria-hidden="true">→</span></Link>
        </div>
        <LearningJourney id="home-individual-journey" audience="individual" />
      </section>
    </div>
  );
}
