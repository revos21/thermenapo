import { motion } from 'framer-motion'
import { MotionSection } from '../MotionSection'

const focus = [
  { title: 'Medikamente', text: 'Breites Sortiment mit schneller Verfuegbarkeit.', big: true },
  { title: 'Alternativmedizin', text: 'Homoeopathie, Bachblueten und naturbasierte Ansaetze.' },
  { title: 'Ernaehrung & Mikronaehrstoffe', text: 'Gezielte Unterstuetzung fuer Alltag und Saison.' },
  { title: 'Schoenheit & Hautpflege', text: 'Apothekenkosmetik mit individueller Beratung.' },
]

export function FocusSection() {
  return (
    <MotionSection className="mx-auto mt-24 max-w-6xl px-6 md:px-10">
      <h2 className="font-editorial mb-7 text-4xl leading-tight tracking-[-0.015em] text-[#232220]">Unsere Schwerpunkte</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {focus.map((card, idx) => (
          <motion.article
            key={card.title}
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.2 }}
            className={`rounded-3xl border border-[#e5d8c8] p-6 shadow-[0_6px_16px_rgba(35,34,32,0.06)] ${
              card.big ? 'md:col-span-2 bg-[linear-gradient(145deg,#f2efe7_0%,#fffdf8_100%)]' : 'bg-[#fffdfa]'
            }`}
          >
            <h3 className="font-editorial text-2xl text-[#232220]">{card.title}</h3>
            <p className="mt-3 text-[15px] leading-7 text-[#3a3834]">{card.text}</p>
            <a className="mt-4 inline-block text-sm font-semibold text-primary-dark" href="#0">
              Mehr erfahren
            </a>
          </motion.article>
        ))}
      </div>
    </MotionSection>
  )
}
