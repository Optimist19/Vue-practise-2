<template>
  <h1>Composition Api</h1>
  <h1>Replacing data properties to ref</h1>
  <p>{{ firstName }}</p>
</template>

<script>
import { ref } from 'vue';

export default {
	name: "CompApiDataToRef",
	setup(){
		const firstName = ref("Oluwasegun")

		return{
			firstName
		}
	}
}
</script>

<style>

</style>