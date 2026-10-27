<template>
  <q-layout view="hHh lpR fff" @scroll="alHacerScroll">
    <!-- ===== Encabezado ===== -->
    <q-header class="encabezado" :class="{ 'encabezado--scroll': conScroll }">
      <q-toolbar class="contenedor encabezado__barra">
        <router-link to="/" class="marca" aria-label="Dental K — Inicio">
          <img src="~assets/logo-circulo.png" alt="" class="marca__logo" />
          <span class="marca__nombre">Dental K</span>
        </router-link>

        <q-space />

        <!-- Pestañas (escritorio) -->
        <q-tabs
          v-if="$q.screen.gt.sm"
          no-caps
          shrink
          inline-label
          class="pestanas"
          active-color="accent"
          indicator-color="transparent"
        >
          <q-route-tab
            v-for="item in navegacion"
            :key="item.to"
            :to="item.to"
            :label="item.label"
            exact
            :class="{ 'pestana--cta': item.to === '/agendar' }"
            :ripple="false"
          />
        </q-tabs>

        <!-- Botón de menú (móvil) -->
        <q-btn
          v-else
          flat
          round
          color="primary"
          :icon="mdiMenu"
          aria-label="Abrir menú"
          @click="menuAbierto = true"
        />
      </q-toolbar>
    </q-header>

    <!-- ===== Menú lateral (móvil) ===== -->
    <q-drawer
      v-model="menuAbierto"
      side="right"
      overlay
      behavior="mobile"
      :width="290"
      class="menu-movil"
    >
      <div class="menu-movil__top">
        <img src="~assets/logo-linea.png" alt="Dental K" class="menu-movil__logo" />
        <q-btn flat round color="primary" :icon="mdiClose" aria-label="Cerrar menú" @click="menuAbierto = false" />
      </div>

      <q-list class="menu-movil__lista">
        <q-item
          v-for="(item, i) in navegacion"
          :key="item.to"
          :to="item.to"
          exact
          clickable
          v-ripple
          active-class="menu-movil__activo"
          :style="{ animationDelay: `${0.05 * i + 0.1}s` }"
          class="menu-movil__item"
          @click="menuAbierto = false"
        >
          <q-item-section>{{ item.label }}</q-item-section>
        </q-item>
      </q-list>

      <div class="menu-movil__redes">
        <q-btn
          v-for="red in redes"
          :key="red.nombre"
          round
          flat
          color="primary"
          :icon="red.icono"
          :href="red.url"
          :target="red.url.startsWith('mailto:') ? undefined : '_blank'"
          rel="noopener"
          :aria-label="red.nombre"
        />
      </div>
    </q-drawer>

    <!-- ===== Contenido ===== -->
    <q-page-container>
      <router-view v-slot="{ Component, route }">
        <transition name="pagina" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>

      <SiteFooter />
    </q-page-container>

    <WhatsAppFab />
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { mdiClose, mdiMenu } from '@quasar/extras/mdi-v7';
import SiteFooter from 'components/SiteFooter.vue';
import WhatsAppFab from 'components/WhatsAppFab.vue';
import { navegacion, redes } from 'src/content/es';

const menuAbierto = ref(false);
const conScroll = ref(false);

function alHacerScroll({ position }: { position: number }) {
  conScroll.value = position > 12;
}
</script>

<style scoped lang="scss">
// ----- Encabezado -----
.encabezado.q-header {
  background-color: transparent;
  color: $primary;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease,
    backdrop-filter 0.3s ease;
}

.encabezado--scroll.q-header {
  background-color: rgba($fondo, 0.86);
  backdrop-filter: blur(10px);
  box-shadow: 0 6px 24px rgba($morado-profundo, 0.1);
}

.encabezado__barra {
  min-height: 72px;
}

.marca {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.marca__logo {
  width: 48px;
  height: 48px;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);

  .marca:hover & {
    transform: rotate(-12deg) scale(1.08);
  }
}

.marca__nombre {
  font-family: $fuente-titulos;
  font-weight: 700;
  font-size: 1.45rem;
  color: $primary;
}

// ----- Pestañas -----
.pestanas {
  font-family: $fuente-titulos;

  :deep(.q-tab) {
    color: $primary;
    font-weight: 600;
    border-radius: 999px;
    margin: 0 2px;
    padding: 0 18px;
    min-height: 42px;
    transition: background-color 0.2s ease, color 0.2s ease;

    &:hover {
      background: rgba($lavanda, 0.5);
    }
  }

  :deep(.q-tab__label) {
    font-size: 1.02rem;
  }

  :deep(.q-tab--active:not(.pestana--cta)) {
    background: rgba($lavanda, 0.7);
  }

  // "Agendar Cita" destacado como botón
  :deep(.pestana--cta) {
    background: $accent;
    color: #fff !important; // gana a active-color cuando estás en /agendar
    margin-left: 10px;
    box-shadow: 0 6px 16px rgba($accent, 0.3);
    transition: background-color 0.2s ease, transform 0.2s ease;

    &:hover {
      background: #7a1ab1;
      transform: translateY(-2px);
    }

    &.q-tab--active {
      background: $morado-profundo;
    }
  }

  :deep(.q-focus-helper) {
    display: none;
  }
}

// ----- Menú móvil -----
.menu-movil__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 12px 8px 20px;
}

.menu-movil__logo {
  width: 92px;
  height: auto;
}

.menu-movil__lista {
  padding: 8px 12px;
}

.menu-movil__item {
  font-family: $fuente-titulos;
  font-size: 1.25rem;
  font-weight: 600;
  color: $primary;
  border-radius: 16px;
  margin-bottom: 4px;
  min-height: 54px;
  animation: entrar-menu 0.35s ease both;
}

.menu-movil__activo {
  background: rgba($lavanda, 0.6);
  color: $accent;
}

.menu-movil__redes {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 16px 20px;
  border-top: 2px dashed rgba($primary, 0.15);
  margin: 12px 12px 0;
}

@keyframes entrar-menu {
  from { opacity: 0; transform: translateX(24px); }
  to { opacity: 1; transform: none; }
}
</style>

<style lang="scss">
// El menú lateral se renderiza fuera del componente; fondo con cuadrícula también
.q-drawer.menu-movil,
.menu-movil .q-drawer {
  background-color: $fondo;
  background-image:
    linear-gradient(rgba($primary, 0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba($primary, 0.07) 1px, transparent 1px);
  background-size: 28px 28px;
}
</style>
