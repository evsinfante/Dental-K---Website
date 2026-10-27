// ============================================================
//  TODO EL TEXTO DEL SITIO VIVE AQUÍ.
//  Cuando llegue el contenido real, solo se edita este archivo.
//  Busca "TODO" para encontrar lo que falta por confirmar.
// ============================================================
import {
  mdiInstagram,
  mdiFacebook,
  mdiWhatsapp,
  mdiEmailOutline,
  mdiHumanChild,
  mdiCreation,
  mdiShieldCheckOutline,
  mdiTooth,
  mdiEmoticonHappyOutline,
  mdiAlertCircleOutline,
  mdiHandHeartOutline,
  mdiHeartOutline,
  mdiStarFourPointsOutline,
  mdiEyeOutline,
} from '@quasar/extras/mdi-v7';
import { fabTiktok } from '@quasar/extras/fontawesome-v6';

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const loremCorto = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

// ---------- Datos generales ----------
export const sitio = {
  nombre: 'Dental K',
  eslogan: 'Odontopediatría con cariño',
  whatsapp: '+528112449395',
  whatsappMensaje: 'Hola, me gustaría información para agendar una cita 🦷',
  telefono: '+52 811-244-9395', // TODO
  email: 'drakarlabelindahernandez@gmail.com', // TODO
  direccion: 'Barcelona #538 Valle de Apodaca 2do Sec, Apodaca, Nuevo Leon, Mexico.', // TODO
  mapaUrl: 'https://maps.app.goo.gl/SxVPYgT5ijz8DUc28?g_st=ic', 
  horario: [
    { dias: 'Lunes a viernes', horas: '10:00 – 19:00' }, // TODO
    { dias: 'Sábado', horas: '10:00 – 17:00' },
    { dias: 'Domingo', horas: 'Cerrado' },
  ],
  // TODO: pegar aquí el enlace de la página de reservas de Google Calendar.
  // Mientras esté vacío, la página "Agendar" muestra un aviso con botón de WhatsApp.
  bookingUrl: '',
};

export const enlaceWhatsApp = (mensaje: string = sitio.whatsappMensaje) =>
  `https://wa.me/${sitio.whatsapp}?text=${encodeURIComponent(mensaje)}`;

// ---------- Redes sociales ----------
export const redes = [
  { nombre: 'Instagram', icono: mdiInstagram, url: 'https://instagram.com/drakarlitabelinda' }, // TODO
  { nombre: 'Facebook', icono: mdiFacebook, url: 'https://facebook.com/Dra.KarlitaBelinda' }, // TODO
  { nombre: 'TikTok', icono: fabTiktok, url: 'https://tiktok.com/@dentalk' }, // TODO
  { nombre: 'WhatsApp', icono: mdiWhatsapp, url: enlaceWhatsApp() },
  { nombre: 'Correo', icono: mdiEmailOutline, url: `mailto:${sitio.email}` },
];

// ---------- Menú ----------
export const navegacion = [
  { label: 'Inicio', to: '/' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Agendar Cita', to: '/agendar' },
];

// ---------- Servicios ----------
export interface Servicio {
  id: string;
  nombre: string;
  descripcion: string;
  icono: string;
  precio: string;
}

export const servicios: Servicio[] = [
  {
    id: 'primera-visita',
    nombre: 'Primera visita',
    descripcion: lorem,
    icono: mdiHumanChild,
    precio: 'Desde $000 MXN', // TODO
  },
  {
    id: 'limpieza',
    nombre: 'Limpieza y flúor',
    descripcion: lorem,
    icono: mdiCreation,
    precio: 'Desde $000 MXN',
  },
  {
    id: 'selladores',
    nombre: 'Selladores',
    descripcion: lorem,
    icono: mdiShieldCheckOutline,
    precio: 'Desde $000 MXN',
  },
  {
    id: 'resinas',
    nombre: 'Resinas',
    descripcion: lorem,
    icono: mdiTooth,
    precio: 'Desde $000 MXN',
  },
  {
    id: 'ortopedia',
    nombre: 'Ortopedia temprana',
    descripcion: lorem,
    icono: mdiEmoticonHappyOutline,
    precio: 'Desde $000 MXN',
  },
  {
    id: 'urgencias',
    nombre: 'Urgencias',
    descripcion: lorem,
    icono: mdiAlertCircleOutline,
    precio: 'Consultar',
  },
];

// ---------- Inicio ----------
export const inicio = {
  hero: {
    etiqueta: 'Dentista para niños',
    tituloAntes: 'Aquí las visitas al dentista son',
    palabrasRotativas: ['divertidas', 'sin miedo', 'con cariño', 'sinceras'],
    subtitulo: lorem,
    botonPrincipal: 'Agenda tu cita',
    botonSecundario: 'Escríbenos',
  },
  valores: {
    etiqueta: '¿Por qué Dental K?',
    titulo: 'Como ir con una amiga',
    subtitulo: loremCorto,
    // Las 5 características de la propuesta creativa
    items: [
      { titulo: 'Empatía', texto: loremCorto, icono: mdiHandHeartOutline },
      { titulo: 'Simpatía', texto: loremCorto, icono: mdiEmoticonHappyOutline },
      { titulo: 'Confianza', texto: loremCorto, icono: mdiShieldCheckOutline },
      { titulo: 'Sinceridad', texto: loremCorto, icono: mdiEyeOutline },
      { titulo: 'Carisma', texto: loremCorto, icono: mdiStarFourPointsOutline },
    ],
  },
  cifras: [
    // TODO: cifras reales
    { valor: 1000, prefijo: '+', sufijo: '', texto: 'sonrisas felices' },
    { valor: 8, prefijo: '', sufijo: ' años', texto: 'de experiencia' },
    { valor: 100, prefijo: '', sufijo: '%', texto: 'trato con cariño' },
  ],
  serviciosPreview: {
    etiqueta: 'Servicios',
    titulo: 'Cuidamos cada sonrisa',
    subtitulo: loremCorto,
  },
  galeria: {
    etiqueta: 'Nuestro consultorio',
    titulo: 'Un lugar hecho para ellos',
    // TODO: reemplazar por fotos reales (src/assets/fotos/…)
    fotos: ['Consultorio', 'Sala de espera', 'Equipo', 'Pacientes felices'],
  },
  testimonios: {
    etiqueta: 'Lo que dicen las familias',
    titulo: 'Papás tranquilos, niños felices',
    items: [
      // TODO: testimonios reales (con permiso)
      { nombre: 'Mamá de Sofía', texto: lorem },
      { nombre: 'Papá de Mateo', texto: lorem },
      { nombre: 'Mamá de Valentina', texto: lorem },
    ],
  },
  cta: {
    titulo: '¿Listos para su próxima sonrisa?',
    texto: loremCorto,
    boton: 'Agenda tu cita',
  },
};

// ---------- Nosotros ----------
export const nosotros = {
  hero: {
    etiqueta: 'Nosotros',
    titulo: 'Hola, somos Dental K',
    subtitulo: loremCorto,
  },
  doctora: {
    nombre: 'Dra. Karla Belinda ', // TODO
    cargo: 'Odontopediatra',
    bio: [lorem, lorem],
  },
  filosofia: {
    etiqueta: 'Nuestra filosofía',
    cita: 'Queremos ser cercanos, sinceros y transparentes: como una amiga que cuida la sonrisa de tus hijos.',
    texto: lorem,
  },
  credenciales: {
    titulo: 'Preparación',
    items: [
      // TODO
      'Cirujano Dentista — Universidad Autonoma de Nuevo Leon',
      'Especialidad en Odontopediatría — Universidad',
      'Miembro de la Asociación Lorem Ipsum',
    ],
  },
  equipo: {
    etiqueta: 'El equipo',
    titulo: 'Las personas detrás de cada sonrisa',
    integrantes: [
      // TODO
      { nombre: 'Nombre Apellido', cargo: 'Asistente dental', icono: mdiHeartOutline },
      { nombre: 'Nombre Apellido', cargo: 'Recepción', icono: mdiHeartOutline },
      { nombre: 'Nombre Apellido', cargo: 'Higienista', icono: mdiHeartOutline },
    ],
  },
};

// ---------- Servicios (página) ----------
export const serviciosPagina = {
  hero: {
    etiqueta: 'Servicios',
    titulo: 'Todo lo que su sonrisa necesita',
    subtitulo: loremCorto,
  },
  preguntas: {
    etiqueta: 'Preguntas frecuentes',
    titulo: 'Lo que más nos preguntan',
    items: [
      { pregunta: '¿A qué edad debe ser la primera visita?', respuesta: lorem },
      { pregunta: '¿Qué hago si mi hijo le tiene miedo al dentista?', respuesta: lorem },
      { pregunta: '¿Puedo acompañar a mi hijo durante la consulta?', respuesta: lorem },
      { pregunta: '¿Cómo funciona el anticipo al agendar?', respuesta: lorem },
    ],
  },
};

// ---------- Agendar ----------
export const agendar = {
  hero: {
    etiqueta: 'Agendar cita',
    titulo: 'Reserva en un minuto',
    subtitulo: loremCorto,
  },
  pasos: [
    { titulo: 'Elige el servicio', texto: loremCorto },
    { titulo: 'Escoge día y hora', texto: loremCorto },
    { titulo: 'Paga tu anticipo', texto: loremCorto },
    { titulo: '¡Listo!', texto: loremCorto },
  ],
  sinCalendario: {
    titulo: 'Muy pronto podrás agendar aquí',
    texto: 'Mientras tanto, escríbenos por WhatsApp y con gusto te damos una cita.',
  },
  politicas: [
    { titulo: 'Anticipo', texto: lorem }, // TODO: monto y condiciones
    { titulo: 'Cancelaciones', texto: lorem }, // TODO
    { titulo: 'Para tu primera visita', texto: lorem },
  ],
};
