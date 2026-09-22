import type { ReactNode } from "react";
import { ConsultationDisclosure } from "./ConsultationDisclosure";
import { ConsultationFlowNav } from "./ConsultationFlowNav";
import { WorkflowSample } from "./WorkflowSample";

const plans = [
  { audience: "個人事業主", detail: "フリーランス", duration: "3時間" },
  { audience: "法人", detail: "企業・組織", duration: "5時間" },
];

export function ConsultationFlow({ titleId, children }: { titleId: string; children?: ReactNode }) {
  return (
    <section id={`${titleId}-accordion`} className="consultation-journey" aria-labelledby={titleId}>
      <header className="consultation-journey-header">
        <h2 id={titleId} className="consultation-journey-heading">
          <span className="consultation-journey-copy">
            <span className="consultation-journey-label">60分・無料</span>
            <span className="consultation-journey-title">まずは無料相談</span>
            <span className="consultation-journey-description">無料相談からご提案まで。進め方は、ご希望に合わせて。</span>
          </span>
        </h2>
      </header>
      <div id={`${titleId}-stages`} className="consultation-journey-content">
        <p className="consultation-journey-intro">個人事業主・フリーランスから法人まで。無料相談の後は、業務整理で現状を可視化することも、直接サービスのご提案・お見積もりへ進むこともできます。</p>
        <ConsultationFlowNav titleId={titleId} />

      <ol className="consultation-steps consultation-stages">
        <li className="consultation-step consultation-step-collapsible">
          <ConsultationDisclosure
            id={`${titleId}-free`}
            name={`${titleId}-stage`}
            className="consultation-disclosure-free"
            number="01"
            label="60分・無料"
            title="無料相談"
            description="現在の業務やお困りごと、実現したいことを伺います。"
          >
            <p className="consultation-free-copy">60分の無料相談で、現在の業務やお困りごと、実現したいことを伺います。相談の段階で、利用するサービスを決めていただく必要はありません。</p>
            <p className="consultation-free-copy">有料の業務整理（02）は必須ではありません。ご希望に合わせて、直接サービスのご提案・お見積もりへ進むこともできます。</p>
          </ConsultationDisclosure>
        </li>
        <li className="consultation-step consultation-step-flow consultation-step-collapsible">
          <ConsultationDisclosure
            id={`${titleId}-workshop`}
            name={`${titleId}-stage`}
            number="02"
            label="希望者向け・有料セッション"
            title="業務整理"
            description="個人事業主：3時間／法人：5時間"
          >
          <div className="consultation-workshop">
            <div className="consultation-workshop-copy">
              <h3>フロー【業務整理】</h3>
              <p>オンライン面談、または訪問で、お客様の現在の業務を詳しくヒアリングします。担当者・使っているツール・作業の順番や受け渡しを整理し、業務フローを可視化することが目的です。</p>
              <p>作成したフロー図をお客様と一緒に確認。そのうえで、AI・DXを活用できそうな箇所や、改善の方向性をアドバイスします。</p>
            </div>
            <div className="consultation-plans">
              {plans.map((plan) => (
                <article className="consultation-plan" key={plan.audience}>
                  <h4>{plan.audience}<small>{plan.detail}</small></h4>
                  <p className="consultation-plan-duration">{plan.duration}</p>
                </article>
              ))}
            </div>
            <div className="consultation-workshop-welcome">
              <p><strong>「フロー【業務整理】」までのご利用も歓迎です。</strong></p>
              <p>作成したフロー図等はプレゼント。その後のサービス・商品のご契約は必須ではありません。</p>
            </div>
          </div>
          </ConsultationDisclosure>
        </li>
        <li className="consultation-step consultation-step-collapsible">
      <ConsultationDisclosure
        id={`${titleId}-sample-disclosure`}
        name={`${titleId}-stage`}
        className="consultation-disclosure-sample"
        number="03"
        label="業務整理後・見本あり"
        title="フロー図の共有・確認"
        description="業務整理で作成した図を一緒に確認。お渡しするフロー図の見本もご覧いただけます。"
      >
        <p className="consultation-sample-intro">担当者・使っているツール・作業の受け渡しを図にまとめ、実際の業務と認識が合っているかを一緒に確認します。改善の方向性を整理し、作成したフロー図をお渡しします。</p>
        <WorkflowSample id={`${titleId}-sample`} />
      </ConsultationDisclosure>
        </li>
        <li className="consultation-step consultation-step-collapsible">
      <ConsultationDisclosure
        id={`${titleId}-optional`}
        name={`${titleId}-stage`}
        className="consultation-disclosure-followup"
        number="04"
        label="01から直接でもOK"
        title="サービスのご提案・お見積もり"
        description="無料相談から直接進めます。ご契約は、内容にご納得いただいてから。"
      >
        <ol className="consultation-next-steps">
        <li className="consultation-step consultation-step-proposal">
          <div>
            <h4>サービス・商品のご提案、お見積もり</h4>
            <p>無料相談や業務整理で伺った課題・ご希望に合わせ、教育・構築・伴走などのサービスをご提案。内容・支援範囲・費用をお見積もりでご案内します。</p>
          </div>
        </li>
        <li className="consultation-step consultation-step-contract">
          <div>
            <h4>内容を確認して、ご契約</h4>
            <p>サービス内容、お見積もり、契約条件をご確認いただき、ご納得いただいたうえで進めます。</p>
          </div>
        </li>
        </ol>
        {children}
      </ConsultationDisclosure>
        </li>
      </ol>
      </div>
    </section>
  );
}
