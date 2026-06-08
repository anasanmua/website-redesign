import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-pretty text-base leading-relaxed text-muted-foreground md:text-lg',
            align === 'center' && 'max-w-2xl',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
