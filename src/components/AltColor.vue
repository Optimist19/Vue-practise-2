<template>
  <h1>Color picker</h1>
  <input type="text" v-model="searchValue" />
  <!-- <div>{{searchValue}}</div> -->
  <div v-for="color in filteredColor" :key="color">
    {{color}}
  </div>
</template>

<script>
export default{
name: "AltColor,",
  data(){
      return{
      colors: ["red", "blue", "green", "yellow", "pink", "black"],
      searchValue: ''
    }
  },
  computed:{
    filteredColor(){
      return this.colors.filter((item) =>
        (item.toLowerCase().includes(this.searchValue.toLowerCase())
		))
    }
  }
}
</script>