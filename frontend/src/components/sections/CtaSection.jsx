import { MotionSection } from '../MotionSection'

export function CtaSection() {
  return (
    <MotionSection className="mx-auto mt-24 max-w-4xl px-6 md:px-10">
      <div className="rounded-3xl border border-[#d8c6b2] bg-[#f4ede3] px-8 py-10 text-center shadow-[0_8px_22px_rgba(35,34,32,0.08)]">
        <h2 className="font-editorial text-4xl leading-tight tracking-[-0.015em] text-[#232220]">Kontakt & Anfahrt</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#3a3834]">
          Vereinbaren Sie Ihre persoenliche Beratung oder planen Sie direkt Ihre Route zur Thermen Apotheke.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button className="rounded-xl border border-[#0f5e66] bg-gradient-to-br from-[#14717a] to-[#0d5c63] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(13,92,99,0.28)] transition hover:scale-[1.02]">
            Kontakt aufnehmen
          </button>
          <button className="rounded-xl border border-[#14717a]/35 bg-white/75 px-6 py-3 text-sm font-semibold text-[#0d5c63] transition hover:scale-[1.02]">
            Route planen
          </button>
        </div>
      </div>
    </MotionSection>
  )
}
