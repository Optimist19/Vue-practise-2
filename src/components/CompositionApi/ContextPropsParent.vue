<template>
  <div>
	<h4>Context(emit) composition Api</h4>
	<!-- <p>Cars: {{ motorOne }} {{ motorTwo }} {{ motorThree }}</p> -->
  </div>
  <ContextChild :motorOne="motorOne" :motorTwo="motorTwo" :motorThree="motorThree" @dataChange = "getData" />
  <p>Data we passed to the parent from child using context</p>
</template>

<script>
import {ref} from "vue"
import ContextChild from "./ContextPropsChild.vue"
export default {
	name: "PropsParent",
	setup(){
		const motorOne = ref("Nissan")
		const motorTwo = ref("Lambo")
		const motorThree = ref("Mustang")

		function getData(event){
			console.log(event.value)
		}

		return{
			motorOne,
			motorTwo,
			motorThree,
			getData
		}
	},
	components:{
		ContextChild
	}
}
</script>

<style>

</style>