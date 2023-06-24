<script lang="ts">
	import { signIn, signOut } from "@auth/sveltekit/client";

	import type { DefaultSession } from "@auth/core/types";

	export let session: DefaultSession | null;
</script>

<div class="flex flex-col h-full">
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
