<template>
	<p>S - slotProps</p>
  <p>ChildSlot</p>
  <h1><slot name="title" :nam="nam">This is the Child</slot></h1>
  <slot name="body" :title="title">This is the Body Child</slot>
</template>

<script>
export default {
	name: "ChildSlot",
	data(){
		return{
			nam: "John Doe",
			title: "The Moon"
		}
	}
}
</script>

<style>

</style>