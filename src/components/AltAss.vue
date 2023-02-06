<template>
<p>{{item}}</p>
<input type="text" class="input" v-model="emptyStr" />
 v-model="emptyStr" />
<p>{{emptyStr}}</p>
<button v-on:click="btn()">Add</button>
<button v-on:click="dlbtn()">Del</button>
<ul>
	<li v-for="fruit in fruits" :key="fruit">
		{{fruit}}
	</li>
</ul>
</template>

<script>
export default {
    name: "AltAss",
	data(){
		return {
			item: "orange",
			emptyStr: "",
			fruits: [],
		}
	},

	methods:{
		btn(){
			this.fruits.push(this.emptyStr)
			this.emptyStr = ""
		},

		dlbtn(){
			this.fruits.slice(0, -1)
		}
	}

}
</script>
