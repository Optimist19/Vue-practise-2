<template>
	<div>
		<h1>Ref</h1>
		<input type="text" placeholder="First Name" v-model="reflName"/>
		<input type="text" placeholder="Last Name" v-model="reffName"/>
		<p>Ref ------ {{ reflName }} {{ reffName }}</p>
	</div>
	<div>
		<h1>Reactive</h1>
		<input type="text" placeholder="First Name" v-model="reflName"/>
		<input type="text" placeholder="Last Name" v-model="reffName "/>
		<p>Reactive ------ {{ reflName }} {{ reffName }}</p>

	</div>
</template>

<script>
import {ref, reactive, toRefs} from "vue"

	export default{
		name: "VmodelComApi",
		setup(){
			const reflName = ref("");
			const reffName = ref("");

			// console.log(reflName,reffName)
			
			const reactiveFullName = reactive({
				reflName: '',
				reffName: ''
			});

			// console.log(reactiveFullName)
			
			return{
				reflName,
				reffName,
				...toRefs(reactiveFullName)
				
			}
		}
	}
</script>