import Navbar from "./component/navbar";
import image from "@/public/background.png"
export default function Home() {
  return (
    <main className="min-h-screen bg-(--color-primary-light) font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[85vh] min-h-150 flex bg-(--color-primary-dark) overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 pl-8">
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
        <div className="relative z-10 flex flex-col justify-center h-full px-16 md:px-24 max-w-4xl pt-10 ml-8">
          
          {/* Pill */}
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded px-3 py-1.5 mb-8 self-start">
            <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 text-(--color-gold-medium)">
              <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor" />
            </svg>
            <span className="text-(--color-gold-medium) text-[9px] font-bold tracking-[0.25em] uppercase">
              Elite Research Fellowship 2024
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-[68px] font-serif text-white leading-[1.05] mb-6">
            Advancing Global<br />
            SDGs through<br />
            <span className="italic text-(--color-gold-medium)">Rigorous Inquiry</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/80 text-[15px] leading-[1.7] mb-12 max-w-150 font-light tracking-wide">
            The International Institute of SDGs &amp; Public Policy Research is a premier academic hub dedicated to bridging the gap between theoretical data science and impactful global policy.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="px-8 py-3.5 
            bg-(--color-green-vibrant) 
            hover:bg-(--color-green-hover) text-white text-[11px] font-bold tracking-[0.15em] uppercase rounded-sm transition-colors shadow-lg">
              Explore Research
            </button>
            <button className="px-8 py-3.5 bg-transparent border border-(--color-gold-medium) text-(--color-gold-medium) hover:bg-(--color-gold-medium)/10 text-[11px] font-bold tracking-[0.15em] uppercase rounded-sm transition-colors">
              Fellowship Programs
            </button>
          </div>
        </div>

        {/* Down Arrow at the bottom */}
        {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-white/40 animate-bounce cursor-pointer ml-4">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div> */}
      </section>

      {/* Main Content Container */}
      <div className="bg-white">

        {/* Program Info Boxes */}
        <section className="max-w-4xl mx-auto px-6 -mt-12 pb-10">
          {/* Background decorative shape */}
          <div className="absolute top-1/2 left-0 w-80 h-80 
          bg-(--color-bg-light-warm) rounded-full blur-3xl opacity-60 -z-10 transform -translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-3 gap-6">
            {/* Box 1 */}
            <div className="bg-white rounded-lg 
              shadow-[0_4px_25px_rgba(0,0,0,0.06)] border 
              border-(--color-bg-border) p-8 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full border 
                  border-(--color-gold-light) flex items-center justify-center mb-4 text-(--color-gold-dark)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                  <circle cx="12" cy="12" r="9" />
                  <polyline points="12 7 12 12 15 15" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 text-[15px] mb-2">Program Duration</h3>
              <p className="text-xs text-gray-500 font-medium">
                Month 23 (Approx.)
                </p>
            </div>
            
            {/* Box 2 */}
            <div className="bg-white rounded-lg shadow-[0_4px_25px_rgba(0,0,0,0.06)] border 
              border-(--color-bg-border) p-8 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full border 
              border-(--color-gold-light) flex items-center justify-center mb-4 text-(--color-gold-dark)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 text-[15px] mb-2">Class Timings</h3>
              <p className="text-xs text-gray-500 font-medium">Deste - 100ers</p>
            </div>
            
            {/* Box 3 */}
            <div className="bg-white rounded-lg shadow-[0_4px_25px_rgba(0,0,0,0.06)] border 
            border-(--color-bg-border) p-8 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full border 
              border-(--color-gold-light) flex items-center justify-center mb-4 text-(--color-gold-dark)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 text-[15px] mb-2">Format</h3>
              <p className="text-xs text-gray-500 font-medium">Online/Hybrid</p>
            </div>
          </div>
        </section>

        {/* Globally Recognized Certification Strip */}
        <section className="max-w-5xl mx-auto px-6 py-6 border-b border-gray-100/50">
          <div className="grid grid-cols-3 gap-6 items-center">
            {/* Left Col */}
            <div className="text-center p-6 flex flex-col items-center">
              <div className="flex justify-center mb-4 
              text-(--color-gold-dark)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-11 h-11">
                  <ellipse cx="12" cy="8" rx="7" ry="5" />
                  <path d="M5 8v8c0 2.8 3.1 5 7 5s7-2.2 7-5V8" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 text-[15px] mb-2">Curated Datasets</h3>
              <p className="text-[11px] text-gray-500 leading-relaxed max-w-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
            </div>

            {/* Center Col - Badge */}
            <div className="flex flex-col items-center text-center p-2">
              <div className="w-32 h-32 rounded-full 
              border-10 border-(--color-gold-light)
              bg-(--color-bg-cream) flex items-center justify-center mb-4 shadow-sm relative">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-green-dark)" strokeWidth="2.5" className="w-12 h-12">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {/* Ribbon tails */}
                <div className="absolute -bottom-5 -left-2 w-9 h-12 bg-(--color-green-dark) -z-10 transform rotate-[-25deg]"></div>
                <div className="absolute -bottom-5 -right-2 w-9 h-12 bg-(--color-green-dark) -z-10 transform rotate-25"></div>
              </div>
              <h3 className="font-serif 
              text-(--color-green-medium) text-[22px] leading-tight">
                Globally<br />Recognized<br />Certification
              </h3>
            </div>

            {/* Right Col */}
            <div className="text-center p-6 flex flex-col items-center">
              <div className="flex justify-center mb-4 
              text-(--color-gold-dark)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-11 h-11">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 9l6 6M15 9l-6 6" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 text-[15px] mb-2">No Prior Coding</h3>
              <p className="text-[11px] text-gray-500 leading-relaxed max-w-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
            </div>
          </div>
        </section>

        {/* Why Get Certified */}
        <section className="max-w-4xl mx-auto px-6 py-14">
          <h2 className="text-[28px] font-serif text-gray-800 text-center mb-12">
            Why Get <span className="text-(--color-green-medium)">Certified</span>
          </h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center flex flex-col items-center">
              <div className="flex justify-center mb-5 
              text-(--color-gold-dark)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                  <ellipse cx="12" cy="8" rx="7" ry="5" />
                  <path d="M5 8v8c0 2.8 3.1 5 7 5s7-2.2 7-5V8" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 text-[15px] mb-3">Curated Datasets</h3>
              <p className="text-[11px] text-gray-500 leading-relaxed max-w-55">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
            </div>
            
            <div className="text-center flex flex-col items-center">
              <div className="flex justify-center mb-5 text-[#cba75d]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 text-[15px] mb-3">Applied Focus</h3>
              <p className="text-[11px] text-gray-500 leading-relaxed max-w-55">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
            </div>
            
            <div className="text-center flex flex-col items-center">
              <div className="flex justify-center mb-5 text-[#cba75d]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 9l6 6M15 9l-6 6" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 text-[15px] mb-3">No Prior Coding</h3>
              <p className="text-[11px] text-gray-500 leading-relaxed max-w-55">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
            </div>
          </div>
        </section>

        {/* Who Should Enroll */}
        <section className="max-w-4xl mx-auto px-6 pb-16 relative">
          {/* Subtle green gradient background */}
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-transparent via-[#f2f8f4] to-transparent -z-10 opacity-60"></div>
          
          <h2 className="text-[28px] font-serif text-gray-800 text-center mb-12">
            Who Should <span className="
            text-(--color-green-medium)
            ">Enroll?</span>
          </h2>
          <div className="grid grid-cols-2 gap-5">
            {[
              {
                title: "Data Analysts",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                    <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
                  </svg>
                ),
              },
              {
                title: "Graduate Students",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                ),
              },
              {
                title: "Researchers",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                    <circle cx="9" cy="7" r="3" />
                    <circle cx="17" cy="5" r="2" />
                    <path d="M3 21v-2a5 5 0 0 1 10 0v2" />
                    <path d="M17 9a3 3 0 0 1 3 3v2" />
                  </svg>
                ),
              },
              {
                title: "Social Entrepreneurs",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-white shadow-sm border 
              border-(--color-bg-border) rounded-xl p-6">
                <div className="shrink-0 text-(--color-gold-dark)mt-0.5 bg-(--color-bg-lightest) p-2.5 rounded-lg border border-(--color-bg-border-light)">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-[15px] mb-1.5">{item.title}</h3>
                  <p className="text-[11px] text-gray-500 leading-relaxed pr-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Faculty Spotlight & Leadership Message Section */}
      <section className="relative w-full py-20 bg-[#faf9f6]">
        {/* Topographic Background Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none" 
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c13.866 0 25.36 11.297 25.413 25.15 1.146 11.282 6.703 21.082 14.587 29.85C62.33 85.8 81.33 91.8 100 91.8v-2c-17.7 0-35.7-5.7-46.7-18.4-7.4-8.2-12.7-17.4-13.8-28.1C39.43 28.536 27.276 16 11 16V18zM0 38c15.8 0 30.2 10.4 35.8 24.2 4.1 10.3 12.3 19.3 22.2 24.8V85c-9-5.1-16.3-13.3-20-22.6C33 49.6 20.3 40 0 40v-2zM0 58c11 0 20.6 6.3 25.4 15.6 2 3.9 4.7 8.3 8.6 12.4v-2.3c-3-3.6-5.4-7.5-7-11.1C22.6 64.3 14 58 0 58v-2zM0 78c6.6 0 12.2 3.5 15.6 8.8v-2.6C12.8 79.5 7.8 78 0 78v-2zM0 98c2.2 0 4.2 1.3 5.6 3.2v-2.8C4.5 98 2.3 98 0 98v-2z\' fill=\'%23000000\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
            backgroundSize: '300px 300px'
          }}
        ></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <h2 className="text-[28px] font-serif text-gray-800 text-center mb-16">
            Faculty Spotlight
          </h2>
          
          <div className="flex items-center justify-center mb-20 relative">
            {/* <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-800 transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button> */}
            
            <div className="flex justify-center gap-12 sm:gap-24">
              {/* Faculty 1 */}
              <div className="flex flex-col items-center text-center mt-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-[5px] border-white shadow-[0_4px_15px_rgba(0,0,0,0.08)] overflow-hidden mb-5">
                  <img src="https://iisppracademy.com/Prof.%20(Dr.)%20Areiba%20Arif.webp" alt="Dr. Areeba Arif" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-gray-800 text-sm mb-1.5">Dr. Areeba Arif</h3>
                <p className="text-[9px] text-gray-500 uppercase tracking-widest font-semibold">Assistant Professor</p>
              </div>
              
              {/* Faculty 2 (Center - Highlighted) */}
              <div className="flex flex-col items-center text-center mt-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-[5px] 
                border-(--color-gold-light) 
                shadow-[0_8px_25px_rgba(0,0,0,0.12)] overflow-hidden mb-5">
                  <img src="https://iisppracademy.com/Syed-Shariq-Husain.jpg" alt="Prof. Dr. Syed Sheriq" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-gray-800 text-sm mb-1.5">Prof. Dr. Syed Sheriq</h3>
                <p className="text-[9px] text-gray-500 uppercase tracking-widest font-semibold">Assistant Professor</p>
              </div>
              
              {/* Faculty 3 */}
              <div className="flex flex-col items-center text-center mt-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-[5px] border-white shadow-[0_4px_15px_rgba(0,0,0,0.08)] overflow-hidden mb-5">
                  <img src="https://iisppracademy.com/Dr.%20Faiz%20Noor%20Khan%20Yusufi.png" alt="Dr. Faiza Noor Khan Yousufi" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-gray-800 text-sm mb-1.5">Dr. Faiza Noor Khan Yousufi</h3>
                <p className="text-[9px] text-gray-500 uppercase tracking-widest font-semibold">Guest Lecturer</p>
              </div>
            </div>
            
            {/* <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-800 transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button> */}
          </div>
          
          {/* Leadership Message Box */}
          <div className="max-w-175 mx-auto bg-white border border-(--color-bg-light-beige) rounded p-10 text-center relative shadow-[0_2px_15px_rgba(0,0,0,0.03)] mt-8">
            <div className="absolute -top-3 right-8 text-(--color-gold-pale)">
              <svg width="22" height="30" viewBox="0 0 24 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H24V32L12 24L0 32V0Z" />
              </svg>
            </div>
            <h3 className="text-[22px] font-serif text-gray-800 mb-5">Leadership Message</h3>
            <p className="text-[13px] text-gray-600 italic mb-6 leading-relaxed px-8">
              "In a world flooded with technical jargon, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
            </p>
            <a href="#" className="text-[11px] font-bold text-(--color-green-medium) hover:text-(--color-green-dark) inline-flex items-center gap-1 uppercase tracking-widest transition-colors">
              Read Full Note
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 ml-0.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-(--color-dark-charcoal) text-white px-10 py-12 border-b-[6px] border-(--color-dark-black)">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-10">
          <div className="shrink-0">
            <div className="font-serif text-[26px] tracking-wide text-(--color-gold-light)">IISPPR</div>
          </div>
          
          <div className="flex-1 flex justify-center w-full">
            <div className="flex items-center gap-8 text-[11px] text-gray-300 tracking-wide border-l border-r border-gray-600 px-10">
              <p className="flex items-center gap-2">
                <span className="text-gray-500">📞</span> +1 (168458675) 7190
              </p>
              <p className="flex items-center gap-2">
                <span className="text-gray-500">✉️</span> medenih@designed.com
              </p>
              <p className="flex items-center gap-2">
                <span className="text-gray-500">🌐</span> meden.sudten.designed.com
              </p>
            </div>
          </div>
          
          <div className="flex gap-16 text-[12px] text-gray-300 shrink-0">
            <div className="space-y-4">
              <a href="/about" className="hover:text-white block transition-colors">About</a>
              <a href="#" className="hover:text-white block transition-colors">Faculty</a>
            </div>
            <div className="space-y-4">
              <a href="#" className="hover:text-white block transition-colors">Curriculum</a>
              <a href="#" className="hover:text-white block transition-colors">Resource</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
