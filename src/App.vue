<template>

  <div class="">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom px-4">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span class="fs-4">Simple header</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Product management</a></li>
        <li class="nav-item"><a href="#" class="nav-link">User management</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Adminnistrator</a></li>
      </ul>
    </header>
  </div>

  <div class="pb-3">
    <h1>Product management</h1>
    <a href="">Add new</a>
  </div>

  <div class="container">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Jacob2</td>
          <td>Thornton2</td>
          <td>@fat2</td>
        </tr>
      </tbody>
    </table>
  </div>


  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
