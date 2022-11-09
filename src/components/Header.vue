<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/top-urls">Top 100</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/signup">Sign up</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped></style>
