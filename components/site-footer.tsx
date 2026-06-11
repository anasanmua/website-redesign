import Image from 'next/image'
import Link from 'next/link'
import { Mail, Play } from 'lucide-react'
import { Logo } from '@/components/logo'
import { navLinks, siteConfig } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90"
                aria-label="Enviar correo"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.youtube}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90"
                aria-label="Canal de YouTube"
              >
                <Play className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground">
              Contacto
            </h3>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-4 block break-words text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {siteConfig.email}
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              Un proyecto impulsado por
            </p>
            <div className="mt-2 inline-flex items-center rounded-xl bg-card px-3 py-2 ring-1 ring-border">
              <Image
                src="/assets/amit.png"
                alt="AMIT Andalucía — Asociación de Mujeres Investigadoras y Tecnólogas"
                width={140}
                height={40}
                className="h-9 w-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-center text-xs text-muted-foreground md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
            reservados.
          </p>
          <p>Diseñado con criterio educativo · AMIT Andalucía</p>
        </div>
      </div>
    </footer>
  )
}
