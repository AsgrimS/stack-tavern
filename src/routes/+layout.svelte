<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';

	import { AppBar, AppShell } from '@skeletonlabs/skeleton';

	import Sidebar from '$lib/components/Sidebar.svelte';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>Stack Tavern</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Sidebar />
	</svelte:fragment>
	<slot />
</AppShell>
