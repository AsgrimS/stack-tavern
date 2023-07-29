<script lang="ts">
	import type { Stack } from "$lib/types";
	import { getFormattedDate } from "$lib/utils";
	import TechnologyTag from "./TechnologyTag.svelte";

	export let stack: Stack;
</script>

<div class="card variant-filled-secondary flex h-48 min-w-fit flex-col p-4">
	<h4 class="h4 whitespace-nowrap">{stack.name}</h4>
	<p>{stack.description}</p>
	<div>
		{#each stack.technologies as technology}
			<TechnologyTag {technology} />
		{/each}
	</div>
	<div class="mt-auto flex justify-between whitespace-nowrap font-mono">
		<p>by {stack.author.name}</p>
		<p>{getFormattedDate(stack.created_at)}</p>
	</div>
</div>
