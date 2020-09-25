import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/experience/:id",
    name: "Experience",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Experience.vue")
  },
  {
    path: "/404",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "notfound" */ "../views/NotFound.vue")
  },
  {
    path: "*",
    component: () =>
      import(/* webpackChunkName: "notfound" */ "../views/NotFound.vue")
  }
];

Vue.mixin({
  // eslint-disable-next-line no-unused-vars
  beforeRouteEnter(to, from, next) {
    next();
  }
});

const router = new VueRouter({
  mode: "history",
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(_to, _from, _savedPosition) {
    return { x: 0, y: 0 };
  },
  base: process.env.BASE_URL,
  routes
});

export default router;
