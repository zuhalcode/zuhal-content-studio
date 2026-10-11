import { TermsMetadata } from "../types/terms.types";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, FileCheck } from "lucide-react";

interface TermsHeaderProps {
  metadata: TermsMetadata;
}

export function TermsHeader({ metadata }: TermsHeaderProps) {
  return (
    <div className="border-b border-border/70 pb-8 pt-4 md:pb-12 md:pt-6">
      {/* Category Eyebrow */}
      <div className="flex items-center gap-2">
        <Badge
          variant="secondary"
          className="rounded-full px-3 py-0.5 text-[11px] font-medium tracking-wide text-muted-foreground"
        >
          Legal Agreement
        </Badge>
        <span className="text-xs text-muted-foreground">v{metadata.version}</span>
      </div>

      {/* Main Title */}
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {metadata.title}
      </h1>

      {/* Description */}
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        {metadata.subtitle}
      </p>

      {/* Metadata Row */}
      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <Calendar className="size-3.5 text-muted-foreground/80" aria-hidden="true" />
          <span>
            Last updated: <strong className="font-medium text-foreground">{metadata.lastUpdated}</strong>
          </span>
        </div>

        <span className="hidden text-border sm:inline" aria-hidden="true">
          •
        </span>

        <div className="flex items-center gap-1.5">
          <Clock className="size-3.5 text-muted-foreground/80" aria-hidden="true" />
          <span>
            Estimated reading time:{" "}
            <strong className="font-medium text-foreground">{metadata.estimatedReadingTime}</strong>
          </span>
        </div>

        <span className="hidden text-border sm:inline" aria-hidden="true">
          •
        </span>

        <div className="flex items-center gap-1.5">
          <FileCheck className="size-3.5 text-emerald-500" aria-hidden="true" />
          <span>Status: <strong className="font-medium text-foreground">Active</strong></span>
        </div>
      </div>
    </div>
  );
}
