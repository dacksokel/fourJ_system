<script>
	import { menuStore } from '../../stores/index.js';

	import Menu from '../menu/index.svelte';
</script>

<Menu />
{#if !$menuStore}
	<div id="contenedor">
		<div class="container">
			<slot />
		</div>
	</div>
{/if}

<style>
	#contenedor {
		position: relative;
		z-index: 0;
		top: 0;
		right: 0;
		padding: 20px;
		font: 16px/22px 'Open Sans', sans-serif;
	}
	.container {
		margin: 0 auto;
		max-width: 980px;
	}
</style>
