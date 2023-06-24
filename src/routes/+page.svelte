<script lang="ts">
	import type { PageData } from "./$types";
	import { CodeBlock } from "@skeletonlabs/skeleton";

	export let data: PageData;
</script>

<h1>SvelteKit Example</h1>
<CodeBlock language="JSON" code={JSON.stringify(data.result, null, 2)} />
