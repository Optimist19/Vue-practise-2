<template>
  <p ref="p">beforeUnmount and unmounted</p>
</template>

<script>
export default {
  name: "IfTwo",
  beforeUnmount(){
    console.log("beforeUnmount", this.$refs["p"])
  },
  unmounted(){
    console.log("unmounted", this.$refs["p"])
  },
  mounted(){
    console.log("mounted")
  },
  // .p and ["p"] same
};
</script>
