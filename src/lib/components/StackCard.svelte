<script lang="ts">
	import type { Stack } from "$lib/types";
	import { CodeBlock } from "@skeletonlabs/skeleton";

	export let stack: Stack;
</script>

<CodeBlock language="JSON" code={JSON.stringify(stack, null, 2)} />
