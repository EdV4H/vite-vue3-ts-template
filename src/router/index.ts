import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/Home/HomePage.vue';
import Inspire from '@/pages/Inspire/InspirePage.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/inspire', name: 'inspire', component: Inspire },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
