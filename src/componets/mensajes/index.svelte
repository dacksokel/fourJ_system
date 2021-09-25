<script>
	import { fly } from 'svelte/transition';
	export let visible = false,
		text = `este es el mensaje que debe ser cambiado`,
		good = false;
	const test = () => {
		visible = !visible;
	};
	$: if (visible) setTimeout(() => (visible = false), 5000);
</script>

{#if visible && !good}
	<div id="mensajebad" transition:fly={{ y: 200, duration: 2000 }}>
		{text}
	</div>
{:else if visible && good}
	<div id="mensajegood" transition:fly={{ y: 200, duration: 2000 }}>
		{text}
	</div>
{/if}

<style>
	#mensajebad {
		position: fixed;
		top: 0;
		right: 0;
		border: solid;
		padding: 0.5em;
		border-radius: 0.5em;
		background-color: tomato;
	}
	#mensajegood {
		position: fixed;
		top: 0;
		right: 0;
		border: solid;
		padding: 0.5em;
		border-radius: 0.5em;
		background-color: green;
	}
</style>
