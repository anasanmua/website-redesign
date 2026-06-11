'use client'

import { useState } from 'react'
import { PageHero } from '@/components/page-hero'
import { ActivityCard } from '@/components/activity-card'
import { activities } from '@/lib/site-data'

const levels = ['Todas', 'Educación Primaria', 'Educación Secundaria']

export default function ActividadesClient() {
  const [filter, setFilter] = useState('Todas')

  const filtered =
    filter === 'Todas'
      ? activities
      : activities.filter((a) => a.level === filter)

  return (
    <>
      <PageHero
        eyebrow="Actividades"
        title="Las visitas del programa, una a una"
        description="Repasa las jornadas que hemos vivido en colegios e institutos de toda Andalucía y descubre qué hicimos en cada aula."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filtrar por nivel">
          {levels.map((level) => (
            <button
              key={level}
              type="button"
              onClick={() => setFilter(level)}
              aria-pressed={filter === level}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                filter === level
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border bg-card text-foreground hover:border-primary/40 hover:text-primary'
              }`}
            >
              {level}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((activity) => (
            <ActivityCard key={activity.title} activity={activity} />
          ))}
        </div>
      </section>
    </>
  )
}
