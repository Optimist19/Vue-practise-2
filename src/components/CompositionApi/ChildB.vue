<template>
  <h1>Child B</h1>
  <ChildC />
</template>

<script>
import ChildC from "./ChildC";
export default {
  name: "ChildB",
  components: { ChildC }
};
</script>
