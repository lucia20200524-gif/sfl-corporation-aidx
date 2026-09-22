export type CompanySize = "small" | "large";

export const TRAINING_FEE_PER_PERSON = 360_000;
export const TRAINING_HOURS = 15;

// 2026年8月3日版。対面・同時双方向型の訓練（10時間以上100時間未満）。
export const subsidyProfiles = {
  small: { label: "中小企業", expenseRate: 0.75, wageRate: 1_000, expenseCap: 300_000 },
  large: { label: "大企業", expenseRate: 0.6, wageRate: 500, expenseCap: 200_000 },
} satisfies Record<CompanySize, {
  label: string;
  expenseRate: number;
  wageRate: number;
  expenseCap: number;
}>;

export function calculateReskillingEstimate(companySize: CompanySize, participants: number) {
  const profile = subsidyProfiles[companySize];
  const trainingFee = TRAINING_FEE_PER_PERSON * participants;
  const expenseAidPerPerson = Math.min(
    TRAINING_FEE_PER_PERSON * profile.expenseRate,
    profile.expenseCap,
  );
  const expenseAid = expenseAidPerPerson * participants;
  const tuitionBurden = trainingFee - expenseAid;
  // 全15時間が所定労働時間内で対象となる場合。給与への助成は研修費から引かない。
  const wageAidPerPerson = profile.wageRate * TRAINING_HOURS;

  return {
    profile,
    trainingFee,
    expenseAid,
    tuitionBurden,
    tuitionBurdenPerPerson: tuitionBurden / participants,
    wageAid: wageAidPerPerson * participants,
    wageAidPerPerson,
  };
}
