import { BASE_API_URL } from "$env/static/private";
import type { Stack } from "$lib/types";

export const getStacks = async (): Promise<Stack[] | null> => {
	let stacks: Stack[];

	try {
		const response = await fetch(`${BASE_API_URL}/stacks`);
		stacks = await response.json();
	} catch (error) {
		return null;
	}

	return stacks;
};
