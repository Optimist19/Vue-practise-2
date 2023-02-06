<template>
	<p>Passing data to parent component{{data}}</p>
	<button @click="getData(data)">Get It</button>
</template>

<script>
	export default{
		name: "ChildToParentProps",
		data(){
			return{
				data: "This is it"
			}
		},

		props:{
			getData: Function
		}
	}
</script>