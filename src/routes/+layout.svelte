<script lang="ts">
	import "@skeletonlabs/skeleton/themes/theme-crimson.css";
	import "@skeletonlabs/skeleton/styles/skeleton.css";
	import "../app.postcss";

	import { AppShell, storePopup } from "@skeletonlabs/skeleton";
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from "@floating-ui/dom";

	import Navbar from "$lib/components/Navbar.svelte";
	import Sidebar from "$lib/components/Sidebar.svelte";

	import type { LayoutData } from "./$types";

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	export let data: LayoutData;
</script>

<AppShell>
	<svelte:fragment slot="header">
		<Navbar session={data.session} />
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Sidebar />
	</svelte:fragment>
	<slot />
</AppShell>
