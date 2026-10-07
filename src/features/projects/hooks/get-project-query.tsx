//#region-imports

import { useQuery } from "@tanstack/react-query";
import { projectKeys } from "../project.keys";
import { projectService } from "../project.services";

//#endregion

export function getProjectQuery() {
  return useQuery({
    queryKey: projectKeys.fetch,
    queryFn: projectService.findAll,
    select: (response) => response.data,
  });
}
