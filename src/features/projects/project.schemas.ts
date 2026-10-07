import { z } from "zod";

export const projectSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullable(),
  status: z.enum(["active", "paused", "archived"]),
  created_at: z.string(),
});

export type ProjectResponse = z.infer<typeof projectSchema>;
