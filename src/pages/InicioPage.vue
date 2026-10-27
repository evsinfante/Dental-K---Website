<template>
  <q-page class="inicio">
    <!-- ================= HERO ================= -->
    <section class="hero">
      <div class="contenedor row items-center q-col-gutter-xl">
        <div class="col-12 col-md-6 hero__texto">
          <span class="etiqueta hero__entrada" style="--i: 0">
            <q-icon :name="mdiStarFourPointsOutline" size="16px" /> {{ inicio.hero.etiqueta }}
          </span>

          <h1 class="hero__entrada" style="--i: 1">
            {{ inicio.hero.tituloAntes }}
            <span class="hero__rotativo">
              <transition name="palabra" mode="out-in">
                <span :key="indicePalabra" class="subrayado text-accent">{{ palabraActual }}</span>
              </transition>
            </span>
          </h1>

          <p class="hero__sub hero__entrada" style="--i: 2">{{ inicio.hero.subtitulo }}</p>

          <div class="hero__botones hero__entrada" style="--i: 3">
            <q-btn
              unelevated
              no-caps
              size="lg"
              color="accent"
              class="btn-marca"
              :icon="mdiCalendarHeart"
              :label="inicio.hero.botonPrincipal"
              to="/agendar"
            />
            <q-btn
              outline
              no-caps
              size="lg"
              color="primary"
              class="btn-marca bg-white"
              :icon="mdiWhatsapp"
              :label="inicio.hero.botonSecundario"
              :href="enlaceWhatsApp()"
              target="_blank"
              rel="noopener"
            />
          </div>
        </div>

        <div class="col-12 col-md-6">
          <div class="hero__arte">
            <div class="hero__circulo" />
            <img src="~assets/logo-linea.png" alt="Logo de Dental K" class="hero__logo" />

            <span class="sticker sticker--1">¡Sin miedo! 💜</span>
            <span class="sticker sticker--2">100% cariño</span>

            <DoodleDecor tipo="destello" :tamano="46" class="hd hd1" />
            <DoodleDecor tipo="destello" :tamano="24" class="hd hd2" :retraso="0.6" />
            <DoodleDecor tipo="corazon" :tamano="34" color="#8f1fcf" class="hd hd3" :rotacion="14" :retraso="1.2" />
            <DoodleDecor tipo="diente" :tamano="52" color="#5d3867" class="hd hd4" :rotacion="-10" :retraso="0.3" />
            <DoodleDecor tipo="espiral" :tamano="44" color="#7f4ca5" class="hd hd5" :retraso="2" />
          </div>
        </div>
      </div>
    </section>

    <!-- ================= VALORES ================= -->
    <section class="seccion">
      <div class="contenedor">
        <div class="seccion__encabezado" v-reveal>
          <span class="etiqueta">{{ inicio.valores.etiqueta }}</span>
          <h2>{{ inicio.valores.titulo }}</h2>
          <p>{{ inicio.valores.subtitulo }}</p>
          <SectionDivider />
        </div>

        <div class="row q-col-gutter-lg justify-center">
          <div
            v-for="(valor, i) in inicio.valores.items"
            :key="valor.titulo"
            class="col-12 col-sm-6 col-md"
            v-reveal="i * 90"
          >
            <PaperNote :color="i % 2 === 0 ? 'rosa' : 'lavanda'" :giro="giros[i % giros.length]" class="valor">
              <q-icon :name="valor.icono" size="38px" color="primary" />
              <h3>{{ valor.titulo }}</h3>
              <p>{{ valor.texto }}</p>
            </PaperNote>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= CIFRAS ================= -->
    <section class="contenedor" v-reveal>
      <div class="cifras">
        <DoodleDecor tipo="destello" :tamano="30" color="#dbb6ee" class="cd1" />
        <DoodleDecor tipo="onda" :tamano="54" color="#dbb6ee" class="cd2" :retraso="1" />
        <div v-for="c in inicio.cifras" :key="c.texto" class="cifra">
          <div class="cifra__numero">
            <AnimatedCounter :valor="c.valor" :prefijo="c.prefijo" :sufijo="c.sufijo" />
          </div>
          <div class="cifra__texto">{{ c.texto }}</div>
        </div>
      </div>
    </section>

    <!-- ================= SERVICIOS ================= -->
    <section class="seccion">
      <div class="contenedor">
        <div class="seccion__encabezado" v-reveal>
          <span class="etiqueta">{{ inicio.serviciosPreview.etiqueta }}</span>
          <h2>{{ inicio.serviciosPreview.titulo }}</h2>
          <p>{{ inicio.serviciosPreview.subtitulo }}</p>
        </div>

        <div class="row q-col-gutter-xl">
          <div
            v-for="(s, i) in servicios.slice(0, 3)"
            :key="s.id"
            class="col-12 col-sm-6 col-md-4"
            v-reveal="i * 120"
          >
            <ServiceCard :servicio="s" :giro="[-1.5, 1, -0.5][i]" />
          </div>
        </div>

        <div class="text-center q-mt-xl" v-reveal>
          <q-btn
            outline
            no-caps
            color="primary"
            class="btn-marca bg-white"
            label="Ver todos los servicios"
            :icon-right="mdiArrowRight"
            to="/servicios"
          />
        </div>
      </div>
    </section>

    <!-- ================= GALERÍA ================= -->
    <section class="seccion galeria-seccion">
      <div class="contenedor">
        <div class="seccion__encabezado" v-reveal>
          <span class="etiqueta">{{ inicio.galeria.etiqueta }}</span>
          <h2>{{ inicio.galeria.titulo }}</h2>
        </div>

        <div class="galeria">
          <div
            v-for="(foto, i) in inicio.galeria.fotos"
            :key="foto"
            class="galeria__item"
            :class="`galeria__item--${i}`"
            v-reveal="i * 100"
          >
            <PhotoPlaceholder :texto="foto" :ratio="i === 0 ? 1 : 4 / 3" />
          </div>
        </div>
      </div>
    </section>

    <!-- ================= TESTIMONIOS ================= -->
    <section class="seccion">
      <div class="contenedor">
        <div class="seccion__encabezado" v-reveal>
          <span class="etiqueta">{{ inicio.testimonios.etiqueta }}</span>
          <h2>{{ inicio.testimonios.titulo }}</h2>
        </div>

        <div class="testimonios" v-reveal>
          <q-carousel
            v-model="testimonio"
            animated
            swipeable
            infinite
            navigation
            :autoplay="autoplay"
            transition-prev="slide-right"
            transition-next="slide-left"
            control-color="primary"
            :height="$q.screen.lt.sm ? '400px' : '320px'"
            class="testimonios__carrusel"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = 6000"
          >
            <q-carousel-slide
              v-for="(t, i) in inicio.testimonios.items"
              :key="t.nombre"
              :name="i"
              class="testimonios__slide"
            >
              <PaperNote color="blanco" :giro="i % 2 === 0 ? -1 : 1" :interactiva="false" class="testimonio">
                <q-icon :name="mdiFormatQuoteOpen" size="44px" class="testimonio__comillas" />
                <p class="testimonio__texto">{{ t.texto }}</p>
                <div class="testimonio__autor">
                  <span class="testimonio__estrellas" aria-label="5 estrellas">★★★★★</span>
                  {{ t.nombre }}
                </div>
              </PaperNote>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </section>

    <!-- ================= LLAMADA A LA ACCIÓN ================= -->
    <section class="contenedor q-pb-xl">
      <div class="cta" v-reveal>
        <DoodleDecor tipo="destello" :tamano="40" color="#ffffff" class="ctad1" />
        <DoodleDecor tipo="corazon" :tamano="30" color="#dbb6ee" class="ctad2" :retraso="1" />
        <DoodleDecor tipo="onda" :tamano="60" color="#dbb6ee" class="ctad3" :retraso="2" />
        <img src="~assets/logo-linea-blanco.png" alt="" class="cta__logo" />
        <h2>{{ inicio.cta.titulo }}</h2>
        <p>{{ inicio.cta.texto }}</p>
        <div class="cta__botones">
          <q-btn
            unelevated
            no-caps
            size="lg"
            class="btn-marca bg-white text-primary"
            :icon="mdiCalendarHeart"
            :label="inicio.cta.boton"
            to="/agendar"
          />
          <q-btn
            flat
            no-caps
            size="lg"
            class="btn-marca text-white"
            :icon="mdiWhatsapp"
            label="WhatsApp"
            :href="enlaceWhatsApp()"
            target="_blank"
            rel="noopener"
          />
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { useMeta } from 'quasar';
import {
  mdiArrowRight,
  mdiCalendarHeart,
  mdiFormatQuoteOpen,
  mdiStarFourPointsOutline,
  mdiWhatsapp,
} from '@quasar/extras/mdi-v7';
import AnimatedCounter from 'components/AnimatedCounter.vue';
import DoodleDecor from 'components/DoodleDecor.vue';
import PaperNote from 'components/PaperNote.vue';
import PhotoPlaceholder from 'components/PhotoPlaceholder.vue';
import SectionDivider from 'components/SectionDivider.vue';
import ServiceCard from 'components/ServiceCard.vue';
import { enlaceWhatsApp, inicio, servicios } from 'src/content/es';

useMeta({
  title: 'Dental K | Odontopediatría con cariño',
  meta: {
    description: {
      name: 'description',
      content: 'Dentista para niños en México: cercano, sincero y divertido. Agenda tu cita en línea.',
    },
  },
});

// Palabra que cambia en el título del hero
const indicePalabra = ref(0);
const palabraActual = computed(
  () => inicio.hero.palabrasRotativas[indicePalabra.value % inicio.hero.palabrasRotativas.length],
);
let intervalo: ReturnType<typeof setInterval> | undefined;

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  intervalo = setInterval(() => {
    indicePalabra.value++;
  }, 2600);
});
onBeforeUnmount(() => clearInterval(intervalo));

// Giros de las notas para que se vean "pegadas a mano"
const giros = [-2, 1.5, -1, 2, -1.5];

// Carrusel de testimonios
const testimonio = ref(0);
const autoplay = ref<number | boolean>(6000);
</script>

<style scoped lang="scss">
// ---------- HERO ----------
.hero {
  position: relative;
  padding: clamp(24px, 5vw, 64px) 0 clamp(48px, 7vw, 88px);
  overflow: hidden;
}

.hero__entrada {
  animation: subir 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) both;
  animation-delay: calc(var(--i) * 0.12s + 0.1s);
}

@keyframes subir {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: none; }
}

.hero h1 {
  margin-bottom: 18px;
}

// La palabra rotativa va en su propia línea para que el título no "brinque"
.hero__rotativo {
  display: block;
  min-height: 1.15em;
}

.palabra-enter-active,
.palabra-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
  display: inline-block;
}
.palabra-enter-from {
  opacity: 0;
  transform: translateY(0.4em) rotate(-3deg);
}
.palabra-leave-to {
  opacity: 0;
  transform: translateY(-0.4em) rotate(3deg);
}

.hero__sub {
  font-size: 1.12rem;
  max-width: 520px;
  color: rgba($tinta, 0.8);
}

.hero__botones {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 26px;
}

.hero__arte {
  position: relative;
  max-width: 500px;
  margin: 0 auto;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
}

.hero__circulo {
  position: absolute;
  inset: 6%;
  border-radius: 50%;
  background:
    radial-gradient(circle at 30% 25%, rgba(#fff, 0.55), transparent 50%),
    $lavanda-suave;
  animation: aparecer-rebote 0.9s 0.2s ease both;
}

.hero__logo {
  position: relative;
  width: 76%;
  height: auto;
  animation:
    aparecer-rebote 0.9s 0.45s ease both,
    flotar 6s 1.4s ease-in-out infinite;
}

.sticker {
  position: absolute;
  font-family: $fuente-titulos;
  font-weight: 600;
  font-size: clamp(0.85rem, 2vw, 1rem);
  padding: 8px 16px;
  border-radius: 999px;
  background: #fff;
  color: $primary;
  box-shadow: $sombra-suave;
  animation: aparecer-rebote 0.6s ease both, flotar 5s ease-in-out infinite;
}
.sticker--1 { top: 10%; left: 0; --rot: -8deg; animation-delay: 1s, 1.6s; }
.sticker--2 { bottom: 12%; right: 0; --rot: 6deg; background: $accent; color: #fff; animation-delay: 1.2s, 2.4s; }

.hd1 { top: 2%; right: 14%; }
.hd2 { top: 22%; right: 4%; }
.hd3 { bottom: 4%; left: 12%; }
.hd4 { top: 44%; left: -2%; }
.hd5 { bottom: 26%; right: -2%; }

// ---------- VALORES ----------
.valor {
  text-align: center;

  h3 {
    margin: 10px 0 6px;
  }

  p {
    font-size: 0.95rem;
    color: rgba($tinta, 0.78);
    margin: 0;
  }
}

// ---------- CIFRAS ----------
.cifras {
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: clamp(28px, 5vw, 48px) 20px;
  border-radius: 32px;
  background: $primary;
  color: #fff;
  text-align: center;

  @media (max-width: 599px) {
    grid-template-columns: 1fr;
  }
}

.cifra__numero {
  font-family: $fuente-titulos;
  font-weight: 700;
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  line-height: 1;
}

.cifra__texto {
  margin-top: 6px;
  color: $lavanda;
  font-weight: 600;
}

.cd1 { top: 14%; left: 4%; }
.cd2 { bottom: 10%; right: 4%; }

// ---------- GALERÍA ----------
.galeria {
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr;
  gap: 18px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
  }
}

.galeria__item--0 {
  grid-row: span 2;

  @media (max-width: 767px) {
    grid-column: span 2;
    grid-row: auto;
  }
}

.galeria__item--3 {
  grid-column: span 2;

  @media (max-width: 767px) {
    grid-column: span 2;
  }
}

// ---------- TESTIMONIOS ----------
.testimonios {
  max-width: 760px;
  margin: 0 auto;
}

.testimonios__carrusel {
  background: transparent;

  :deep(.q-carousel__navigation) {
    bottom: 0;
  }
}

.testimonios__slide {
  padding: 20px 16px 52px;
  display: flex;
  align-items: center;
}

.testimonio {
  width: 100%;
  height: auto;
  text-align: center;
}

.testimonio__comillas {
  color: $lila;
}

.testimonio__texto {
  font-size: 1.12rem;
  font-style: italic;
  margin: 8px 0 14px;
}

.testimonio__autor {
  font-family: $fuente-titulos;
  font-weight: 600;
  color: $primary;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.testimonio__estrellas {
  color: #f2c037;
  letter-spacing: 3px;
}

// ---------- CTA ----------
.cta {
  position: relative;
  overflow: hidden;
  text-align: center;
  padding: clamp(40px, 7vw, 72px) 24px;
  border-radius: 36px;
  background:
    radial-gradient(circle at 85% 10%, rgba($lila, 0.45), transparent 40%),
    linear-gradient(135deg, $primary, $morado-profundo);
  color: #fff;

  h2 {
    color: #fff;
  }

  p {
    max-width: 480px;
    margin: 12px auto 26px;
    color: rgba(#fff, 0.85);
  }
}

.cta__logo {
  width: 110px;
  height: auto;
  margin-bottom: 12px;
  animation: flotar 5s ease-in-out infinite;
}

.cta__botones {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

.ctad1 { top: 12%; left: 8%; }
.ctad2 { bottom: 16%; left: 16%; }
.ctad3 { top: 18%; right: 8%; }

@media (max-width: 599px) {
  .ctad2, .ctad3 { display: none; }
}
</style>
