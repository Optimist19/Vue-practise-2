<template>
  <div>
    <h2>This is a Popup</h2>
    <button @click="$emit('close')">Close Popup</button>
  </div>
</template>

<script>
export default {
  name: "ChildCustom",
  emits: ["close"]
};
</script>
