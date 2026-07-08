import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'

export const metadata: Metadata = {
  title: 'Recursos Didácticos · Una Científica en tu Cole Andaluz',
  description:
    'Recursos para seguir profundizando sobre la perspectiva de género en la ciencia y descubrir a las mujeres que han transformado el conocimiento.',
}

export default function RecursosDidacticosPage() {
  return (
    <>
      <PageHero
        eyebrow="Recursos didácticos"
        title="Sigue profundizando sobre la perspectiva de género en la ciencia"
        description="Descubre a través de diversos recursos didácticos a estas mujeres que han dedicado su vida y su talento a áreas de conocimiento sistemáticamente masculinizadas a lo largo de la historia."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="Perspectiva de género"
              title="Desterrar mitos desde la infancia"
              description="Con esfuerzo conjunto, constancia y motivación lograremos que, ya desde la infancia, tanto las niñas como los niños vivan con interés e ilusión su acercamiento a las ciencias, desterrando mitos y falsas creencias."
            />
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
              <h3 className="flex items-center gap-2 font-heading text-lg font-bold text-foreground">
                <Sparkles className="h-5 w-5 text-primary" />
                {'¿Qué es el efecto Matilda?'}
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">
                  #NoMoreMatildas
                </span>{' '}
                es una campaña de la Asociación de Mujeres Investigadoras y
                Tecnólogas (AMIT) que denuncia las consecuencias del llamado
                efecto Matilda, que pone de manifiesto no solo la discriminación
                sufrida por las mujeres, sino también la negación de las
                aportaciones, descubrimientos y el trabajo de muchas mujeres
                científicas, atribuyendo su autoría a compañeros de
                investigación.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="overflow-hidden rounded-3xl border border-border bg-card p-4 sm:p-6">
              <Image
                src="/assets/no-more-matildas.png"
                alt="Cartel de la campaña #NoMoreMatildas de AMIT, con una niña leyendo rodeada de órbitas atómicas"
                width={489}
                height={485}
                className="h-auto w-full max-w-sm rounded-2xl"
              />
            </div>
            <a
              href="https://www.nomorematildas.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Descubre la campaña #NoMoreMatildas
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
