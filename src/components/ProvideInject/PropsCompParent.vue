<template>
	<h1>Props in composition Api</h1>
	<ChildProps  :data="data" :show="show"/>
</template>

<script>
import {ref,} from "vue"
import ChildProps from "./PropsCompApi.vue"
	export default{
		name: "ParentProps",
		components:{
			ChildProps
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