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

export type Activity = {
  title: string
  excerpt: string
  date: string
  author: string
  level: string
}

export const activities: Activity[] = [
  {
    title: 'Visita al «Colegio Beaterio Santísima Trinidad»',
    excerpt:
      'Descubriendo los colores de la naturaleza en el cole: una jornada para explorar la luz y los pigmentos con el alumnado de primaria.',
    date: '2025-06-20',
    author: 'Álvaro V. G.',
    level: 'Educación Primaria',
  },
  {
    title: 'Visita al CEIP «Pío XII»',
    excerpt:
      'Celebramos el Día Internacional de la Luz con experimentos de óptica y mucha ciencia en directo dentro del aula.',
    date: '2025-05-16',
    author: 'Álvaro V. G.',
    level: 'Educación Primaria',
  },
  {
    title: 'Visita al CC «Academia Santa Teresa»',
    excerpt:
      '¡Qué gran día de ciencia vivimos! El alumnado se convirtió en investigador por un día con dinámicas prácticas.',
    date: '2025-05-07',
    author: 'Álvaro V. G.',
    level: 'Educación Secundaria',
  },
  {
    title: 'Visita al CEIP «Ntra. Sra. de la Capilla»',
    excerpt:
      'Las investigadoras Marta Peña, María José Ayora y Ana Domínguez compartieron su trabajo y resolvieron mil preguntas.',
    date: '2025-04-08',
    author: 'Álvaro V. G.',
    level: 'Educación Primaria',
  },
  {
    title: 'Visita al IES «Las Lagunas»',
    excerpt:
      'Charla sobre química en la vida cotidiana y un taller donde el alumnado preparó sus propios indicadores de pH.',
    date: '2025-03-19',
    author: 'Álvaro V. G.',
    level: 'Educación Secundaria',
  },
  {
    title: 'Visita al CEIP «Federico García Lorca»',
    excerpt:
      'Una mañana dedicada a la biología: observamos células al microscopio y hablamos de la biodiversidad andaluza.',
    date: '2025-02-27',
    author: 'Álvaro V. G.',
    level: 'Educación Primaria',
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
