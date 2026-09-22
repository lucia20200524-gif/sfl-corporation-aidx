import Link from "next/link";
import { SFL_COURSES } from "../courses";
import { LarkProductMark } from "./LarkBrand";

export function CourseCatalog({ titleId }: { titleId: string }) {
  return (
    <div className="course-catalog">
      <div className="course-catalog-heading">
        <div>
          <p className="section-label">COURSES &amp; TRAINING</p>
          <h2 id={titleId}>SFLの講座・研修</h2>
        </div>
        <p>自分の仕事に活かす個人向け講座と、社員の育成に取り組む法人向け研修。Lark・AI・官公庁入札を学ぶ5つのメニューをご案内します。</p>
      </div>
      <ul className="course-catalog-grid" aria-label="5つの講座・研修" role="list">
        {SFL_COURSES.map((course) => (
          <li className={`course-catalog-card course-catalog-card-${course.type}`} key={course.id}>
            <div className="course-catalog-topline">
              <span className="course-catalog-audience">{course.audience}</span>
              {course.usesLark ? <LarkProductMark /> : <span className="course-catalog-topic">{course.topic}</span>}
            </div>
            <h3>{course.name}</h3>
            {"status" in course ? <span className="course-catalog-status">{course.status}</span> : null}
            <p>{course.description}</p>
            <Link className="button button-primary course-catalog-button" href={course.href} target={"external" in course && course.external ? "_blank" : undefined} rel={"external" in course && course.external ? "noopener noreferrer" : undefined} aria-label={`${course.name}：${course.action}${"external" in course && course.external ? "（別タブ）" : ""}`}>
              <span>{course.action}</span><span aria-hidden="true">{"external" in course && course.external ? "↗" : "→"}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
