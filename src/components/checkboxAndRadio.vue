<template>
	<h4>Input checkbox and Radio form</h4>
	<div>
		<label for="php">Php</label>
		<input type="checkbox" value="php" v-model="technology" id="php" />
		<label for="teacher">Teacher</label>
		<input type="checkbox" value="teacher" v-model="technology" id="teacher" />
		<p>Technology : {{technology}}</p>
	</div>
	<div>
		<label for="student">Student</label>
		<input type="radio" value="student" v-model="profession" id="student" name="profession" />
		<label for="doctor">Doctor</label>
		<input type="radio" value="doctor" v-model="profession" id="doctor"  name="profession"/>
		<p>Profession : {{profession}}</p>
	</div>

</template>

<script>
	export default{
		name: "FormBoxRadio",
		data(){
			return{
				technology: [],
				profession: null
			}
		}
	}
</script>