import { defineRouter } from '#q-app/wrappers';
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import routes from './routes';

export default defineRouter(function () {
  const createHistory =
    process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory;

  return createRouter({
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE),
    // Al cambiar de página, vuelve arriba (o al ancla #seccion si existe)
    scrollBehavior(to, _from, savedPosition) {
      if (savedPosition) return savedPosition;
      if (to.hash) return { el: to.hash, behavior: 'smooth', top: 90 };
      return { left: 0, top: 0 };
    },
  });
});
