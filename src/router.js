import Vue from "vue";
import Router from "vue-router";
import About from "./views/About.vue";
import ApplicantsHome from "@/views/ApplicantsHome";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: ApplicantsHome
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
