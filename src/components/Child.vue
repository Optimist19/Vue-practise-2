<template>
	<h1>This is a child component</h1>
	<h1>My name is {{name}}</h1>
   
</template>
   
<script>
 export default{
	// eslint-disable-next-line vue/multi-word-component-names
   name: "Child",
   props:{
	name: String
   }
}
</script>