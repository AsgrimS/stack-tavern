<script lang="ts">
	import { AppBar, Avatar, popup } from "@skeletonlabs/skeleton";
	import { signIn, signOut } from "@auth/sveltekit/client";

	import type { PopupSettings } from "@skeletonlabs/skeleton";
	import type { DefaultSession } from "@auth/core/types";

	const userInfoPopup: PopupSettings = {
		event: "click",
		target: "userInfo",
		placement: "bottom-end",
	};

	export let session: DefaultSession | null;
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	Stack Tavern
	<svelte:fragment slot="trail">
		{#if !session}
			<button type="button" class="btn variant-filled" on:click={() => signIn("keycloak")}
				>Log In</button>
		{:else}
			<div use:popup={userInfoPopup}>
				<Avatar
					initials="JD"
					width="w-12"
					background="bg-primary-500"
					border="border-4 border-surface-300-600-token hover:!border-primary-500"
					cursor="cursor-pointer" />
			</div>
		{/if}
	</svelte:fragment>
</AppBar>

{#if session?.user}
	<div class="card p-4 variant-filled-secondary w-64 arrow" data-popup="userInfo">
		<div class="flex flex-col">
			<p>Logged in as: {session.user.name}</p>
			<button type="button" class="btn variant-filled ml-auto" on:click={() => signOut("keycloak")}
				>Log Out</button>
		</div>
		<div class="arrow variant-filled-secondary" />
	</div>
{/if}
