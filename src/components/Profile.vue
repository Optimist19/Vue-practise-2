<template>
	<h1>Dynamic Routing params</h1>
	<h1>This is {{name}}'s component</h1>
	<router-link to="/">Home</router-link>
   
</template>
   
<script>
 import { useRoute } from 'vue-router';
 export default{
	// eslint-disable-next-line vue/multi-word-component-names
   name: "Profile",
   data(){
	return{
		name: ""
	}
   },
   mounted(){
	const route = useRoute()
	console.log("route", route.params.any)
	this.name = route.params.any
   }
}
</script>