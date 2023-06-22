<script lang="ts">
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<CodeBlock language="JSON" code={JSON.stringify(data, null, 2)} />
