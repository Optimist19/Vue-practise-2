<template>
	<p :class="{blue:color}">Love the life I am living!!!</p>
	<button v-on:click="color=!color">Toggle</button>
</template>

<script>
export default {
    name: "ClassBinding",
    data() {
        return {
            color: true,
			text: true
        }
    }
}
</script>

<style>
.blue {
    color: blue;
    padding: 2vh 0;
    background-color: rgb(43, 226, 52);
}
</style>

<!-- You need to go more further than this, you haven't done computed -->
