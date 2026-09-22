import { SectionAccordion } from "../components/SectionAccordion";
import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ConsultationLink } from "../components/ConsultationLink";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import {
  organizationReference,
  breadcrumbSchema,
  pageSocialMetadata,
} from "../seo";

const pageTitle = "AI導入セットアップ｜Claude Code・Codex×Lark";
const pageDescription =
  "Claude Code・CodexとLarkの連携を始めたい方へ。合同会社SFLが、導入・認証・権限設定・ターミナルの基本操作をオンラインで支援。ご自身のPCでAIを使い始めるための初期環境を整えます。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/ai-setup",
  },
  keywords: [
    "Claude Code Codex Lark連携",
    "AI初期設定支援",
    "Lark AI連携",
    "Claude Code セットアップ",
    "Codex セットアップ",
    "Lark Channel Bridge",
    "全国オンライン AI導入支援",
  ],
  ...pageSocialMetadata(pageTitle, pageDescription, "/ai-setup"),
};

const tools = [
  {
    logo: "/logo-claude-code-official.svg",
    logoAlt: "Claude Code公式ロゴ",
    name: "Claude Code",
    text: "ターミナルで動くAI",
  },
  {
    logo: "/logo-codex-official.png",
    logoAlt: "Codex公式ロゴ",
    name: "Codex",
    text: "コーディング特化AI",
  },
  {
    logo: "/logo-lark-official.png",
    logoAlt: "Lark",
    name: "Lark-CLI",
    text: "Larkをコマンド操作",
  },
  { icon: "↗", name: "Channel Bridge", text: "チャットからAIを呼び出し" },
];

const problems = [
  {
    icon: "!",
    title: "契約したのに手つかず",
    text: "アカウントは作ったものの、入れ方が分からずそのままになっている。",
  },
  {
    icon: "⌨",
    title: "黒い画面に抵抗がある",
    text: "コマンドを入力する画面（ターミナル）に慣れておらず、操作に不安がある。",
  },
  {
    icon: "×",
    title: "権限エラーで詰まる",
    text: "エラーの意味や安全な権限設定が分からず、そこで進まなくなる。",
  },
  {
    icon: "↗",
    title: "外出先から使えない",
    text: "PCの前にいないと使えず、現場やスマホからAIに頼れない。",
  },
];

const setupItems = [
  "お客様のPCにClaude Code／Codexを導入し、認証を支援",
  "Lark-CLIをセットアップし、接続先と必要な権限を確認",
  "Lark Channel Bridgeを導入し、Larkチャットからの動作を確認",
  "ターミナルの起動やコマンド入力など、基本操作を一緒に練習",
];

const included = [
  "Claude Code／Codexのインストールと認証",
  "Lark-CLIのセットアップと権限まわりの整理",
  "Lark Channel Bridgeの導入とチャット連携の動作確認",
  "ターミナルの基本操作（起動・コマンド入力など）",
  "3か月間のアフターサポート",
];

const excluded = [
  "「こんなアプリを作りたい」という企画・要件整理",
  "具体的な実装ロジックやコードの指導",
  "業務システムとしての継続的な開発・保守",
];

const flow = [
  {
    title: "お申し込み・事前準備",
    text: "PC環境と必要な権限を確認し、各種アカウントの作成や、OSに応じた準備をご案内します。",
  },
  {
    title: "2時間のセットアップ",
    text: "4つのツールの導入・認証と、ターミナルの基本操作を一緒に進めます。",
  },
  {
    title: "動作確認",
    text: "実際にLarkのチャットからAIを呼び出せることを確認します。",
  },
  {
    title: "3か月アフターサポート",
    text: "認証切れ・不具合・権限追加や移行について、継続して相談できます。",
  },
];

const recommended = [
  {
    title: "まず自分のPCで動かしてみたい方",
    text: "使い方の説明より先に、実際に動く状態をつくってから理解したい方に。",
  },
  {
    title: "ターミナルに苦手意識がある方",
    text: "黒い画面の操作を、一からゆっくり練習しながら覚えたい方に。",
  },
  {
    title: "社内のAI活用窓口になりたい方",
    text: "Lark運用の担当者として、AIとの連携を任されている・任されそうな方に。",
  },
];

const faqs = [
  {
    q: "パソコンの操作が苦手でも大丈夫ですか？",
    a: "ターミナルの基本操作から画面共有で一緒に進めます。初めての方も、事前にPC環境と準備事項を確認したうえでご案内します。",
  },
  {
    q: "Mac・Windowsどちらでも対応できますか？",
    a: "どちらも対応しています。Windowsの場合はWSL2を使う前提でご案内します。",
  },
  {
    q: "どんなアプリが作れるか教えてもらえますか？",
    a: "本サービスは環境構築とターミナル操作の習得までが対象です。具体的なアプリの企画や実装は、別メニューでご相談いただけます。",
  },
  {
    q: "3か月のサポート期間が終わったらどうなりますか？",
    a: "期間終了後も、継続サポートや都度のご相談として引き続き対応可能です。終了前にご案内します。",
  },
  {
    q: "オンラインでの対応は可能ですか？",
    a: "オンラインで対応します。画面共有をしながら、お客様のPCで設定と動作確認を進めます。",
  },
];

const aiSetupServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Claude Code・Codex×Lark連携 初期設定支援",
  description: pageDescription,
  provider: organizationReference,
  areaServed: "JP",
  serviceType: [
    "Claude Code初期設定",
    "Codex初期設定",
    "Lark-CLIセットアップ",
    "Lark Channel Bridge連携",
    "ターミナル操作支援",
  ],
  offers: {
    "@type": "Offer",
    price: "99000",
    priceCurrency: "JPY",
    url: "https://sfl-corporation-aidx.lucia20200524.chatgpt.site/ai-setup#price",
  },
};

const aiSetupFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const breadcrumbs = breadcrumbSchema([
  { name: "ホーム", path: "/" },
  { name: "Claude Code・Codex×Lark連携", path: "/ai-setup" },
]);

export default function AiSetupPage() {
  return (
    <>
      <SiteHeader />
      <main className="ai-setup-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              aiSetupServiceSchema,
              aiSetupFaqSchema,
              breadcrumbs,
            ]),
          }}
        />
        <Breadcrumbs items={[{ label: "ホーム", href: "/" }, { label: "AI連携・初期設定支援" }]} />
        <section className="ai-setup-hero">
          <div className="shell ai-setup-hero-grid">
            <div>
              <p className="ai-pill">LARK × AI導入支援｜セットアップ</p>
              <h1>
                Claude Code・Codexを
                <br />
                <em>Larkと連携する</em>
                <br />
                初期設定支援。
              </h1>
              <p className="ai-setup-lead">
                神戸発・全国オンライン対応。Claude Code・Codex・Lark-CLI・Lark Channel Bridgeの導入から認証、ターミナルの基本操作までを原則2時間のセッションで支援し、LarkのチャットからAIを活用する初期環境を一緒に整えます。
              </p>
              <div className="button-row">
                <ConsultationLink className="button button-ai" />
                <a className="button button-ai-line" href="#price">
                  料金を見る
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
            <div className="ai-terminal ai-terminal-large" aria-label="LarkとAIの接続イメージ">
              <div className="ai-terminal-bar" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <code>
                <span>接続後の表示イメージ</span>
                <span>$ claude</span>
                Claude Codeを起動しました。
                <span>$ lark-channel-bridge start</span>
                QRコードを表示しました。Larkでスキャンしてください。
                <strong>✓ Connected — Larkのチャットから呼び出せます</strong>
              </code>
            </div>
            <div className="ai-tool-row">
              {tools.map((tool) => (
                <article key={tool.name}>
                  {tool.logo ? (
                    <span className="ai-tool-logo">
                      <Image
                        src={tool.logo}
                        alt={tool.logoAlt}
                        width={180}
                        height={180}
                        unoptimized
                      />
                    </span>
                  ) : (
                    <span>{tool.icon}</span>
                  )}
                  <strong>{tool.name}</strong>
                  <small>{tool.text}</small>
                </article>
              ))}
            </div>
            <p className="ai-brand-note">
              各ロゴは各社の商標です。対応ツールを示すもので、各社との提携・推奨を示すものではありません。
            </p>
          </div>
        </section>

        <SectionAccordion id="setup-problems" title="初期設定でよくあるお困りごと" description="AIとLarkをつなぐときに、つまずきやすい点。" label="BEFORE SETUP">
        <section className="ai-section ai-problems">
          <div className="shell">
            <div className="ai-section-heading">
              <p>BEFORE SETUP</p>
              <h2>AI導入の初期設定で、止まっていませんか</h2>
              <span>
                インストール、アカウント認証、権限設定。使い始めるまでにつまずいている箇所を、一緒に確認します。
              </span>
            </div>
            <div className="ai-problem-grid">
              {problems.map((problem) => (
                <article key={problem.title}>
                  <i>{problem.icon}</i>
                  <h3>{problem.title}</h3>
                  <p>{problem.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        </SectionAccordion>

        <SectionAccordion id="setup-settings" title="支援する4つの初期設定" description="導入・認証から、Lark連携と使い始めるための設定まで。" label="SETUP">
        <section className="ai-section ai-setup-four">
          <div className="shell ai-split">
            <div>
              <p className="ai-kicker">WHAT WE SET UP</p>
              <h2>
                LarkからAIを使うための
                <br />
                4つの初期設定。
              </h2>
              <p className="ai-copy">
                Claude Code・Codexという2つのAIエージェントと、
                Lark-CLI・Lark Channel Bridgeという2つの連携ツール。
                インストールから認証、安全に使うための権限設定まで、原則2時間のセッションで進めます。
                PC環境や権限設定により、追加対応が必要な場合があります。
              </p>
              <ul className="ai-check-list">
                {setupItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="ai-chat-visual" aria-label="LarkチャットからAIに依頼するイメージ">
              <p>この資料、3行で要約して</p>
              <p>承知しました。要約します…</p>
            </div>
          </div>
        </section>
        </SectionAccordion>

        <SectionAccordion id="setup-scope" title="対応範囲・対象外" description="セットアップに含まれる内容と、別途ご相談いただく内容。" label="SCOPE">
        <section className="ai-section ai-scope">
          <div className="shell">
            <div className="ai-section-heading">
              <p>SCOPE</p>
              <h2>セットアップ支援の対応範囲・対象外</h2>
              <span>初期設定で対応する内容と、別途ご相談いただく内容をご案内します。</span>
            </div>
            <div className="ai-scope-grid">
              <article>
                <h3>セットアップに含まれること</h3>
                <ul className="ai-check-list">
                  {included.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article>
                <h3>対象外のこと</h3>
                <ul className="ai-minus-list">
                  {excluded.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p>必要な場合は、環境構築とは別のメニューとしてご相談ください。</p>
              </article>
            </div>
          </div>
        </section>
        </SectionAccordion>

        <SectionAccordion id="setup-expertise" title="SFLの支援体制" description="Lark導入支援の経験と、初めての方へのサポート。" label="SUPPORT">
        <section className="ai-section ai-expertise">
          <div className="shell ai-split">
            <div>
              <p className="ai-kicker">WHY SFL</p>
              <h2>
                Lark導入支援の現場で積み上げた
                <br />
                知見を、AI連携にも。
              </h2>
              <p className="ai-copy">
                合同会社SFLでは、美容・介護・福祉などの現場に合わせて、
                Larkの導入研修・Base設計・自動化構築を支援しています。ツールを「入れて終わり」にせず、
                実際に使い続けられる状態まで伴走することを大切にしています。
              </p>
              <ul className="ai-check-list">
                <li>Lark導入研修・Base設計の実務経験をベースに設計</li>
                <li>ターミナル未経験の方にも、基本から説明</li>
                <li>セットアップ後も3か月間、設定に関する相談に対応</li>
              </ul>
            </div>
            <aside className="ai-promise">
              <span>AI活用サポート担当</span>
              <p>「入れて終わり」ではなく「使い続けられる」ところまでを、いつも基準にしています。</p>
            </aside>
          </div>
        </section>
        </SectionAccordion>

        <SectionAccordion id="setup-price" title="セットアップ料金｜99,000円（税込）" description="1回2時間のセッションと3か月のアフターサポート。" label="PRICE">
        <section className="ai-section ai-price" id="price">
          <div className="shell">
            <div className="ai-section-heading">
              <p>PRICE</p>
              <h2>Claude Code・Codex×Lark連携セットアップ料金</h2>
              <span>初期設定と3か月のアフターサポートが、この価格に含まれています。</span>
            </div>
            <article className="ai-price-card">
              <span>初期設定 ＋ 3か月アフターサポート</span>
              <p>
                <small>¥</small>
                <strong>99,000</strong>
                <small>（税込）</small>
              </p>
              <em>1回2時間のセットアップセッション付き</em>
              <ul className="ai-check-list">
                <li>事前準備ガイドのご案内</li>
                <li>Claude Code・Codex・Lark-CLI・Lark Channel Bridgeの導入と認証</li>
                <li>安全な権限許可リストの設定</li>
                <li>ターミナルの基本操作レクチャー</li>
                <li>認証切れ・不具合・権限追加・移行を相談できる3か月サポート</li>
              </ul>
              <ConsultationLink className="button button-ai" />
              <small className="ai-price-note">
                ※アプリの企画・実装方法のご指導、各ツールの契約料・API利用料等は含まれません。
                各社の仕様変更や利用環境により、設定方法・動作条件が変わる場合があります。
                本サービスは各社の公式代行・認定サービスではありません。
              </small>
            </article>
          </div>
        </section>
        </SectionAccordion>

        <SectionAccordion id="setup-flow" title="ご利用の流れ" description="お申し込みから、実際に使い始めるまで。" label="FLOW">
        <section className="ai-section ai-flow">
          <div className="shell">
            <div className="ai-section-heading">
              <p>FLOW</p>
              <h2>ご利用の流れ</h2>
              <span>お申し込みから、実際に使い始めるまでの流れです。</span>
            </div>
            <div className="ai-flow-grid">
              {flow.map((item, index) => (
                <article key={item.title}>
                  <span>{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        </SectionAccordion>

        <SectionAccordion id="setup-audience" title="こんな方におすすめ" description="初期設定支援が向いている方と、利用する場面。" label="FOR YOU">
        <section className="ai-section ai-recommended">
          <div className="shell">
            <div className="ai-section-heading">
              <p>RECOMMENDED FOR</p>
              <h2>こんな方におすすめです</h2>
            </div>
            <div className="ai-recommended-grid">
              {recommended.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        </SectionAccordion>

        <section className="ai-section ai-faq">
          <div className="shell ai-faq-shell">
            <div className="ai-section-heading">
              <p>FAQ</p>
              <h2>よくあるご質問</h2>
            </div>
            <div className="ai-faq-list">
              {faqs.map((item) => (
                <details key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="ai-final-cta">
          <div className="shell ai-final-cta-inner">
            <p>START WITH A CONVERSATION</p>
            <h2>Lark×AI連携の初期設定を、ご相談ください。</h2>
            <span>今の環境や困りごとを伺ったうえで、当日の進め方をご提案します。</span>
            <ConsultationLink />
            <small>個人事業主・フリーランスは公式LINE、法人はフォームからご相談いただけます。</small>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
