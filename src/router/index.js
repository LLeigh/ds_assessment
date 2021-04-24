import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

import Home from "../views/Home.vue";
import Tutors from "../views/Tutors.vue";
import TutorDetails from "../views/TutorDetails.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/tutors",
    name: "tutors",
    component: Tutors,
  },
  {
    path: "/tutors/:id",
    name: "tutor-details",
    component: TutorDetails,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
