<template>
<p>This is About me page :{{surname}}</p>
<p>Getting better :{{passName("well done job")}}</p>
<p>Getting good :{{getData("good")}}</p>
<p>Getting best :{{passWork().d}}</p>
<button v-on:click="btnInc()">Click me</button>
<p>{{count}}</p>
</template>

<script>
export default {
	// eslint-disable-next-line vue/multi-word-component-names
    name: "About",
	data(){
		return{
			surname: "Bamidele",
			count: 0,
			passName(a){
				return a
			}
		}
	},
	methods: {

		getData(a){
			return a
		},

		passWork(){
			return{
				b: "bell",
				c: "cup",
				d: this.surname
			}
		},

		btnInc(){
			this.count = this.count + 1
			console.log("clicked on me")
		}
	}
}
</script>

<style scoped>
	p{
		color: blue;
	}
</style>
