<script lang="ts">
	import StackCard from "$lib/components/StackCard.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<div class="grid grid-cols-4 grid-rows-4 gap-2">
	{#each data.stacks as stack}
		<StackCard {stack} />
	{/each}
</div>
