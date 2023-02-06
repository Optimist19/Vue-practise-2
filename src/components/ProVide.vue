<template>
  <h1>Another way for Provide and Inject Api</h1>
  <p>{{ username }}</p>
  <p>{{ lastName }}</p>
</template>

<script>
export default {
	inject:["username", "lastName"]
}
</script>

<style>

</style>