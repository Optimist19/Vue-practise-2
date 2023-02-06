<template>
	<h1>Computed Property</h1>
	<p>Why use computed Property, you know right</p>
	<p>{{one + two + three}}</p>
	<p>{{add}}</p>
</template>

<script>
	export default{
		name: "ComPro",
		data(){
			return{
				one: 1,
				two: 2,
				three: 3
			}
		},
		computed:{
			add(){
				return (this.one + this.two + this.three)
			}
		}
	}
</script>