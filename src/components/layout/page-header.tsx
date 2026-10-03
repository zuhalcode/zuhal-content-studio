import type { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}

const PageHeader = ({
  eyebrow,
  title,
  description,
  action,
}: PageHeaderProps) => {
  return (
    <div className="flex flex-col justify-between gap-4 py-7 lg:flex-row lg:items-end">
      <div className="min-w-0">
        {eyebrow && (
          <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {eyebrow}
          </div>
        )}

        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {title}
        </h1>

        {description && (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
};

export default PageHeader;
