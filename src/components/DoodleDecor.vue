<!--
  Garabatos dibujados a mano (estilo de la propuesta) que flotan suavemente.
  Uso: <DoodleDecor tipo="destello" class="mi-posicion" />
-->
<template>
  <svg
    class="doodle"
    :class="{ 'doodle--flota': flotar }"
    :style="estilo"
    :width="tamano"
    :height="tamano"
    viewBox="0 0 48 48"
    fill="none"
    :stroke="color"
    stroke-width="2.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <!-- Destello de 4 puntas -->
    <path v-if="tipo === 'destello'" d="M24 4c1.5 9 5.5 13.5 16 16-10.5 2.5-14.5 7-16 18-1.5-11-5.5-15.5-16-18 10.5-2.5 14.5-7 16-16z" />
    <!-- Corazón -->
    <path v-else-if="tipo === 'corazon'" d="M24 40S7 29.5 7 17.5C7 12 11 8 16 8c3.6 0 6.4 2.2 8 5 1.6-2.8 4.4-5 8-5 5 0 9 4 9 9.5C41 29.5 24 40 24 40z" />
    <!-- Ondita -->
    <path v-else-if="tipo === 'onda'" d="M3 28c4-7 8-7 10.5 0s6.5 7 10.5 0 8-7 10.5 0 6.5 7 10.5 0" />
    <!-- Estrella -->
    <path v-else-if="tipo === 'estrella'" d="M24 5l5.4 11.6L42 18.3l-9.2 8.7 2.3 12.6L24 33.5l-11.1 6.1 2.3-12.6L6 18.3l12.6-1.7z" />
    <!-- Espiral -->
    <path v-else-if="tipo === 'espiral'" d="M24 24c0-2 2.5-3 4-1.5 2.2 2.2.5 6-2.5 6.5-4.5.8-7.5-3.8-6-8 2-5.5 9.5-7 13.5-3 5 5 2.5 13.5-4 15.5-8 2.5-15-4-14-12" />
    <!-- Diente sonriente -->
    <g v-else-if="tipo === 'diente'">
      <path d="M14 8c-5 0-8 4-8 10 0 6 3 8 4 14 .8 5 2 9 5 9 3.5 0 3.5-9 9-9s5.5 9 9 9c3 0 4.2-4 5-9 1-6 4-8 4-14 0-6-3-10-8-10-4 0-6 2-10 2s-6-2-10-2z" />
      <path d="M18 20.5v.5M30 20.5v.5" stroke-width="3.4" />
      <path d="M19.5 26c2.8 2.4 6.2 2.4 9 0" />
    </g>
    <!-- Rayitas de "brillo" -->
    <g v-else>
      <path d="M24 6v9M24 33v9M6 24h9M33 24h9M11 11l6 6M31 31l6 6M37 11l-6 6M17 31l-6 6" />
    </g>
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    tipo?: 'destello' | 'corazon' | 'onda' | 'estrella' | 'espiral' | 'diente' | 'brillo';
    tamano?: number;
    color?: string;
    rotacion?: number;
    retraso?: number; // segundos
    flotar?: boolean;
  }>(),
  {
    tipo: 'destello',
    tamano: 40,
    color: '#2f2a33',
    rotacion: 0,
    retraso: 0,
    flotar: true,
  },
);

const estilo = computed(() => ({
  '--rot': `${props.rotacion}deg`,
  animationDelay: `${props.retraso}s`,
  transform: `rotate(${props.rotacion}deg)`,
}));
</script>

<style scoped lang="scss">
.doodle {
  position: absolute;
  pointer-events: none;
  opacity: 0.85;
}

.doodle--flota {
  animation: flotar 6s ease-in-out infinite;
}
</style>
