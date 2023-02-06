<template>
  <button @click="showPopup = true">Show Popup</button>
  <ChildCustom v-show="showPopup" @close="showPopup = false" />
</template>

<script>
import ChildCustom from "./ChildCustom.vue"
export default {
	data() {
		return {
			showPopup: false
		};
	},
	components:{
		ChildCustom,
	}
};
</script>
