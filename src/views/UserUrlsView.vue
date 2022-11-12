<template>
  <main class="main-wrapper">
    <div class="main-container">
      <h1>URLs cadastradas</h1>
      <p>Veja a lista com todas as URLs que foram encurtadas por você</p>
      <table>
        <thead>
          <tr>
            <th>URL original</th>
            <th>URL curta</th>
            <th>Cliques</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="url of urls" :key="url.short">
            <td>{{ url.full }}</td>
            <td>{{ url.short }}</td>
            <td>{{ url.clicks }}</td>
            <td>
              <button v-on:click="deleteUrl(url.short)">
                <img src="../assets/trash.svg" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "UserUrlsView",
  data() {
    return {
      email: localStorage.getItem("@email"),
      prefixUrl: "http://localhost:8080/",
      urls: [
        {
          full: "",
          short: "",
          clicks: 0,
        },
      ],
    };
  },
  methods: {
    async getUserUrls() {
      const response = await axios.get(`getUserUrls/${this.email}`);
      this.urls = response.data;
    },
    async deleteUrl(shortUrl) {
      await axios.delete(`deleteUserUrl/${shortUrl}`);
      this.getUserUrls();
    },
  },
  beforeMount() {
    this.getUserUrls();
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
  width: 100vw;
  margin-top: 6vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2vh;
}

.main-container h1 {
  color: var(--green-600);
  font-size: 2.75rem;
}

.main-container p {
  color: var(--brown-400);
  font-size: 1.125rem;
}

.main-container table {
  width: 77vw;
  margin-top: 3vh;
  border-spacing: 0px 10px;
  text-align: center;
}

table thead {
  height: 6.5vh;
  background-color: var(--green-400);
  color: var(--white);
  font-size: 1.125rem;
  margin-bottom: 1vh;
}

table tbody tr {
  height: 6.5vh;
  background-color: var(--white);
  font-size: 1.125rem;
  color: var(--green-600);
  line-height: 0;
}

th:nth-child(1) {
  border-radius: 12px 0px 0px 12px;
}

th:nth-last-child(1) {
  border-radius: 0px 12px 12px 0px;
  width: 2vw;
}

td:nth-child(1) {
  border-radius: 12px 0px 0px 12px;
}

td:nth-last-child(1) {
  border-radius: 0px 12px 12px 0px;
  text-align: end;
  width: vw;
}

td button {
  height: 2.3vw;
  width: 2.3vw;
  background-color: var(--red-700);
  border: none;
  border-radius: 4px;
  line-height: 0;
  margin-right: 1.5vw;
}

button img {
  width: 1.4vw;
  height: 1.4vw;

  transition: all 0.2s;
}

button:hover img {
  width: 1.55vw;
  height: 1.55vw;
}
</style>
