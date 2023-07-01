<script lang="ts">
	import type { DefaultSession } from "@auth/core/types";
	import { signOut } from "@auth/sveltekit/client";

	export let session: DefaultSession;
</script>

<div class="flex h-full flex-col">
	<p>Signed in as: <span class="font-bold">{session.user?.name}</span></p>
	<button
		type="button"
		class="btn variant-filled ml-auto mt-auto"
		on:click={() => signOut("keycloak")}>Log Out</button>
</div>
