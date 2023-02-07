<template>
  <h1>Watchers Immediate</h1>
  <input type="text" v-model="data" />
</template>

<script>
export default {
	name: "WatcherImmediate",
	data(){
		return{
			data: "Bamidele"
		}	
	},
	watch:{
		data:{
			handler(newVal){
			console.log(`This is ${newVal}`)
			},
			immediate : true,
		},
	}
}
</script>

<style>

</style>