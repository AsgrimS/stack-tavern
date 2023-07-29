import { BASE_API_URL } from "$env/static/private";
import { stackSchema } from "$lib/schemas";
import type { PageServerLoad } from "./$types";
import type { Actions } from "@sveltejs/kit";
import { fail, redirect } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms/server";

let token: string;

export const load = (async (event) => {
	const session = await event.locals.getSession();
	if (!session?.user) throw redirect(303, "/login");

	const form = await superValidate(stackSchema);

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	token = session.user.accessToken;

	return { form, session };
}) satisfies PageServerLoad;

export const actions = {
	addStack: async (req) => {
		const form = await superValidate(req.request, stackSchema);

		if (!form.valid) return fail(403, { form });

		const response = await fetch(`${BASE_API_URL}/stacks`, {
			headers: {
				"Content-Type": "application/json;charset=utf-8",
				Authorization: `Bearer ${token}`,
			},
			method: "POST",
			body: JSON.stringify(form.data),
		});

		if (response.status !== 201) return fail(response.status, { form });

		throw redirect(303, "/");
	},
} satisfies Actions;
