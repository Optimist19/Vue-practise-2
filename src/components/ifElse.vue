<template>
	<p v-if="state">Session for if else</p>
	<p v-else>This is else</p>
	<button v-on:click="state=!state">Toggle</button>
</template>

<script>
	export default{
		name: "IfElse",
		data(){
			return{
				state: true
			}
		}
	}

</script>