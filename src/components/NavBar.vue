<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Nursery</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Instructions</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">FAQ's</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <font-awesome-icon icon="fa-solid fa-user" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
nav {
  background-color: #22a6b3;
  height: 12vh;
  z-index: 3;
}
.nav-item a {
  color: #eee;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
}

.nav-item a:hover {
  border-bottom: 1px solid #eee;
}
</style>
