<template>
  <q-page>
    <PageHero v-bind="agendar.hero" />

    <!-- ===== Pasos ===== -->
    <section class="contenedor q-pb-xl">
      <ol class="pasos">
        <li v-for="(paso, i) in agendar.pasos" :key="paso.titulo" class="paso" v-reveal="i * 120">
          <span class="paso__numero">{{ i + 1 }}</span>
          <h3>{{ paso.titulo }}</h3>
          <p>{{ paso.texto }}</p>
        </li>
      </ol>
    </section>

    <!-- ===== Calendario ===== -->
    <section class="contenedor q-pb-xl">
      <transition appear name="pagina">
        <div v-if="servicioElegido" class="elegido">
          <q-icon :name="mdiCheckCircleOutline" size="22px" />
          Servicio seleccionado: <strong>{{ servicioElegido.nombre }}</strong>
          <q-btn flat dense round size="sm" :icon="mdiClose" aria-label="Quitar servicio" :to="{ query: {} }" />
        </div>
      </transition>

      <div v-reveal>
        <BookingEmbed :servicio="servicioElegido?.nombre" />
      </div>
    </section>

    <!-- ===== Políticas ===== -->
    <section class="seccion q-pt-md">
      <div class="contenedor">
        <div class="seccion__encabezado" v-reveal>
          <span class="etiqueta">Antes de tu cita</span>
          <h2>Bueno saber</h2>
        </div>
        <div class="row q-col-gutter-xl">
          <div
            v-for="(p, i) in agendar.politicas"
            :key="p.titulo"
            class="col-12 col-md-4"
            v-reveal="i * 110"
          >
            <PaperNote :color="colores[i % colores.length]" :giro="[-1.2, 1, -0.6][i % 3]">
              <q-icon :name="iconos[i % iconos.length]" size="34px" color="primary" />
              <h3 class="q-mt-sm q-mb-xs">{{ p.titulo }}</h3>
              <p class="q-mb-none">{{ p.texto }}</p>
            </PaperNote>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useMeta } from 'quasar';
import {
  mdiCashMultiple,
  mdiCalendarClock,
  mdiCheckCircleOutline,
  mdiClose,
  mdiHeartOutline,
} from '@quasar/extras/mdi-v7';
import BookingEmbed from 'components/BookingEmbed.vue';
import PageHero from 'components/PageHero.vue';
import PaperNote from 'components/PaperNote.vue';
import { agendar, servicios } from 'src/content/es';

useMeta({ title: 'Agendar cita | Dental K' });

const route = useRoute();

// Si llegan desde una tarjeta de servicio: /agendar?servicio=limpieza
const servicioElegido = computed(() => servicios.find((s) => s.id === route.query.servicio));

const iconos = [mdiCashMultiple, mdiCalendarClock, mdiHeartOutline];
const colores = ['rosa', 'lavanda', 'blanco'] as const;
</script>

<style scoped lang="scss">
// ----- Pasos -----
.pasos {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  position: relative;

  // Línea punteada que une los pasos
  &::before {
    content: '';
    position: absolute;
    top: 28px;
    left: 12%;
    right: 12%;
    border-top: 3px dashed rgba($primary, 0.25);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr 1fr;

    &::before {
      display: none;
    }
  }
}

.paso {
  position: relative;
  text-align: center;

  h3 {
    font-size: 1.15rem;
    margin: 12px 0 4px;
  }

  p {
    font-size: 0.95rem;
    color: rgba($tinta, 0.78);
    margin: 0;
  }
}

.paso__numero {
  display: inline-grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  font-family: $fuente-titulos;
  font-weight: 700;
  font-size: 1.4rem;
  color: #fff;
  background: $primary;
  box-shadow: 0 0 0 6px $fondo, 0 0 0 9px rgba($lavanda, 0.9);
  position: relative;
  z-index: 1;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

  .paso:hover & {
    transform: scale(1.12) rotate(-8deg);
    background: $accent;
  }
}

// ----- Servicio elegido -----
.elegido {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  width: fit-content;
  margin: 0 auto 18px;
  padding: 8px 10px 8px 16px;
  border-radius: 999px;
  background: rgba($lavanda, 0.7);
  color: $morado-profundo;
}
</style>
