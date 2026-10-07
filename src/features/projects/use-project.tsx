//#region-imports

import { getProjectQuery } from "./hooks/get-project-query";

//#endregion

export function useProject() {
  const get = getProjectQuery();
  // const create = createAssetQuery();
  // const update = updateAssetQuery();
  // const remove = removeAssetQuery();

  return {
    projects: get.data ?? [],
    loading: get.isLoading,

    // create: create.mutateAsync,
    // creating: create.isPending,

    // update: (id: string, payload: UpdateAssetPayload) =>
    //   update.mutateAsync({ id, payload }),
    // updating: update.isPending,

    // remove: (id: string) => remove.mutateAsync({ id }),
    // removing: remove.isPending,
  };
}
