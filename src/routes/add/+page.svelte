<script lang="ts">
	import type { PageData } from "./$types";
	import { superForm } from "sveltekit-superforms/client";

	export let data: PageData;

	const { constraints, enhance } = superForm(data.form);
</script>

<div class="flex justify-center">
	<form class="mt-6 flex flex-col gap-6" method="post" action="?/addStack" use:enhance>
		<label class="label">
			<span>Stack Name</span>
			<input
				class="input"
				type="text"
				name="name"
				{...$constraints.name}
				placeholder="What's the name of you stack?" />
		</label>
		<label class="label">
			<span>Description</span>
			<textarea
				class="textarea"
				rows="4"
				name="description"
				{...$constraints.description}
				placeholder="Provide a short summary of you tech stack." />
		</label>
		<button type="submit" class="btn variant-filled-primary">Add Stack</button>
	</form>
</div>
