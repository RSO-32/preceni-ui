<script>
import axios from "axios";

export default {
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      axios
        .post("http://35.186.240.4/auth/register", {
          email: this.email,
          password: this.password,
          first_name: this.first_name,
          last_name: this.last_name,
        })
        .then((response) => {
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
          <div class="card-header text-center">Register</div>
          <div class="card-body">
            <div class="row g-3 py-3">
              <div class="col-3">
                <label for="first_name" class="col-form-label">First name</label>
              </div>
              <div class="col-6">
                <input type="text" id="first_name" class="form-control" v-model="first_name"/>
              </div>
            </div>

            <div class="row g-3 py-3">
              <div class="col-3">
                <label for="last_name" class="col-form-label">Last name</label>
              </div>
              <div class="col-6">
                <input type="text" id="last_name" class="form-control" v-model="last_name"/>
              </div>
            </div>

            <div class="row g-3 py-3">
              <div class="col-3">
                <label for="email" class="col-form-label">Email</label>
              </div>
              <div class="col-6">
                <input type="email" id="email" class="form-control" v-model="email"/>
              </div>
            </div>

            <div class="row g-3 py-3">
              <div class="col-3">
                <label for="password" class="col-form-label">Password</label>
              </div>
              <div class="col-6">
                <input type="password" id="password" class="form-control" v-model="password"/>
              </div>
            </div>

            <div class="text-center">
              <button
                type="button"
                class="btn btn-outline-success"
                @click="register">
                Register
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
