<script setup lang="ts">
import {RouterView} from 'vue-router'
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <div class="container">

    <header>

      <Navbar/>
      <br>
    </header>
  </div>

  <RouterView/>

</template>

<style scoped>
</style>
