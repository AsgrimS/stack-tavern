<script lang="ts">
	import { page } from "$app/stores";
	import Navbar from "$lib/components/Navbar.svelte";
	import Sidebar from "$lib/components/Sidebar.svelte";
	import "../app.postcss";
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from "@floating-ui/dom";
	import { AppShell, storePopup } from "@skeletonlabs/skeleton";
	import "@skeletonlabs/skeleton/styles/skeleton.css";
	import "@skeletonlabs/skeleton/themes/theme-crimson.css";

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<AppShell>
	<svelte:fragment slot="header">
		<Navbar session={$page.data.session} />
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Sidebar />
	</svelte:fragment>
	<slot />
</AppShell>
