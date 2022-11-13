<template>
  <nav class="wrapper">
    <div class="logo">
      <router-link urlShorted="false" to="/"><p>SHORT URL</p></router-link>
    </div>
    <div class="links">
      <router-link to="/">ENCURTAR</router-link>
      <router-link to="/top-urls">TOP 100</router-link>
      <router-link v-if="email == null" to="/signup">SIGN UP</router-link>
      <router-link v-if="email == null" to="/login">LOGIN</router-link>
      <router-link v-if="email" to="/user-urls">SEUS LINKS</router-link>
      <router-link v-if="email" to="/" @click="logout">LOGOUT</router-link>
      <p v-if="email">
        OLÁ
        {{ name.split(" ")[0].toUpperCase() }}
      </p>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      email: null,
      name: null,
    };
  },
  watch: {
    $route() {
      this.email = localStorage.getItem("@email");
      this.name = localStorage.getItem("@name");
    },
  },
  methods: {
    logout() {
      localStorage.removeItem("@email");
      localStorage.removeItem("@name");
      (this.tokenValue = ""), this.$router.push("/login");
    },
  },
  beforeMount() {
    this.email = localStorage.getItem("@email");
    this.name = localStorage.getItem("@name");
  },
};
</script>

<style scoped>
.wrapper {
  height: 12vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;

  background: var(--white);
}

.logo {
  font-size: calc(1rem + 0.8vw);
  font-weight: bold;
  text-align: center;
  width: 30vh;
  border-bottom: 1px solid var(--black);
}

.links {
  width: 60vw;
  display: flex;
  justify-content: flex-end;
  gap: 2.75rem;
  font-size: 0.875rem;
  font-weight: bold;
}

.links a {
  transition: all 0.2s;
}

.links a:hover {
  color: var(--green-400);
  text-decoration: underline;
}

.links p {
  color: var(--green-400);
}
</style>
