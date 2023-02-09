export default {
  data() {
    return {
      name: "Filter Search",
      colors: ["red", "green", "blue", "yellow"],
      filteredColors: ["red", "purple", "green", "blue", "yellow"],
      search: ""
    };
  },
  watch: {
    search() {
      return (this.filteredColors = this.colors.filter((item) => {
        console.log(item);
        return item.toLowerCase().includes(this.search.toLowerCase());
      }));
    }
  }
};
