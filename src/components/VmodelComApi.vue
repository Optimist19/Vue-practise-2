<template>
	<div>
		<h1>Ref</h1>
		<input type="text" placeholder="First Name" v-model="reflName"/>
		<input type="text" placeholder="Last Name" v-model="reffName"/>
		<p>Ref ------ {{ reflName }} {{ reffName }}</p>
	</div>
	<div>
		<h1>Reactive</h1>
		<input type="text" placeholder="First Name" v-model="reactivelName"/>
		<input type="text" placeholder="Last Name" v-model="reactivefName "/>
		<p>Reactive ------ {{ reactivelName }} {{ reactivefName }}</p>

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
				reactivelName: '',
				reactivefName: ''
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