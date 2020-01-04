<template>
	<div id="app" class="interface">
		<header>
			<img src="images/logo_ponderation.svg" alt=""/>
			<h1>Pondération de notes</h1>
		</header>
		<footer>&copy; Martin Boudreau</footer>
		<controles :ponderation="ponderation"></controles>
		<graphique :ponderation="ponderation"></graphique>
	</div>
<!--
Pour pondérer une note
p=note pondéré (valeur cherchée)
m=note maximum (habituellement 100)
c=coefficient de pondération
n=Note à pondérer
------------------
p = Math.pow(n/m, 1/c) * m

======================
Pour trouver un coefficient

Math.log(n/m)/Math.log(p/m)
ou
(Math.log(n) - Math.log(m)) / (Math.log(p) / Math.log(m))
-->
</template>

<script>
import Controles from './components/Controles.vue';
import Graphique from './components/Graphique.vue';
import Ponderation from './js/Ponderation.js';

export default {
	name: 'app',
	data() {
		return {
			ponderation: null,
		}
	},
	components: {
		Controles,
		Graphique,
	},
	mounted() {
		this.ponderation = new Ponderation();
		// var graphique = document.getElementById("graphique");
		// var svg = ponderation.svg();
		// svg.setAttribute("id", "graphique");
		// graphique.parentNode.replaceChild(svg, graphique);
	}
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Special+Elite&display=swap');
html {
    height: 100%;
}
body {
    margin: 0;
    height: 100%;
	font-family: cursive;
	font-family: 'Special Elite', cursive;
}
#app {
    --bgcol: hsl(0, 20%, 87%);
    --bgcol: hsl(266, 30%, 93%);
	min-height: 100%;
	display: grid;
	grid-template-columns: auto 1fr;
	grid-template-rows: auto 1fr auto;
	& > header {
		padding: 0 .5em;
		order: -1000;
		grid-column: 1 / 3;
		display: flex;
		text-align: center;
		background-color: var(--bgcol);
		img {
			height: 80px;
			width: auto;
		}
		h1 {
			font-size: 3rem;
			margin: 0;
			margin-top: .5em;
			line-height: 0;
			flex: 1 0 0;
			text-align: center;
			align-self: center;
		}
	}
	& > footer {
		order: 1000;
		background-color: var(--bgcol);
		grid-column: 1 / 3;
		padding: .5em;
	}
	& > .body {

	}
}
</style>
