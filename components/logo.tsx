import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  variant = 'dark',
}: {
  className?: string
  variant?: 'dark' | 'light'
}) {
  return (
    <Link
      href="/"
      className={cn('flex items-center gap-3', className)}
      aria-label="Una Científica en tu Cole Andaluz - Inicio"
    >
      <span className="relative block h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-card ring-1 ring-border md:h-12 md:w-12">
        <Image
          src="/assets/icon-square.png"
          alt=""
          fill
          sizes="48px"
          className="object-contain p-1"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-heading text-sm font-extrabold uppercase tracking-tight md:text-base',
            variant === 'light' ? 'text-primary-foreground' : 'text-foreground',
          )}
        >
          Una Científica
        </span>
        <span
          className={cn(
            'font-heading text-[0.7rem] font-semibold uppercase tracking-[0.18em] md:text-xs',
            variant === 'light'
              ? 'text-primary-foreground/80'
              : 'text-primary',
          )}
        >
          en tu Cole Andaluz
        </span>
      </span>
    </Link>
  )
}
