<template>
  <h1>Watchers Deep</h1>
  <input type="text" v-model="movieInfo.title" />
  <input type="text" v-model="movieInfo.actor" />
  <!-- <input type="text" v-model="data.status" /> -->
</template>

<script>
export default {
  name: "WatcherDeep",
  data() {
    return {
      movieInfo: {
        title: "",
        actor: "",
        // status: ""
      }
    };
  },
  watch: {
    movieInfo: {
      handler(newVal) {
        console.log(`This is ${newVal.title} ${newVal.actor}`);
      },
    deep: true
    },
  },
  // beforeMount(){
  //   alert(`beforeMount WatcherDeep`)
  // }
};
</script>

<style></style>
