<script>
	import { get } from 'svelte/store';
	import { onMount, afterUpdate } from 'svelte';
	import { userStore, empresaStore, itemsStore } from '../stores/index.js';
	import Slots from '../componets/slots/index.svelte';
	import Loading from '../componets/loading/index.svelte';
	// import Producto from '../componets/inventario/index.svelte';
	let items = [];
	async function start() {
		let userL = get(userStore);
		let items = await fetch(`http://localhost:1000/producto/${userL.user.rif}`);
		items = await items.json();
		// console.log("🚀 ~ file: inventario.svelte ~ line 12 ~ start ~ items", items)

		if (items.productos.length > 0) {
			// console.log(items.productos);
			return items.productos;
			// itemsStore.start(items.productos);
		}
	}
	items = start();
	// $: if ($itemsStore) {
	// 	console.log($itemsStore.length);
	// 	if ($itemsStore.length > 0) {
	// 		console.log('the component has mounted');
	// 		console.log('🚀 ~ file: inventario.svelte ~ line 10 ~ itemsStore', $itemsStore);
	// 		items = $itemsStore;
	// 	}
	// }
	let s = () => {
		let estilo = ['d-card blue ', 'd-card green', 'd-card red'];
		let n = parseInt(Math.random() * 3);

		return estilo[n];
	};
</script>

<Slots>
	{#await items}
		<Loading></Loading>
	{:then items2}
		<div class="main-view">
			<!-- <Producto></Producto> -->
			<!-- lo usare asi de momento por lo rapido pero esto debe irse a un componente -->
			{#each items2 as item}
				<div class={s()}>
					<div class="card-header">
						<div class="icon">
							<i class="fa fa-tint" />
						</div>
						<span>{item.codigo}</span>
						<p>{item.nombre}</p>
					</div>
					<div class="card-body">
						<p>
							{item.descripcion}
						</p>
						<p>
							Almacen: <input type="number" bind:value={item.almacen} />
						</p>
						<p>
							Cantidad: <input type="number" bind:value={item.cantidad} />
						</p>
					</div>
					<div class="card-actions">
						<i class="fa fa-eye" />
						<i class="fa fa-edit" />
						<i class="fa fa-trash" />
					</div>
				</div>
			{/each}
		</div>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</Slots>

<style>
	@font-face {
		font-family: 'Lato';
		font-style: normal;
		font-weight: 400;
		src: url(https://fonts.gstatic.com/s/lato/v20/S6uyw4BMUTPHjx4wWw.ttf) format('truetype');
	}

	.main-view {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: flex-start;
		padding: 0;
	}
	.main-view .d-card {
		background: -moz-linear-gradient(top, #f9532a 0%, #f9842a 45%);
		background: -webkit-linear-gradient(top, #f9532a 0%, #f9842a 45%);
		background: linear-gradient(to bottom, #f9532a 0%, #f9842a 45%);
		box-shadow: 6px 0px 18px -6px rgba(0, 0, 0, 0.4);
		border: 6px solid white;
		border-radius: 10px;
		max-width: 200px;
		min-width: 200px;
		max-height: 300px;
		min-height: 300px;
		transition: all 0.5s ease-in-out;
		margin: 0.2em;
		padding: 10px;
	}
	.main-view .d-card.blue {
		background: -moz-linear-gradient(top, #2ad3f9 0%, #2a90f9 45%);
		background: -webkit-linear-gradient(top, #2ad3f9 0%, #2a90f9 45%);
		background: linear-gradient(to bottom, #2ad3f9 0%, #2a90f9 45%);
	}
	.main-view .d-card.green {
		background: -moz-linear-gradient(top, #2af96a 0%, #27d072 45%);
		background: -webkit-linear-gradient(top, #2af96a 0%, #27d072 45%);
		background: linear-gradient(to bottom, #2af96a 0%, #27d072 45%);
	}
	.main-view .d-card.red {
		background: -moz-linear-gradient(top, #f9532a 0%, #f9842a 45%);
		background: -webkit-linear-gradient(top, #f9532a 0%, #f9842a 45%);
		background: linear-gradient(to bottom, #f9532a 0%, #f9842a 45%);
	}
	.main-view .d-card:hover {
		-webkit-box-shadow: 0px 0px 15px 5px rgba(255, 123, 123, 0.3);
		box-shadow: 0px 0px 15px 5px rgba(255, 123, 123, 0.3);
		transform: scale(1.02);
		transition: all 0.5s ease-in-out;
	}
	.main-view .d-card:hover.green {
		-webkit-box-shadow: 0px 0px 15px 5px rgba(255, 123, 123, 0.3);
		box-shadow: 0px 0px 15px 5px rgba(36, 224, 33, 0.61);
	}
	.main-view .d-card:hover.blue {
		-webkit-box-shadow: 0px 0px 15px 5px rgba(255, 123, 123, 0.3);
		box-shadow: 0px 0px 15px 5px rgba(33, 162, 224, 0.61);
	}
	.main-view .d-card:hover.red {
		-webkit-box-shadow: 0px 0px 15px 5px rgba(255, 123, 123, 0.3);
		box-shadow: 0px 0px 15px 5px rgba(224, 33, 33, 0.61);
	}
	.main-view .d-card:hover .card-header .icon {
		border: 1px solid white;
		border-radius: 5px;
		transition: border-radius 0.5s ease-in-out;
	}
	.main-view .d-card .card-header {
		text-align: center;
		display: flex;
		flex-direction: column;
		color: white;
	}
	.main-view .d-card .card-header .icon {
		display: flex;
		align-items: center;
		align-content: center;
		justify-content: center;
		border: 1px solid white;
		border-radius: 100%;
		transition: border-radius 0.5s ease-in-out;
		width: 30px;
		height: 30px;
	}
	.main-view .d-card .card-body p {
		color: white;
	}
	.main-view .d-card .card-body p input {
		width: 30%;
		border: none;
		border-bottom: solid thin;
		background: none;
	}
	.main-view .d-card .card-actions {
		border-top: 1px solid white;
		display: flex;
		-webkit-box-pack: justify;
		align-content: center;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		cursor: pointer;
	}
	.main-view .d-card .card-actions i {
		margin-top: 6px;
		color: white;
		border: 2px solid transparent;
		padding: 4px;
	}
	.main-view .d-card .card-actions i:hover {
		background: #fefffe70;
		border: 2px solid #fefffe70;
		border-radius: 4px;
	}
</style>
