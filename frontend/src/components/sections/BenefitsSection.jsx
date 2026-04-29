import { motion } from 'framer-motion'
import { MotionSection } from '../MotionSection'

const cards = [
  { title: 'Standortnah & schnell erreichbar', body: 'Zentral in Bad Waltersdorf mit kurzen Wegen fuer Einheimische und Thermengaeste.', featured: true },
  { title: 'Fachliche Beratung mit Ruhe', body: 'Sach- und fachgerechte Empfehlungen ohne unnoetige Komplexitaet.', offset: true },
  { title: 'Breites Sortiment, klare Orientierung', body: 'Von Arzneimitteln bis Naturprodukten strukturiert auffindbar.' },
]

export function BenefitsSection() {
  return (
    <MotionSection className="mx-auto mt-20 max-w-6xl px-6 md:px-10">
      <div className="grid gap-4 md:grid-cols-[1.2fr_0.9fr_0.9fr]">
        {cards.map((card, idx) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.07, duration: 0.42 }}
            whileHover={{ scale: 1.02, y: -3 }}
            className={`rounded-3xl border border-[#e4d6c4] p-6 shadow-[0_6px_16px_rgba(35,34,32,0.06)] transition ${
              card.featured
                ? 'bg-[radial-gradient(circle_at_12%_10%,rgba(20,113,122,0.14),transparent_32%),#fffdfa]'
                : 'bg-[#fffdfa]'
            } ${card.offset ? 'md:translate-y-4' : ''}`}
          >
            <h3 className="font-editorial text-2xl leading-tight text-[#232220]">{card.title}</h3>
            <p className="mt-3 text-[15px] leading-7 text-[#3a3834]">{card.body}</p>
          </motion.article>
        ))}
      </div>
    </MotionSection>
  )
}
