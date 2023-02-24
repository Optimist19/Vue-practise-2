<template>
  <h1>Context(emit) composition Api</h1>
  <h3>Child component</h3>
  <p>Cars------> {{ cars }}</p>
  <button @click="passData"> Pass data</button>
</template>

<script>
import {computed} from "vue"
export default {
	name: "PropsChild",
	setup(props, context){

		// const items = reactive({
		// 	motor: "Chevrolet",
		// 	movie: "James Bond",
		// 	Musician: "BurnaBoy"
		// })


		//Having issue here, will come back to resolve it

		const cars = computed(() =>{
			return `${props.motorOne} ${props.motorTwo} ${props.motorThree}`
		})
		

		function passData(){
			context.emit("dataChange", cars)
		}

		return{
			cars,
			passData
		}
	},
}
</script>

<style>

</style>