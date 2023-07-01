import { BASE_API_URL } from "$env/static/private";
import { registerUserSchema, loginUserSchema } from "$lib/schemas";
import type { PageServerLoad } from "./$types";
import type { Actions } from "@sveltejs/kit";
import { fail, redirect } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms/server";

export const load = (async (event) => {
	const session = await event.locals.getSession();
	if (session?.user) throw redirect(303, "/");

	const userRegisterForm = await superValidate(registerUserSchema);
	const userLoginForm = await superValidate(loginUserSchema);

	return { userRegisterForm, userLoginForm };
}) satisfies PageServerLoad;

export const actions = {
	register: async (req) => {
		const userRegisterForm = await superValidate(req.request, registerUserSchema);

		if (!userRegisterForm.valid) return fail(403, { userRegisterForm });

		// const response = await fetch(`${BASE_API_URL}/stacks`, {
		// 	headers: {
		// 		"Content-Type": "application/json;charset=utf-8",
		// 		Authorization: `Bearer ${token}`,
		// 	},
		// 	method: "POST",
		// 	body: JSON.stringify(form.data),
		// });

		// if (response.status !== 201) return fail(response.status, { form });

		// throw redirect(303, "/");
	},

	login: async (req) => {
		const form = await superValidate(req.request, loginUserSchema);
		console.log(form);
	},
} satisfies Actions;
