import Image from 'next/image'
import type { Metadata } from 'next'
import { Target, Eye, Heart, Sparkles } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { StatsBar } from '@/components/stats-bar'

export const metadata: Metadata = {
  title: '¿Quiénes somos? · Una Científica en tu Cole Andaluz',
  description:
    'Conoce el proyecto, su misión y al equipo de investigadoras que acercan la ciencia a los centros educativos de Andalucía.',
}

const team = [
  {
    name: 'Adela Muñoz Páez',
    role: 'Directora y responsable del proyecto',
    photo: '/equipo/adela-munoz.jpg',
    bio: 'Vocal de la Junta directiva de AMIT-Andalucía y Tesorera de AMIT. Catedrática de Química Inorgánica de la Universidad de Sevilla. Junto a sus tareas docentes e investigadoras, dedica los últimos años a la divulgación científica, con la publicación de varios ensayos y biografías.',
  },
  {
    name: 'Susana P. Gaytán Guía',
    role: 'Presidenta AMIT-Andalucía',
    photo: '/equipo/susana-gaytan.jpg',
    bio: 'Profesora de Fisiología en la Facultad de Biología de la Universidad de Sevilla. Su trabajo se centra en las bases del control neural de las funciones vegetativas y el correlato autonómico de las emociones. Convencida de que, bien explicada, la ciencia gusta a todo el mundo, ha hecho de la divulgación un eje central de su trabajo.',
  },
  {
    name: 'Margarita Paneque Sosa',
    role: 'Delegada del CSIC en Andalucía',
    photo: '/equipo/margarita-paneque.jpg',
    bio: 'Delegada del CSIC en Andalucía y Extremadura y directora de la Casa de la Ciencia. Profesora de Investigación del Instituto de Investigaciones Químicas. Con más de 100 trabajos y trece tesis doctorales dirigidas, destacan sus contribuciones a la síntesis de metalbencenos en química organometálica.',
  },
  {
    name: 'Francisco Vega Narváez',
    role: 'Técnico de laboratorio',
    photo: '/equipo/francisco-vega.jpg',
    bio: 'Creador y director de las obras de divulgación científica con perspectiva de género «Científicas, pasado, presente y futuro» y «La Reina Dido». Autor de los relatos de divulgación «Combinación ganadora», «Saponificación» y «La sinrazón de Pi».',
  },
]

const values = [
  {
    icon: Target,
    title: 'Misión',
    text: 'Despertar la curiosidad científica del alumnado andaluz y mostrar que la ciencia es para todas y todos.',
  },
  {
    icon: Eye,
    title: 'Visión',
    text: 'Una generación con más vocaciones STEM y sin brechas de género en la investigación.',
  },
  {
    icon: Heart,
    title: 'Valores',
    text: 'Cercanía, rigor, igualdad y pasión por compartir el conocimiento.',
  },
]

export default function QuienesSomosPage() {
  return (
    <>
      <PageHero
        eyebrow="El proyecto"
        title="Investigadoras que inspiran nuevas vocaciones"
        description="«Una Científica en tu Cole Andaluz» nace para acercar la ciencia real a las aulas de la mano de quienes la hacen cada día."
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Nuestra historia"
              title="Ciencia con nombre de mujer, dentro del aula"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                El programa conecta a investigadoras de universidades y centros
                de investigación andaluces con colegios e institutos de toda la
                comunidad. Durante una jornada, las científicas comparten su
                trabajo, resuelven dudas y realizan experimentos en directo.
              </p>
              <p>
                El objetivo es doble: acercar el método científico al alumnado y
                ofrecer referentes femeninos que ayuden a romper los
                estereotipos que aún hoy alejan a muchas niñas de las carreras
                científicas y técnicas.
              </p>
              <p>
                Es una iniciativa sin ánimo de lucro, gratuita para los centros,
                impulsada junto a la Asociación de Mujeres Investigadoras y
                Tecnólogas (AMIT-Andalucía).
              </p>
            </div>
          </div>
          <figure className="overflow-hidden rounded-3xl border border-border bg-secondary/40">
            <Image
              src="/equipo/presentacion-web.jpg"
              alt="El equipo del proyecto durante la presentación de la web «Una Científica en tu Cole Andaluz»"
              width={768}
              height={512}
              className="h-full w-full object-cover"
            />
            <figcaption className="px-5 py-3 text-center text-sm text-muted-foreground">
              Presentación de la web del proyecto, organizado por AMIT-Andalucía.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-border bg-card p-7"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <value.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="El equipo"
          title="Quienes hacen posible el proyecto"
          description="Un equipo de investigadoras y divulgadores que coordina las visitas y acerca la ciencia a las aulas andaluzas."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {team.map((member) => (
            <article
              key={member.name}
              className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 sm:flex-row"
            >
              <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-2xl sm:h-32 sm:w-32">
                <Image
                  src={member.photo}
                  alt={`Retrato de ${member.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 128px"
                />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-primary">
                  {member.role}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="py-4">
        <StatsBar />
      </div>

      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Sparkles className="h-7 w-7" />
        </span>
        <h2 className="mt-6 text-balance font-heading text-3xl font-extrabold text-foreground">
          ¿Quieres ser una de nuestras científicas?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Si investigas en Andalucía y te apetece compartir tu pasión por la
          ciencia con el alumnado, te estamos esperando.
        </p>
        <a
          href="/participa"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          Únete al equipo
        </a>
      </section>
    </>
  )
}
