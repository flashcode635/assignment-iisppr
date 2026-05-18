import { benefits } from "@/app/lib/data"
import badge from "@/public/badge.png"
import { ProgInfo } from "../ui/progInfo"

export const MainContent= ()=>{
    
    return(
        <>
            <div className="bg-(--color-bg-cream) pt-12 ">

        {/* Program Info Boxes */}
            <ProgInfo/>

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
              <h3 className="font-bold text-gray-800 text-[17px] mb-2">Curated Datasets</h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-64">
                Access a curated library of over 10,000 open‑source datasets spanning climate, health, and socioeconomic indicators, ready for immediate analysis.
              </p>
            </div>

            {/* Center Col - Badge */}
            <div className="flex flex-col items-center text-center p-2">
              <div className="w-32 h-32 rounded-full 
             
              bg-(--color-bg-cream) flex items-center justify-center mb-4 shadow-sm relative">
                <div
                    className="absolute inset-0 bg-contain bg-center bg-no-repeat h-full w-full"
                    style={{
                          backgroundImage:
                            `url(${badge.src})`,
                    }}
                />
                
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
              <h3 className="font-bold text-gray-800 text-[17px] mb-2">No Prior Coding</h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-64">
                No prior coding experience needed – start with intuitive visual tools and guided tutorials that bring you up to speed quickly.
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
              <h3 className="font-bold text-gray-800 text-[17px] mb-3">Curated Datasets</h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-64">
                Explore over 10,000 curated open‑source datasets covering climate indicators, public health metrics, and socioeconomic data ready for immediate analysis.
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
              <h3 className="font-bold text-gray-800 text-[17px] mb-3">Applied Focus</h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-64">
                Hands‑on projects applying data science to real‑world policy challenges, from climate modeling to social impact assessments.
              </p>
            </div>
            
            <div className="text-center flex flex-col items-center">
              <div className="flex justify-center mb-5 text-[#cba75d]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 9l6 6M15 9l-6 6" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 text-[17px] mb-3">No Prior Coding</h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-64">
                Start coding with our visual drag‑and‑drop tools and step‑by‑step tutorials—all designed for beginners.
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
            {
            benefits.map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-white shadow-sm border 
              border-(--color-bg-border) rounded-xl p-6">
                <div className="shrink-0 text-(--color-gold-dark) mt-0.5 bg-(--color-bg-border) p-2.5 rounded-lg border border-(--color-bg-border-light)">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-[17px] mb-1.5">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed pr-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
        </>
    )
}