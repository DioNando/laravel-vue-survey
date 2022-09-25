import routes from "./routes";
import { createRouter, createWebHistory } from "vue-router";
import store from "../store";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({ name: "Login" });
  } else if (
    store.state.user.token &&
    (to.meta.isGuest)
  ) {
    next({ name: "Dashboard" });
  } else {
    next();
  }
});

export default router;
