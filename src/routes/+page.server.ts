import { getStacks } from "$lib/server/service";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

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
