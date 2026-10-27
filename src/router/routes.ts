import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'inicio', component: () => import('pages/InicioPage.vue') },
      { path: 'nosotros', name: 'nosotros', component: () => import('pages/NosotrosPage.vue') },
      { path: 'servicios', name: 'servicios', component: () => import('pages/ServiciosPage.vue') },
      { path: 'agendar', name: 'agendar', component: () => import('pages/AgendarPage.vue') },
      {
        path: 'aviso-de-privacidad',
        name: 'aviso',
        component: () => import('pages/AvisoPrivacidadPage.vue'),
      },
      // Página 404 (siempre al final)
      { path: ':catchAll(.*)*', component: () => import('pages/ErrorNotFound.vue') },
    ],
  },
];

export default routes;
