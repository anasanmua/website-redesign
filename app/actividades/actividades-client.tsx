'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { VisitaCard, cleanText } from '@/components/visita-card'
import { visitas, visitaYears } from '@/lib/visitas-data'

const PAGE_SIZE = 12

const categories = [
  'Todas',
  ...Array.from(new Set(visitas.flatMap((v) => v.categories))).filter(Boolean),
]

export default function ActividadesClient() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('Todas')
  const [year, setYear] = useState<'Todos' | number>('Todos')
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const filtered = useMemo(() => {
    const q = cleanText(query).toLowerCase()
    return visitas.filter((v) => {
      const matchesCategory =
        category === 'Todas' || v.categories.includes(category)
      const matchesYear =
        year === 'Todos' || Number(v.date.slice(0, 4)) === year
      const matchesQuery =
        !q ||
        cleanText(v.title).toLowerCase().includes(q) ||
        cleanText(v.excerpt).toLowerCase().includes(q)
      return matchesCategory && matchesYear && matchesQuery
    })
  }, [query, category, year])

  const visible = filtered.slice(0, visibleCount)

  function resetPaging<T>(setter: (v: T) => void, value: T) {
    setter(value)
    setVisibleCount(PAGE_SIZE)
  }

  return (
    <>
      <PageHero
        eyebrow="Actividades"
        title="Las visitas del programa, una a una"
        description="Repasa las jornadas que hemos vivido en colegios e institutos de toda Andalucía y descubre qué hicimos en cada aula."
      />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        {/* Buscador */}
        <div className="relative max-w-md">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(e) => resetPaging(setQuery, e.target.value)}
            placeholder="Buscar por centro o palabra clave…"
            aria-label="Buscar visitas"
            className="w-full rounded-full border border-input bg-card py-3 pl-10 pr-4 text-sm text-foreground outline-none ring-primary/30 transition-shadow placeholder:text-muted-foreground focus:ring-4"
          />
        </div>

        {/* Filtros */}
        <div className="mt-6 flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoría">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => resetPaging(setCategory, cat)}
                aria-pressed={category === cat}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  category === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border bg-card text-foreground hover:border-primary/40 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="year" className="text-sm font-medium text-muted-foreground">
              Año
            </label>
            <select
              id="year"
              value={String(year)}
              onChange={(e) =>
                resetPaging(
                  setYear,
                  e.target.value === 'Todos' ? 'Todos' : Number(e.target.value),
                )
              }
              className="rounded-full border border-input bg-card px-4 py-2 text-sm font-semibold text-foreground outline-none ring-primary/30 focus:ring-4"
            >
              <option value="Todos">Todos</option>
              {visitaYears.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Resultados */}
        <p className="mt-6 text-sm text-muted-foreground">
          {filtered.length}{' '}
          {filtered.length === 1 ? 'visita encontrada' : 'visitas encontradas'}
        </p>

        {visible.length > 0 ? (
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((visita) => (
              <VisitaCard key={visita.slug} visita={visita} />
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-2xl border border-dashed border-border bg-card p-12 text-center">
            <p className="font-heading text-lg font-bold text-foreground">
              No encontramos visitas con esos filtros
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Prueba con otra palabra clave, categoría o año.
            </p>
          </div>
        )}

        {visibleCount < filtered.length && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Ver más visitas
            </button>
          </div>
        )}
      </section>
    </>
  )
}
