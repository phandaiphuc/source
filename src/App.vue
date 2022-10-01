<template>

  <div class="">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom px-4">
      
      <router-link to="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"><span
          class="fs-4">Simple header</span>
      </router-link>

      <ul class="nav nav-pills">
        <router-link to="/product" class="nav-link active">Product management</router-link>
        <router-link to="/user" class="nav-link">User management</router-link>
        <li class="nav-item"><a href="#" class="nav-link">Adminnistrator</a></li>
      </ul>
    </header>
  </div>
  <router-view />
</template>

<style>
</style>
