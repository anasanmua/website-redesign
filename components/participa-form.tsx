'use client'

import { useState } from 'react'
import { Check, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

const CONTACT_EMAIL = 'proyecto@cientificacoleandaluz.es'

const roles = [
  'Profesorado / centro educativo',
  'Familia / AMPA',
  'Investigadora / científica',
  'Otro',
]

export function ParticipaForm() {
  const [submitted, setSubmitted] = useState(false)
  const [mailtoHref, setMailtoHref] = useState(`mailto:${CONTACT_EMAIL}`)
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const required = ['name', 'email', 'role', 'message']
    const next: Record<string, boolean> = {}
    required.forEach((field) => {
      const value = (data.get(field) as string) ?? ''
      if (!value.trim()) next[field] = true
    })
    const email = (data.get('email') as string) ?? ''
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = true

    setErrors(next)
    if (Object.keys(next).length === 0) {
      const name = (data.get('name') as string) ?? ''
      const role = (data.get('role') as string) ?? ''
      const center = (data.get('center') as string) ?? ''
      const message = (data.get('message') as string) ?? ''

      const subject = `Solicitud de participación – ${name}`
      const body = [
        `Nombre: ${name}`,
        `Correo: ${email}`,
        `Perfil: ${role}`,
        center.trim() ? `Centro / organización: ${center}` : null,
        '',
        'Mensaje:',
        message,
      ]
        .filter((line) => line !== null)
        .join('\n')

      const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`

      setMailtoHref(href)

      // Intento de abrir el gestor de correo. En algunos navegadores/entornos
      // (como vistas previas dentro de un iframe) puede bloquearse, por eso
      // en la pantalla de confirmación mostramos también un enlace directo.
      const opener = window.open(href, '_blank')
      if (!opener) {
        const link = document.createElement('a')
        link.href = href
        link.rel = 'noopener noreferrer'
        document.body.appendChild(link)
        link.click()
        link.remove()
      }

      setSubmitted(true)
      form.reset()
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-primary/30 bg-secondary/50 p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="h-7 w-7" />
        </span>
        <h2 className="font-heading text-2xl font-bold text-foreground">
          ¡Gracias por tu interés!
        </h2>
        <p className="max-w-md text-muted-foreground">
          Hemos preparado tu mensaje para{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-medium text-primary underline-offset-2 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
          . Si tu gestor de correo no se ha abierto solo, pulsa el botón de abajo
          para abrirlo y enviarlo.
        </p>
        <div className="flex flex-col gap-2 sm:flex-row">
          <a
            href={mailtoHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            <Send className="h-4 w-4" />
            Abrir correo y enviar
          </a>
          <Button
            type="button"
            variant="outline"
            className="rounded-full"
            onClick={() => setSubmitted(false)}
          >
            Enviar otra solicitud
          </Button>
        </div>
      </div>
    )
  }

  const fieldClass = (field: string) =>
    `mt-1.5 w-full rounded-xl border bg-card px-4 py-3 text-sm text-foreground outline-none ring-primary/30 transition-shadow placeholder:text-muted-foreground focus:ring-4 ${
      errors[field] ? 'border-destructive' : 'border-input'
    }`

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Nombre y apellidos
          </label>
          <input id="name" name="name" className={fieldClass('name')} placeholder="Tu nombre" />
          {errors.name && (
            <p className="mt-1 text-xs text-destructive">Indica tu nombre.</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Correo electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={fieldClass('email')}
            placeholder="nombre@ejemplo.com"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-destructive">
              Introduce un correo válido.
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="role" className="text-sm font-medium text-foreground">
            ¿Quién eres?
          </label>
          <select id="role" name="role" defaultValue="" className={fieldClass('role')}>
            <option value="" disabled>
              Selecciona una opción
            </option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
          {errors.role && (
            <p className="mt-1 text-xs text-destructive">Selecciona una opción.</p>
          )}
        </div>
        <div>
          <label htmlFor="center" className="text-sm font-medium text-foreground">
            Centro / organización{' '}
            <span className="text-muted-foreground">(opcional)</span>
          </label>
          <input
            id="center"
            name="center"
            className={fieldClass('center')}
            placeholder="Nombre del centro"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Cuéntanos
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={fieldClass('message')}
          placeholder="¿En qué te gustaría participar?"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-destructive">Escribe un mensaje.</p>
        )}
      </div>

      <Button type="submit" size="lg" className="rounded-full">
        <Send className="mr-1.5 h-4 w-4" />
        Enviar solicitud
      </Button>
    </form>
  )
}
