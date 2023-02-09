<template>
  <h1>Data properties to reactive</h1>
  <p>{{ react.firstName }} {{ react.lastName }} {{ react.middleName }}</p>
  <p>{{ react }}</p>
</template>

<script>
import {reactive}	from 'vue'
export default {
	name: "DataReactive",
	setup(){
		const react = reactive({
			firstName: "Oluwasegun",
			middleName: "Owonikoko",
			lastName: "Bamidele",
		})

		return{
			react
		}
	}
}
</script>

<style>

</style>