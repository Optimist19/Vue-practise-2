<template>
	<ParentProps />
	<RefComp />
  <h1>Inject And Provide Composition Api</h1>
  <ChildA />
  <p>{{ refExample }}</p>
  <p>{{ surName }} {{ firstName }}</p>
</template>

<script>
import ParentProps from "./PropsCompParent";
import ChildA from "./ChildA";
import RefComp from "./RefComp";
import {ref, reactive, provide, toRefs} from "vue"

export default {
  name: "InjectProvideCompApi",
  components: { ChildA, RefComp, ParentProps },
  setup(){
	const refExample = ref(0);
	const data = reactive({
		surName: "Ronaldo",
		firstName: "Rivaldo"
	})

	provide("ref",  refExample)
	provide("data",  data)

	return{
		refExample,
		...toRefs(data)
	}
  }
};
</script>
