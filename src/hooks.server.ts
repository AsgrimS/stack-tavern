import { SvelteKitAuth } from "@auth/sveltekit";
import KeycloakProvider from "@auth/core/providers/keycloak";

import { CLIENT_ID, CLIENT_SECRET, ISSUER, SVELTE_SECRET } from "$env/static/private";

export const handle = SvelteKitAuth({
	providers: [
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		KeycloakProvider({
			clientId: CLIENT_ID,
			clientSecret: CLIENT_SECRET,
			issuer: ISSUER,
		}),
	],
	secret: SVELTE_SECRET,
});
