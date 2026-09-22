import Image from "next/image";
import Link from "next/link";
import { BusinessTrackRecord } from "./BusinessTrackRecord";

const proofSignals = [
  {
    value: "FINALIST",
    label: "Lark Master 2026",
    note: "Cycle Proで登壇",
  },
  {
    value: "100+",
    label: "Eyelash Salon Lucia",
    note: "月間来店数",
  },
  {
    value: "82%",
    label: "Eyelash Salon Lucia",
    note: "再来率",
  },
];

const coreTeam = [
  {
    code: "01",
    role: "Lark統括・講師",
    focus: "Lark導入設計／講座運営",
  },
  {
    code: "02",
    role: "営業・事業設計・講師",
    focus: "現場ヒアリング／提案設計／実務講座",
  },
  {
    code: "03",
    role: "統括・事務",
    focus: "事務運用／進行支援",
  },
];

const specialists = [
  {
    code: "AI",
    role: "AI・技術支援",
    displayName: "AI顧問チーム",
    focus: "生成AI活用／技術助言",
  },
  {
    code: "LARK",
    role: "Lark研修講師",
    displayName: "Kazu先生",
    focus: <><mark className="sfl-marker">Lark Japan認定者</mark>として実務教育</>,
  },
];

const partnerSupportAreas = [
  {
    code: "AI",
    title: "AI活用サポート",
    text: "生成AIの活用、業務整理、Web制作など、仕事で使うための実務支援。",
  },
  {
    code: "DX",
    title: "Lark・DX運用",
    text: "LarkやBaseを活用し、情報共有や日々の業務を改善する運用支援。",
  },
  {
    code: "FLOW",
    title: "導入後の伴走",
    text: "現場の声を拾い、運用ルールと業務導線を継続的に整えるサポート。",
  },
];

export function ProofRail() {
  return (
    <section className="proof-rail" aria-label="合同会社SFLの主な実績">
      <div className="shell proof-rail-inner">
        <div className="proof-rail-label">
          <span>PROOF IN PRACTICE</span>
          <strong>数字で見るSFL</strong>
        </div>
        <div className="proof-rail-grid">
          {proofSignals.map((item) => (
            <article key={item.label + item.value}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
              <small>{item.note}</small>
            </article>
          ))}
        </div>
        <Link href="/company#people">
          実績と支援体制を見る
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

type PeopleAndProofProps = {
  context?: "home" | "company";
};

export function PeopleAndProof({
  context = "home",
}: PeopleAndProofProps) {
  const isCompany = context === "company";

  return (
    <section
      className={`people-proof${isCompany ? " people-proof-company" : ""}`}
      id="people"
      aria-labelledby={`${context}-people-proof-title`}
    >
      <div className="shell">
        <div className="people-proof-heading">
          <div>
            <p className="section-label">PEOPLE &amp; PROOF</p>
            <h2 id={`${context}-people-proof-title`}>
              実績の数字だけでなく、
              <br />
              支援体制まで見える。
            </h2>
          </div>
          <p>
            SFLは、代表が相談内容を確認し、Lark・AI・事業設計・実務運用の担当を編成します。
            ご相談内容に合う専門性を組み合わせ、担当領域と役割を明らかにします。
          </p>
        </div>

        <div className="people-proof-feature-grid">
          <article className="representative-story">
            <figure>
              <Image
                src="/representative-mio-profile.jpeg"
                alt="合同会社SFL 代表社員 大城未緒"
                fill
                sizes="(max-width: 820px) 100vw, 40vw"
                unoptimized
              />
            </figure>
            <div>
              <span>REPRESENTATIVE / PROJECT GATEWAY</span>
              <p>代表社員</p>
              <h3>大城 未緒</h3>
              <strong>案件の入口と、チーム全体の統括。</strong>
              <p>
                ご相談の背景と目的を確認し、領域に合う担当者・連携先へつなぎます。
                美容サロン向け業務改善システム「Cycle Pro」をLark Master
                2026で発表し、ファイナリストに選出されました。
              </p>
            </div>
          </article>

          <article className="master-proof-story">
            <figure>
              <Image
                src="/lark-master-2026-event.webp"
                alt="2026年6月19日に渋谷ヒカリエで開催されたLark Master 2026会場"
                fill
                sizes="(max-width: 820px) 100vw, 50vw"
                unoptimized
              />
            </figure>
            <div>
              <span>2026.06.19 / SHIBUYA HIKARIE</span>
              <strong>LARK MASTER 2026</strong>
              <h3>Cycle Proでファイナリストに選出。</h3>
              <p>
                Eyelash Salon Luciaの現場運用から生まれた仕組みを、実装事例として発表しました。
              </p>
              <Link href="/case-study#lucia-case">
                アイラッシュサロン導入事例を見る
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        </div>

        <div className="people-proof-results" aria-label="主な活動実績">
          {proofSignals.map((item, index) => (
            <article key={item.label + item.value}>
              <span>0{index + 1}</span>
              <strong>{item.value}</strong>
              <h3>{item.label}</h3>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
        <p className="people-proof-note">
          ※ Luciaの数値は2026年8月8日時点の店舗運営実績です。再来率82%、キャンセル率4%、平均来店周期5週、月間来店数100名超。指標ごとに集計条件は異なり、同様の成果を保証するものではありません。
        </p>

        {isCompany && <BusinessTrackRecord titleId="company-track-record-title" />}

        <div className="team-heading">
          <div>
            <p className="section-label">PROJECT TEAM &amp; SPECIALISTS</p>
            <h2>相談内容に合わせて、担当を編成。</h2>
          </div>
          <p>
            一人ですべてを抱えるのではなく、それぞれの専門領域をつなぎます。
            各担当の役割を明確にし、ご相談内容に合う体制を組みます。
          </p>
        </div>

        <div className="team-group" aria-labelledby={`${context}-core-team-title`}>
          <div className="team-group-label">
            <span>01</span>
            <h3 id={`${context}-core-team-title`}>CORE TEAM</h3>
            <p>事業設計・Lark・運用・進行</p>
          </div>
          <div className="team-member-grid">
            {coreTeam.map((member) => (
              <article className="team-member-card" key={member.role}>
                <span className="team-member-initials" aria-hidden="true">
                  {member.code}
                </span>
                <div>
                  <p>担当領域</p>
                  <h4>{member.role}</h4>
                  <span>{member.focus}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="team-group" aria-labelledby={`${context}-specialist-team-title`}>
          <div className="team-group-label">
            <span>02</span>
            <h3 id={`${context}-specialist-team-title`}>SPECIALISTS</h3>
            <p>AI・Lark実務教育</p>
          </div>
          <div className="team-member-grid team-member-grid-specialists">
            {specialists.map((member) => (
              <article className="team-member-card" key={member.role}>
                <span className="team-member-initials" aria-hidden="true">
                  {member.code}
                </span>
                <div>
                  <p>{member.role}</p>
                  <h4>{member.displayName ?? member.role}</h4>
                  <span>{member.focus}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div
          className="certified-partner-panel"
          aria-labelledby={`${context}-certified-partner-title`}
        >
          <div className="certified-partner-copy">
            <p>SFL COURSE GRADUATE PARTNER NETWORK</p>
            <span>講座卒業後の実務フィールド</span>
            <h3 id={`${context}-certified-partner-title`}>
              講座卒業生が、
              <br />
              <span className="certified-partner-title-key">SFL講座修了パートナー</span>として
              <br />
              AI・DXをサポート。
            </h3>
            <p>
              SFLの講座を修了した卒業生が、現場の課題に合わせてAI活用、
              Lark・DX運用、Web・業務導線などの実務支援を行います。
              必要に応じてSFL本部や専門担当と連携し、相談から実行まで支えます。
            </p>
          </div>

          <div className="certified-partner-areas" aria-label="SFL講座修了パートナーの主な支援領域">
            {partnerSupportAreas.map((area) => (
              <article key={area.code}>
                <span>{area.code}</span>
                <h4>{area.title}</h4>
                <p>{area.text}</p>
              </article>
            ))}
          </div>

          <p className="certified-partner-disclaimer">
            ※「SFL講座修了パートナー」はSFLの講座修了者を示す名称です。Lark Japan、OpenAIその他のサービス提供企業による公式認定を示すものではありません。担当範囲はパートナーごとに異なります。
          </p>
        </div>

        <p className="team-formation-note">
          ※ 担当者・体制は、ご相談内容と支援範囲に応じて編成します。Lark Japanの認定はKazu先生個人に付与されたもので、合同会社SFL自体の公式認定を示すものではありません。
        </p>

        {!isCompany ? (
          <div className="people-proof-link-row">
            <Link className="button button-primary" href="/company#people">
              支援体制と会社情報を見る
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
