<script>
import axios from "axios";
import LineChart from "./LineChart.vue";

export default {
  data() {
    return {
      product: Object,
      mejna_cena: null,
      discord_webhook: "",
    };
  },
  methods: {
    getProduct() {
      axios
        .get("http://rso.smole.org/data/products/" + this.$route.params.id)
        .then((response) => {
          this.product = response.data;
        });
    },
    narociNaObvestila() {
      axios
        .post("http://rso.smole.org/notify/notifications", {
          product_id: this.product.id,
          price: this.mejna_cena,
          discord_webhook: this.discord_webhook,
          user_id: JSON.parse(localStorage.getItem("user")).id,
          token: JSON.parse(localStorage.getItem("user")).token.token,
        })
        .then((response) => {
          console.log(response);
        });
    },
    isLoggedIn() {
      return localStorage.getItem("user") !== null;
    },
  },
  created() {
    this.getProduct();
  },
  components: { LineChart },
};
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h2>{{ product.name }}</h2>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col">
          <img
            :src="product.image_url"
            class="card-img-top product-image"
            alt="Product image" />
        </div>
        <div class="col">
          <h4 class="h5 mt-2">Kategorije:</h4>
          <ul>
            <li v-for="category in product.categories">
              {{ category.name }}
            </li>
          </ul>
        </div>
      </div>
      <div class="row" v-if="isLoggedIn()">
        <h4 class="h5 mt-2">Naročilo na obvestila:</h4>

        <div class="mb-3">
          <div class="input-group">
            <span class="input-group-text">Ko cena pade pod </span>
            <input
              type="text"
              class="form-control mejna-cena"
              v-model.number="mejna_cena" />
            <span class="input-group-text">€, pošlji obvestilo na </span>
            <input
              type="text"
              class="form-control"
              v-model="discord_webhook"
              placeholder="https://discord.com/api/webhooks/ ..." />
              <button class="btn btn-outline-secondary" type="button" @click="narociNaObvestila()">Naroči</button>
          </div>
          <div class="input-group"></div>
        </div>
      </div>
      <div class="row">
        <LineChart />
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-image {
  height: 400px;
  object-fit: contain;
}
.mejna-cena {
  max-width: 100px;
}
</style>
