<template>
	<!-- Child of CompVmodel.vue -->
  <h1>Component And v-model </h1>
  <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"/>
</template>

<script>
export default {
	name: "CompChild",
	data(){
		return{

		}
	},
	props:{
		modelValue: String
	}
}
</script>

<style>

</style>