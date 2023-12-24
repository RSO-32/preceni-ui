<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios
        .post("https://rso.smole.org/auth/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          localStorage.setItem("user", JSON.stringify(response.data));

          window.location = "/";
        });
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <div class="card">
          <div class="card-header text-center">Login</div>
          <div class="card-body">
            <div class="row g-3 py-3">
              <div class="col-3">
                <label for="email" class="col-form-label">Email</label>
              </div>
              <div class="col-6">
                <input
                  type="email"
                  id="email"
                  class="form-control"
                  v-model="email" />
              </div>
            </div>

            <div class="row g-3 py-3">
              <div class="col-3">
                <label for="password" class="col-form-label">Password</label>
              </div>
              <div class="col-6">
                <input
                  type="password"
                  id="password"
                  class="form-control"
                  v-model="password" />
              </div>
            </div>

            <div class="text-center">
              <button
                type="button"
                class="btn btn-outline-success"
                @click="login">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<style scoped></style>
