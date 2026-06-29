export const siteConfig = {
  name: 'Una Científica en tu Cole Andaluz',
  shortName: 'Científica en tu Cole',
  email: 'proyecto@cientificacoleandaluz.es',
  youtube: 'https://www.youtube.com/',
  description:
    'Investigadoras andaluzas visitan los centros educativos para acercar la ciencia al alumnado y despertar vocaciones STEM, especialmente entre las niñas.',
}

export const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/quienes-somos', label: '¿Quiénes somos?' },
  { href: '/actividades', label: 'Actividades' },
  { href: '/descargas', label: 'Descargas' },
  { href: '/participa', label: 'Participa' },
]

export type ActionCard = {
  title: string
  description: string
  href: string
  icon: 'school' | 'info' | 'hand' | 'video'
  cta: string
}

export const actionCards: ActionCard[] = [
  {
    title: 'Colegios participantes',
    description:
      'Consulta el mapa de centros andaluces que ya han recibido la visita de una científica.',
    href: '/actividades',
    icon: 'school',
    cta: 'Ver colegios',
  },
  {
    title: '¡Infórmate!',
    description:
      'Conoce en qué consiste el programa, sus objetivos y cómo trabajamos en el aula.',
    href: '/quienes-somos',
    icon: 'info',
    cta: 'Saber más',
  },
  {
    title: 'Cómo participar',
    description:
      'Eres docente, familia o investigadora y quieres sumarte. Te contamos los pasos.',
    href: '/participa',
    icon: 'hand',
    cta: 'Participar',
  },
  {
    title: 'El canal de Lola',
    description:
      'Vídeos, experimentos y recursos divulgativos para seguir aprendiendo en casa.',
    href: 'https://www.youtube.com/',
    icon: 'video',
    cta: 'Ir al canal',
  },
]

export type Download = {
  title: string
  description: string
  type: string
  size: string
}

export const downloads: Download[] = [
  {
    title: 'Guía del programa para centros',
    description:
      'Todo lo que necesita saber el profesorado antes de solicitar una visita.',
    type: 'PDF',
    size: '1,8 MB',
  },
  {
    title: 'Cuaderno de experimentos para el aula',
    description:
      'Actividades prácticas listas para realizar con material sencillo.',
    type: 'PDF',
    size: '3,2 MB',
  },
  {
    title: 'Cartel del proyecto',
    description: 'Cartel imprimible para anunciar la visita en el centro.',
    type: 'PNG',
    size: '0,9 MB',
  },
  {
    title: 'Fichas «Mujeres en la ciencia»',
    description:
      'Biografías ilustradas de científicas andaluzas e internacionales.',
    type: 'PDF',
    size: '2,4 MB',
  },
]

export const stats = [
  { value: '120+', label: 'Centros visitados' },
  { value: '9.500', label: 'Estudiantes' },
  { value: '40', label: 'Investigadoras' },
  { value: '8', label: 'Provincias' },
]
