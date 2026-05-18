export const Footer = () => {
    return (
        <>
             <footer className="bg-(--color-dark-charcoal) text-white px-10 py-12 border-b-[6px] border-(--color-dark-black)">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-10">
          <div className="shrink-0">
            <div className="font-serif text-[26px] tracking-wide text-(--color-gold-light)">IISPPR</div>
          </div>
          
          <div className="flex-1 flex justify-center w-full">
            <div className="flex items-center gap-8 text-xs sm:text-sm text-gray-300 tracking-wide border-l border-r border-gray-600 px-10">
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
          
          <div className="flex gap-16 text-sm text-gray-300 shrink-0">
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
        </>
    )
}