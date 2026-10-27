<!--
  Espacio reservado para una foto real. Cuando lleguen las fotos,
  reemplaza este componente por <q-img src="~assets/fotos/..." :ratio="ratio" />
-->
<template>
  <div class="foto" :style="{ aspectRatio: String(ratio) }" role="img" :aria-label="`Foto pendiente: ${texto}`">
    <q-icon :name="mdiImageOutline" size="34px" />
    <span>{{ texto }}</span>
  </div>
</template>

<script setup lang="ts">
import { mdiImageOutline } from '@quasar/extras/mdi-v7';

withDefaults(defineProps<{ texto?: string; ratio?: number }>(), {
  texto: 'Foto',
  ratio: 4 / 3,
});
</script>

<style scoped lang="scss">
.foto {
  width: 100%;
  border-radius: $radio;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: $primary;
  font-family: $fuente-titulos;
  font-weight: 600;
  background:
    radial-gradient(circle at 25% 20%, rgba(#fff, 0.65), transparent 45%),
    linear-gradient(135deg, $lavanda-suave, $lavanda);
  border: 2px dashed rgba($primary, 0.3);
  overflow: hidden;
  transition: transform 0.35s ease;

  &:hover {
    transform: scale(1.02) rotate(-0.5deg);
  }
}
</style>
