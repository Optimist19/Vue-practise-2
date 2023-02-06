<template>
	<p v-if="state">Session for if statement</p>
	<!-- <p v-else>Good work</p> -->
	<button v-on:click="state=!state">Toggle</button>
</template>

<script>
	export default{
		name: "IfStatement",
		data(){
			return{
				state: false
			}
		}
	}

</script>