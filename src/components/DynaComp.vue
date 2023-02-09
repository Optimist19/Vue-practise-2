<template>
  <h1>Dynamic Component</h1>
  <button @click="component = 'TabA'">TabA</button>
  <button @click="component = 'TabB'">TabB</button>
  <button @click="component = 'TabC'">TabC</button>
  <component :is="component" />
</template>

<script>

import TabA from "./TabA.vue";
import TabB from "./TabB";
import TabC from "./TabC.vue"

export default {
	name: 'DynaComp',
	components:{
		TabA,
		TabB,
		TabC
	},
	data(){
		return{
			component: "TabA"
		}
	}
}
</script>

<style>

</style>