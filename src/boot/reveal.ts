// Directiva v-reveal: anima elementos cuando aparecen en pantalla al hacer scroll.
// Uso:  <div v-reveal>…</div>   o con retraso en ms:  <div v-reveal="150">…</div>
import { defineBoot } from '#q-app/wrappers';
import type { DirectiveBinding } from 'vue';

export default defineBoot(({ app }) => {
  const prefiereMenosMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const soportaObserver = 'IntersectionObserver' in window;

  let observer: IntersectionObserver | null = null;

  function obtenerObserver(): IntersectionObserver {
    if (!observer) {
      observer = new IntersectionObserver(
        (entradas) => {
          for (const entrada of entradas) {
            if (entrada.isIntersecting) {
              entrada.target.classList.add('is-visible');
              observer?.unobserve(entrada.target);
            }
          }
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
      );
    }
    return observer;
  }

  app.directive('reveal', {
    mounted(el: HTMLElement, binding: DirectiveBinding<number | undefined>) {
      el.classList.add('reveal');
      if (binding.value) el.style.setProperty('--reveal-delay', `${binding.value}ms`);

      if (prefiereMenosMovimiento || !soportaObserver) {
        el.classList.add('is-visible');
        return;
      }
      obtenerObserver().observe(el);
    },
    unmounted(el: HTMLElement) {
      observer?.unobserve(el);
    },
  });
});
