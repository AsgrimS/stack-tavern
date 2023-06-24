import { z } from "zod";

export const stackSchema = z.object({
	name: z.string(),
	description: z.string(),
});
