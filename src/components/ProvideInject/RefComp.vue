<template>
	<h1>Ref in composition api</h1>
	<input type="text" ref="a"/>
</template>

<script>
import {onMounted, ref} from "vue"
export default{
	name: "RefComp",
	setup() {
		const a = ref()

		onMounted(() => {
			a.value.focus()
		})


		return{
			a
		}

	},
}
</script>
