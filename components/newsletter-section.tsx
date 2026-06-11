import { NewsletterForm } from '@/components/newsletter-form'
import { SectionHeading } from '@/components/section-heading'

export function NewsletterSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="grid items-center gap-8 rounded-3xl border border-border bg-secondary/40 p-8 md:grid-cols-2 md:p-12">
        <SectionHeading
          eyebrow="Boletín"
          title="No te pierdas ninguna visita"
          description="Suscríbete y recibe las próximas actividades, recursos para el aula y novedades del proyecto directamente en tu correo."
        />
        <NewsletterForm />
      </div>
    </section>
  )
}
