<script lang="ts">
	import UserInfo from "$lib/components/atoms/UserInfo.svelte";
	import type { DefaultSession } from "@auth/core/types";
	import type { PopupSettings } from "@skeletonlabs/skeleton";
	import { AppBar, Avatar, popup } from "@skeletonlabs/skeleton";

	const userInfoPopup: PopupSettings = {
		event: "click",
		target: "userInfo",
		placement: "bottom-end",
	};

	export let session: DefaultSession | null;

	let userInitials = "";
	$: userInitials = session?.user ? "JG" : "";
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	Stack Tavern
	<svelte:fragment slot="trail">
		<div use:popup={userInfoPopup}>
			<Avatar
				width="w-12"
				initials={userInitials}
				background="bg-primary-500"
				border="border-4 border-surface-300-600-token hover:!border-secondary-500"
				cursor="cursor-pointer" />
		</div>
	</svelte:fragment>
</AppBar>

<div class="card variant-filled-secondary h-48 w-64 p-4" data-popup="userInfo">
	<UserInfo {session} />
	<div class="arrow variant-filled-secondary" />
</div>
