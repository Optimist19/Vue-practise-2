<template>
	<ul>
		<li v-for="list in array" :key="list">{{list}}</li>
	</ul>
	
	<p v-for="ob in name" :key="ob">{{ob.name}} : {{ob.email}}</p>
	
</template>

<script>
	export default{
		name: 'ForLoop',
		data(){
			return{
				array: ["a", "b", "c", "d", "e"],
				// array of object
				name:[
					{
						name: "Tobi",
						email: "alakoriyahoo.com"
					},
					{
						name: "shege",
						email: "Gmailyahoo.com"
					}
				]
			}
		}

	}
</script>