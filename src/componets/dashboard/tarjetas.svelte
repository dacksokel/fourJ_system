<script>
	import { urlStore } from '../../stores/index.js';
	export let option;
</script>

<div class={option.class} on:click={urlStore.update}>
	<a href={option.url}
		><span><img id="img" src={option.icon} alt={option.titulo} /> </span>{option.titulo}</a
	>
</div>

<!-- <div class="panel post">
				<a href="javascript:void();"><span>8 </span>Posts</a>
			</div>
			<div class="panel comment">
				<a href="javascript:void();"><span>39 </span>Comments</a>
			</div>
			<div class="panel page">
				<a href="javascript:void();"><span>5 </span>Pages</a>
			</div>
			<div class="panel user">
				<a href="javascript:void();"><span>4 </span>Users</a>
			</div> -->
<style>
	.panel {
		box-sizing: border-box;
		position: relative;
		display: inline-block;
		width: 300px;
		height: 160px;
		margin: 10px;
		font-size: 32px;
		font-weight: 600;
		color: #fff;
		overflow: hidden;
		border-radius: 8px;
	}
	.panel a {
		position: relative;
		display: block;
		padding: 12px 25px 25px 25px;
		color: #fff;
		text-decoration: none;
		z-index: 2;
	}
	.panel a span {
		display: block;
		font-size: 96px;
		font-weight: 700;
		line-height: 96px;
	}
	.panel:after {
		position: absolute;
		font-family: FontAwesome;
		color: #000000;
		z-index: 1;
		transition: all 0.5s;
		line-height: normal;
	}
	.panel.post {
		background-color: #b8aa0e;
	}
	.panel.post:after {
		content: '\f08d';
		font-size: 200px;
		color: #a5980d;
		top: 45px;
		right: 60px;
		-webkit-transform: rotate(45deg);
		transform: rotate(45deg);
	}
	.panel.post:hover:after {
		top: 8px;
	}
	.panel.comment {
		background-color: #0377c0;
	}
	.panel.comment:after {
		content: '\f075';
		font-size: 180px;
		color: #036bac;
		top: 30px;
		right: 35px;
	}
	.panel.comment:hover:after {
		top: -5px;
	}
	.panel.page {
		background-color: #279824;
	}
	.panel.page:after {
		content: '\f15c';
		font-size: 160px;
		color: #238820;
		top: 62px;
		right: 39px;
	}
	.panel.page:hover:after {
		top: 24px;
	}
	.panel.user {
		background-color: #fc1c3e;
	}
	.panel.user:after {
		content: '\f007';
		font-size: 200px;
		color: #ec0326;
		top: 45px;
		right: 35px;
	}
	.panel.user:hover:after {
		top: 7px;
	}
	.panel:hover:after {
		transition: all 0.5s;
	}
	#img {
		width: 35%;
	}
</style>
