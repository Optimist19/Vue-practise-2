<template>
	<div> {{ country }}</div>
	<button @click="change">Change</button>
</template>

<script>
import { ref } from 'vue';
export default{
	name: "RefReactivity",
	setup(){
		let country = ref("England");

		function change(){
			console.log(country.value = "Wales")
			return country.value = "Wales"
		}

		return{
			country,
			change
		}
	}
}

</script>