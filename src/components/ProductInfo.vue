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
      axios.get('http://35.186.240.4/data/products/' + this.$route.params.id).then(response => {
        this.product = response.data;
      });
    },

    removeProduct() {
      axios.delete(`http://35.186.240.4/data/products/${this.product.id}`)
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

  <img :src="product.image_url" height="300" width="300" class="card-img-top" alt="Product image">

  <h4 class="h5 mt-2">Kategorije: </h4>
  <ul>
    <li v-for="category in product.categories">{{ category.name }}</li>
  </ul>

</template>

<style scoped>

</style>