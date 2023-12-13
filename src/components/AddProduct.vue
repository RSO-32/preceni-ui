<script>

import axios from "axios";

export default {
  data() {
    return {
      barcode: "",
    }
  },

  methods: {
    addNew() {
      axios.post('http://localhost:5000/products/with-barcode', {barcode: this.barcode}).then(response => {
        this.product = response.data;
        this.$router.push({path: '/products/' + this.product.id});
      });
    },
  },
}
</script>

<template>

  <div class="input-group my-3">
    <input type="text" class="form-control" v-model="barcode" placeholder="Črtna koda izdelka">
    <button class="btn btn-outline-secondary" @click="addNew" type="button">Dodaj izdelek</button>
  </div>


</template>

<style scoped>

</style>