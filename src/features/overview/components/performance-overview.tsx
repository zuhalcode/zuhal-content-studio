import OverviewSection from "./overview-section";
import type { PerformanceMetric } from "../data";

interface PerformanceOverviewProps {
  metrics: PerformanceMetric[];
  barHeights: number[];
}

export default function PerformanceOverview({
  metrics,
  barHeights,
}: PerformanceOverviewProps) {
  return (
    <OverviewSection
      title="Performance overview"
      description="Published content compared to account baseline"
    >
      <div className="px-5 py-5">
        <div className="grid grid-cols-3 gap-4 text-xs">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <div className="text-muted-foreground">{metric.label}</div>
              <strong
                className={`mt-2 block text-xl ${metric.highlightClass ?? ""}`}
              >
                {metric.value}
              </strong>
            </div>
          ))}
        </div>
        <div className="mt-6 flex h-28 items-end gap-1 border-b border-border">
          {barHeights.map((height, i) => (
            <div
              key={i}
              className={`flex-1 rounded-t-sm ${
                i === 10 || i === 15
                  ? "bg-emerald-500"
                  : "bg-muted-foreground/20"
              }`}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </OverviewSection>
  );
}

