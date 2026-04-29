import { motion } from 'framer-motion'

const badges = ['Neuuebernahme ab 1. Jaenner 2026', 'Barrierefrei & Parkplaetze', 'Persoenliche Beratung vor Ort']

const textStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
}

const textItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-28 md:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(20,113,122,0.14),transparent_34%),radial-gradient(circle_at_78%_8%,rgba(191,208,194,0.52),transparent_30%),linear-gradient(152deg,#f8f5f0_0%,#f0ebe2_42%,#e9e2d6_100%)]" />
      <div className="pointer-events-none absolute inset-0 backdrop-blur-[1px]" />
      <motion.div
        aria-hidden
        animate={{ y: [0, -10, 0], opacity: [0.42, 0.58, 0.42] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -right-28 top-14 h-80 w-80 rounded-full bg-[#14717a]/15 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, 16, 0], opacity: [0.34, 0.52, 0.34] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -left-20 bottom-2 h-72 w-72 rounded-full bg-[#728b7a]/18 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div variants={textStagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.p variants={textItem} className="mb-3 text-xs font-semibold tracking-[0.1em] text-[#0d5c63] uppercase">
            Thermen Apotheke
          </motion.p>

          <motion.h1 variants={textItem} className="font-editorial mb-6 max-w-[11ch] text-4xl leading-[1.04] tracking-[-0.02em] text-[#232220] md:text-6xl">
            Ihre Apotheke in Bad Waltersdorf
          </motion.h1>

          <motion.p variants={textItem} className="max-w-[580px] text-lg leading-8 text-[#3a3834]">
            Persoenlich, fachlich fundiert und verlaesslich im Alltag. Fuer Einheimische und Gaeste der Thermenregion - mit
            ruhiger Beratung und schnellen Loesungen.
          </motion.p>

          <motion.div variants={textItem} className="mt-10 flex flex-wrap gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.18 }}
              className="rounded-xl border border-[#0f5e66] bg-gradient-to-br from-[#14717a] to-[#0d5c63] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(13,92,99,0.28)] transition hover:shadow-[0_12px_28px_rgba(13,92,99,0.34)]"
            >
              Jetzt beraten lassen
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.18 }}
              className="rounded-xl border border-[#14717a]/40 bg-white/70 px-6 py-3 text-sm font-semibold text-[#0d5c63] transition hover:bg-white hover:shadow-[0_8px_20px_rgba(35,34,32,0.08)]"
            >
              Anrufen
            </motion.button>
          </motion.div>

          <motion.div variants={textItem} className="mt-7 flex flex-wrap gap-2.5">
            {badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex rounded-full border border-[#d9cec0] bg-white/60 px-3.5 py-1.5 text-xs font-semibold text-[#4b4842]"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:-mr-16"
        >
          <div className="relative overflow-hidden rounded-[34px] border border-white/65 shadow-[0_22px_38px_rgba(35,34,32,0.16)]">
            <img
              src="/assets/images/topics/HeroPage1.png"
              alt="Apothekerin in der Thermen Apotheke Bad Waltersdorf"
              className="h-[560px] w-full object-cover object-center md:h-[640px]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(245,242,236,0.74)_0%,rgba(245,242,236,0.24)_38%,rgba(245,242,236,0.04)_74%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.0)_36%,rgba(14,124,134,0.08)_100%)]" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
