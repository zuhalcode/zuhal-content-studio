import api from "@/lib/axios";
import { ProjectResponse } from "./project.schemas";

export const projectService = {
  async findAll(): Promise<{ data: ProjectResponse[] }> {
    const res = await api.get("/projects");
    return res.data;
  },
};
