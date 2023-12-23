<!-- Navbar.vue -->

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link to="/" class="navbar-brand">Preceni</router-link>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <form class="d-flex ml-auto" @submit.prevent="search">
                <input
                v-model="query"
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                />
                <button class="btn btn-outline-primary" type="submit">Search</button>
            </form>
            <ul class="navbar-nav ms-auto"> <!-- Use ms-auto class here -->
                <li class="nav-item">
                    <router-link to="/account" class="nav-link">Account</router-link>
                </li>
            </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        query: ""
      };
    },
    methods: {
      search() {
        this.$router.push({name: "search", params: {query: this.query}})
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  