<script setup lang="ts">
import {RouterView} from 'vue-router'
import Search from "@/components/Search.vue";</script>

<template>
  <div class="container">

    <header>

      <Search/>
      <br>
    </header>
  </div>

  <RouterView/>

</template>

<style scoped>
</style>
