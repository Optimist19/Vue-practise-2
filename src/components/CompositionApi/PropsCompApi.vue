<template>
	<div>
		<h1>Child to the parent</h1>
		<!-- <p>{{ data }} {{ show }}</p> -->
		<!-- <p>{{ concarte }}</p> -->
		<p>setup props {{ concarte }}</p>
	</div>
</template>

<script>
import{computed} from "vue"
	export default{
		name: "ChildProps",
		props:{
			data: String,
			show: String,
			// details: Object
		},

		setup(props){
			// const { actor } = toRefs(props)
			// const { nationality } = toRefs(props)
			const concarte = computed(() =>{
				return `${props.data} ${props.show}`
				// return `${props.data} ${props.show} ${props.actor} ${props.nationality}`
			})

			return{
				concarte,
				// actor,
				// nationality
			}
		}

		// computed:{
		// 	concarte(){
		// 		return `${this.data} ${this.show}`
		// 	}
		// }


	}
</script>