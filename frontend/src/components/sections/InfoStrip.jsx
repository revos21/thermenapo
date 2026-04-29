import { motion } from 'framer-motion'
import { MotionSection } from '../MotionSection'

const items = [
  { label: 'Oeffnungszeiten', value: 'Mo-Fr 08:00-12:30 / 14:30-18:00 · Sa 08:00-12:00' },
  { label: 'Adresse', value: 'Bad Waltersdorf 6, 8271 Bad Waltersdorf' },
  { label: 'Telefon', value: '03333 3970' },
  { label: 'Nachtdienst', value: '1455 · apotheker.or.at' },
  { label: 'Parken', value: 'Kostenlos und barrierefrei' },
]

export function InfoStrip() {
  return (
    <MotionSection className="mx-auto -mt-8 max-w-6xl px-6 md:px-10">
      <div className="grid gap-3 rounded-3xl border border-[#d8c9b6] bg-white/72 p-4 shadow-[0_8px_18px_rgba(35,34,32,0.07)] md:grid-cols-2 lg:grid-cols-5">
        {items.map((item, idx) => (
          <motion.article
            key={item.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.06, duration: 0.4 }}
            className="rounded-2xl border border-[#ede5da] bg-[#fffdfa] p-4"
          >
            <p className="mb-1 text-[11px] font-bold tracking-[0.08em] text-[#0d5c63] uppercase">{item.label}</p>
            <p className="text-sm leading-6 text-[#3a3834]">{item.value}</p>
          </motion.article>
        ))}
      </div>
    </MotionSection>
  )
}
