<template>
  <footer class="pie">
    <!-- Curva de sonrisa arriba del footer -->
    <svg class="pie__curva" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 0 C 360 80, 1080 80, 1440 0 L1440 80 L0 80 Z" />
    </svg>

    <div class="pie__cuerpo">
      <div class="contenedor">
        <div class="row q-col-gutter-xl">
          <!-- Marca -->
          <div class="col-12 col-md-4">
            <img src="~assets/logo-linea-blanco.png" alt="Dental K" class="pie__logo" />
            <p class="pie__eslogan">{{ sitio.eslogan }}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div class="pie__redes">
              <q-btn
                v-for="red in redes"
                :key="red.nombre"
                round
                unelevated
                class="pie__red"
                :icon="red.icono"
                :href="red.url"
                :target="red.url.startsWith('mailto:') ? undefined : '_blank'"
                rel="noopener"
                :aria-label="red.nombre"
              >
                <q-tooltip>{{ red.nombre }}</q-tooltip>
              </q-btn>
            </div>
          </div>

          <!-- Navegación -->
          <div class="col-6 col-md-2">
            <h4>Menú</h4>
            <ul>
              <li v-for="item in navegacion" :key="item.to">
                <router-link :to="item.to">{{ item.label }}</router-link>
              </li>
            </ul>
          </div>

          <!-- Horario -->
          <div class="col-6 col-md-3">
            <h4>Horario</h4>
            <ul>
              <li v-for="h in sitio.horario" :key="h.dias">
                <strong>{{ h.dias }}</strong><br />{{ h.horas }}
              </li>
            </ul>
          </div>

          <!-- Contacto -->
          <div class="col-12 col-md-3">
            <h4>Contacto</h4>
            <ul class="pie__contacto">
              <li>
                <q-icon :name="mdiMapMarkerOutline" size="20px" />
                <a :href="sitio.mapaUrl" target="_blank" rel="noopener">{{ sitio.direccion }}</a>
              </li>
              <li>
                <q-icon :name="mdiPhoneOutline" size="20px" />
                <a :href="`tel:${sitio.telefono.replace(/\s/g, '')}`">{{ sitio.telefono }}</a>
              </li>
              <li>
                <q-icon :name="mdiEmailOutline" size="20px" />
                <a :href="`mailto:${sitio.email}`">{{ sitio.email }}</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="pie__legal">
          <span>© {{ anio }} {{ sitio.nombre }}. Todos los derechos reservados.</span>
          <router-link to="/aviso-de-privacidad">Aviso de privacidad</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { mdiEmailOutline, mdiMapMarkerOutline, mdiPhoneOutline } from '@quasar/extras/mdi-v7';
import { navegacion, redes, sitio } from 'src/content/es';

const anio = new Date().getFullYear();
</script>

<style scoped lang="scss">
.pie {
  position: relative;
  margin-top: 40px;
  color: rgba(#fff, 0.86);
}

.pie__curva {
  display: block;
  width: 100%;
  height: clamp(36px, 6vw, 80px);
  // El borde superior forma una "U": el footer sonríe, como el logo
  margin-bottom: -1px;

  path {
    fill: $morado-profundo;
  }
}

.pie__cuerpo {
  background: $morado-profundo;
  padding: 36px 0 24px;
}

.pie__logo {
  width: 150px;
  height: auto;
  display: block;
  margin-bottom: 14px;
}

.pie__eslogan {
  max-width: 320px;
}

h4 {
  font-family: $fuente-titulos;
  font-size: 1.15rem;
  color: #fff;
  margin: 0 0 14px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin-bottom: 10px;
    line-height: 1.5;
  }
}

a {
  color: rgba(#fff, 0.86);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: $lavanda;
    text-decoration: underline;
  }
}

.pie__contacto li {
  display: flex;
  gap: 10px;
  align-items: flex-start;

  .q-icon {
    color: $lavanda;
    flex-shrink: 0;
    margin-top: 2px;
  }
}

.pie__redes {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 6px;
}

.pie__red {
  background: rgba(#fff, 0.12);
  color: #fff;
  transition: transform 0.25s ease, background 0.25s ease;

  &:hover {
    background: $lavanda;
    color: $morado-profundo;
    transform: translateY(-3px) rotate(-8deg);
  }
}

.pie__legal {
  margin-top: 36px;
  padding-top: 18px;
  border-top: 1px solid rgba(#fff, 0.15);
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
  justify-content: space-between;
  font-size: 0.9rem;
  // espacio para que el botón de WhatsApp no tape el texto en móvil
  padding-right: 64px;
}
</style>
