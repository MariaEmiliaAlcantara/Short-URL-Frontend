<template>
  <main class="main-wrapper">
    <form @submit.prevent="handleSubmit" class="main-container">
      <h3>Bem vindo!</h3>
      <label
        >Email
        <input
          type="email"
          v-model="email"
          placeholder="Endereço de e-mail"
          required
        />
      </label>
      <label
        >Senha
        <input
          type="password"
          v-model="password"
          placeholder="Digite a sua senha"
          required
        />
      </label>
      <p v-if="this.message">{{ this.message }}</p>
      <button type="submit">Log in</button>
    </form>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
      message: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post("login", {
          email: this.email,
          password: this.password,
        });
        localStorage.setItem("@email", response.data.email);
        localStorage.setItem("@name", response.data.name);
        this.$router.push("/user-urls");
      } catch (err) {
        this.message = "Email e/ou senha incorreto(s)";
      }
    },
  },
};
</script>

<style scoped>
.main-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.main-container {
  width: 30vw;
  height: 65vh;
  margin-top: 7vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 4vh;
  background-color: var(--white);
  border-radius: 28px;
}

.main-container h3 {
  margin-top: 6vh;
  font-size: 2rem;
  color: var(--green-600);
}

.main-container label {
  display: flex;
  flex-direction: column;
  width: 23vw;
  font-size: 0.875rem;
  color: var(--green-600);
  font-weight: bold;
}

.main-container input {
  height: 7vh;
  outline: none;
  border: 1px solid var(--brown-100);
  border-radius: 8px;
  padding: 0 1vw;
  font-size: 0.75rem;
  margin-top: 4px;
}
.main-container input:focus {
  border: 2px solid var(--green-400);
  color: var(--black);
}

.main-container p {
  font-size: 0.875rem;
  font-weight: bold;
  margin-bottom: -3vh;
  color: var(--red-700);
}

.main-container button {
  width: 23vw;
  height: 7vh;
  background-color: var(--green-600);
  color: var(--white);
  font-size: 1.125rem;
  border: none;
  border-radius: 28px;
  margin-top: 3vh;
  transition: background-color 0.5s;
}

.main-container button:hover {
  background-color: var(--green-400);
}
</style>
