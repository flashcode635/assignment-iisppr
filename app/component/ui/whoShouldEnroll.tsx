"use client";

import { AudienceCardProps } from "@/types/interfaces";
import React from "react";



const AudienceCard = ({ title, subtitle, desc, icon }: AudienceCardProps) => {
  return (
    <div className="enroll-card opacity-0 group relative bg-white border border-(--color-bg-border) rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)] hover:border-(--color-gold-medium) hover:-translate-y-1">
      {/* Background soft glow on hover */}
      <div className="absolute inset-0 bg-linear-to-br from-transparent to-(--color-bg-border-light) opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -z-10" />
      
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <div className="shrink-0 text-(--color-gold-dark) bg-(--color-bg-cream) group-hover:bg-(--color-gold-light)/20 p-3 rounded-xl border border-(--color-bg-border) transition-all duration-300">
            {icon}
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg group-hover:text-(--color-green-dark) transition-colors duration-300">
              {title}
            </h3>
            <span className="text-xs font-semibold text-(--color-gold-dark) tracking-wider uppercase">
              {subtitle}
            </span>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {desc}
        </p>
      </div>
    </div>
  );
};

export const WhoShouldEnroll = () => {
  const audiences = [
    {
      title: "Data Analysts & Research Professionals",
      subtitle: "Quantitative Mastery",
      desc: "Seeking to strengthen quantitative skills for evidence-based analysis, rigorous statistical forecasting, and systematic impact evaluation.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
    },
    {
      title: "Graduate Students",
      subtitle: "Academic & Career Bridge",
      desc: "Aspiring to prestigious careers in public policy, governance, or advanced data analytics, looking to bridge academic theory with real-world practice.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
    },
    {
      title: "Researchers & Practitioners",
      subtitle: "Field Applications",
      desc: "Development practitioners working with public datasets, social impact metrics, and interdisciplinary indices to compile high-impact policy briefs.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
    },
    {
      title: "Social Entrepreneurs",
      subtitle: "Data-Driven Innovation",
      desc: "Innovators designing data-driven interventions for social good, seeking to maximize community impact and validate solutions with concrete metrics.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-20 px-6 max-w-5xl mx-auto">
      {/* Decorative backdrop glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-linear-to-b from-(--color-bg-light-warm) to-transparent rounded-full blur-3xl opacity-30 -z-10" />
      
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold text-(--color-gold-dark) tracking-widest uppercase block mb-3">
          Target Audience
        </span>
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800 tracking-tight leading-tight">
          Who Should <span className="text-(--color-green-medium) relative inline-block">
            Enroll?
            <span className="absolute bottom-1 left-0 w-full h-[4px] bg-(--color-gold-light)/40 -z-10" />
          </span>
        </h2>
        <p className="text-gray-600 mt-4 text-[15px] leading-relaxed">
          Our online fellowship is engineered for ambitious professionals, students, and researchers ready to elevate their analytical power and drive meaningful change in public policy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {audiences.map((aud, index) => (
          <AudienceCard
            key={index}
            title={aud.title}
            subtitle={aud.subtitle}
            desc={aud.desc}
            icon={aud.icon}
          />
        ))}
      </div>
    </section>
  );
};
