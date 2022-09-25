const routes = [
  {
    path: "/auth",
    redirect: "/login",
    component: () => import("../layout/AuthLayout.vue"),
    meta: { isGuest: true },
    children: [
      {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login.vue"),
      },
      {
        path: "/register",
        name: "Register",
        component: () => import("../views/Register.vue"),
      },
    ],
  },
  {
    path: "/",
    redirect: "/dashboard",
    component: () => import("../layout/DefaultLayout.vue"),
    meta: { requiresAuth: true },
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("../views/Dashboard.vue"),
      },
      {
        path: "/surveys",
        name: "Surveys",
        component: () => import("../views/Surveys.vue"),
      },
    ],
  },
  // {
  //   path: "/:catchAll(.*)*",
  //   component: () => import("pages/ErrorNotFound.vue"),
  // },
];

export default routes;
