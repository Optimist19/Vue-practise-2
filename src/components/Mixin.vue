<template>
  <div>{{ name }}</div>
  <input v-model="search" />
  <div v-for="color in filteredColors" :key="color">
    <div :style="`color: ${color}`">{{ color }}</div>
  </div>
</template>

<script>
import mixIn from './mixIn'
export default {
  name: "ColorMixIn",
  mixins:[mixIn]
  
};
</script>
<style></style>
