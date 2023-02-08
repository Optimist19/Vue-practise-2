<template>
  <CompChild v-model="name" />
</template>

<script>
import CompChild from "./CompChild.vue"

export default {
	name:"CompVmodel",
	data(){
		return{
			name: ""
		}
	},
	components:{
		CompChild
	}
}
</script>

<style>

</style>