import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, CalendarDays } from 'lucide-react'
import type { Visita } from '@/lib/visitas-data'

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-ES', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

// Quita emojis y hashtags sueltos para un extracto editorial limpio
export function cleanText(text: string) {
  return text
    .replace(
      /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2190}-\u{21FF}\u{2B00}-\u{2BFF}\u{FE00}-\u{FE0F}\u{1F1E6}-\u{1F1FF}]/gu,
      '',
    )
    .replace(/\s{2,}/g, ' ')
    .trim()
}

export function VisitaCard({ visita }: { visita: Visita }) {
  const category = visita.categories[0] ?? 'Actividad'
  const cover = visita.images[0]

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      <Link
        href={`/actividades/${visita.slug}`}
        className="relative block aspect-[4/3] overflow-hidden bg-secondary"
      >
        {cover ? (
          <Image
            src={cover || "/placeholder.svg"}
            alt={visita.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            Una Científica en tu Cole
          </div>
        )}
        <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
          {category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          <CalendarDays className="h-3.5 w-3.5" />
          {formatDate(visita.date)}
        </span>
        <h3 className="mt-2 text-balance font-heading text-lg font-bold leading-snug text-foreground">
          <Link
            href={`/actividades/${visita.slug}`}
            className="transition-colors group-hover:text-primary"
          >
            {visita.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {cleanText(visita.excerpt)}
        </p>
        <Link
          href={`/actividades/${visita.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all group-hover:gap-1.5"
        >
          Ver la visita
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  )
}
