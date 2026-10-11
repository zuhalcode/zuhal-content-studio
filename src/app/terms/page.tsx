import { Metadata } from "next";
import { termsData, getTableOfContents } from "@/features/legal/content/terms-content";
import {
  TermsNavbar,
  TermsHeader,
  TermsTableOfContents,
  TermsSectionView,
  TermsFooter,
} from "@/features/legal/components";

export const metadata: Metadata = {
  title: "Terms and Conditions | Zuhal Content Studio",
  description:
    "Read the Terms and Conditions governing your access to and use of Zuhal Content Studio, a modern content operating system for research, briefs, and experimentation.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms and Conditions | Zuhal Content Studio",
    description:
      "Terms of Service and legal agreement governing the Zuhal Content Studio platform.",
    type: "website",
  },
};

export default function TermsPage() {
  const tocItems = getTableOfContents(termsData);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/10 selection:text-primary">
      {/* Top sticky navigation bar */}
      <TermsNavbar />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-12 lg:px-8">
        {/* Document Header */}
        <TermsHeader metadata={termsData.metadata} />

        {/* Two-Column Responsive Document Layout */}
        <div className="mt-8 lg:mt-12 lg:grid lg:grid-cols-[260px_1fr] lg:gap-12 xl:grid-cols-[280px_1fr] xl:gap-16">
          {/* Table of Contents (Sticky sidebar on desktop, collapsible menu on mobile) */}
          <TermsTableOfContents items={tocItems} />

          {/* Reading Column */}
          <article className="min-w-0 max-w-3xl pb-16">
            <div className="space-y-2">
              {termsData.sections.map((section) => (
                <TermsSectionView key={section.id} section={section} />
              ))}
            </div>

            {/* Document Footer with Governance Details */}
            <TermsFooter metadata={termsData.metadata} />
          </article>
        </div>
      </main>
    </div>
  );
}
