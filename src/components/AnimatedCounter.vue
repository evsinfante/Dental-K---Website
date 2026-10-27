<!-- Número que cuenta desde 0 cuando aparece en pantalla -->
<template>
  <span ref="raiz">{{ prefijo }}{{ formato(actual) }}{{ sufijo }}</span>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

const props = withDefaults(
  defineProps<{ valor: number; prefijo?: string; sufijo?: string; duracion?: number }>(),
  { prefijo: '', sufijo: '', duracion: 1600 },
);

const raiz = ref<HTMLElement | null>(null);
const actual = ref(0);
let observer: IntersectionObserver | null = null;
let frame = 0;

const formato = (n: number) => Math.round(n).toLocaleString('es-MX');

function animar() {
  const inicio = performance.now();
  const paso = (ahora: number) => {
    const t = Math.min(1, (ahora - inicio) / props.duracion);
    const suavizado = 1 - Math.pow(1 - t, 3);
    actual.value = props.valor * suavizado;
    if (t < 1) frame = requestAnimationFrame(paso);
  };
  frame = requestAnimationFrame(paso);
}

onMounted(() => {
  const menosMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (menosMovimiento || !raiz.value || !('IntersectionObserver' in window)) {
    actual.value = props.valor;
    return;
  }
  observer = new IntersectionObserver(
    ([entrada]) => {
      if (entrada?.isIntersecting) {
        animar();
        observer?.disconnect();
      }
    },
    { threshold: 0.5 },
  );
  observer.observe(raiz.value);
});

onBeforeUnmount(() => {
  observer?.disconnect();
  cancelAnimationFrame(frame);
});
</script>
