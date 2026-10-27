<!--
  Separador en forma de sonrisa (la curva del logo). Se "dibuja" al aparecer en pantalla.
-->
<template>
  <div ref="raiz" class="divisor" :class="{ 'divisor--visible': visible }" aria-hidden="true">
    <svg viewBox="0 0 600 70" preserveAspectRatio="none">
      <path
        d="M20 12 C 150 78, 450 78, 580 12"
        fill="none"
        :stroke="color"
        stroke-width="7"
        stroke-linecap="round"
        vector-effect="non-scaling-stroke"
        pathLength="1"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

withDefaults(defineProps<{ color?: string }>(), { color: '#5d3867' });

const raiz = ref<HTMLElement | null>(null);
const visible = ref(false);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  if (!raiz.value || !('IntersectionObserver' in window)) {
    visible.value = true;
    return;
  }
  observer = new IntersectionObserver(
    ([entrada]) => {
      if (entrada?.isIntersecting) {
        visible.value = true;
        observer?.disconnect();
      }
    },
    { threshold: 0.6 },
  );
  observer.observe(raiz.value);
});

onBeforeUnmount(() => observer?.disconnect());
</script>

<style scoped lang="scss">
.divisor {
  width: min(320px, 70%);
  height: 38px;
  margin: 0 auto;

  svg {
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  path {
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    transition: stroke-dashoffset 1.2s cubic-bezier(0.65, 0, 0.35, 1);
  }

  &--visible path {
    stroke-dashoffset: 0;
  }
}
</style>
