<template>
  <q-page>
    <PageHero etiqueta="Legal" titulo="Aviso de privacidad" />
    <section class="contenedor q-pb-xl">
      <div class="aviso">
        <!-- TODO: reemplazar con el aviso de privacidad real (LFPDPPP), redactado por su abogado o contador -->
        <p class="aviso__nota">Texto provisional. El aviso definitivo debe ser revisado por un profesional.</p>
        <h3>Responsable de los datos personales</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <h3>Datos que recabamos</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        <h3>Finalidad del tratamiento</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
        <h3>Derechos ARCO</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { useMeta } from 'quasar';
import PageHero from 'components/PageHero.vue';

useMeta({ title: 'Aviso de privacidad | Dental K' });
</script>

<style scoped lang="scss">
.aviso {
  max-width: 760px;
  margin: 0 auto;
  background: #fff;
  border-radius: 24px;
  padding: clamp(24px, 5vw, 48px);
  box-shadow: $sombra-suave;

  h3 {
    margin: 24px 0 8px;
  }
}

.aviso__nota {
  background: $rosa-nota;
  border-radius: 12px;
  padding: 10px 14px;
  font-weight: 600;
}
</style>
