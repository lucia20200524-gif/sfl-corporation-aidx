import { SFL_LARK_TRAINING_URL } from "../courses";

export function LarkTrainingLink() {
  return (
    <a className="button button-primary lark-training-button" href={SFL_LARK_TRAINING_URL} target="_blank" rel="noopener noreferrer" aria-label="Lark研修の詳細を見る（法人向けリスキリング・別タブ）">
      Lark研修の詳細を見る<span aria-hidden="true">↗</span>
    </a>
  );
}
