<template>
  <div class="home">Teste</div>
</template>

<script>
// @ is an alias to /src
import NavbarVue from "@/components/Navbar.vue";

export default {
  name: "HomeView",
};
</script>

<style scoped>
.home {
  background-image: url("../assets/textura.png");
  height: calc(100vh - 12vh);
}
</style>
