type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  index: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  index,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-ring" aria-hidden="true" />
      <div className="shell page-hero-inner">
        <div className="page-hero-meta">
          <span>{index}</span>
          <p>{eyebrow}</p>
        </div>
        <div>
          <h1>{title}</h1>
          <p className="page-hero-description">{description}</p>
        </div>
      </div>
    </section>
  );
}
