<template>
	<p>This is two way binding</p>
	<input type="text" v-model="anything" />
	<p>{{anything}}</p>
</template>

<script>
export default {
	// eslint-disable-next-line vue/multi-word-component-names
		name: "Bind",
		data(){
			return{
				anything: "oluwasegun",
			}
		}
	}
</script>