<template>
  <q-page>
    <PageHero v-bind="nosotros.hero" />

    <!-- ===== Doctora ===== -->
    <section class="seccion q-pt-lg">
      <div class="contenedor row items-center q-col-gutter-xl">
        <div class="col-12 col-md-5" v-reveal>
          <div class="doctora__foto">
            <PhotoPlaceholder texto="Foto de la doctora" :ratio="4 / 5" />
            <span class="doctora__sticker">¡Hola! 👋</span>
            <DoodleDecor tipo="destello" :tamano="40" class="df1" />
            <DoodleDecor tipo="corazon" :tamano="30" color="#8f1fcf" class="df2" :retraso="1" />
          </div>
        </div>

        <div class="col-12 col-md-7" v-reveal="150">
          <span class="etiqueta">{{ nosotros.doctora.cargo }}</span>
          <h2>{{ nosotros.doctora.nombre }}</h2>
          <SectionDivider class="q-my-md doctora__divisor" />
          <p v-for="(parrafo, i) in nosotros.doctora.bio" :key="i">{{ parrafo }}</p>

          <PaperNote color="lavanda" :giro="-1" class="q-mt-lg credenciales">
            <h3>
              <q-icon :name="mdiSchoolOutline" size="26px" class="q-mr-sm" />{{ nosotros.credenciales.titulo }}
            </h3>
            <ul>
              <li v-for="c in nosotros.credenciales.items" :key="c">
                <q-icon :name="mdiCheckCircleOutline" color="primary" size="20px" />
                <span>{{ c }}</span>
              </li>
            </ul>
          </PaperNote>
        </div>
      </div>
    </section>

    <!-- ===== Filosofía ===== -->
    <section class="contenedor">
      <div class="filosofia" v-reveal>
        <DoodleDecor tipo="destello" :tamano="34" color="#ffffff" class="ff1" />
        <DoodleDecor tipo="onda" :tamano="56" color="#dbb6ee" class="ff2" :retraso="1.4" />
        <span class="etiqueta filosofia__etiqueta">{{ nosotros.filosofia.etiqueta }}</span>
        <blockquote>“{{ nosotros.filosofia.cita }}”</blockquote>
        <p>{{ nosotros.filosofia.texto }}</p>
      </div>
    </section>


    <!-- ===== Galería del consultorio ===== -->
    <section class="seccion q-pt-none">
      <div class="contenedor">
        <div class="seccion__encabezado" v-reveal>
          <span class="etiqueta">El consultorio</span>
          <h2>Un espacio pensado para los niños</h2>
        </div>
        <div class="galeria">
          <button
            v-for="(foto, i) in fotos"
            :key="foto"
            type="button"
            class="galeria__btn"
            :aria-label="`Ver foto: ${foto}`"
            v-reveal="i * 80"
            @click="abrirFoto(i)"
          >
            <PhotoPlaceholder :texto="foto" :ratio="1" />
          </button>
        </div>
      </div>
    </section>

    <!-- Visor de fotos -->
    <q-dialog v-model="visorAbierto" transition-show="scale" transition-hide="fade">
      <div class="visor">
        <q-carousel v-model="fotoActual" animated swipeable arrows navigation infinite control-color="primary" height="min(70vh, 520px)" class="visor__carrusel">
          <q-carousel-slide v-for="(foto, i) in fotos" :key="foto" :name="i" class="flex flex-center">
            <PhotoPlaceholder :texto="foto" :ratio="4 / 3" />
          </q-carousel-slide>
        </q-carousel>
        <q-btn round unelevated color="white" text-color="primary" :icon="mdiClose" class="visor__cerrar" aria-label="Cerrar" v-close-popup />
      </div>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useMeta } from 'quasar';
import { mdiCheckCircleOutline, mdiClose, mdiSchoolOutline } from '@quasar/extras/mdi-v7';
import DoodleDecor from 'components/DoodleDecor.vue';
import PageHero from 'components/PageHero.vue';
import PaperNote from 'components/PaperNote.vue';
import PhotoPlaceholder from 'components/PhotoPlaceholder.vue';
import SectionDivider from 'components/SectionDivider.vue';
import { nosotros } from 'src/content/es';

useMeta({ title: 'Nosotros | Dental K' });

// TODO: reemplazar por fotos reales
const fotos = ['Recepción', 'Sala de juegos', 'Sillón dental', 'Consultorio', 'Detalles', 'Equipo'];
const visorAbierto = ref(false);
const fotoActual = ref(0);

function abrirFoto(i: number) {
  fotoActual.value = i;
  visorAbierto.value = true;
}
</script>

<style scoped lang="scss">
// ----- Doctora -----
.doctora__foto {
  position: relative;
  max-width: 420px;
  margin: 0 auto;
  transform: rotate(-2deg);
}

.doctora__sticker {
  position: absolute;
  bottom: 24px;
  right: -12px;
  font-family: $fuente-titulos;
  font-weight: 600;
  background: $accent;
  color: #fff;
  border-radius: 999px;
  padding: 8px 18px;
  box-shadow: $sombra-suave;
  --rot: 8deg;
  animation: flotar 5s ease-in-out infinite;
}

.df1 { top: -18px; left: -14px; }
.df2 { top: 30%; right: -26px; }

.doctora__divisor {
  margin-left: 0;
}

.credenciales {
  h3 {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    margin-bottom: 8px;
    line-height: 1.5;
  }
}

// ----- Filosofía -----
.filosofia {
  position: relative;
  overflow: hidden;
  text-align: center;
  border-radius: 36px;
  padding: clamp(40px, 7vw, 72px) clamp(20px, 6vw, 80px);
  background: $primary;
  color: rgba(#fff, 0.88);

  blockquote {
    font-family: $fuente-titulos;
    font-weight: 600;
    font-size: clamp(1.4rem, 3.4vw, 2.1rem);
    line-height: 1.3;
    color: #fff;
    margin: 6px auto 18px;
    max-width: 760px;
  }

  p {
    max-width: 600px;
    margin: 0 auto;
  }
}

.filosofia__etiqueta {
  background: rgba(#fff, 0.15);
  color: $lavanda;
}

.ff1 { top: 14%; left: 6%; }
.ff2 { bottom: 12%; right: 6%; }

// ----- Equipo -----
.persona {
  text-align: center;

  h3 {
    margin: 16px 0 2px;
  }
}

.persona__cargo {
  color: $secondary;
  font-weight: 600;
}

// ----- Galería -----
.galeria {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 599px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.galeria__btn {
  border: 0;
  padding: 0;
  background: none;
  cursor: zoom-in;
  border-radius: $radio;

  &:focus-visible {
    outline: 3px solid $accent;
    outline-offset: 3px;
  }
}

// ----- Visor -----
.visor {
  position: relative;
  width: min(92vw, 760px);
  max-width: none !important;
}

.visor__carrusel {
  border-radius: 24px;
  background: $fondo;
}

.visor__cerrar {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
}
</style>
