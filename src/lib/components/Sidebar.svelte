<script lang="ts">
	import { page } from "$app/stores";
	import { AppRail, AppRailAnchor } from "@skeletonlabs/skeleton";
	import { IconBrandGithub, IconHome, IconPlus } from "@tabler/icons-svelte";

	const iconsSize = 36;
</script>

<AppRail>
	<svelte:fragment slot="lead">
		<AppRailAnchor href="/" selected={$page.url.pathname === "/"}
			><IconHome size={iconsSize} class="mx-auto" /></AppRailAnchor>
	</svelte:fragment>
	<!-- --- -->
	<AppRailAnchor href="/add" selected={$page.url.pathname === "/add"} value={1}>
		<svelte:fragment slot="lead"><IconPlus size={iconsSize} /></svelte:fragment>
		<span>Add Stack</span>
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
