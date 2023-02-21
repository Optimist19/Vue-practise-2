<template>
  <h1>Child A</h1>
  <ChildB />
</template>

<script>
import ChildB from "./ChildB";
export default {
  name: "ChildA",
  components: { ChildB }
};
</script>
