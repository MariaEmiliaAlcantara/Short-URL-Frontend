<template>
  <main class="main-wrapper">
    <div class="main-container">
      <h1>Top 100 URLs</h1>
      <p>Veja a lista das URLs que foram encurtadas mais visitadas</p>
      <table>
        <thead>
          <tr>
            <th>URL original</th>
            <th>URL curta</th>
            <th>Cliques</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="url of urls" :key="url.short">
            <td>{{ url.full }}</td>
            <td>{{ prefixUrl }}{{ url.short }}</td>
            <td>{{ url.clicks }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "TopUrlsView",
  data() {
    return {
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
    async getTopUrls() {
      const response = await axios.get("getAllUrls");
      this.urls = response.data;
    },
  },
  beforeMount() {
    this.getTopUrls();
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
}

th:nth-child(1) {
  border-radius: 12px 0px 0px 12px;
}

th:nth-last-child(1) {
  border-radius: 0px 12px 12px 0px;
}

td:nth-child(1) {
  border-radius: 12px 0px 0px 12px;
}

td:nth-last-child(1) {
  border-radius: 0px 12px 12px 0px;
}
</style>
