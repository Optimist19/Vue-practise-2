<template>
  <div>
	<h4>Context(emit) composition Api</h4>
	<p>Cars: {{ motorOne }} {{ motorTwo }} {{ motorThree }}</p>
  </div>
  <PropsChild @passdata = "getData" />
</template>

<script>
import {ref} from "vue"
import PropsChild from "./PropsChild.vue"
export default {
	name: "PropsParent",
	setup(){
		const motorOne = ref("Nissan")
		const motorTwo = ref("Lambo")
		const motorThree = ref("Mustang")

		function getData(event){
			console.log(event)
		}

		return{
			motorOne,
			motorTwo,
			motorThree,
			getData
		}
	},
	components:{
		PropsChild
	}
}
</script>

<style>

</style>