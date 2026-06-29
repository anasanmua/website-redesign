import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, CalendarDays } from 'lucide-react'
import { formatDate, cleanText } from '@/components/visita-card'
import { visitas, getVisita } from '@/lib/visitas-data'

export function generateStaticParams() {
  return visitas.map((v) => ({ slug: v.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const visita = getVisita(slug)
  if (!visita) return { title: 'Visita no encontrada' }
  return {
    title: `${visita.title} · Una Científica en tu Cole Andaluz`,
    description: cleanText(visita.excerpt),
  }
}

export default async function VisitaPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const visita = getVisita(slug)
  if (!visita) notFound()

  const index = visitas.findIndex((v) => v.slug === slug)
  const prev = visitas[index + 1]
  const next = visitas[index - 1]
  const [cover, ...gallery] = visita.images

  return (
    <article>
      {/* Cabecera */}
      <header className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
          <Link
            href="/actividades"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:opacity-80"
          >
            <ArrowLeft className="h-4 w-4" />
            Todas las actividades
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            {visita.categories.map((cat) => (
              <span
                key={cat}
                className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
              >
                {cat}
              </span>
            ))}
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" />
              {formatDate(visita.date)}
            </span>
          </div>
          <h1 className="mt-4 text-balance font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
            {visita.title}
          </h1>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        {/* Imagen principal */}
        {cover && (
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-secondary">
            <Image
              src={cover || "/placeholder.svg"}
              alt={visita.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        )}

        {/* Contenido */}
        <div className="mt-8 space-y-4">
          {visita.paragraphs.map((p, i) => (
            <p key={i} className="text-pretty leading-relaxed text-foreground/90">
              {p}
            </p>
          ))}
        </div>

        {/* Galería */}
        {gallery.length > 0 && (
          <div className="mt-10">
            <h2 className="font-heading text-lg font-bold text-foreground">
              Galería de la visita
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {gallery.map((img, i) => (
                <div
                  key={img}
                  className="relative aspect-square overflow-hidden rounded-xl bg-secondary"
                >
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`${visita.title} — imagen ${i + 2}`}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Navegación prev/next */}
      <nav className="border-t border-border">
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 px-4 py-10 sm:grid-cols-2 sm:px-6">
          {prev ? (
            <Link
              href={`/actividades/${prev.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                <ArrowLeft className="h-3.5 w-3.5" />
                Anterior
              </span>
              <span className="mt-2 line-clamp-2 font-heading text-sm font-bold text-foreground group-hover:text-primary">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              href={`/actividades/${next.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-card p-5 text-right transition-colors hover:border-primary/40 sm:items-end"
            >
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                Siguiente
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
              <span className="mt-2 line-clamp-2 font-heading text-sm font-bold text-foreground group-hover:text-primary">
                {next.title}
              </span>
            </Link>
          )}
        </div>
      </nav>
    </article>
  )
}
