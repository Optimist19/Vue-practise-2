<template>
	<p>Component in another component</p>
	<p>Lol &#128151;:{{surname}}</p>
	<p>Lol &#128151;:{{pra}}</p>
	<button v-on:click="getGoal()">Show the goal</button>
</template>

<script>
	export default{
		name: "CompTwoComp",
		props:{
			surname: String,
			pra: String,
			getGoal: Function
		}
	}
</script>