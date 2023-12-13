<script>

import axios from "axios";

export default {
  data() {
    return {
      products: [],
      query: ""
    }
  },
  methods: {
    search() {
      if (this.query) {
        axios.get('http://localhost:5000/search/' + this.query).then(response => {
          this.products = response.data;
        });
      } else {
        axios.get('http://localhost:5000/products').then(response => {
          this.products = response.data;
          console.log(this.products)
        });
      }
    },
    displayCategories(categories) {
      let categoryNames = [];
      for (let i = 0; i < categories.length; i++) {
        categoryNames.push(categories[i].name);
      }
      return categoryNames.join(", ");
    }
  },

  watch: {
    $route: function () {
      this.query = this.$route.params.query;
      this.search();
    }
  },

  created() {
    this.search();
  }
}
</script>

<template>


  <div class="row row-cols-3 g-2">
    <div v-for="product in products" class="col">
      <div class="card">
        <div class="card-body">
          <router-link :to="{ path: '/products/' + product.id }">
            <h5 class="card-title">{{ product.name + " (" + product.brand + ")"}}</h5>
          </router-link>
          <p class="card-text">{{ displayCategories(product.categories) }}</p>
        </div>
      </div>

    </div>
  </div>


</template>

<style scoped>

</style>