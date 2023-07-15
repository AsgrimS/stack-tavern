import { CLIENT_ID, CLIENT_SECRET, ISSUER, SECRET } from "$env/static/private";
import type { JWT } from "@auth/core/jwt";
import type { Provider } from "@auth/core/providers";
import KeycloakProvider from "@auth/core/providers/keycloak";
import { SvelteKitAuth } from "@auth/sveltekit";

const refreshAccessToken = async (
	token: JWT & { accessToken: string; refreshToken: string; refreshTokenExpired: number }
) => {
	if (Date.now() > token.refreshTokenExpired) throw Error;

	const details = {
		client_id: CLIENT_ID,
		client_secret: CLIENT_SECRET,
		grant_type: "refresh_token",
		refresh_token: token.refreshToken,
	};

	const formBody: string[] = [];

	Object.entries(details).forEach(([key, value]) => {
		const encodedKey = encodeURIComponent(key);
		const encodedValue = encodeURIComponent(value);
		formBody.push(encodedKey + "=" + encodedValue);
	});

	const response = await fetch(`${ISSUER}/protocol/openid-connect/token`, {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
		},
		body: formBody.join("&"),
	});

	const refreshedTokens = await response.json();
	if (!response.ok) throw refreshedTokens;

	const now = Date.now();
	return {
		...token,
		accessToken: refreshedTokens.access_token,
		refreshToken: refreshedTokens.refresh_token ?? token.refreshToken,
		accessTokenExpires: now + refreshedTokens.expires_in * 1000,
		refreshTokenExpires: now + refreshedTokens.refresh_expires_in * 1000,
	};
};

export const handle = SvelteKitAuth({
	providers: [
		KeycloakProvider({
			clientId: CLIENT_ID,
			clientSecret: CLIENT_SECRET,
			issuer: ISSUER,
		}) as Provider,
	],
	secret: SECRET,
	callbacks: {
		async jwt({ token, account }) {
			if (account) {
				token.accessToken = account.access_token;
				token.refreshToken = account.refresh_token;
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				token.accessTokenExpires = Date.now() + account.expires_in * 1000;
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				token.refreshTokenExpires = Date.now() + account.refresh_expires_in * 1000;
			}

			// INFO: Auth JS has known issues that casuses the token to do not update correctly. Because of that
			// the accessTokenExpires is not updated correctly and after it will fetch new token every time after
			// the initial one expires.

			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			if (Date.now() < token.accessTokenExpires) return token;

			// console.log(new Date(refreshedToken.accessTokenExpires));
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			return refreshAccessToken(token);
		},
		async session({ session, token }) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			session.user.accessToken = token.accessToken;

			return session;
		},
	},
});
