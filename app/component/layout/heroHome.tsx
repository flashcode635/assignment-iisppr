import image from "@/public/background.png"
export const HeroSection = ()=>{
    return(
        <>
            <section className="relative w-full h-[85vh] min-h-150 flex bg-(--color-primary-dark) overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 pl-8">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                `url(${image.src})`,
            }}
          />
          {/* Gradient to darken the image appropriately */}
          <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/70 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a]/90 via-transparent to-black/50" />
        </div>

        {/* Content */}
        <div className="relative flex flex-col justify-center h-full px-10 md:px-15 max-w-4xl pt-10 ml-8">
          
          {/* Pill */}
          <div className="hero-pill inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded px-3 py-1.5 mb-8 self-start opacity-0">
            <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 text-(--color-gold-medium)">
              <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor" />
            </svg>
            <span className="text-(--color-gold-medium) text-[9px] font-bold tracking-[0.25em] uppercase">
              Elite Research Fellowship 2024
            </span>
          </div>

          {/* Heading */}
          <h1 className="hero-heading text-5xl md:text-[68px] font-serif text-white leading-[1.05] mb-6 opacity-0">
            Advancing Global<br />
            SDGs through<br />
            <span className="italic text-(--color-gold-medium)">Rigorous Inquiry</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-white/80 text-[15px] leading-[1.7] mb-12 max-w-150 font-light tracking-wide opacity-0">
            The International Institute of SDGs &amp; Public Policy Research is a premier academic hub dedicated to bridging the gap between theoretical data science and impactful global policy.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="hero-btn px-8 py-3.5 
            bg-(--color-green-vibrant) 
            hover:bg-(--color-green-hover) text-white text-[11px] font-bold tracking-[0.15em] uppercase rounded-sm transition-colors shadow-lg opacity-0">
              Explore Research
            </button>
            <button className="hero-btn px-8 py-3.5 bg-transparent border border-(--color-gold-medium) text-(--color-gold-medium) hover:bg-(--color-gold-medium)/10 text-[11px] font-bold tracking-[0.15em] uppercase rounded-sm transition-colors opacity-0">
              Fellowship Programs
            </button>
          </div>
        </div>

      </section>
        </>
    )
}