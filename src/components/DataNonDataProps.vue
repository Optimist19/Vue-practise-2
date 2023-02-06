<template>
	<div>
		<h1>Data And Non Data Props</h1>
		<h1>The pass props is a non data props which yu can find in your parent container(div)</h1>
		<h1 v-bind ="$attrs">The passOne props is a data props which will not show in our parent container(div) in the developer tool</h1>
		<h1>{{pass}}</h1>
	</div>
</template>

<script>
	export default{
		name: "DataNonDataProps",
		inheritAttrs: false,
		// data(){
			
		// },
		props:{
			// pass: String,
			pass: String
		}
	}
</script>