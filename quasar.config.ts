// Configuración de Quasar
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-file
import { defineConfig } from '#q-app/wrappers';

export default defineConfig(() => {
  return {
    // Archivos que se ejecutan al iniciar la app (src/boot/)
    boot: ['reveal'],

    // src/css/app.scss
    css: ['app.scss'],

    // Usamos íconos SVG importados en código, así que no hace falta cargar fuentes de íconos
    extras: [],

    build: {
      target: {
        browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
        node: 'node20',
      },
      typescript: {
        strict: true,
        vueShim: true,
      },
      vueRouterMode: 'history', // URLs limpias: /servicios en lugar de /#/servicios
    },

    devServer: {
      open: true,
    },

    framework: {
      lang: 'es', // Textos internos de Quasar en español
      iconSet: 'svg-material-icons',
      config: {
        brand: {
          primary: '#5d3867',
          secondary: '#7f4ca5',
          accent: '#8f1fcf',
          positive: '#25d366',
        },
      },
      plugins: ['Meta'],
    },

    animations: 'all',
  };
});
