<script lang="ts">
	import { AppRail, AppRailAnchor } from "@skeletonlabs/skeleton";
	import { IconBrandGithub, IconHome } from "@tabler/icons-svelte";

	import { page } from "$app/stores";

	const iconsSize = 36;
</script>

<AppRail>
	<svelte:fragment slot="lead">
		<AppRailAnchor href="/" selected={$page.url.pathname === "/"}
			><IconHome size={iconsSize} class="mx-auto" /></AppRailAnchor>
	</svelte:fragment>
	<!-- --- -->
	<AppRailAnchor name="tile-2" value={1} title="tile-2">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>Tile 2</span>
	</AppRailAnchor>
	<AppRailAnchor name="tile-3" value={2} title="tile-3">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>Tile 3</span>
	</AppRailAnchor>
	<!-- --- -->
	<svelte:fragment slot="trail">
		<AppRailAnchor
			href="https://github.com/AsgrimS/stack-tavern"
			target="_blank"
			title="Repository">
			<IconBrandGithub size={iconsSize} class="mx-auto" /></AppRailAnchor>
	</svelte:fragment>
</AppRail>
