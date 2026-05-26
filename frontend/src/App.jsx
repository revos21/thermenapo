import { motion } from 'framer-motion'
import { MotionSection } from './components/MotionSection'
import { HeroSection } from './components/sections/HeroSection'
import { InfoStrip } from './components/sections/InfoStrip'
import { AnnouncementSection } from './components/sections/AnnouncementSection'
import { ServicesSection } from './components/sections/ServicesSection'
import { FocusSection } from './components/sections/FocusSection'
import { CtaSection } from './components/sections/CtaSection'

function App() {
  return (
    <div className="pb-16">
      <HeroSection />
      <InfoStrip />
      <AnnouncementSection />
      <ServicesSection />
      <FocusSection />
      <MotionSection className="mx-auto mt-24 max-w-5xl px-6 md:px-10">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.22 }}
          className="rounded-3xl border border-[#d8c9b6] bg-gradient-to-br from-[#f4eee5] to-[#f8f5f0] p-8 shadow-[0_8px_24px_rgba(35,34,32,0.08)]"
        >
          <p className="mb-2 text-xs font-semibold tracking-[0.08em] text-primary-dark uppercase">
            Regionale Gesundheitskompetenz
          </p>
          <p className="max-w-3xl text-base leading-7 text-[#3a3834]">
            Wir beraten persoenlich, fachlich fundiert und alltagsnah - fuer Bad Waltersdorf und die Thermenregion.
          </p>
        </motion.div>
      </MotionSection>
      <CtaSection />
    </div>
  )
}

export default App
