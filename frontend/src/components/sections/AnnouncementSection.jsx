export function AnnouncementSection() {
  return (
    <section className="relative overflow-hidden bg-[#f3efe8] py-20 sm:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at 18% 22%, rgba(255,255,255,0.42), transparent 36%),
            radial-gradient(circle at 78% 86%, rgba(208,222,212,0.22), transparent 34%),
            linear-gradient(to bottom, #f3efe8 0%, #f6f2eb 54%, #eef4ef 100%)
          `,
        }}
      />

      <div className="pointer-events-none absolute bottom-[86px] left-[-24px] z-0 h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(158,178,163,0.18)_0%,rgba(158,178,163,0.08)_35%,transparent_70%)] blur-xl sm:h-[280px] sm:w-[280px] lg:h-[340px] lg:w-[340px]" />
      <div className="pointer-events-none absolute bottom-[110px] right-[-28px] z-0 h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(158,178,163,0.16)_0%,rgba(158,178,163,0.07)_36%,transparent_70%)] blur-xl sm:h-[300px] sm:w-[300px] lg:h-[380px] lg:w-[380px]" />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[180px]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(231,241,236,0.45) 100%)',
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[120px] overflow-hidden">
        <svg
          viewBox="0 0 1440 180"
          className="h-full w-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,90 C180,140 300,20 520,70 C760,124 900,40 1120,70 C1260,88 1360,120 1440,112 L1440,180 L0,180 Z"
            fill="rgba(223,236,231,0.72)"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-start gap-8 lg:grid-cols-[1.65fr_0.95fr] lg:gap-10">
          <div className="max-w-[760px]">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#6f8d7d]">
              Wichtige Information
            </p>

            <h2 className="mt-4 max-w-[11ch] font-editorial text-[42px] font-semibold leading-[0.98] tracking-[-0.03em] text-[#2f2a26] sm:text-[56px] lg:text-[60px]">
              Neuuebernahme ab 1. Jaenner 2026
            </h2>

            <p className="mt-6 max-w-[34ch] text-[18px] leading-[1.7] text-[rgba(47,42,38,0.78)] sm:text-[19px]">
              Mag. Pharm. Doris Pieler und Mag. Pharm. Anna Katharina Wurzer
              fuehren die Thermen Apotheke Bad Waltersdorf mit frischem Schwung
              weiter. Bewaehrtes bleibt: Ihre gewohnte Beratung, das breite
              Sortiment und der persoenliche Service - jetzt mit dem gleichen
              Engagement an vertrauter Adresse.
            </p>
          </div>

          <div className="lg:pt-5">
            <div className="rounded-[26px] border border-[rgba(120,110,100,0.08)] bg-[rgba(255,255,255,0.86)] p-7 shadow-[0_20px_50px_rgba(0,0,0,0.05)] backdrop-blur-[10px] sm:p-8">
              <div className="inline-flex rounded-full bg-[#ece3d6] px-4 py-2 text-[13px] font-medium text-[#7d6f61]">
                Leitung
              </div>

              <div className="mt-5 space-y-1 text-[17px] leading-[1.65] text-[rgba(47,42,38,0.82)]">
                <p>Mag. Pharm. Doris Pieler</p>
                <p>Mag. Pharm. Anna Katharina Wurzer</p>
              </div>

              <div className="mt-7">
                <h4 className="text-[15px] font-semibold text-[#5c554e]">
                  Standort
                </h4>
                <div className="mt-2 space-y-1 text-[17px] leading-[1.65] text-[rgba(47,42,38,0.82)]">
                  <p>Bad Waltersdorf 6</p>
                  <p>8271 Bad Waltersdorf</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-14 lg:gap-6">
          <div className="relative min-h-[250px] rounded-[24px] border border-[rgba(120,110,100,0.08)] bg-[rgba(255,255,255,0.84)] p-7 shadow-[0_20px_50px_rgba(0,0,0,0.05)] backdrop-blur-[10px] sm:p-8">
            <h3 className="max-w-[14ch] font-editorial text-[28px] font-semibold leading-[1.04] tracking-[-0.02em] text-[#2f2a26] sm:text-[32px]">
              Standortnah & schnell erreichbar
            </h3>
            <p className="max-w-[22ch] text-[17px] leading-[1.7] text-[rgba(47,42,38,0.76)]">
              Zentral in Bad Waltersdorf, kurze Wege fuer Einheimische und
              Gaeste der Thermenregion.
            </p>
          </div>

          <div className="min-h-[250px] rounded-[24px] border border-[rgba(120,110,100,0.08)] bg-[rgba(255,255,255,0.84)] p-7 shadow-[0_20px_50px_rgba(0,0,0,0.05)] backdrop-blur-[10px] sm:p-8">
            <h3 className="max-w-[14ch] font-editorial text-[28px] font-semibold leading-[1.04] tracking-[-0.02em] text-[#2f2a26] sm:text-[32px]">
              Fachliche Beratung mit Ruhe
            </h3>
            <p className="max-w-[22ch] text-[17px] leading-[1.7] text-[rgba(47,42,38,0.76)]">
              Sach- und fachgerechte Empfehlungen, individuell und ohne
              unnoetige Komplexitaet.
            </p>
          </div>

          <div className="min-h-[250px] rounded-[24px] border border-[rgba(120,110,100,0.08)] bg-[rgba(255,255,255,0.84)] p-7 shadow-[0_20px_50px_rgba(0,0,0,0.05)] backdrop-blur-[10px] sm:p-8">
            <h3 className="max-w-[14ch] font-editorial text-[28px] font-semibold leading-[1.04] tracking-[-0.02em] text-[#2f2a26] sm:text-[32px]">
              Breites Sortiment, klare Orientierung
            </h3>
            <p className="max-w-[22ch] text-[17px] leading-[1.7] text-[rgba(47,42,38,0.76)]">
              Von Arzneimitteln ueber Naturprodukte bis Kosmetik - sinnvoll
              strukturiert und schnell auffindbar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
