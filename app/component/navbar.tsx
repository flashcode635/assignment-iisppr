export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-4 border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="flex items-center gap-2">
        {/* Logo icon */}
        <div className="w-8 h-8 rounded-full border-2 border-yellow-500 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-yellow-500" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
          </svg>
        </div>
        <div>
          <div className="font-bold text-sm tracking-wide text-gray-800">IISPPR</div>
          <div className="text-[10px] tracking-widest text-yellow-600 uppercase">Academic Excellence</div>
        </div>
      </div>
      <div className="flex items-center gap-8 text-sm font-medium text-gray-500 tracking-wide">
        <a href="/about" className="hover:text-yellow-600 hover:border-b-2 hover:border-yellow-500 pb-0.5 transition-colors">ABOUT</a>
        <a href="#" className="hover:text-gray-800 transition-colors">FACULTY</a>
        <a href="#" className="hover:text-gray-800 transition-colors">CURRICULUM</a>
        <a href="#" className="hover:text-gray-800 transition-colors">ADMISSIONS</a>
      </div>
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-green-700 text-white text-sm font-medium hover:bg-green-800 transition-colors">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          LOGIN
        </button>
        <button className="px-5 py-2 rounded-full bg-yellow-400 text-gray-900 text-sm font-semibold hover:bg-yellow-300 transition-colors">
          ENQUIRE
        </button>
      </div>
    </nav>
  );
}
