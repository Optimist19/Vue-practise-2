<template>
  <button @click="showPopup = true">Show Popup</button>
  <Child v-show="showPopup" @close="show($event)" />
</template>

<script>
import Child from "./childEmit.vue";
export default {
  data() {
    return {
      showPopup: false
    };
  },
  components: {
    Child
  },
  methods: {
    show(value) {
      this.showPopup = false;
      console.log("name", value);
    }
  }
};
</script>
