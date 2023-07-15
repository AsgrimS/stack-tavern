<script lang="ts">
	import type { Stack } from "$lib/types";
	import { getFormattedDate } from "$lib/utils";

	export let stack: Stack;
</script>

<div class="card variant-filled-secondary flex h-48 min-w-fit flex-col p-4">
	<h4 class="h4 whitespace-nowrap">{stack.name}</h4>
	<p>{stack.description}</p>
	<div class="mt-auto flex justify-between whitespace-nowrap font-mono">
		<p>by {stack.author_name}</p>
		<p>{getFormattedDate(stack.created_at)}</p>
	</div>
</div>
