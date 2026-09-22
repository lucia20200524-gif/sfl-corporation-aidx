import Link from "next/link";

export function ConsultationLink({
  className = "button button-primary",
  label = "60分無料相談を申し込む",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <Link className={className} href="/contact">
      {label}
      <span aria-hidden="true">→</span>
    </Link>
  );
}
