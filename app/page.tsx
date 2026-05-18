"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "./globals.css";
import Navbar from "./component/navbar";
import { HeroSection } from "./component/layout/heroHome";
import { MainContent } from "./component/layout/mainContent";
import { FacultyComponent } from "./component/layout/faculty";
import { Footer } from "./component/layout/footer";

export default function Home() {
  useEffect(() => {
    // 1. Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // 2. Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth exponential deceleration curve
      smoothWheel: true,
    });

    // Update ScrollTrigger on Lenis scroll events
    lenis.on("scroll", ScrollTrigger.update);

    // Tell GSAP ticker to synchronise with Lenis' RAF loop
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // 3. GSAP Animations Context (enables clean scoped targeting & memory cleanup)
    const ctx = gsap.context(() => {
      
      // --- HERO SECTION INTRO ---
      gsap.fromTo(
        ".hero-pill",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2 }
      );
      gsap.fromTo(
        ".hero-heading",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.0, ease: "power4.out", delay: 0.4 }
      );
      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.6 }
      );
      gsap.fromTo(
        ".hero-btn",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.8, stagger: 0.15 }
      );

      // --- SCROLL ANIMATIONS ---

      // Program Info Box Elements
      gsap.fromTo(
        ".prog-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".prog-info-container",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Who Should Enroll Section Cards
      gsap.fromTo(
        ".enroll-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".enroll-card",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Course Journey Header
      gsap.fromTo(
        ".journey-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".journey-container",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Course Journey Phase Selector Tabs
      gsap.fromTo(
        ".journey-tabs",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".journey-tabs",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Course Journey Active Phase Timeline & Objective Box
      gsap.fromTo(
        ".journey-box",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".journey-box",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Faculty Spotlight Spot Cards
      gsap.fromTo(
        ".faculty-card",
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".faculty-section",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Leadership message quote box
      gsap.fromTo(
        ".leadership-box",
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.0,
          ease: "back.out(1.15)",
          scrollTrigger: {
            trigger: ".leadership-box",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
      
    });

    // Clean up animation contexts & scroll triggers on component unmount
    return () => {
      ctx.revert();
      lenis.destroy();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <main className="min-h-screen bg-(--color-primary-light) font-sans">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content Container */}
      <MainContent />

      {/* Faculty Spotlight & Leadership Message Section */}
      <FacultyComponent />

      {/* Footer */}
      <Footer />
    </main>
  );
}
