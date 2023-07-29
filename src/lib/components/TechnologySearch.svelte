<script lang="ts">
	import type { Technology } from "$lib/types";
	import { Autocomplete, type AutocompleteOption } from "@skeletonlabs/skeleton";

	export let onSelect: (event: CustomEvent<AutocompleteOption>) => void;

	let inputSearch = "";
	let timer: ReturnType<typeof setTimeout>;
	let technologies: Technology[] = [];
	let autocompletions: AutocompleteOption[] = [];

	const fetchTechnologies = async (searchphrase: string): Promise<Technology[]> => {
		const res = await fetch(`api/technologies/fuzzy/${searchphrase}`);
		return await res.json();
	};

	const debounce = () => {
		clearTimeout(timer);
		timer = setTimeout(async () => {
			technologies = inputSearch.length !== 0 ? await fetchTechnologies(inputSearch) : [];
		}, 350);
	};

	$: autocompletions = technologies.map((tech) => ({
		label: tech.name,
		value: tech,
	}));
</script>

<div>
	<input
		class="input"
		type="search"
		name="technologies"
		bind:value={inputSearch}
		on:keyup={debounce}
		placeholder="Search..." />
</div>

<div class="card mt-2 max-h-48 w-full max-w-sm overflow-y-auto p-4" tabindex="-1">
	<Autocomplete bind:input={inputSearch} options={autocompletions} on:selection={onSelect} />
</div>
