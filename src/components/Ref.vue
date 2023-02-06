<template>
	<h1>This is Ref</h1>
	<input type="text" ref="inbox" />
	<button @click="getInput()">here to get</button>
	<h3>{{showHere}}</h3>
</template>

<script>
	export default{
		name: "RefRef",
		data(){
			return{
				show: "like it",
				showHere: "",
				change: ""
			}
		},
		methods:{
			getInput(){
				this.showHere = this.$refs.inbox.value
			}
		}
	}
</script>

