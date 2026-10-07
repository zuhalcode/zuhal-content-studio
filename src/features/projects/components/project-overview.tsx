import { PROJECT_IDENTITY } from "../project.constant";
import { ProjectResponse } from "../project.schemas";

export default function ProjectOverview({
  project,
}: {
  project: ProjectResponse;
}) {
  return (
    <div className="grid gap-5 p-5 sm:grid-cols-2">
      <div>
        <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Project identity
        </div>

        <h3 className="mt-2 text-lg font-semibold">{project.name}</h3>

        <p className="mt-2 text-xs leading-5 text-muted-foreground">
          {PROJECT_IDENTITY[project.name]}
        </p>
      </div>

      <div>
        <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Primary audience
        </div>

        <p className="mt-2 text-sm">
          Practitioners who want less theory and more durable decisions.
        </p>
      </div>
    </div>
  );
}
