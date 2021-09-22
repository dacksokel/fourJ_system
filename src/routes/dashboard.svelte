<script>
	import Cards from '../componets/dashboard/tarjetas.svelte';
	import Slots from '../componets/slots/index.svelte';
	import { options } from '../util/dashboard/index';
</script>

<!-- src/routes/about.svelte -->
<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<Slots>
	{#each options as option}
		<Cards {option} />
	{/each}
</Slots>

<style>
</style>
