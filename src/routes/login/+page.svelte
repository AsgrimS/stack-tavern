<script lang="ts">
	import { signIn } from "@auth/sveltekit/client";

	// import { loginUserSchema, registerUserSchema } from "$lib/schemas";
	// import type { PageData } from "./$types";

	// import { signIn } from "@auth/sveltekit/client";
	// import { superForm } from "sveltekit-superforms/client";

	// export let data: PageData;

	// const {
	// 	enhance: registerEnhance,
	// 	errors: registerErrors,
	// 	form: registerForm,
	// } = superForm(data.userRegisterForm, {
	// 	validators: registerUserSchema,
	// });

	// const {
	// 	enhance: loginEnhance,
	// 	errors: loginErrors,
	// 	form: loginForm,
	// } = superForm(data.userLoginForm, {
	// 	validators: loginUserSchema,
	// });
</script>

<div class="card mx-auto mt-72 flex min-w-min max-w-md flex-col items-center p-6">
	<h3 class="h3">Login or Register</h3>
	<button
		type="button"
		class="btn variant-filled-primary mx-24 mt-3 min-w-min"
		on:click={() => signIn("keycloak")}>Sign In</button>
</div>
<!-- <div -->
<!-- 	class="mx-6 mt-6 grid min-w-[36rem] max-w-6xl grid-cols-1 gap-6 lg:mx-auto lg:mt-48 lg:grid-cols-2"> -->
<!-- 	<div class="card p-5"> -->
<!-- 		<h2 class="h2">Register</h2> -->
<!-- 		<form -->
<!-- 			class="mt-3 flex flex-col gap-3 px-6" -->
<!-- 			method="POST" -->
<!-- 			action="?/register" -->
<!-- 			use:registerEnhance> -->
<!-- 			<label class="label"> -->
<!-- 				<span>Username</span> -->
<!-- 				<input -->
<!-- 					class="input {$registerErrors.name && 'input-error'}" -->
<!-- 					type="text" -->
<!-- 					name="name" -->
<!-- 					bind:value={$registerForm.name} -->
<!-- 					placeholder="Enter your display username" /> -->
<!-- 			</label> -->
<!---->
<!-- 			<label class="label"> -->
<!-- 				<span>Email</span> -->
<!-- 				<input -->
<!-- 					class="input {$registerErrors.email && 'input-error'}" -->
<!-- 					type="email" -->
<!-- 					name="email" -->
<!-- 					bind:value={$registerForm.email} -->
<!-- 					placeholder="Enter your email" /> -->
<!-- 			</label> -->
<!---->
<!-- 			<label class="label"> -->
<!-- 				<span>Password</span> -->
<!-- 				<input -->
<!-- 					class="input {$registerErrors.password && 'input-error'}" -->
<!-- 					type="password" -->
<!-- 					name="password" -->
<!-- 					bind:value={$registerForm.password} -->
<!-- 					placeholder="Enter your password" /> -->
<!-- 			</label> -->
<!---->
<!-- 			<label class="label"> -->
<!-- 				<span>Confirm Password</span> -->
<!-- 				<input -->
<!-- 					class="input {$registerErrors.confirmPassword && 'input-error'}" -->
<!-- 					type="password" -->
<!-- 					name="confirmPassword" -->
<!-- 					bind:value={$registerForm.confirmPassword} -->
<!-- 					placeholder="Confirm your password" /> -->
<!-- 			</label> -->
<!---->
<!-- 			<button type="submit" class="btn variant-filled-primary mx-24 mt-3 min-w-min">Sign Up</button> -->
<!-- 		</form> -->
<!-- 	</div> -->
<!---->
<!-- 	<div class="card p-5"> -->
<!-- 		<h2 class="h2">Login</h2> -->
<!-- 		<div class="mt-3 flex flex-col gap-3 px-6"> -->
<!-- 			<button -->
<!-- 				type="submit" -->
<!-- 				class="btn variant-filled-primary mx-24 mt-3 min-w-min" -->
<!-- 				on:click={() => signIn("keycloak")}>Sign In</button> -->
<!-- 		</div> -->
<!-- <form class="mt-3 flex flex-col gap-3 px-6" method="POST" action="?/login" use:loginEnhance> -->
<!-- 	<label class="label"> -->
<!-- 		<span>Username or Email</span> -->
<!-- 		<input -->
<!-- 			class="input {$loginErrors.nameOrEmail && 'input-error'}" -->
<!-- 			type="text" -->
<!-- 			name="name" -->
<!-- 			bind:value={$loginForm.nameOrEmail} -->
<!-- 			placeholder="Enter your username or email" /> -->
<!-- 	</label> -->
<!---->
<!-- 	<label class="label"> -->
<!-- 		<span>Password</span> -->
<!-- 		<input -->
<!-- 			class="input {$loginErrors.password && 'input-error'}" -->
<!-- 			type="password" -->
<!-- 			name="password" -->
<!-- 			bind:value={$loginForm.password} -->
<!-- 			placeholder="Enter your password" /> -->
<!-- 	</label> -->
<!---->
<!-- 	<button type="submit" class="btn variant-filled-primary mx-24 mt-3 min-w-min">Sign In</button> -->
<!-- </form> -->
<!-- </div> -->
<!-- </div> -->
