<script>
	import { userStore } from '../stores/index.js';

	import Login from '../componets/login/index.svelte';
</script>

<!-- src/routes/__layout.svelte -->
<svelte:head>
	<title>Home</title>
</svelte:head>

<Login />

<slot />
