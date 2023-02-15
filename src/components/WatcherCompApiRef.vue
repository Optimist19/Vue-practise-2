<template>
	<h3>The composition api watch for ref.</h3>
	<p>The examples here are the watchers and one that is not of array, one of array and the one of immediate</p>
	<div>
		<p>{{ count }}</p>
		<button v-on:click="counter">Increase</button>
	</div>
	<div>
		<input type="text" placeholder="Name" v-model="text"/>
		<p>{{ text }}</p>
	</div>
	<div>
		<input type="text" placeholder="Name" v-model="textOne"/>
		<p>{{ text }}</p>
	</div>
</template>

<script>
import {ref, watch} from "vue"
	export default{
		name: "WatcherCompApiRef",
		setup(){
			let count = ref(0)
			let text = ref("")
			let textOne = ref("Oluwasegun")

			function counter(){
				count.value += 1
			}

			// The one that is not in array since we are watching one data source

			// watch(count, (oldVal, newVal)=>{
			// 	console.log(`old value is ${oldVal} and new val is ${newVal}`)
			// })


			// The one that is in array since we are watching more than one data source.
			// To get the chnages you can use arry index, e.g
			// console.log(`old value is ${oldVals[0]} and new val is ${newVals[0]}`)
			// console.log(`old value is ${oldVals[1]}and new val is ${newVals[1]}`)

			
			watch([count, text], (oldVals, newVals)=>{
				console.log(`old value is ${oldVals} and new val is ${newVals}`)
				console.log(`old value is ${oldVals}and new val is ${newVals}`)
			})

			// The watch for immediate on page load, without the immediate you won't see oluwasegun in the console when the page loads
			// watch([count, text, textOne], (oldVals, newVals)=>{
			// 	console.log(`old value is ${oldVals} and new val is ${newVals}`)
			// })
			// ,{
			// immediate: true
			// })

			return{
				count,
				counter,
				text,
				textOne
			}
		}
	}

</script>