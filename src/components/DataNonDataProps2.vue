<template>
	<h1>Data And Non Data Props</h1>
	<div>
		<h1>{{pass}}</h1>
		<h1></h1>
		<h1 v-bind="$attrs">A tag can also have non data</h1>
		<h1>The pass and passOne props are now a non data props which we are supposed to see in our parent container(div)  but the line 14 stopped it to have the non data props</h1>
	</div>
</template>

<script>
	export default{
		name: "DataNonDataPropsTwo",
		inheritAttrs: false,
		props:{
			pass: String,
			// passOne: String
		}
	}
</script>