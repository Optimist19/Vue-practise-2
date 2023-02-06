<template>
	<p>Getting inputs</p>
	<input type="text" placeholder="Email here" v-model="email" />
	<input type="text" placeholder="Password here" v-model="password" />
	<p>{{email}}</p>
	<p>{{password}}</p>
	<button v-on:click="getData()">Get Data</button>
</template>

<script>
	export default{
		name: "InputField",
		data(){
			return{
				email: '',
				password: ''
			}
		},
		methods:{
			getData(){
				console.log(`The email is : ${this.email} and the password is ${this.password}`)
			}
		}
	}
</script>


<!-- Note: You might be wondering the placeholder worked in this place compare to twoWayBind.js component, it is because here, it was set to be empty strings. If you should put a value you will see v-model will override the placeholder -->


