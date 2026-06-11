import type { Metadata } from 'next'
import ActividadesClient from './actividades-client'

export const metadata: Metadata = {
  title: 'Actividades · Una Científica en tu Cole Andaluz',
  description:
    'Todas las visitas del programa a colegios e institutos de Andalucía, filtrables por nivel educativo.',
}

export default function ActividadesPage() {
  return <ActividadesClient />
}
