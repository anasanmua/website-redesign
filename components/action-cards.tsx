import Link from 'next/link'
import { ArrowRight, Info, MapPin, PlayCircle, HandHeart } from 'lucide-react'
import { actionCards, type ActionCard } from '@/lib/site-data'

const iconMap = {
  school: MapPin,
  info: Info,
  hand: HandHeart,
  video: PlayCircle,
}

function isExternal(href: string) {
  return href.startsWith('http')
}

function Card({ card }: { card: ActionCard }) {
  const Icon = iconMap[card.icon]
  const external = isExternal(card.href)

  const inner = (
    <>
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-7 w-7" />
      </span>
      <h3 className="mt-5 font-heading text-xl font-bold text-foreground">
        {card.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {card.description}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
        {card.cta}
        <ArrowRight className="h-4 w-4" />
      </span>
    </>
  )

  const className =
    'group flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5'

  return external ? (
    <a href={card.href} target="_blank" rel="noopener noreferrer" className={className}>
      {inner}
    </a>
  ) : (
    <Link href={card.href} className={className}>
      {inner}
    </Link>
  )
}

export function ActionCards() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {actionCards.map((card) => (
        <Card key={card.title} card={card} />
      ))}
    </div>
  )
}
