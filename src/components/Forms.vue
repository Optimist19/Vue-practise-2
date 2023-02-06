<template>
	<h1>FORM!!!</h1>
	<h2>Go ahead and fill the form {{ name }}</h2>
	<label ref="name"><input type="text" placeholder="Please your name" v-model="name"/></label>
	<br/> <br/> 
	<form>
		<label>
			<input type="text" placeholder="Email Here" v-model="form.email">
		</label>
		<br/> 
		<label>
			<input type="password" placeholder="Password Here" v-model="form.password">
		</label>
		<!-- <p>{{ form.email }} {{ form.password }} {{ form.					nationality }}</p> -->
		<!-- <p>{{ form.password }}</p> -->
		<p>{{ form }}</p>
		
		<label>Nationality:
			<select v-model="form.nationality" id="">
				<option value="Morroco">Morroco</option>
				<option value="Spain">Spain</option>
			</select>
		</label>
		<br /> <br />
		<h4>Gender</h4>
		<label>Male
			<input type="radio" name="gender" value="male" v-model="form.gender"/>
		</label>
		<label>Female
			<input type="radio"  value="female" v-model="form.gender"/>
		</label>
		<br />	<br />
		<h2>Technology</h2>
		<label>Php
			<input type="checkbox" value="php" v-model="form.technology"/>
		</label>
		<label>Java
			<input type="checkbox" value="java" v-model="form.technology"/>
		</label>
		<label>Python
			<input type="checkbox" value="python" v-model="form.technology"/>
		</label>
		<label>Swift
			<input type="checkbox" value="swift" v-model="form.technology"/>
		</label>
		<button @click="btn()" type="button">Hit Me</button>
	</form>
</template>

<script>
	export default{
		name: "FormsData",
		data(){
			return{
				name: "",
				form:{
					email: "",
					password: "",
					nationality: "",
					gender: "",
					technology: []
				}
			}
		},
		methods:{
			btn(){
				console.log(this.form)
			}
		}
		
	}
</script>