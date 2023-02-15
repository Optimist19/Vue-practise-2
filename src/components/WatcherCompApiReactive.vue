<template>
	<h3>The composition api watch for reactive</h3>
  <div>
	<input type="text" placeholder="First name" v-model="fName"/><br />
	<input type="text" placeholder="Middle name" v-model="mName"/><br />
	<input type="text" placeholder="Last name" v-model="lName"/><br />
  </div>
  <p>{{ fName }} {{ mName }} {{ lName }}</p>
  <!-- <p>{{ fullName }}</p> -->
</template>

<script>
import {reactive, toRefs, watch} from "vue"
export default {
	name: "WatcherCompApiReactive",
	setup(){
		const fullName = reactive({
			fName: "",
			mName: "",
			lName: ""
		})

		watch(()=>{
			return {...fullName}
		}, function(newVal, oldVal){
			console.log(`new value fName ${newVal.fName} old value fName ${oldVal.fName}`)
			console.log(`new value mName ${newVal.mName} old value mName ${oldVal.mName}`)
			console.log(`new value lName ${newVal.lName} old value lName ${oldVal.lName}`)
		})

		return{
			...toRefs(fullName),
			// fullName
		}

	}
}
</script>

<style>

</style>