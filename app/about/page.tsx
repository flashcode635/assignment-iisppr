import Quote from "../component/quote";
import Navbar from "../component/navbar";


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative w-full h-56 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1400&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-white/30" />
      </section>

      {/* Intro Text */}
      <section className="max-w-4xl mx-auto px-6 py-10 text-gray-700 text-[17px] leading-relaxed">
        <p className="mb-5">
          The <strong>International Institute of SDGs &amp; Public Policy Research</strong> (IISPPR) offers a globally
          structured online program in Public Policy &amp; Data Science, designed for students, professionals, and
          aspiring researchers.
        </p>
        <p>
          This flagship course blends rigorous policy analysis with practical data science tools, helping learners
          understand how policies are shaped—and how to influence them using data, research, and effective
          communication.
        </p>
      </section>

      {/* Program Highlights */}
      <section className="max-w-4xl mx-auto px-6 pb-14">
        <h2 className="text-sm font-bold tracking-widest text-green-700 uppercase mb-6">
          Program Highlights:
        </h2>
        <div className="grid grid-cols-3 gap-x-8 gap-y-8">
          {/* Card 1 */}
          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-yellow-500 shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-9 h-9">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800 leading-snug">
                36–50 hours of<br />structured learning
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-yellow-500 shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-9 h-9">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                <rect x="4" y="14" width="4" height="6" rx="0.5" />
                <rect x="10" y="10" width="4" height="10" rx="0.5" />
                <rect x="16" y="6" width="4" height="14" rx="0.5" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800 leading-snug">
                Focus on data literacy,<br />AI &amp; statistics
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-yellow-500 shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-9 h-9">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800 leading-snug">
                Applied capstone<br />project
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-yellow-500 shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-9 h-9">
                <circle cx="12" cy="8" r="4" />
                <path d="M8 20l-2-2 2-2h8l2 2-2 2H8z" />
                <line x1="12" y1="12" x2="12" y2="16" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800 leading-snug">
                Gold Medal<br />recognition
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-yellow-500 shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-9 h-9">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
                <path d="M7 7h4M7 11h6" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800 leading-snug">
                Global publication<br />opportunities
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-yellow-500 shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-9 h-9">
                <circle cx="9" cy="7" r="3" />
                <circle cx="17" cy="5" r="2" />
                <path d="M3 21v-2a5 5 0 0 1 10 0v2" />
                <path d="M17 9a3 3 0 0 1 3 3v2" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800 leading-snug">
                Mentorship from<br />policy experts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Program Matters */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div
          className="rounded-2xl overflow-hidden flex items-stretch"
          style={{
            
            border: "1.5px solid #b8a97a",
          }}
        >
          {/* Left: Person Photo */}
          {/* <div className="shrink-0 w-52 relative">
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80"
              alt="Dr. Anya Sharma"
              className="w-full h-full object-cover object-top"
              style={{ minHeight: "100%" }}
            />
          </div> */}

          {/* Right: Quote Content */}
          <div className="flex flex-col justify-center px-10 py-10 gap-3">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-1">
              Why This Program Matters
            </h2>

            <Quote />

          </div>
        </div>
      </section>
    </main>
  );
}
