<script lang="ts">
	import { AppBar, Avatar, popup } from "@skeletonlabs/skeleton";

	import type { PopupSettings } from "@skeletonlabs/skeleton";
	import type { DefaultSession } from "@auth/core/types";
	import UserInfo from "./atoms/UserInfo.svelte";

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

<div class="card p-4 variant-filled-secondary w-64 h-48" data-popup="userInfo">
	<UserInfo {session} />
	<div class="arrow variant-filled-secondary" />
</div>
