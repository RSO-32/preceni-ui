<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
      query: "",
    };
  },
  methods: {
    getProducts() {
      axios.get("http://35.186.240.4/data/products").then((response) => {
        this.products = response.data;
      });
    },
    displayCategories(categories) {
      let categoryNames = [];
      for (let i = 0; i < categories.length; i++) {
        categoryNames.push(categories[i].name);
      }
      return categoryNames.join(", ");
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<template>
  <div class="row row-cols-3 g-2">
    <div v-for="product in products" class="col">
      <div class="card">
        <div class="card-body">
          <img
            :src="product.image_url"
            height="300"
            width="300"
            class="card-img-top"
            alt="Product image" />

          <router-link :to="{ path: '/products/' + product.id }">
            <h5 class="card-title">{{ product.name }}</h5>
          </router-link>
          <p class="card-text price">{{ product.prices[0].price }} €</p>
          <p class="card-text">{{ displayCategories(product.categories) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.price {
  font-size: 24px;
  text-align: center;
}
</style>
