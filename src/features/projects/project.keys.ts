const PROJECT = "projects";

export const projectKeys = {
  fetch: [PROJECT] as const,

  mutations: {
    create: [PROJECT, "create"] as const,
    update: [PROJECT, "update"] as const,
    remove: [PROJECT, "remove"] as const,
  },
};
