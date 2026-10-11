import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface OverviewSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
  action?: ReactNode;
  className?: string;
}

export default function OverviewSection({
  title,
  description,
  children,
  action,
  className,
}: OverviewSectionProps) {
  return (
    <section
      className={cn(
        "rounded-xl border border-border bg-card shadow-sm",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4">
        <div>
          <h2 className="text-sm font-semibold">{title}</h2>
          {description && (
            <p className="mt-1 text-xs text-muted-foreground">{description}</p>
          )}
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}
