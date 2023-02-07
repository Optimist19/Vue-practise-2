<template>
  <div>
    <h2>This is a Popup</h2>
	<input type="text" v-model="data" />
    <button @click="$emit('close', data)">Close Popup</button>
  </div>
</template>

<script>
export default {
  name: "ChildValidateEmit",
  emits:{
	close:(text) =>{
		if(!text){
			return false
		}else{
			return true
		}
	}
  },
  data(){
	return{
		data: ""
	}
  }
};
</script>
