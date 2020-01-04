<template>
<svg id="graphique" xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0 -10 400 440">
	<rect class="zone" id="zonef" x="0" y="160" height="240" width="400"></rect>
	<rect class="zone" id="zone0" x="0" y="0" height="400" width="240"></rect>
	<rect id="cadre" x=".5" y=".5" height="399" width="399"></rect>
	<path id="chemin" :d="'M ' + 4*(ponderation.minf) + ',' + 4*(100-ponderation.min0) + ' L ' + 4*(ponderation.max0) + ',' + 4*(100-ponderation.maxf) + ''" />
	<path fill="none" stroke="blue" stroke-width="4" :d="'M' + ponderation.courbe.join(' ')"></path>
	<circle :cx="4*50" :cy="400-4*ponderation.note(50)" r="10" fill="none" stroke="red" stroke-width="4"></circle>
	<text x="20" y="20">
		<tspan text-anchor="end" v-for="n in 10" :key="n" x="-4" :y="400-n*40+10">{{n*10}}</tspan>
		<tspan text-anchor="middle" v-for="n in 10" :key="n" y="420" :x="n*40">{{n*10}}</tspan>
	</text>
</svg>
</template>

<style lang="scss">
#graphique {
	grid-column: 2;
}
#cadre {
	fill:transparent;
	stroke-width:4px;
	stroke:black;
}
.zone {
	fill:rgba(0,0,0,.05);
	stroke-width:0px;
	stroke:black;
}
#chemin {
	fill:transparent;
	stroke-width:4px;
	stroke:red;
}
#chemin2 {
	fill:transparent;
	stroke-width:20px;
	stroke:blue;
}
#courbe {
	fill:transparent;
	stroke-width:16px;
	stroke-opacity: .5;
	stroke:green;
}
</style>

<script>
export default {
	props: ['ponderation'],
	mounted() {
	}
}
</script>
