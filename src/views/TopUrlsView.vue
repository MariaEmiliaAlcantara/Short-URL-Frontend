<template>
  <main class="main-wrapper">
    <div class="main-container" v-if="showElements">
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
            <td>
              <a :href="url.full" target="_blank">{{ url.full }}</a>
            </td>
            <td>
              <router-link
                :to="url.short"
                target="_blank"
                v-on:click="url.clicks++"
                >{{ prefixUrl }}{{ url.short }}</router-link
              >
            </td>
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
      showElements: false,
      prefixUrl: "http://localhost:8080/",
      urls: [],
    };
  },
  methods: {
    async getTopUrls() {
      const response = await axios.get("getAllUrls");
      this.urls = response.data;
      this.showElements = true;
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
  max-width: 90vw;
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

table tbody tr a {
  font-size: 1.125rem;
  color: var(--green-600);
  text-decoration: underline;
  transition: all 0.5s;
}

table tbody tr a:hover {
  color: var(--green-400);
}

th:nth-child(1) {
  border-radius: 12px 0px 0px 12px;
}

th:nth-last-child(1) {
  border-radius: 0px 12px 12px 0px;
}

td:nth-child(1) {
  border-radius: 12px 0px 0px 12px;
  width: 50vw;
}

td:nth-last-child(1) {
  border-radius: 0px 12px 12px 0px;
  min-width: 10vw;
}
</style>
