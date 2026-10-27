<template>
  <PaperNote :color="color" :giro="giro" class="servicio">
    <div class="servicio__icono">
      <q-icon :name="servicio.icono" size="30px" />
    </div>
    <h3>{{ servicio.nombre }}</h3>
    <p class="servicio__texto">{{ servicio.descripcion }}</p>
    <div class="servicio__pie">
      <span class="servicio__precio">{{ servicio.precio }}</span>
      <q-btn
        flat
        rounded
        no-caps
        color="accent"
        class="text-weight-bold"
        label="Agendar"
        :icon-right="mdiArrowRight"
        :to="{ path: '/agendar', query: { servicio: servicio.id } }"
        :aria-label="`Agendar ${servicio.nombre}`"
      />
    </div>
  </PaperNote>
</template>

<script setup lang="ts">
import { mdiArrowRight } from '@quasar/extras/mdi-v7';
import PaperNote from './PaperNote.vue';
import type { Servicio } from 'src/content/es';

withDefaults(
  defineProps<{
    servicio: Servicio;
    color?: 'rosa' | 'lavanda' | 'blanco';
    giro?: number;
  }>(),
  { color: 'blanco', giro: 0 },
);
</script>

<style scoped lang="scss">
.servicio {
  display: flex;
  flex-direction: column;

  h3 {
    margin: 16px 0 8px;
  }
}

.servicio__icono {
  width: 58px;
  height: 58px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  color: $primary;
  background: rgba($lavanda, 0.7);
  transform: rotate(-6deg);
  transition: transform 0.35s ease;

  .servicio:hover & {
    transform: rotate(6deg) scale(1.08);
  }
}

.servicio__texto {
  color: rgba($tinta, 0.78);
  flex: 1;
}

.servicio__pie {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border-top: 2px dashed rgba($primary, 0.18);
  padding-top: 12px;
}

.servicio__precio {
  font-family: $fuente-titulos;
  font-weight: 600;
  color: $primary;
}
</style>
