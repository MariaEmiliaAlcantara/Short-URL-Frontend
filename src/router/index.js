import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView";
import SignupView from "../views/SignupView";
import TopUrlsView from "../views/TopUrlsView";
import UserUrlsViews from "../views/UserUrlsView";
import axios from "axios";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/:shortUrl",
    redirect: async (to) => {
      const response = await axios.get(`/url/${to.params.shortUrl}`);
      window.location.href = response.data.full;
      return { name: "/home" };
    },
  },
  {
    path: "/:fullUrl",
    redirect: async (to) => {
      const response = await axios.get(`/url/${to.params.fullUrl}`);
      window.location.href = response.data.full;
      return { name: "/home" };
    },
  },
  {
    path: "/top-urls",
    name: "top-urls",
    component: TopUrlsView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/userUrls",
    name: "userUrls",
    component: UserUrlsViews,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
