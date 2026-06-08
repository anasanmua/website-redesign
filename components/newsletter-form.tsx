'use client'

import { useState } from 'react'
import { Check, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!valid) {
      setStatus('error')
      return
    }
    setStatus('success')
    setEmail('')
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-primary/30 bg-secondary/60 p-5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="h-5 w-5" />
        </span>
        <div>
          <p className="font-heading font-bold text-foreground">
            ¡Te has suscrito!
          </p>
          <p className="text-sm text-muted-foreground">
            Recibirás nuestras novedades en tu correo.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3" noValidate>
      <label
        htmlFor="newsletter-email"
        className="block text-sm font-medium text-foreground"
      >
        Tu correo electrónico
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (status === 'error') setStatus('idle')
          }}
          placeholder="nombre@ejemplo.com"
          aria-invalid={status === 'error'}
          className="h-12 flex-1 rounded-full border border-input bg-card px-5 text-sm text-foreground outline-none ring-primary/30 transition-shadow placeholder:text-muted-foreground focus:ring-4"
        />
        <Button type="submit" className="h-12 rounded-full px-6">
          <Send className="mr-1 h-4 w-4" />
          Suscribirme
        </Button>
      </div>
      {status === 'error' && (
        <p className="text-sm text-destructive">
          Introduce un correo electrónico válido.
        </p>
      )}
      <p className="text-xs text-muted-foreground">
        Sin spam. Solo novedades del programa y nuevas actividades.
      </p>
    </form>
  )
}
