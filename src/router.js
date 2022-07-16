import { createWebHistory, createRouter } from "vue-router";

import ListComp from './components/ListComp.vue';
import HomeComp from './components/HomeComp.vue';
import DetailComp from './components/DetailComp.vue';

const routes = [
  {
    path: "/",
    component: HomeComp,
  },
  {
    path: "/List",
    component: ListComp,
  },
  {
    path: "/List/:number",
    name : 'Detail',
    component: DetailComp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 