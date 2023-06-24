import { BASE_API_URL } from "$env/static/private";
import { stackSchema } from "$lib/schemas";
import type { PageServerLoad } from "./$types";
import type { Actions } from "@sveltejs/kit";
import { fail, redirect } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms/server";

export const load = (async (event) => {
	const session = await event.locals.getSession();
	if (!session?.user) throw redirect(303, "/login");

	const form = await superValidate(stackSchema);

	return { form };
}) satisfies PageServerLoad;

export const actions = {
	addStack: async ({ request }) => {
		const form = await superValidate(request, stackSchema);

		if (!form.valid) return fail(403, { form });

		const response = await fetch(`${BASE_API_URL}/stacks`, {
			headers: {
				"Content-Type": "application/json;charset=utf-8",
			},
			method: "POST",
			body: JSON.stringify(form.data),
		});

		if (response.status !== 201) return fail(response.status, { form });

		console.log("asfd");

		throw redirect(303, "/");
	},
} satisfies Actions;
