<template>
	<div v-html="name1 + name2 + name3"></div>
</template>

<script>
	export default{
		name: "HtmlBind",
		data(){
			return{
				name1: "<h1>Splendid</h1>",
				name2: "<h2>Good job</h2>",
				name3: "<h3>Nice!!!</h3>"
			}
		}
	}
</script>