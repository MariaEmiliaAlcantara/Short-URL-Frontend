<template>
  <nav class="wrapper">
    <div class="logo">
      <router-link urlShorted="false" to="/"><p>SHORT URL</p></router-link>
    </div>
    <div class="links">
      <router-link to="/top-urls">TOP 100</router-link>
      <router-link v-if="email == null" to="/signup">SIGN UP</router-link>
      <router-link v-if="email == null" to="/login">LOGIN</router-link>
      <router-link v-if="email" to="/user-urls">SEUS LINKS</router-link>
      <router-link v-if="email" to="/" @click="logout">LOGOUT</router-link>
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
    };
  },
  watch: {
    $route() {
      this.email = localStorage.getItem("@email");
    },
  },
  methods: {
    logout() {
      localStorage.removeItem("@token");
      // this.tokenValue = null;
      (this.tokenValue = ""), this.$router.push("/login");
    },
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
  font-size: 1.75rem;
  font-weight: bold;
  text-align: center;
  width: 40vh;
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
  transition: all 0.5s;
}

.links a:hover {
  color: var(--green-400);
}
</style>
