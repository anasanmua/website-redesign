import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* decorative chalkboard texture dots */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium ring-1 ring-inset ring-primary-foreground/20">
            <Sparkles className="h-4 w-4 text-accent" />
            Divulgación científica en las aulas andaluzas
          </span>
          <h1 className="mt-6 text-balance font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Una Científica en tu Cole Andaluz
          </h1>
          <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-primary-foreground/85">
            Investigadoras visitan los centros educativos para acercar la
            ciencia al alumnado y despertar vocaciones STEM, especialmente entre
            las niñas.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/participa"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              Solicita una visita
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/quienes-somos"
              className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-6 py-3 font-semibold text-primary-foreground ring-1 ring-inset ring-primary-foreground/25 transition-colors hover:bg-primary-foreground/20"
            >
              Conoce el proyecto
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="relative aspect-square w-full max-w-md">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-primary-foreground/10"
            />
            <Image
              src="/assets/banner-no-text.png"
              alt="Ilustración de una científica con bata sosteniendo un matraz frente a una pizarra con el mapa de Andalucía"
              fill
              priority
              className="object-contain p-4"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
