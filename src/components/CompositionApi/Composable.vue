<template>
  <h3>Vue composables</h3>
  <p>{{ count }}</p>
  <button @click="add">ADD</button>
</template>

<script>
import useComposable from "./useComposable"

export default {
	name: "ComposableCom",
	setup(){
		const {add, count} = useComposable()

		return{
			add,
			count
		}
	}
	
}
</script>

<style>

</style>