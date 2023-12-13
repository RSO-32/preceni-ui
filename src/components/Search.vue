<script>

export default {
  data() {
    return {
      query: ""
    }
  },
  methods: {
    search() {
      this.$router.push({name: "search", params: {query: this.query}})
    },
  },

  created() {
    this.search();
  }
}
</script>

<template>



  <h1 class="h1 mt-5">Iskanje izdelka</h1>

  <div class="input-group my-3">
    <input type="text" class="form-control" v-model="query" placeholder="Ime izdelka">
    <button class="btn btn-outline-secondary" @click="search" type="button">Išči</button>
  </div>


</template>

<style scoped>

</style>