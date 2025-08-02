'use client';
import React from 'react';
import { useRef } from 'react';
import AboutSection from "./sections/AboutSection";
import TimelineSection from "./sections/TimelineSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import AchievementsSection from "./sections/AchievementsSection";
import ResumeSection from "./sections/ResumeSection";
import BlogSection from "./sections/BlogSection";
import EducationSection from "./sections/EducationSection";
import ContactSection from "./sections/ContactSection";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";


export default function Home() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const homeRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const achievementsRef = useRef<HTMLDivElement | null>(null);
  const resumeRef = useRef<HTMLDivElement | null>(null);
  const blogRef = useRef<HTMLDivElement | null>(null);
  const educationRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const contactbtnRef = useRef<HTMLButtonElement>(null);



  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <Navbar
  scrollToSection={scrollToSection}
  scrollToContact={scrollToContact}
  homeRef={homeRef}
  aboutRef={aboutRef}
  timelineRef={timelineRef}
  skillsRef={skillsRef}
  projectsRef={projectsRef}
  achievementsRef={achievementsRef}
  resumeRef={resumeRef}
  blogRef={blogRef}
  educationRef={educationRef}
  contactRef={contactRef}
  contactbtnRef={contactbtnRef}
/>


      {/* Hero Section */}
      <Hero homeRef={homeRef} contactbtnRef={contactbtnRef} scrollToContact={scrollToContact} />
      <AboutSection ref={aboutRef} />
      <TimelineSection ref={timelineRef} />
      <SkillsSection ref={skillsRef} />
      <ProjectsSection ref={projectsRef} />
      <AchievementsSection ref={achievementsRef} />
      <ResumeSection ref={resumeRef} />
      {/* <BlogSection ref={blogRef} /> */}
      <EducationSection ref={educationRef} />
      <ContactSection ref={contactRef} />

      {/* Footer */}
      <footer className="py-8 text-center text-white/40 text-sm border-t border-white/10 bg-black">
        © {new Date().getFullYear()} Manideep Nera. All rights reserved.
      </footer>
    </main>
  );
}
