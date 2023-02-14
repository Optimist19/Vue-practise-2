<template>
	<div>
		<h1>Ref</h1>
		<input type="text" placeholder="First Name" v-model="reflName"/>
		<input type="text" placeholder="Last Name" v-model="reffName"/>
		<p>Ref ------ {{ reflName }} {{ reffName }}</p>
		<div>{{ computeRefFullName }}</div>
	</div>
	<div>
		<h1>Reactive</h1>
		<input type="text" placeholder="First Name" v-model="reactivelName"/>
		<input type="text" placeholder="Last Name" v-model="reactivelName "/>
		<p>Reactive ------ {{ reactivelName }} {{ reactivefName }}</p>
		<div>{{ computeReactiveFullName }}</div>
	</div>
</template>

<script>
import {ref, reactive, toRefs, computed} from "vue"

	export default{
		name: "ComputedCompApi",
		setup(){
			const reflName = ref("");
			const reffName = ref("");

			// console.log(reflName,reffName)
			
			const reactiveFullName = reactive({
				reactivelName: '',
				reactivefName: ''
			});

			// console.log(reactiveFullName)
			
			
			const computeRefFullName = computed(function(){
				return `${reffName.value} ${reflName.value}`

			});

			const computeReactiveFullName = computed(function(){
				return `${reactiveFullName.reactivelName} ${reactiveFullName.reactivefName}`
			});


			return{
				reflName,
				reffName,
				...toRefs(reactiveFullName),
				computeRefFullName,
				computeReactiveFullName
				
			}
		}
	}
</script>