<template>
  <main class="main-wrapper">
    <form @submit.prevent="handleSubmit" class="main-container">
      <h3>Bem vindo!</h3>
      <label
        >Nome completo
        <input
          type="text"
          v-model="name"
          placeholder="Digite o seu nome completo"
          required
        />
      </label>
      <label
        >Email
        <input
          type="email"
          v-model="email"
          placeholder="Endereço de e-mail"
          required
        />
      </label>
      <div class="password">
        <label
          >Senha
          <input
            type="password"
            v-model="password"
            placeholder="Digite a sua senha"
            required
          />
          <p>Mínimo 4 caracteres</p>
        </label>
        <label
          >Confirmar senha
          <input
            type="password"
            v-model="password_confirm"
            placeholder="Repita a senha "
            required
          />
        </label>
      </div>
      <button :disabled="validatePassword()" type="submit">Cadastrar-se</button>
    </form>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "Signup",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirm: "",
    };
  },
  methods: {
    async handleSubmit() {
      await axios.post("createUser", {
        name: this.name,
        email: this.email,
        password: this.password,
      });

      this.$router.push("/login");
    },
    validatePassword() {
      if (this.password.length < 4 || this.password_confirm < 4) {
        return true;
      } else if (this.password === this.password_confirm) {
        return false;
      }
      return true;
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
  height: 70vh;
  margin-top: 7vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 3vh;
  background-color: var(--white);
  border-radius: 28px;
}

.main-container h3 {
  margin-top: 5vh;
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

label p {
  font-size: 0.625rem;
  font-weight: 400;
  color: var(--black);
  margin-top: 3px;
  margin-left: 5px;
}

.main-container input {
  height: 7vh;
  outline: none;
  border: 1px solid var(--brown-100);
  border-radius: 8px;
  padding: 0 1vw;
  font-size: 0.75rem;
  margin-top: 2px;
}

.password {
  width: 23vw;
  display: flex;
  gap: 1vw;
}

.password label {
  width: 11vw;
}
.main-container input:focus {
  border: 2px solid var(--green-400);
  color: var(--black);
}

.main-container button {
  width: 23vw;
  height: 7vh;
  background-color: var(--green-600);
  color: var(--white);
  font-size: 1.125rem;
  border: none;
  border-radius: 28px;
  transition: background-color 0.5s;
  margin-top: 1vh;
}

.main-container button:hover {
  background-color: var(--green-400);
}

.main-container button:disabled {
  background-color: var(--green-400);
}
</style>
