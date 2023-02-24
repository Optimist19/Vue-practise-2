<template>
  <h1>Context(emit) composition Api</h1>
  <h3>Child component</h3>
  <button @click="passData"> Pass data</button>
</template>

<script>
import {reactive, toRefs} from "vue"
export default {
	name: "PropsChild",
	setup(context){

		const items = reactive({
			motor: "Chevrolet",
			movie: "James Bond",
			Musician: "BurnaBoy"
		})
		

		function passData(){
			context.emit("dataChange", items)
		}

		return{
			...toRefs(items),
			passData
		}
	},
}
</script>

<style>

</style>