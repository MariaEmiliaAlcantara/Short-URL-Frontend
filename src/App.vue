<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/top-urls">Top 100</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/signup">Sign up</router-link>
  </nav>
  <router-view />
</template>

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
</style>
