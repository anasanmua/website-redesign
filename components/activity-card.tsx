import Link from 'next/link'
import { ArrowUpRight, CalendarDays, GraduationCap } from 'lucide-react'
import type { Activity } from '@/lib/site-data'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-ES', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

export function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
        <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-secondary-foreground">
          <GraduationCap className="h-3.5 w-3.5" />
          {activity.level}
        </span>
      </div>
      <h3 className="mt-4 text-balance font-heading text-lg font-bold leading-snug text-foreground">
        {activity.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {activity.excerpt}
      </p>
      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          <CalendarDays className="h-3.5 w-3.5" />
          {formatDate(activity.date)}
        </span>
        <Link
          href="/actividades"
          className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:gap-1.5"
        >
          Leer más
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  )
}
