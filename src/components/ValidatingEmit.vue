<template>
  <button @click="showPopup = true">Show Popup</button>
  <ChildValidateEmit v-show="showPopup" @close="show" />
</template>

<script>
import ChildValidateEmit from "./ChildVEmit.vue";
export default {
  data() {
    return {
      showPopup: false
    };
  },
  components: {
    ChildValidateEmit
  },methods: {
    show(value) {
      this.showPopup = false;
      console.log("name", value);
    }
  }
};
</script>
