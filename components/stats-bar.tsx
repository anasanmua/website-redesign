import { stats } from '@/lib/site-data'

export function StatsBar() {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-4 sm:px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-1 py-8 text-center"
          >
            <span className="font-heading text-4xl font-extrabold text-primary sm:text-5xl">
              {stat.value}
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
