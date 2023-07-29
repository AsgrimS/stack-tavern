import { BASE_API_URL } from "$env/static/private";
import type { Technology } from "$lib/types";
import type { RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";

export const GET = (async ({ url }) => {
	const searchphrase = url.pathname.split("/").pop();

	const res = await fetch(`${BASE_API_URL}/technologies/fuzzy/${searchphrase}`);
	const technologies: Technology[] = await res.json();

	return json(technologies);
}) satisfies RequestHandler;
