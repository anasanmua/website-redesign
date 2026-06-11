import Image from 'next/image'
import type { Metadata } from 'next'
import { Target, Eye, Heart, Sparkles } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { StatsBar } from '@/components/stats-bar'

export const metadata: Metadata = {
  title: '¿Quiénes somos? · Una Científica en tu Cole Andaluz',
  description:
    'Conoce el proyecto, su misión y al equipo de investigadoras que acercan la ciencia a los centros educativos de Andalucía.',
}

const values = [
  {
    icon: Target,
    title: 'Misión',
    text: 'Despertar la curiosidad científica del alumnado andaluz y mostrar que la ciencia es para todas y todos.',
  },
  {
    icon: Eye,
    title: 'Visión',
    text: 'Una generación con más vocaciones STEM y sin brechas de género en la investigación.',
  },
  {
    icon: Heart,
    title: 'Valores',
    text: 'Cercanía, rigor, igualdad y pasión por compartir el conocimiento.',
  },
]

export default function QuienesSomosPage() {
  return (
    <>
      <PageHero
        eyebrow="El proyecto"
        title="Investigadoras que inspiran nuevas vocaciones"
        description="«Una Científica en tu Cole Andaluz» nace para acercar la ciencia real a las aulas de la mano de quienes la hacen cada día."
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Nuestra historia"
              title="Ciencia con nombre de mujer, dentro del aula"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                El programa conecta a investigadoras de universidades y centros
                de investigación andaluces con colegios e institutos de toda la
                comunidad. Durante una jornada, las científicas comparten su
                trabajo, resuelven dudas y realizan experimentos en directo.
              </p>
              <p>
                El objetivo es doble: acercar el método científico al alumnado y
                ofrecer referentes femeninos que ayuden a romper los
                estereotipos que aún hoy alejan a muchas niñas de las carreras
                científicas y técnicas.
              </p>
              <p>
                Es una iniciativa sin ánimo de lucro, gratuita para los centros,
                impulsada junto a la Asociación de Mujeres Investigadoras y
                Tecnólogas (AMIT-Andalucía).
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border bg-secondary/40">
            <Image
              src="/assets/banner.png"
              alt="Ilustración de la mascota del proyecto frente a una pizarra"
              width={800}
              height={800}
              className="h-full w-full object-contain p-6"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-border bg-card p-7"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <value.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-4">
        <StatsBar />
      </div>

      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Sparkles className="h-7 w-7" />
        </span>
        <h2 className="mt-6 text-balance font-heading text-3xl font-extrabold text-foreground">
          ¿Quieres ser una de nuestras científicas?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Si investigas en Andalucía y te apetece compartir tu pasión por la
          ciencia con el alumnado, te estamos esperando.
        </p>
        <a
          href="/participa"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          Únete al equipo
        </a>
      </section>
    </>
  )
}
