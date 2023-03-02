import { createRouter, createWebHashHistory } from "vue-router"
import Home from "@/views/home.vue";
import VectorView from "@/views/vector-view.vue";

const routes = [
  {
    path: "/",
    name: "/",
    component: Home
  },
  {
    path: "/view",
    name: "view",
    component: VectorView
  }];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;