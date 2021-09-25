<script>
	export let producto;
</script>

<div class=" d-card blue">
	<div class="card-header">
		<div class="icon">
			<i class="fa fa-tint" />
		</div>
		<p>Water Card</p>
	</div>
	<div class="card-body">
		<p>
			Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
			Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
			mus
		</p>
	</div>
	<div class="card-actions">
		<i class="fa fa-eye" />
		<i class="fa fa-edit" />
		<i class="fa fa-trash" />
	</div>
</div>

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
