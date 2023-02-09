<template>
  <JavaTech v-if="tab === 'JavaTech'"/>
  <NodeTech v-if="tab === 'NodeTech'"/>
  <PhpTech v-if="tab === 'PhpTech'"/>
  <h1>Dynamic Component</h1>
  <button @click="tab ='Node'">Node</button>
  <button @click="tab ='Java'">Java</button>
  <button @click="tab ='Php'">Php</button>
  <component :is="tab" />
</template>

<script>
	import JavaTech from "./Java.vue"
	import NodeTech from "./Node.vue"
	import PhpTech from "./Php.vue"

	export default{
		name: "DynamicCom",
		data(){
			return{
				tab: "Java",
			}
		},
		components:{
			JavaTech,
			NodeTech,
			PhpTech
		}
	}
</script>
