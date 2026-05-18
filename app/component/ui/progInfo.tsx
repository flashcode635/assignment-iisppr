export const ProgInfo=()=>{
    return(
        <>
              <section className="prog-info-container max-w-4xl mx-auto px-6  pb-10">
          {/* Background decorative shape */}
          <div className="absolute top-1/2 left-0 w-80 h-80 
          bg-(--color-bg-light-warm) rounded-full blur-3xl opacity-60 -z-10 transform -translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-3 gap-6">
            {/* Box 1 */}
            <div className="prog-card opacity-0 bg-white rounded-lg 
              shadow-[0_4px_25px_rgba(0,0,0,0.06)] border 
              border-(--color-bg-border) p-8 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full border 
                  border-(--color-gold-light) flex items-center justify-center mb-4 text-(--color-gold-dark)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                  <circle cx="12" cy="12" r="9" />
                  <polyline points="12 7 12 12 15 15" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 text-[17px] mb-2">Program Duration</h3>
              <p className="text-sm text-gray-600 font-medium">
                Month 23 (Approx.)
                </p>
            </div>
            
            {/* Box 2 */}
            <div className="prog-card opacity-0 bg-white rounded-lg shadow-[0_4px_25px_rgba(0,0,0,0.06)] border 
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
              <h3 className="font-bold text-gray-800 text-[17px] mb-2">Class Timings</h3>
              <p className="text-sm text-gray-600 font-medium">Deste - 100ers</p>
            </div>
            
            {/* Box 3 */}
            <div className="prog-card opacity-0 bg-white rounded-lg shadow-[0_4px_25px_rgba(0,0,0,0.06)] border 
            border-(--color-bg-border) p-8 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full border 
              border-(--color-gold-light) flex items-center justify-center mb-4 text-(--color-gold-dark)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 text-[17px] mb-2">Format</h3>
              <p className="text-sm text-gray-600 font-medium">Online/Hybrid</p>
            </div>
          </div>
        </section>        
        </>
    )
}