<!-- Botón flotante de WhatsApp (abajo a la derecha, en todas las páginas) -->
<template>
  <q-page-sticky position="bottom-right" :offset="[18, 18]" class="fab-wrap">
    <q-btn
      round
      unelevated
      size="lg"
      class="fab-whatsapp"
      :icon="mdiWhatsapp"
      :href="enlaceWhatsApp()"
      target="_blank"
      rel="noopener"
      aria-label="Escríbenos por WhatsApp"
    >
      <q-tooltip anchor="center left" self="center right" :offset="[10, 0]" class="fab-tooltip">
        ¿Dudas? Escríbenos
      </q-tooltip>
    </q-btn>
  </q-page-sticky>
</template>

<script setup lang="ts">
import { mdiWhatsapp } from '@quasar/extras/mdi-v7';
import { enlaceWhatsApp } from 'src/content/es';
</script>

<style scoped lang="scss">
.fab-wrap {
  z-index: 2000;
}

.fab-whatsapp {
  background: #25d366;
  color: #fff;
  box-shadow: 0 10px 24px rgba(#128c7e, 0.35);
  animation: aparecer-rebote 0.6s 0.8s ease both;

  // Pulso suave para llamar la atención
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(#25d366, 0.55);
    animation: pulso 2.4s 1.6s ease-out infinite;
    pointer-events: none;
  }

  &:hover {
    transform: scale(1.08);
  }
}

@keyframes pulso {
  0% { box-shadow: 0 0 0 0 rgba(#25d366, 0.55); }
  80%, 100% { box-shadow: 0 0 0 18px rgba(#25d366, 0); }
}
</style>

<style lang="scss">
.fab-tooltip {
  font-family: $fuente-titulos;
  font-size: 0.9rem;
  background: $tinta;
  border-radius: 10px;
}
</style>
