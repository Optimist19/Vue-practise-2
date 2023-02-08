<template>
	<p>P - slotProps</p>
  <p>ParentSlot</p>
  <ChildSlot>
	<template v-slot:title="slotProps" >
		
		<h1>{{ slotProps.nam }}</h1>
	
	</template>
	<template v-slot:body="slotProps">
		
		<h1>{{slotProps.title}}</h1>
		
	</template>

</ChildSlot>

</template>

<!-- The child is childslot -->


<script>
import ChildSlot from "./ChildSlot.vue"

export default {
	name: "ParentSlot",
	components:{ChildSlot},
}
</script>

<style>

</style>