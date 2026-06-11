import type { Metadata } from 'next'
import { GraduationCap, Users, FlaskConical } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ParticipaForm } from '@/components/participa-form'
import { siteConfig } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Participa · Una Científica en tu Cole Andaluz',
  description:
    'Solicita una visita para tu centro, súmate como familia o únete como investigadora al programa.',
}

const ways = [
  {
    icon: GraduationCap,
    title: 'Si eres docente',
    text: 'Solicita una visita gratuita para tu colegio o instituto y coordina la jornada con nuestro equipo.',
  },
  {
    icon: Users,
    title: 'Si eres familia',
    text: 'Propón el programa al centro de tus hijas e hijos y ayúdanos a difundir la iniciativa.',
  },
  {
    icon: FlaskConical,
    title: 'Si eres investigadora',
    text: 'Únete a la red de científicas y comparte tu trabajo con el alumnado andaluz.',
  },
]

export default function ParticipaPage() {
  return (
    <>
      <PageHero
        eyebrow="Participa"
        title="Sumar es muy fácil"
        description="Elige cómo quieres formar parte del proyecto y escríbenos. Respondemos a todas las solicitudes."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {ways.map((way) => (
            <div
              key={way.title}
              className="rounded-3xl border border-border bg-card p-7"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <way.icon className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-heading text-lg font-bold text-foreground">
                {way.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {way.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
        <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
          <h2 className="font-heading text-2xl font-extrabold text-foreground">
            Escríbenos
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Completa el formulario o escríbenos a{' '}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-semibold text-primary hover:underline"
            >
              {siteConfig.email}
            </a>
            .
          </p>
          <div className="mt-8">
            <ParticipaForm />
          </div>
        </div>
      </section>
    </>
  )
}
