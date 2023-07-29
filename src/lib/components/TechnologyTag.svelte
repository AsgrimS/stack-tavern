<script lang="ts">
	import type { Technology } from "$lib/types";
	import type { PopupSettings } from "@skeletonlabs/skeleton";
	import { popup } from "@skeletonlabs/skeleton";

	export let technology: Technology;

	const technologyPopup: PopupSettings = {
		event: "click",
		target: "technologyInfo",
		placement: "bottom",
	};
</script>

<span class="chip variant-filled" role="tooltip" use:popup={technologyPopup}
	>{technology.name}</span>

<div class="card variant-filled w-64 p-4" data-popup="technologyInfo">
	<div>
		<span class="font-bold">Purpose: {technology.purpose}</span>
		<p>{technology.description}</p>
	</div>
	<div class="arrow variant-filled" />
</div>
