<script>

import axios from "axios";

export default {
  data() {
    return {
      product: Object,
    }
  },

  methods: {
    getProduct() {
      axios.get('http://localhost:5000/products/' + this.$route.params.id).then(response => {
        this.product = response.data;
      });
    },

    removeProduct() {
      axios.delete(`http://localhost:5000/products/${this.product.id}`)
          .then(() => {
            this.$router.push({path: '/'});
          })
          .catch((error) => {
            console.log(error);
          });
    }
  },

  created() {
    this.getProduct()
  },
}
</script>

<template>


  <h2 class="h2 mt-5">{{ product.name }}</h2>
  <h5 class="h5 mt-2">{{ product.description }}</h5>

  <h4 class="h5 mt-2">Kategorije: </h4>
  <ul>
    <li v-for="category in product.categories">{{ category.name }}</li>
  </ul>

  <button class="btn btn-danger" @click="removeProduct()">Izbriši</button>

</template>

<style scoped>

</style>