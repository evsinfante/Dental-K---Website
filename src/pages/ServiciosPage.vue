<template>
  <q-page>
    <PageHero v-bind="serviciosPagina.hero" />

    <!-- ===== Lista de servicios ===== -->
    <section class="seccion q-pt-lg">
      <div class="contenedor">
        <div class="row q-col-gutter-xl">
          <div
            v-for="(s, i) in servicios"
            :key="s.id"
            class="col-12 col-sm-6 col-md-4"
            v-reveal="(i % 3) * 110"
          >
            <ServiceCard :servicio="s" :color="colores[i % colores.length]" :giro="giros[i % giros.length]" />
          </div>
        </div>
      </div>
    </section>

    <!-- ===== Preguntas frecuentes ===== -->
    <section class="seccion q-pt-none">
      <div class="contenedor">
        <div class="seccion__encabezado" v-reveal>
          <span class="etiqueta">{{ serviciosPagina.preguntas.etiqueta }}</span>
          <h2>{{ serviciosPagina.preguntas.titulo }}</h2>
          <SectionDivider />
        </div>

        <div class="faq">
          <q-expansion-item
            v-for="(item, i) in serviciosPagina.preguntas.items"
            :key="item.pregunta"
            group="faq"
            :label="item.pregunta"
            :default-opened="i === 0"
            :expand-icon="mdiPlus"
            :expanded-icon="mdiMinus"
            header-class="faq__pregunta"
            class="faq__item"
            v-reveal="i * 80"
          >
            <div class="faq__respuesta">{{ item.respuesta }}</div>
          </q-expansion-item>
        </div>

        <div class="faq__mas" v-reveal>
          <p>¿Tienes otra pregunta?</p>
          <q-btn
            unelevated
            no-caps
            class="btn-marca"
            style="background: #25d366; color: #fff"
            :icon="mdiWhatsapp"
            label="Pregúntanos por WhatsApp"
            :href="enlaceWhatsApp('Hola, tengo una pregunta 🦷')"
            target="_blank"
            rel="noopener"
          />
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { useMeta } from 'quasar';
import { mdiMinus, mdiPlus, mdiWhatsapp } from '@quasar/extras/mdi-v7';
import PageHero from 'components/PageHero.vue';
import SectionDivider from 'components/SectionDivider.vue';
import ServiceCard from 'components/ServiceCard.vue';
import { enlaceWhatsApp, servicios, serviciosPagina } from 'src/content/es';

useMeta({ title: 'Servicios | Dental K' });

const colores = ['blanco', 'rosa', 'lavanda'] as const;
const giros = [-1.5, 1, -0.6, 1.4, -1, 0.8];
</script>

<style scoped lang="scss">
.faq {
  max-width: 780px;
  margin: 0 auto;
}

.faq__item {
  background: #fff;
  border-radius: 20px;
  margin-bottom: 14px;
  box-shadow: 0 4px 18px rgba($morado-profundo, 0.08);
  overflow: hidden;
  transition: box-shadow 0.25s ease;

  &:hover {
    box-shadow: 0 8px 26px rgba($morado-profundo, 0.14);
  }

  :deep(.faq__pregunta) {
    font-family: $fuente-titulos;
    font-weight: 600;
    font-size: 1.1rem;
    color: $morado-profundo;
    padding: 18px 22px;
  }

  :deep(.q-expansion-item__toggle-icon) {
    color: $accent;
  }
}

.faq__respuesta {
  padding: 0 22px 20px;
  line-height: 1.7;
  color: rgba($tinta, 0.82);
}

.faq__mas {
  text-align: center;
  margin-top: 36px;

  p {
    font-family: $fuente-titulos;
    font-weight: 600;
    font-size: 1.15rem;
    color: $primary;
    margin-bottom: 12px;
  }
}
</style>
