<script>
export default {
  data() {
    return {
      query: "",
    };
  },
  methods: {
    search() {
      console.log("TODO: Implement search");
    },
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link to="/" class="navbar-brand">Preceni</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="d-flex flex-grow-1">
          <form class="input-group" @submit.prevent="search">
            <input
              v-model="query"
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search" />
            <button class="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/account" class="nav-link">Account</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
}

.navbar-nav {
  margin-left: auto;
}

.nav-link {
  margin: 0 10px;
  font-size: 1.2rem;
  color: #333;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #007bff; /* Change the color on hover */
}

.form-control {
  width: 250px;
  border-radius: 20px;
}
</style>
