<script>
	import { get } from 'svelte/store';
	import { onMount, afterUpdate } from 'svelte';
	import { userStore, empresaStore, itemsStore } from '../stores/index.js';
	import Slots from '../componets/slots/index.svelte';
	import Loading from '../componets/loading/index.svelte';
	// import Producto from '../componets/inventario/index.svelte';
	let items = [],
		departamentos = [],
		departamento = '',
		itemNC = '';
	//itemNC = item nombre codigo

	async function start(departamento) {
		let userL = get(userStore);
		if (departamento == '') {
			let depa = await fetch(`http://localhost:1000/departamentos`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			depa = await depa.json();
			departamentos = depa.departamentos;
			if (departamentos.length > 0) {
				let items = await fetch(
					`http://localhost:1000/producto/${userL.user.rif}/${departamentos[0]._id}`
				);
				items = await items.json();

				if (items.productos.length > 0) {
					return items.productos;
				} else {
					throw new Error(items);
				}
			}
		} else {
			let items = await fetch(`http://localhost:1000/producto/${userL.user.rif}/${departamento}`);
			items = await items.json();

			if (items.productos.length > 0) {
				return items.productos;
			} else {
				throw new Error(items);
			}
		}
	}
	let s = () => {
		let estilo = ['d-card blue ', 'd-card green', 'd-card red'];
		let n = parseInt(Math.random() * 3);

		return estilo[n];
	};

	async function g1(its, itemNC) {
		let d;
		if (itemNC) {
			d = its.filter((item) => item.nombre.includes(itemNC));
		} else {
			d = its;
		}

		console.log('🚀 ~ file: inventario.svelte ~ line 64 ~ g1 ~ d', d);
	}
	// $: updateItems();
	$: if (departamento == '') {
		console.log('vacio');
		items = start(departamento);
	} else {
		console.log(departamento);
		items = start(departamento);
	}

	// $: if (itemNC != ""){
	// 	console.log(itemNC)
	// 	items2 = items.filter( item =>{
	// 		itemNC = itemNC.toLowerCase()
	// 		item.nombre = item.nombre.toLowerCase()

	// 		if(item.nombre.includes(itemNC)) {
	// 			return true
	// 		}else{
	// 			return false
	// 		}
	// 	})
	// 	console.log(items2)
	// }
	// $: console.log(g1(items, itemNC))
	async function guardar(i) {
		console.log('guardando datos ', i);
		let res = await fetch(`http://localhost:1000/producto`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(i)
		});

		let datos = await res.json();
		console.log(datos);
	}
</script>

<Slots>
	{#await items}
		<Loading />
	{:then items2}
		<div>
			Buscar por departamentos: <select bind:value={departamento}>
				{#each departamentos as depa}
					<option value={depa._id}>{depa.nombre}</option>
				{/each}
			</select>
			<!-- <p>
				Buscar por nombre: <input type="text" bind:value={itemNC} />
			</p> -->
		</div>
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
						<button on:click={guardar(item)}> Guardar </button>
						<!-- <button> Modificar </button> -->
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
