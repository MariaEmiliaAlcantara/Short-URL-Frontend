<template>
  <main class="main-wrapper">
    <div class="main-container">
      <h3>Bem vindo!</h3>
      <label
        >Email
        <input type="text" placeholder="Endereço de e-mail" />
      </label>
      <label
        >Senha
        <input type="password" placeholder="Digite a sua senha" />
      </label>
      <button type="submit">Log in</button>
    </div>
  </main>
</template>

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
