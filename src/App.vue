<template>
  <div>
    <NavbarVue />
    <FooterVue />
  </div>
</template>

<script>
import NavbarVue from "./components/Navbar.vue";
import FooterVue from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    NavbarVue,
    FooterVue,
  },
};
</script>

<style>
:root {
  --white: #fff;
  --black: #000;

  --green-50p: #80a66c;

  --green-100: #87906f;
  --green-400: #839b7e;
  --green-600: #4b684a;

  --brown-100: #c6ceb1;
  --brown-400: #4f473a;

  --red-700: #6f181e;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Be Vietnam Pro", sans-serif;
}

a {
  text-decoration: none;
  color: var(--black);
}
</style>
