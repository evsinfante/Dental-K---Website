<template>
  <q-page class="no-encontrado flex flex-center text-center">
    <div class="contenedor">
      <DoodleDecor tipo="diente" :tamano="96" color="#5d3867" class="relative-position no-encontrado__diente" />
      <h1>¡Ups! 404</h1>
      <p>Esta página se nos perdió… como un diente de leche.</p>
      <q-btn unelevated no-caps color="accent" class="btn-marca" label="Volver al inicio" to="/" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useMeta } from 'quasar';
import DoodleDecor from 'components/DoodleDecor.vue';

useMeta({ title: 'Página no encontrada | Dental K' });
</script>

<style scoped lang="scss">
.no-encontrado {
  padding: 80px 0;

  p {
    font-size: 1.15rem;
    margin: 12px 0 24px;
  }
}

.no-encontrado__diente {
  position: relative !important;
  display: block;
  margin: 0 auto 12px;
}
</style>
