<template>
  <div>Fullname: {{ firstName }} {{ lastName }}</div>
</template>

<script>
import {reactive, toRefs} from "vue"
export default {
	name:"ReactiveReactivity",
	setup(){
		let details = reactive({
			firstName: "Oluwasegun",
			lastName: "Bamidele"
		})

		return toRefs(
			details
		)
	}
}
</script>

<style>

</style>