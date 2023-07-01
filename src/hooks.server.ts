import { CLIENT_ID, CLIENT_SECRET, ISSUER, SECRET } from "$env/static/private";
import KeycloakProvider from "@auth/core/providers/keycloak";
import { SvelteKitAuth } from "@auth/sveltekit";

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
	secret: SECRET,
	callbacks: {
		async jwt({ token, account }) {
			if (account) {
				token.accessToken = account.access_token;
			}
			return token;
		},
		async session({ session, token }) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			session.user.accessToken = token.accessToken;

			return session;
		},
		async signIn({ account, user, profile, email, credentials }) {
			console.log("sign in", { account, user, profile, email, credentials });
			return true;
		},
	},
});
