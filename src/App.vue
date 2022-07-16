<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">rain46688 blog</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/List">List</router-link>
          </li>

        </ul>

        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <router-view :blog='blog'></router-view>

</template>

<script>

import blog from './assets/blog.js';

export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      blog: blog,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
