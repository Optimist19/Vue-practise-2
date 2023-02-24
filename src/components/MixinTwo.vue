<template>
  <h3>This is Mixin</h3>
  <p>{{ count }}</p>
  <button @click="add">Increase</button>
</template>

<script>
import MixinTwo from "./MixinTwo"

export default {
	name: "CounterO",
	mixins:[MixinTwo]
}
</script>

<style>

</style>