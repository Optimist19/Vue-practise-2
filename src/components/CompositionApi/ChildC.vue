<template>
  <h1>Child C</h1>
  <p>{{ resultRef }}</p>
  <p>{{ surName }}  {{ firstName }}</p>
</template>

<script>
import { inject, toRefs } from 'vue';
export default {
// import {inject, toRefs} from "vue"

  name: "ChildC",
  setup(){
	const resultRef = inject("ref") 
	const resultdata = inject("data")
	
	return{
		resultRef,
		...toRefs(resultdata)
	}
  }
};
</script>
