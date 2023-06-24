<script lang="ts">
	import type { DefaultSession } from "@auth/core/types";
	import { signIn, signOut } from "@auth/sveltekit/client";

	export let session: DefaultSession | null;
</script>

<div class="flex h-full flex-col">
	{#if !session?.user}
		<button type="button" class="btn variant-filled" on:click={() => signIn("keycloak")}
			>Log In</button>
	{:else}
		<p class="font-bold">{session.user.name}</p>
		<p>{session.user.email}</p>
		<button
			type="button"
			class="btn variant-filled ml-auto mt-auto"
			on:click={() => signOut("keycloak")}>Log Out</button>
	{/if}
</div>
