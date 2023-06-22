import type { PageLoad } from './$types';

export const load = (async () => {
	const result = await fetch('http://127.0.0.1:3000/stacks');
	return {
		result: result.json()
	};
}) satisfies PageLoad;
