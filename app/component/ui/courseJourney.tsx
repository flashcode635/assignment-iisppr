"use client";

import { phases } from "@/app/lib/data";
import React, { useState } from "react";

export const CourseJourney = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(0);
  return (
    <section className="journey-container relative py-20 px-6 max-w-6xl mx-auto">
      {/* Background shape */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-linear-to-tr from-(--color-gold-light)/10 to-transparent rounded-full blur-3xl opacity-30 -z-10" />

      <div className="journey-header opacity-0 text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold text-(--color-gold-dark) tracking-widest uppercase block mb-3">
          Syllabus & Journey
        </span>
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800 tracking-tight leading-tight">
          Your Learning <span className="text-(--color-green-medium) relative inline-block">
            Journey
            <span className="absolute bottom-1 left-0 w-full h-1 bg-(--color-gold-light)/40 -z-10" />
          </span>
        </h2>
        <p className="text-gray-600 mt-4 text-[15px] leading-relaxed">
          Embark on an intensive 15-stage research journey. Master structural scientific standards from foundational lit reviews to complex qualitative and discursive analyses.
        </p>
      </div>

      {/* Phase Selector Tabs */}
      <div className="journey-tabs opacity-0 flex flex-col md:flex-row gap-4 justify-center items-stretch mb-12 max-w-4xl mx-auto">
        {phases.map((phase, idx) => {
          const isActive = idx === activePhaseIndex;
          return (
            <button
              key={idx}
              onClick={() => {
                setActivePhaseIndex(idx);
                setActiveStepIndex(0); // Reset to first step of the phase
              }}
              className={`flex-1 text-left p-5 rounded-2xl border transition-all duration-300 ${
                isActive
                  ? "bg-(--color-green-dark) border-(--color-gold-medium) text-white shadow-[0_10px_25px_rgba(50,79,60,0.15)]"
                  : "bg-white border-(--color-bg-border) text-gray-700 hover:border-gray-300 hover:bg-gray-50/50"
              }`}
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${
                    isActive ? "text-(--color-gold-medium)" : "text-(--color-gold-dark)"
                  }`}>
                    Phase 0{idx + 1}
                  </span>
                  <h3 className="font-bold text-base leading-tight mb-2">
                    {phase.title.split(": ")[1]}
                  </h3>
                </div>
                <p className={`text-xs leading-relaxed mt-2 line-clamp-2 ${
                  isActive ? "text-gray-200" : "text-gray-500"
                }`}>
                  {phase.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Phase Details Container */}
      <div className="journey-box opacity-0 grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white border border-(--color-bg-border) rounded-3xl p-6 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.03)]">
        {/* Timeline (Left 7 Columns) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="mb-4">
            <span className="text-xs font-semibold text-(--color-gold-dark) tracking-wider uppercase block">
              Curriculum Roadmap
            </span>
            <h4 className="text-xl font-serif text-gray-800 font-bold mt-1">
              {phases[activePhaseIndex].title}
            </h4>
          </div>

          <div className="relative pl-6 border-l border-gray-100 flex flex-col gap-3">
            {phases[activePhaseIndex].steps.map((step, idx) => {
              const isStepActive = idx === activeStepIndex;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`group relative flex items-start gap-4 p-4 rounded-xl cursor-pointer border transition-all duration-300 ${
                    isStepActive
                      ? "bg-(--color-bg-cream) border-(--color-gold-light) shadow-sm"
                      : "bg-transparent border-transparent hover:bg-gray-50/50 hover:border-gray-100"
                  }`}
                >
                  {/* Active timeline connector indicator */}
                  <div className={`absolute -left-7.75 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 ${
                    isStepActive
                      ? "bg-(--color-gold-dark) border-white ring-4 ring-(--color-gold-light)/40 scale-110"
                      : "bg-gray-200 border-white group-hover:bg-(--color-gold-dark)/60"
                  }`} />

                  {/* Step Number Circle */}
                  <div className={`shrink-0 w-10 h-10 rounded-full font-bold text-xs flex items-center justify-center border transition-all duration-300 ${
                    isStepActive
                      ? "bg-(--color-green-dark) text-white border-transparent"
                      : "bg-white text-gray-500 border-(--color-bg-border) group-hover:border-gray-300"
                  }`}>
                    {step.number}
                  </div>

                  {/* Step Brief Info */}
                  <div className="flex-1 min-w-0">
                    <h5 className={`font-bold text-sm md:text-[15px] leading-snug transition-colors duration-200 ${
                      isStepActive ? "text-gray-900" : "text-gray-700 group-hover:text-gray-900"
                    }`}>
                      {step.title}
                    </h5>
                    <span className="inline-block text-[11px] font-medium text-gray-500 mt-1 uppercase tracking-wider">
                      {step.focus}
                    </span>
                  </div>
                  
                  {/* Arrow Indicator */}
                  <div className={`text-gray-400 group-hover:text-gray-600 transition-transform duration-300 self-center ${
                    isStepActive ? "rotate-90 translate-x-1 text-(--color-gold-dark)" : ""
                  }`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Step Inspector Card (Right 5 Columns) */}
        <div className="lg:col-span-5 lg:border-l lg:border-gray-100 lg:pl-8 flex flex-col justify-between">
          {activeStepIndex !== null ? (
            <div className="h-full flex flex-col justify-between py-2">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-(--color-gold-light)/20 text-(--color-gold-dark) text-[11px] font-extrabold uppercase px-3 py-1 rounded-full border border-(--color-gold-light)/30">
                    Step {phases[activePhaseIndex].steps[activeStepIndex].number}
                  </span>
                  <span className="text-gray-400 text-xs font-medium">Core Objective</span>
                </div>

                <h4 className="text-xl md:text-2xl font-serif text-gray-900 leading-tight mb-4">
                  {phases[activePhaseIndex].steps[activeStepIndex].title}
                </h4>

                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">
                      Focus Area
                    </span>
                    <p className="text-sm font-semibold text-(--color-green-dark)">
                      {phases[activePhaseIndex].steps[activeStepIndex].focus}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">
                      Curriculum & Practical Training
                    </span>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {phases[activePhaseIndex].steps[activeStepIndex].details}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Decorative Callout */}
              <div className="bg-(--color-bg-cream) border border-(--color-bg-border) rounded-2xl p-5 mt-4">
                <div className="flex gap-3">
                  <div className="text-(--color-gold-dark) shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                  </div>
                  <div>
                    <h6 className="font-bold text-xs text-gray-800 mb-0.5">
                      Academic Rigor
                    </h6>
                    <p className="text-[11px] text-gray-500 leading-normal">
                      Every step involves practical exercises and immediate critique from senior global research fellows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-center p-8">
              <p className="text-sm text-gray-400">
                Select a research step on the left to inspect curriculum details.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
