<template>
  <main class="main-wrapper">
    <div class="main-container">
      <h1>Cole a URL abaixo</h1>
      <div class="container-shortener">
        <input type="text" placeholder="Coloque o link aqui" />
        <button>Encurtar</button>
      </div>
      <p>Use nosso encurtador de URL para criar um link simples e curto</p>
    </div>
    <div v-if="urlShort" class="short-url-container">
      <h3>Muito bom! Aqui está a URL curta:</h3>
      <div class="result">
        <p>www.google.com.br</p>
        <p>hr.OjSnhg</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.main-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 8vh;
}

.main-container {
  width: 55vw;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3vh;
}

.main-container h1 {
  color: var(--green-600);
  font-size: 2.75rem;
}

.container-shortener {
  width: 100%;
  display: flex;
  align-items: center;
}

.container-shortener input {
  width: 80%;
  height: 8.5vh;
  border: none;
  outline: none;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;

  padding: 0 2vw;
  color: var(--green-100);
  font-size: 1rem;
}

.container-shortener input:focus {
  border-top: 2px solid var(--green-400);
  border-left: 2px solid var(--green-400);
  border-bottom: 2px solid var(--green-400);
  color: var(--black);
}

.container-shortener button {
  width: 20%;
  height: 8.5vh;
  background-color: var(--green-600);
  color: var(--white);
  font-size: 1.125rem;
  font-weight: bold;
  border: none;
  outline: none;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  cursor: pointer;
  transition: background-color 0.5s;
}
.container-shortener button:hover {
  background-color: var(--green-400);
}

.main-container p {
  color: var(--brown-400);
  font-size: 1.125rem;
}

.short-url-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3vh;
}

.short-url-container h3 {
  color: var(--green-600);
  font-size: 1.5rem;
}

.short-url-container .result {
  width: 45vw;
  height: 8.5vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--green-400);
  color: var(--white);
  font-size: 1.25rem;
  border-radius: 12px;
}
</style>
