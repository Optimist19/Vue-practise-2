<template>
	<h1>This is watches</h1>
	<h1>{{count}}</h1>
	<button @click="changeCount()"> +Count</button>
</template>

<script>
	export default{
		name: "WatcherS",
		data(){
			return{
				count: 0
			}
		},
		methods:{
			changeCount(){
				this.count++
			}
		},
		watch:{
			count(newVal, oldVal){
				console.log(newVal, oldVal)
			}
		}
	}
</script>