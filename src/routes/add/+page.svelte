<script lang="ts">
	import TechnologySearch from "$lib/components/TechnologySearch.svelte";
	import TechnologyTag from "$lib/components/TechnologyTag.svelte";
	import type { Technology } from "$lib/types";
	import type { PageData } from "./$types";
	import type { AutocompleteOption } from "@skeletonlabs/skeleton";
	import { superForm } from "sveltekit-superforms/client";

	export let data: PageData;

	let selectedTechnologies: Technology[] = [];

	const { constraints, enhance, form } = superForm(data.form, { dataType: "json" });

	const onTechnologySelect = (event: CustomEvent<AutocompleteOption>) => {
		const selectedTechnology = event.detail.value as Technology;

		selectedTechnologies = selectedTechnologies.includes(selectedTechnology)
			? selectedTechnologies
			: [...selectedTechnologies, selectedTechnology];
		form.update(
			($form) => {
				$form.technologies = selectedTechnologies.map((tech) => {
					return {
						name: tech.name,
						purpose: tech.purpose,
						description: tech.description,
					};
				});
				return $form;
			},
			{ taint: false }
		);
	};

	const clearSelectedTechnologies = () => {
		selectedTechnologies = [];
		form.update(
			($form) => {
				$form.technologies = [];
				return $form;
			},
			{ taint: false }
		);
	};
</script>

<div class="flex justify-center">
	<form class="mt-6 flex flex-col gap-6" method="post" action="?/addStack" use:enhance>
		<label class="label">
			<span>Stack Name</span>
			<input
				class="input"
				type="text"
				bind:value={$form.name}
				{...$constraints.name}
				placeholder="What's the name of you stack?" />
		</label>

		<label class="label">
			<span>Description</span>
			<textarea
				class="textarea"
				rows="4"
				bind:value={$form.description}
				{...$constraints.description}
				placeholder="Provide a short summary of you tech stack." />
		</label>

		<div>
			<span
				>Technologies <button
					type="button"
					class="btn variant-filled-primary"
					on:click={clearSelectedTechnologies}>clear</button
				></span>
			<div>
				{#each selectedTechnologies as technology}
					<TechnologyTag {technology} />
				{/each}
			</div>
			<TechnologySearch onSelect={onTechnologySelect} />
		</div>

		<button type="submit" class="btn variant-filled-primary">Add Stack</button>
	</form>
</div>
