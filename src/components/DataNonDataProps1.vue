<template>
	<div>
		<h1>Data And Non Data Props</h1>
		<h1>{{propsData}}</h1>
		<!-- <h1>{{NonPropsData}}</h1> -->
		<h1 v-bind="$attrs">A tag can also have non data</h1>
		<h1>The pass and passOne props are now a non data props which you can find in your parent container(div) and the line 6 because that's where we want it to have the attribute</h1>

	</div>
</template>

<script>
	export default{
		name: "DataNonDataPropsOne",
		inheritAttrs: false,
		// data(){
			
		// },
		props:{
			propsData: String,
			// NonPropsData: String
		}
	}
</script>