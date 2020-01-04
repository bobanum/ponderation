<template>
<form v-if="ponderation" action="" border="1" name="controles" id="controles">
	<span></span>
	<span></span>
	<span class="etiquette colonne original">Original</span>
	<span class="etiquette colonne pondere">Pondéré</span>
	<span class="coche"><input class="coche" zzzdisabled="zzzdisabled" type="radio" name="type" id="typemin" /></span>
	<label for="typemin">Note minimale&nbsp;:</label>
	<input class="original" zzzdisabled="zzzdisabled" type="number" name="min0" v-model="ponderation.min0" />
	<input class="pondere" zzzdisabled="zzzdisabled" type="number" name="minf" v-model="ponderation.minf" />
	<span class="coche"><input zzzdisabled="zzzdisabled" type="radio" name="type" id="typemax" /></span>
	<label for="typemax">Note maximale&nbsp;:</label>
	<input class="original" type="number" name="max0" v-model="ponderation.max0" />
	<input class="pondere" type="number" name="maxf" v-model="ponderation.maxf" />
	<span class="coche"><input type="radio" name="type" id="type" checked="checked" /></span>
	<label for="type">Référence&nbsp;:</label>
	<input class="original" type="number" name="ref0" v-model="ponderation.ref0" />
	<input class="pondere" type="number" name="reff" v-model="ponderation.reff" />
	<span class="coche"><input type="radio" name="type" id="typecoefficient" /></span>
	<label for="typecoefficient">Coefficient&nbsp;:</label>
	<input class="original pondere" type="number" name="coefficient" step=".1" v-model="ponderation.coefficient" />
	<span class="coche"><input type="radio" name="type" id="typemoderation" /></span>
	<label for="typemoderation">Modération&nbsp;:</label>
	<span class="original pondere"><input type="range" v-model="ponderation.moderation" min="0" max="1" step=".05" name="moderation" /></span>
	<span class="coche"></span>
	<label class="label" for="depart">Groupe&nbsp;:</label>
	<textarea class="original" name="depart" id="depart" cols="5" rows="10"></textarea>
	<textarea class="pondere" readonly="readonly" name="arrivee" id="arrivee" cols="20" rows="10"></textarea>
</form>
</template>

<style lang="scss">
#controles {
	background-color: black;
	margin: .5em;
	& > * {
		background-color: white;
		display: flex;
		align-items: center;
		line-height: 1em;
		padding: .24em;
	}
	grid-gap: .8px;
	padding: .8px;
	grid-column: 1;
	display: grid;
	grid-template-columns: [coche] 2em [etiquette] auto [original] 8ch [pondere] 8ch;
	grid-template-rows: 1em repeat(5, auto) 1fr;
	input[type], textarea {
		width: 100%;
//		display: block;
		text-align: right;
		margin: 0;
		padding: 0 .5ch;
		background-color: white;
		border: none;
		box-sizing: border-box;
	}
	label {
		justify-content: flex-end;
	}
	textarea {
		overflow-x: hidden;
		white-space: pre;
	}
	.original {
		grid-column: 3;
	}
	.pondere {
		grid-column: 4;
	}
	.original.pondere {
		grid-column: 3 / span 2;
	}
}
</style>

<script>
export default {
	name: "controles",
	props: ["ponderation"],
}
</script>
