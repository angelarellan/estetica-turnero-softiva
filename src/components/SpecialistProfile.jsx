import { MapPin, UserRound } from 'lucide-react'
import InstagramIcon from './icons/InstagramIcon'
import { STUDIO_INFO } from '../data/mockData'

export default function SpecialistProfile() {
  return (
    <section className="px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 rounded-3xl border border-nude/70 bg-white/55 p-8 text-center shadow-2xl shadow-rose-gold-deep/10 backdrop-blur-md">
        <span className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-nude/40 ring-4 ring-rose-gold/50 sm:h-36 sm:w-36">
          <UserRound size={56} className="text-rose-gold-deep" aria-hidden="true" />
        </span>
        <div>
          <h2 className="font-serif text-2xl font-bold text-plum sm:text-3xl">
            {STUDIO_INFO.founder}
          </h2>
          <p className="mt-1 text-base text-muted">{STUDIO_INFO.name} — Especialista en Belleza</p>
        </div>
        <p className="flex items-center gap-1.5 text-base text-muted">
          <MapPin size={16} aria-hidden="true" />
          {STUDIO_INFO.addressLine}
        </p>
        <a
          href={STUDIO_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 flex items-center gap-1.5 rounded-full border border-nude/70 bg-white/60 px-4 py-2 text-sm font-medium text-plum/75 transition hover:border-rose-gold-deep/50 hover:text-plum"
        >
          <InstagramIcon size={16} className="text-rose-gold-deep" aria-hidden="true" />
          {STUDIO_INFO.instagramHandle}
        </a>
      </div>
    </section>
  )
}
