# Dental K — Website

Quasar (Vue 3 + TypeScript + Vite) site for Dental K, a pediatric dental office in Mexico.
All visible text is in Spanish. Placeholder content uses lorem ipsum.

## Run it

Requires Node 20, 22 or 24.

```bash
npm install        # also runs "quasar prepare"
npm run dev        # opens http://localhost:9000
npm run build      # production build in dist/spa
```

If you don't have the Quasar CLI globally, you don't need it: the scripts above use the local copy.

## Where to edit things

| What | Where |
|---|---|
| **All text, links, phone, WhatsApp, hours, services, FAQ** | `src/content/es.ts` (search for `TODO`) |
| Google Calendar booking link | `src/content/es.ts` → `sitio.bookingUrl` |
| Colors | `src/css/quasar.variables.scss` (+ `framework.config.brand` in `quasar.config.ts`) |
| Global styles, grid background, animations | `src/css/app.scss` |
| Header, tabs, mobile menu | `src/layouts/MainLayout.vue` |
| Footer and social icons | `src/components/SiteFooter.vue` |
| Pages | `src/pages/` |
| Logos | `src/assets/` |
| Real photos (when they arrive) | `src/assets/fotos/` then swap `<PhotoPlaceholder>` for `<q-img src="~assets/fotos/x.webp" />` |

## Project structure

```
src/
├─ assets/            logo-linea.png, logo-linea-blanco.png, logo-circulo.png, fotos/
├─ boot/reveal.ts     v-reveal directive (fade-up on scroll)
├─ content/es.ts      every piece of site text
├─ components/
│   ├─ SiteFooter.vue        footer with socials, hours, contact
│   ├─ WhatsAppFab.vue       floating WhatsApp button
│   ├─ BookingEmbed.vue      Google Calendar iframe (or WhatsApp fallback)
│   ├─ ServiceCard.vue       service card
│   ├─ PaperNote.vue         tilted "paper note" card from the proposal
│   ├─ PageHero.vue          header for inner pages
│   ├─ SectionDivider.vue    smile-arc divider that draws itself
│   ├─ DoodleDecor.vue       floating hand-drawn doodles
│   ├─ AnimatedCounter.vue   count-up numbers
│   └─ PhotoPlaceholder.vue  stand-in for real photos
├─ layouts/MainLayout.vue
└─ pages/  InicioPage, NosotrosPage, ServiciosPage, AgendarPage,
           AvisoPrivacidadPage, ErrorNotFound
```

## Dynamic touches included

- Hero: logo pops in and floats, title word rotates (*divertidas → sin miedo → con cariño → sinceras*), floating stickers and doodles
- Sections fade up as you scroll (`v-reveal`, respects "reduce motion")
- Smile-arc dividers draw themselves when visible
- Paper-note cards straighten and lift on hover
- Count-up stats, autoplay testimonial carousel, photo lightbox on Nosotros
- Header turns frosted on scroll; page transitions
- Service "Agendar" buttons pass the service to `/agendar?servicio=…`, which shows it and pre-fills the WhatsApp message

## Booking

`BookingEmbed.vue` shows the Google Calendar booking page as an iframe when `sitio.bookingUrl` is set.
While it's empty, it shows a "coming soon" card with a WhatsApp button, so the site is demo-ready now.

To get the URL later: Google Calendar → the appointment schedule → **Share** → **Website embed** → copy the `src` from the iframe code.

## Deploy a preview

Both work from a GitHub repo with zero config (SPA redirects are included):

- **Netlify**: build `npm run build`, publish `dist/spa` (`public/_redirects` handles routes)
- **Vercel**: `vercel.json` is included

## Still needed from the client

- Social handles, WhatsApp number, email, phone, address, hours
- Real photos (with parents' permission for kids' faces), bio, services and prices
- Logo as SVG (enables the "drawn smile" hero animation)
- Privacy notice text (Aviso de Privacidad, LFPDPPP)
- Google Workspace + Stripe for paid booking deposits
