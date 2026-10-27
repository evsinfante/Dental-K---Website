// Tipos para la directiva global v-reveal (src/boot/reveal.ts)
import type { Directive } from 'vue';

declare module 'vue' {
  interface ComponentCustomProperties {
    vReveal: Directive<HTMLElement, number | undefined>;
  }
}

export {};
