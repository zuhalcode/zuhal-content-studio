export interface TermsSubsection {
  id: string;
  number: string;
  title: string;
  paragraphs?: string[];
  listItems?: string[];
}

export interface TermsCallout {
  type?: "info" | "note" | "warning";
  title?: string;
  content: string;
}

export interface TermsSection {
  id: string;
  number: string;
  title: string;
  summary?: string;
  paragraphs?: string[];
  listItems?: string[];
  subsections?: TermsSubsection[];
  callout?: TermsCallout;
}

export interface TermsMetadata {
  title: string;
  subtitle: string;
  effectiveDate: string;
  lastUpdated: string;
  estimatedReadingTime: string;
  version: string;
  companyName: string;
  legalEntity: string;
  contactEmail: string;
  jurisdiction: string;
}

export interface TermsDocumentData {
  metadata: TermsMetadata;
  sections: TermsSection[];
}

export interface TocItem {
  id: string;
  number: string;
  title: string;
  level: 1 | 2;
}
