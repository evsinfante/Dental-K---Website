<!--
  Tarjeta tipo "nota de papel" con cinta adhesiva, inspirada en las notas rosas de la propuesta.
  Está ligeramente girada y se endereza al pasar el mouse.
-->
<template>
  <div class="nota" :class="[`nota--${color}`, { 'nota--interactiva': interactiva }]" :style="{ '--giro': `${giro}deg` }">
    <span v-if="cinta" class="nota__cinta" aria-hidden="true" />
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    color?: 'rosa' | 'lavanda' | 'blanco';
    giro?: number;
    cinta?: boolean;
    interactiva?: boolean;
  }>(),
  { color: 'rosa', giro: 0, cinta: true, interactiva: true },
);
</script>

<style scoped lang="scss">
.nota {
  position: relative;
  height: 100%;
  border-radius: 6px;
  padding: 30px 24px 26px;
  transform: rotate(var(--giro));
  box-shadow: 0 2px 0 rgba($tinta, 0.06), $sombra-suave;
  transition:
    transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1),
    box-shadow 0.35s ease;

  // Renglones suaves de libreta
  background-image: repeating-linear-gradient(
    to bottom,
    transparent 0,
    transparent 31px,
    rgba($tinta, 0.05) 31px,
    rgba($tinta, 0.05) 32px
  );

  &--rosa { background-color: $rosa-nota; }
  &--lavanda { background-color: #ead3f5; }
  &--blanco { background-color: #fff; }

  &--interactiva:hover {
    transform: rotate(0deg) translateY(-6px);
    box-shadow: 0 2px 0 rgba($tinta, 0.06), 0 18px 40px rgba($morado-profundo, 0.18);
  }
}

.nota__cinta {
  position: absolute;
  top: -12px;
  left: 50%;
  width: 86px;
  height: 24px;
  transform: translateX(-50%) rotate(-3deg);
  background: rgba($lavanda, 0.75);
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba($tinta, 0.08);
}
</style>
