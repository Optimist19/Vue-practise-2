<template>
	<h1>Props in composition Api</h1>
	<ChildProps  :data="data" :show="show"/>
	<PropsParent />
	<ComposableCom />
</template>

<script>
import {ref,} from "vue"
import ChildProps from "./PropsCompApi.vue"
import PropsParent from "./PropsParent.vue"
import ComposableCom from "./Composable.vue"
	export default{
		name: "ParentProps",
		components:{
			ChildProps,
			PropsParent,
			ComposableCom
		},

		setup(){
			const data = ref("Getting better")
			const show = ref("Awesome")
			// const details = reactive({
			// 	nationality: "Nigeria",
			// 	actor: "James Bond"
			// })

			return{
				data,
				show,
				// ...toRefs(details)
			}
		}
	}
</script>