<script setup lang="ts">
import {RouterView} from 'vue-router'
import Search from "@/components/search.vue";</script>

<template>
  <div class="container">

    <header>

      <Search/>
    </header>
  </div>

  <RouterView/>

</template>

<style scoped>
</style>
