import { TermsSection } from "../types/terms.types";
import { AlertCircle, Hash, Info } from "lucide-react";

interface TermsSectionViewProps {
  section: TermsSection;
}

export function TermsSectionView({ section }: TermsSectionViewProps) {
  return (
    <section
      id={section.id}
      className="scroll-mt-24 border-b border-border/50 pb-12 pt-8 first:pt-4 last:border-b-0"
      aria-labelledby={`heading-${section.id}`}
    >
      {/* Section Header */}
      <div className="group flex items-start justify-between gap-4">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-muted-foreground/80 sm:text-base">
            {section.number}.
          </span>
          <h2
            id={`heading-${section.id}`}
            className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
          >
            {section.title}
          </h2>
        </div>

        {/* Anchor Link for direct copying/sharing */}
        <a
          href={`#${section.id}`}
          className="mt-1 hidden rounded p-1 text-muted-foreground/40 opacity-0 transition hover:bg-muted hover:text-foreground focus-visible:opacity-100 group-hover:opacity-100 sm:inline-block"
          aria-label={`Link to section ${section.number}: ${section.title}`}
          title="Direct link to this section"
        >
          <Hash className="size-4" />
        </a>
      </div>

      {/* Summary Highlight (if present) */}
      {section.summary && (
        <p className="mt-3 text-base font-medium leading-relaxed text-foreground/90 sm:text-[17px]">
          {section.summary}
        </p>
      )}

      {/* Main Paragraphs */}
      {section.paragraphs && section.paragraphs.length > 0 && (
        <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
          {section.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      )}

      {/* Section List Items */}
      {section.listItems && section.listItems.length > 0 && (
        <ul className="mt-4 space-y-2.5 pl-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {section.listItems.map((item, idx) => (
            <li key={idx} className="list-disc pl-1 marker:text-muted-foreground/70">
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* Callout Notice */}
      {section.callout && (
        <div
          role="note"
          className={`mt-6 rounded-lg border p-4 text-sm leading-relaxed ${
            section.callout.type === "warning"
              ? "border-amber-500/30 bg-amber-500/[0.06] text-amber-900 dark:text-amber-200"
              : "border-border bg-muted/40 text-foreground"
          }`}
        >
          <div className="flex items-start gap-3">
            {section.callout.type === "warning" ? (
              <AlertCircle className="mt-0.5 size-4 shrink-0 text-amber-500" aria-hidden="true" />
            ) : (
              <Info className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            )}
            <div>
              {section.callout.title && (
                <div className="font-semibold">{section.callout.title}</div>
              )}
              <div className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {section.callout.content}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Subsections */}
      {section.subsections && section.subsections.length > 0 && (
        <div className="mt-8 space-y-6 pl-4 border-l-2 border-border/60 sm:pl-6">
          {section.subsections.map((sub) => (
            <div
              key={sub.id}
              id={sub.id}
              className="scroll-mt-24"
              aria-labelledby={`heading-${sub.id}`}
            >
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-xs font-medium text-muted-foreground/70 sm:text-sm">
                  {sub.number}
                </span>
                <h3
                  id={`heading-${sub.id}`}
                  className="text-base font-semibold text-foreground sm:text-lg"
                >
                  {sub.title}
                </h3>
              </div>

              {sub.paragraphs && sub.paragraphs.length > 0 && (
                <div className="mt-2.5 space-y-3 text-sm leading-7 text-muted-foreground">
                  {sub.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              )}

              {sub.listItems && sub.listItems.length > 0 && (
                <ul className="mt-3 space-y-2 pl-6 text-sm leading-relaxed text-muted-foreground">
                  {sub.listItems.map((item, lIdx) => (
                    <li key={lIdx} className="list-disc pl-1 marker:text-muted-foreground/70">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
