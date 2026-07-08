import type { Metadata } from 'next'
import { Download as DownloadIcon, FileText, FileImage } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { downloads } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Descargas · Una Científica en tu Cole Andaluz',
  description:
    'Guías, cuadernos de experimentos, carteles y fichas educativas listos para descargar y usar en el aula.',
}

export default function DescargasPage() {
  return (
    <>
      <PageHero
        eyebrow="Recursos"
        title="Materiales para el aula y para casa"
        description="Descarga guías, experimentos y recursos gráficos del proyecto. Todo gratuito y listo para imprimir o proyectar."
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <ul className="grid gap-5 sm:grid-cols-2">
          {downloads.map((file) => {
            const Icon = file.type === 'PNG' ? FileImage : FileText
            return (
              <li key={file.title}>
                <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                      {file.type} · {file.size}
                    </span>
                  </div>
                  <h2 className="mt-5 font-heading text-lg font-bold text-foreground">
                    {file.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {file.description}
                  </p>
                  {file.href ? (
                    <a
                      href={file.href}
                      download
                      className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                    >
                      <DownloadIcon className="h-4 w-4" />
                      Descargar
                    </a>
                  ) : (
                    <span className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground">
                      Próximamente
                    </span>
                  )}
                </article>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}
