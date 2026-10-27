<!--
  Calendario de reservas de Google.
  Cuando la doctora tenga su página de reservas, pega el enlace en
  src/content/es.ts → sitio.bookingUrl  y aparecerá aquí automáticamente.
-->
<template>
  <div class="reserva">
    <iframe
      v-if="url"
      :src="url"
      class="reserva__iframe"
      title="Agenda tu cita en Dental K"
      loading="lazy"
    />

    <div v-else class="reserva__pendiente">
      <DoodleDecor tipo="destello" :tamano="34" class="d1" />
      <DoodleDecor tipo="corazon" :tamano="28" color="#8f1fcf" class="d2" :retraso="1.5" />
      <div class="reserva__icono">
        <q-icon :name="mdiCalendarHeart" size="44px" />
      </div>
      <h3>{{ agendar.sinCalendario.titulo }}</h3>
      <p>{{ agendar.sinCalendario.texto }}</p>
      <q-btn
        unelevated
        no-caps
        size="lg"
        class="btn-marca"
        style="background: #25d366; color: #fff"
        :icon="mdiWhatsapp"
        label="Agendar por WhatsApp"
        :href="enlaceWhatsApp(mensaje)"
        target="_blank"
        rel="noopener"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { mdiCalendarHeart, mdiWhatsapp } from '@quasar/extras/mdi-v7';
import DoodleDecor from './DoodleDecor.vue';
import { agendar, enlaceWhatsApp, sitio } from 'src/content/es';

const props = defineProps<{ url?: string; servicio?: string }>();

const url = computed(() => props.url ?? sitio.bookingUrl);
const mensaje = computed(() =>
  props.servicio
    ? `Hola, me gustaría agendar una cita para: ${props.servicio} 🦷`
    : sitio.whatsappMensaje,
);
</script>

<style scoped lang="scss">
.reserva {
  background: #fff;
  border-radius: 28px;
  box-shadow: $sombra-suave;
  overflow: hidden;
}

.reserva__iframe {
  display: block;
  width: 100%;
  height: 720px;
  border: 0;
}

.reserva__pendiente {
  position: relative;
  text-align: center;
  padding: clamp(40px, 7vw, 72px) 24px;
  border: 3px dashed rgba($primary, 0.22);
  border-radius: 28px;

  p {
    max-width: 420px;
    margin: 10px auto 24px;
    color: rgba($tinta, 0.8);
  }
}

.reserva__icono {
  width: 88px;
  height: 88px;
  margin: 0 auto 18px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: $primary;
  background: $lavanda-suave;
  animation: flotar 4s ease-in-out infinite;
}

.d1 { top: 14%; left: 10%; }
.d2 { bottom: 16%; right: 10%; }
</style>
