import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, GraduationCap, Lightbulb, Users } from 'lucide-react'
import { Hero } from '@/components/hero'
import { StatsBar } from '@/components/stats-bar'
import { ActionCards } from '@/components/action-cards'
import { VisitaCard } from '@/components/visita-card'
import { SectionHeading } from '@/components/section-heading'
import { NewsletterSection } from '@/components/newsletter-section'
import { visitas } from '@/lib/visitas-data'

const pillars = [
  {
    icon: Users,
    title: 'Referentes cercanos',
    text: 'El alumnado conoce a investigadoras reales que les sirven de modelo y rompen estereotipos sobre quién hace ciencia.',
  },
  {
    icon: Lightbulb,
    title: 'Ciencia que se toca',
    text: 'Experimentos y dinámicas prácticas que convierten conceptos abstractos en experiencias memorables.',
  },
  {
    icon: GraduationCap,
    title: 'Gratuito para el centro',
    text: 'Llevamos el programa a colegios e institutos públicos y concertados de toda Andalucía sin coste.',
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />

      {/* El programa */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative order-last md:order-first">
            <div className="overflow-hidden rounded-3xl border border-border bg-secondary/40">
              <Image
                src="/assets/banner-no-text.png"
                alt="Una científica explicando un experimento frente a la pizarra"
                width={900}
                height={485}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="El programa"
              title="Acercamos la ciencia al aula andaluza"
              description="«Una Científica en tu Cole Andaluz» conecta a investigadoras con centros educativos para despertar la curiosidad del alumnado y fomentar las vocaciones científicas, con especial atención a las niñas."
            />
            <ul className="mt-8 space-y-5">
              {pillars.map((pillar) => (
                <li key={pillar.title} className="flex gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <pillar.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {pillar.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Tarjetas de acción */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            align="center"
            eyebrow="Empieza aquí"
            title="¿Qué quieres hacer?"
            description="Cuatro caminos para acercarte al proyecto, tanto si eres docente, familia o investigadora."
            className="mx-auto mb-12"
          />
          <ActionCards />
        </div>
      </section>

      {/* Actividades recientes */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Actividades"
            title="Últimas visitas a los centros"
            description="Un vistazo a las jornadas más recientes del programa por toda Andalucía."
          />
          <Link
            href="/actividades"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            Ver todas
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visitas.slice(0, 3).map((visita) => (
            <VisitaCard key={visita.slug} visita={visita} />
          ))}
        </div>
      </section>

      <div className="pb-20">
        <NewsletterSection />
      </div>
    </>
  )
}
