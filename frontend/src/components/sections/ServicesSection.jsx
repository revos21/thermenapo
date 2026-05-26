import { MotionSection } from '../MotionSection'

const services = [
  'Schnelle Versorgung und sichere Medikation',
  'Reiseapotheke fuer Urlaub und Thermenaufenthalt',
  'Nachtdienst-Hilfe unter 1455',
  'Familienservice mit Leihprodukten',
]

export function ServicesSection() {
  return (
    <MotionSection className="mx-auto mt-24 max-w-5xl px-6 md:px-10">
      <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="mb-2 text-xs font-semibold tracking-[0.08em] text-primary-dark uppercase">Leistungen</p>
          <h2 className="font-editorial text-4xl leading-tight tracking-[-0.015em] text-[#232220]">Was Sie bei uns erwarten duerfen</h2>
          <p className="mt-4 max-w-md leading-7 text-[#3a3834]">
            Klare Beratung, kurze Wege und ein Sortiment, das zu Ihrem Alltag passt.
          </p>
        </div>
        <ul className="space-y-3 rounded-3xl border border-[#dfd0be] bg-white/80 p-6 shadow-[0_8px_20px_rgba(35,34,32,0.07)]">
          {services.map((item) => (
            <li key={item} className="rounded-xl border border-[#efe6db] bg-[#fffdfa] px-4 py-3 text-[15px] leading-6 text-[#3a3834]">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </MotionSection>
  )
}
