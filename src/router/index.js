// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default.vue"),
    children: [
      {
        path: "/",
        name: "name1",
        component: () => import("@/pages/index.vue"),
      },
      {
        path: "/second",
        component: () => import("@/pages/second.vue"),
      },
      {
        path: "/examplenew",
        component: () => import("@/pages/examplepracticle.vue"),
      },

      {
        path: "/innerpage/:firstname",
        name: "inner",
        component: () => import("@/pages/innerpage.vue"),
      },

      {
        path: "/exampleformvalidtion",
        component: () => import("@/pages/validationform.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
