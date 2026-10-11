export interface ExperimentItem {
  id: string;
  code: string;
  title: string;
  status: "Active" | "Draft" | "Completed";
  variable: string;
  metric: string;
  question: string;
  hypothesis: string;
  controlContent: string;
  controlMetricValue: string;
  controlViews: string;
  variantContent: string;
  variantMetricValue: string;
  variantViews: string;
  absoluteDelta: string;
  relativeDelta: string;
  summary: string;
}

export const initialExperiments: ExperimentItem[] = [
  {
    id: "exp-1",
    code: "EXP-023",
    title: "Curiosity hook vs direct explanation",
    status: "Active",
    variable: "Hook",
    metric: "Retention",
    question: "Does a curiosity-driven opening improve retention compared to direct explanation?",
    hypothesis: "A curiosity-based opening creates cognitive tension that holds viewers past the 3-second drop-off mark.",
    controlContent: "Content #041",
    controlMetricValue: "32%",
    controlViews: "8,100 views",
    variantContent: "Content #042",
    variantMetricValue: "46%",
    variantViews: "11,400 views",
    absoluteDelta: "+14 pp",
    relativeDelta: "+43.75%",
    summary: "Retention · Hook · 2 variants",
  },
  {
    id: "exp-2",
    code: "EXP-024",
    title: "Demo first vs context first",
    status: "Active",
    variable: "Structure",
    metric: "Save rate",
    question: "Does leading with the final result increase bookmarking rate?",
    hypothesis: "Demonstrating the finished implementation in the first 5 seconds signals high tangible utility.",
    controlContent: "Content #038",
    controlMetricValue: "4.2%",
    controlViews: "6,400 views",
    variantContent: "Content #039",
    variantMetricValue: "7.1%",
    variantViews: "9,200 views",
    absoluteDelta: "+2.9 pp",
    relativeDelta: "+69.0%",
    summary: "Save rate · Structure · 2 variants",
  },
  {
    id: "exp-3",
    code: "EXP-025",
    title: "Short-form vs long-form tutorial",
    status: "Draft",
    variable: "Duration",
    metric: "Completion rate",
    question: "Does a 60-second summary outperform a 3-minute deep dive on algorithm reach?",
    hypothesis: "Higher relative completion on short-form drives stronger algorithmic distribution.",
    controlContent: "Content #030",
    controlMetricValue: "18%",
    controlViews: "3,100 views",
    variantContent: "Content #031",
    variantMetricValue: "29%",
    variantViews: "7,800 views",
    absoluteDelta: "+11 pp",
    relativeDelta: "+61.1%",
    summary: "Completion · Duration · 3 variants",
  },
];

