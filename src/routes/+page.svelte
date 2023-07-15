<script lang="ts">
	import StackCard from "$lib/components/StackCard.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<div class="flex justify-center">
	<div
		class="grid grid-cols-[repeat(1,24rem)] grid-rows-4 gap-10 overflow-scroll p-10 lg:grid-cols-[repeat(2,24rem)] xl:grid-cols-[repeat(3,24rem)] 2xl:grid-cols-[repeat(4,24rem)]">
		{#each data.stacks as stack}
			<StackCard {stack} />
		{/each}
	</div>
</div>
