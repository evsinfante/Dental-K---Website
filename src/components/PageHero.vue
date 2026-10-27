<!-- Encabezado de las páginas internas (Nosotros, Servicios, Agendar) -->
<template>
  <section class="page-hero">
    <DoodleDecor tipo="destello" :tamano="38" class="d1" />
    <DoodleDecor tipo="onda" :tamano="54" color="#7f4ca5" class="d2" :retraso="1" />
    <DoodleDecor tipo="corazon" :tamano="30" color="#8f1fcf" class="d3" :retraso="2" :rotacion="-12" />

    <div class="contenedor text-center">
      <span class="etiqueta">{{ etiqueta }}</span>
      <h1>{{ titulo }}</h1>
      <p v-if="subtitulo" class="page-hero__sub">{{ subtitulo }}</p>
      <SectionDivider class="q-mt-md" />
    </div>
  </section>
</template>

<script setup lang="ts">
import DoodleDecor from './DoodleDecor.vue';
import SectionDivider from './SectionDivider.vue';

defineProps<{ etiqueta: string; titulo: string; subtitulo?: string }>();
</script>

<style scoped lang="scss">
.page-hero {
  position: relative;
  overflow: hidden;
  padding: clamp(48px, 8vw, 88px) 0 clamp(28px, 4vw, 44px);

  h1 {
    animation: aparecer-rebote 0.7s ease both;
  }
}

.page-hero__sub {
  max-width: 560px;
  margin: 16px auto 0;
  font-size: 1.1rem;
  color: rgba($tinta, 0.8);
}

.d1 { top: 22%; left: 8%; }
.d2 { bottom: 18%; right: 7%; }
.d3 { top: 18%; right: 16%; }

@media (max-width: 599px) {
  .d1 { left: 4%; top: 10%; }
  .d3 { right: 6%; top: 8%; }
  .d2 { display: none; }
}
</style>
