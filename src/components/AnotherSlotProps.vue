<template>
  <p>Another example of SlotProps</p>
  <slot name="details" :data="data" :isLoading="isLoading">Fetched data</slot>
  <!-- <button v-on:click="results()">Get Results</button> -->
</template>

<script>
export default {
	name: "AnotherSlotProps",
	data(){
		return{
			data: [],
			isLoading: true
		}
	},
	props:{
		url: String
	},
	mounted(){
		
		fetch(this.url)
		.then(res => res.json())
		.then(data => {
			console.log(data);
			this.data = data
		})
		.catch(err => err.message)
		.finally(() =>
			this.isLoading = false
		)
			
	}
}
</script>

<style>

</style>