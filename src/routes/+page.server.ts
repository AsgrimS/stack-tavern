import { getStacks } from "$lib/server/service";
import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";

export const load = (async () => {
	const stacks = await getStacks();

	if (!stacks)
		throw error(404, {
			message: "Not found",
		});

	return {
		stacks,
	};
}) satisfies PageServerLoad;
