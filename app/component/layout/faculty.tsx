export const FacultyComponent=()=>{
return(
    <>
         <section className="faculty-section relative w-full py-20 bg-[#faf9f6]">
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
              <div className="faculty-card opacity-0 flex flex-col items-center text-center mt-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-[5px] border-white shadow-[0_4px_15px_rgba(0,0,0,0.08)] overflow-hidden mb-5">
                  <img src="https://iisppracademy.com/Prof.%20(Dr.)%20Areiba%20Arif.webp" alt="Dr. Areeba Arif" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-gray-800 text-base mb-1.5">Dr. Areeba Arif</h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Assistant Professor</p>
              </div>
              
              {/* Faculty 2 (Center - Highlighted) */}
              <div className="faculty-card opacity-0 flex flex-col items-center text-center mt-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-[5px] 
                border-(--color-gold-light) 
                shadow-[0_8px_25px_rgba(0,0,0,0.12)] overflow-hidden mb-5">
                  <img src="https://iisppracademy.com/Syed-Shariq-Husain.jpg" alt="Prof. Dr. Syed Sheriq" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-gray-800 text-base mb-1.5">Prof. Dr. Syed Sheriq</h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Assistant Professor</p>
              </div>
              
              {/* Faculty 3 */}
              <div className="faculty-card opacity-0 flex flex-col items-center text-center mt-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-[5px] border-white shadow-[0_4px_15px_rgba(0,0,0,0.08)] overflow-hidden mb-5">
                  <img src="https://iisppracademy.com/Dr.%20Faiz%20Noor%20Khan%20Yusufi.png" alt="Dr. Faiza Noor Khan Yousufi" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-gray-800 text-base mb-1.5">Dr. Faiza Noor Khan Yousufi</h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Guest Lecturer</p>
              </div>
            </div>
            
          </div>
          
          {/* Leadership Message Box */}
          <div className="leadership-box opacity-0 max-w-175 mx-auto bg-white border border-(--color-bg-light-beige) rounded p-10 text-center relative shadow-[0_2px_15px_rgba(0,0,0,0.03)] mt-8">
            <div className="absolute -top-3 right-8 text-(--color-gold-pale)">
              <svg width="22" height="30" viewBox="0 0 24 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H24V32L12 24L0 32V0Z" />
              </svg>
            </div>
            <h3 className="text-[22px] font-serif text-gray-800 mb-5">Leadership Message</h3>
            <p className="text-sm sm:text-base text-gray-600 italic mb-6 leading-relaxed px-8">
              "In a world flooded with technical jargon, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
            </p>
            {/* <a href="#" className="text-xs sm:text-sm font-bold text-(--color-green-medium) hover:text-(--color-green-dark) inline-flex items-center gap-1 uppercase tracking-widest transition-colors">
              Read Full Note
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 ml-0.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a> */}
          </div>
        </div>
      </section>
    </>
)
}