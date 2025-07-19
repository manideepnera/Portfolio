// 'use client';
// import Image from 'next/image';
// import { useRef } from 'react';

// export default function Home() {
//   const aboutRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
//   const homeRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
//   const timelineRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
//   const achievementsRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
//   const resumeRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
//   const blogRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
//   const educationRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
//   const contactRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
//   const projectsRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
//   const skillsRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

//   const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
//     ref.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <main className="min-h-screen bg-black text-white font-sans">
//       {/* Navbar */}
//       <nav className="flex justify-between items-center px-6 py-4 border-b border-white/10 sticky top-0 z-50 bg-black">
//         <div className="text-white font-semibold text-lg cursor-pointer" onClick={() => scrollToSection(homeRef)}>
//           Manideep Nera
//         </div>
//         <ul className="hidden md:flex gap-6 text-sm text-white/70">
//           <li className="hover:text-white cursor-pointer" onClick={() => scrollToSection(aboutRef)}>About</li>
//           <li className="hover:text-white cursor-pointer" onClick={() => scrollToSection(timelineRef)}>Timeline</li>
//           <li className="hover:text-white cursor-pointer" onClick={() => scrollToSection(skillsRef)}>Skills</li>
//           <li className="hover:text-white cursor-pointer" onClick={() => scrollToSection(projectsRef)}>Projects</li>
//           <li className="hover:text-white cursor-pointer" onClick={() => scrollToSection(achievementsRef)}>Achievements</li>
//           <li className="hover:text-white cursor-pointer" onClick={() => scrollToSection(resumeRef)}>Resume</li>
//           <li className="hover:text-white cursor-pointer" onClick={() => scrollToSection(blogRef)}>Blog</li>
//           <li className="hover:text-white cursor-pointer" onClick={() => scrollToSection(educationRef)}>Education</li>
//           <li className="hover:text-white cursor-pointer" onClick={() => scrollToSection(contactRef)}>Contact</li>
//         </ul>
//         <button className="text-sm border border-white/20 rounded-md px-4 py-1.5 hover:bg-white hover:text-black transition">
//           Contact
//         </button>
//       </nav>

//       {/* Hero Section */}
//       <section ref={homeRef} className="flex flex-col md:flex-row min-h-[100vh] w-full">
//         {/* Left */}
//         <div className="w-full md:w-1/2 px-6 sm:px-12 flex flex-col justify-center gap-6 py-16">
//           <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
//             Product Designer <br /> based in Nepal.
//           </h1>
//           <p className="text-white/60 text-base sm:text-lg max-w-md">
//             Hi, I’m Manideep Nera — a passionate developer exploring AI and web technologies.
//           </p>
//           <div className="flex items-center gap-4 mt-2">
//             <button className="px-5 py-2 text-sm border border-white/20 rounded-md hover:bg-white hover:text-black transition">
//               Contact
//             </button>
//             <span className="text-green-400 text-sm">● Available for collaboration.</span>
//           </div>
//         </div>

//         {/* Right */}
//         <div className="w-full md:w-1/2 relative min-h-[400px]">
//           <Image
//             src="/profile.png"
//             alt="Profile"
//             fill
//             className="object-cover object-center"
//           />
//         </div>
//       </section>

//       {/* About Section */}
//       <section ref={aboutRef} className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#0a0a0a]">
//         <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
//         <p className="text-white/60 max-w-3xl text-lg leading-relaxed">
//           As a driven and passionate student, I’m committed to turning my academic achievements and extracurricular involvement into real-world impact. With a strong grasp of technical skills and a creative mindset, I enjoy building innovative solutions and exploring new ideas. I'm known for being hardworking, adaptable, and a dependable team player who thrives in collaborative environments. I’m always excited to take on new challenges, grow through experience, and contribute meaningfully to projects that aim to make a difference.
//         </p>
//       </section>

//       {/* Timeline Section */}
//       <section ref={timelineRef} className="py-24 px-6 sm:px-12 border-t border-white/10 bg-black">
//         <h2 className="text-3xl sm:text-4xl font-bold mb-6">Timeline</h2>
//         <p className="text-white/60 max-w-3xl text-lg leading-relaxed">
//           My journey in design and development has been shaped by diverse experiences, from internships to personal projects. Each step has taught me valuable lessons in creativity, problem-solving, and collaboration.
//         </p>
//         <ul className="mt-6 space-y-4">
//           <li className="flex items-start">
//             <span className="w-4 h-4 bg-green-500 rounded-full mt -1 mr-3"></span>
//             <div>
//               <h3 className="text-lg font-semibold">2023 - Present</h3>
//               <p className="text-white/60">Product Design Intern at XYZ Company</p>
//             </div>
//           </li>
//           <li className="flex items-start">
//             <span className="w-4 h-4 bg-green-500 rounded-full mt -1 mr-3"></span>
//             <div>
//               <h3 className="text-lg font-semibold">2022</h3>
//               <p className="text-white/60">Freelance Web Designer</p>
//             </div>
//           </li>
//           <li className="flex items-start">
//             <span className="w-4 h-4 bg-green-500 rounded-full mt -1 mr-3"></span>
//             <div>
//               <h3 className="text-lg font-semibold">2021</h3>
//               <p className="text-white/60">Started my journey in UI/UX design</p>
//             </div>
//           </li>
//         </ul>
//       </section>

//       {/* Skills Section */}
//       <section ref={skillsRef} className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#0a0a0a]">
//         <h2 className="text-3xl sm:text-4xl font-bold mb-6">Skills</h2>
//         <p className="text-white/60 max-w-3xl text-lg leading-relaxed">
//           I specialize in creating user-friendly interfaces and experiences. My skills include
//           design thinking, prototyping, and user research. I’m proficient in tools like Figma, Adobe XD, and Sketch, and I have a solid understanding of HTML, CSS, and JavaScript for implementing designs.
//         </p>
//         <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
//           <li className="bg-white/10 p-4 rounded-lg">
//             <h3 className="text-lg font-semibold">UI/UX Design</h3>
//             <p className="text-white/60">Creating intuitive and engaging user experiences.</p>
//           </li>
//           <li className="bg-white/10 p-4 rounded-lg">
//             <h3 className="text-lg font-semibold">Prototyping</h3>
//             <p className="text-white/60">Building interactive prototypes to visualize ideas.</p>
//           </li>
//           <li className="bg-white/10 p-4 rounded-lg">
//             <h3 className="text-lg font-semibold">User Research</h3>
//             <p className="text-white/60">Conducting research to understand user needs and behaviors.</p>
//           </li>
//           <li className="bg-white/10 p-4 rounded-lg">
//             <h3 className="text-lg font-semibold">Front-end Development</h3>
//             <p className="text-white/60">Implementing designs using HTML, CSS, and JavaScript.</p>
//           </li>
//         </ul>
//       </section>

//       {/* Projects Section */}
//       <section ref={projectsRef} className="py-24 px-6 sm:px-12 border-t border-white/10 bg-black">
//         <h2 className="text-3xl sm:text-4xl font-bold mb-6">Projects</h2>
//         <p className="text-white/60 max-w-3xl text-lg leading-relaxed">
//           I have worked on various projects that showcase my skills in design and development. From personal projects to collaborative efforts, each project has helped me grow and learn new techniques.
//         </p>
//         <ul className="mt-6 space-y-4">
//           <li className="flex items-start">
//             <span className="w-4 h-4 bg-blue-500 rounded-full mt-1 mr-3"></span>
//             <div>
//               <h3 className="text-lg font-semibold">Portfolio Website</h3>
//               <p className="text-white/60">A personal portfolio showcasing my design work and projects.</p>
//             </div>
//           </li>
//           <li className="flex items-start">
//             <span className="w-4 h-4 bg-blue-500 rounded-full mt-1 mr-3"></span>
//             <div>
//               <h3 className="text-lg font-semibold">E-commerce App</h3>
//               <p className="text-white/60">A mobile app designed for a seamless shopping experience.</p>
//             </div>
//           </li>
//           <li className="flex items-start">
//             <span className="w-4 h-4 bg-blue-500 rounded-full mt  -1 mr-3"></span>
//             <div>
//               <h3 className="text-lg font-semibold">Social Media Platform</h3>
//               <p className="text-white/60">A platform designed to connect people and share content.</p>
//             </div>
//           </li>
//         </ul>
//       </section>

//       {/* Achievements Section */}
//       <section ref={achievementsRef} className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#0a0a0a]">
//         <h2 className="text-3xl sm:text-4xl font-bold mb-6">Achievements</h2>
//         <p className="text-white/60 max-w-3xl text-lg leading-relaxed">
//           Throughout my journey, I have been fortunate to receive recognition for my work. These achievements motivate me to continue pushing boundaries and striving for excellence.
//         </p>
//         <ul className="mt-6 space-y-4">
//           <li className="flex items-start">
//             <span className="w-4 h-4 bg-yellow-500 rounded-full mt-1 mr-3"></span>
//             <div>
//               <h3 className="text-lg font-semibold">Best Design Award</h3>
//               <p className="text-white/60">Received for outstanding UI/UX design in a national competition.</p>
//             </div>
//           </li>
//           <li className="flex items-start">
//             <span className="w-4 h-4 bg-yellow-500 rounded-full mt-1 mr-3"></span>
//             <div>
//               <h3 className="text-lg font-semibold">Hackathon Winner</h3>
//               <p className="text-white/60">Won first place in a hackathon for developing an innovative app.</p>
//             </div>
//           </li>
//           <li className="flex items-start">
//             <span className="w-4 h-4 bg-yellow-500 rounded-full mt-1 mr-3"></span>
//             <div>
//               <h3 className="text-lg font-semibold">Published Article</h3>
//               <p className="text-white/60">Authored an article on design trends published in a leading design magazine.</p>
//             </div>
//           </li>
//         </ul>
//       </section>

//       {/* Resume Section */}
//       <section ref={resumeRef} className="py-24 px-6 sm:px-12 border-t border-white/10 bg-black">
//         <h2 className="text-3xl sm:text-4xl font-bold mb-6">Resume</h2>
//         <p className="text-white/60 max-w-3xl text-lg leading-relaxed">
//           My resume highlights my academic achievements, skills, and experiences. It reflects my dedication to continuous learning and my passion for design and development.
//         </p>
//         <div className="mt-6">
//           <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2 text-sm border border-white/20 rounded-md hover:bg-white hover:text-black transition">
//             Download Resume
//           </a>
//         </div>
//       </section>

//       {/* Blog Section */}
//       <section ref={blogRef} className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#0a0a0a]">
//         <h2 className="text-3xl sm:text-4xl font-bold mb-6">Blog</h2>
//         <p className="text-white/60 max-w-3xl text-lg leading-relaxed">
//           I occasionally write about design, tech, and my journey in startups. My writings reflect what I’ve learned working on 50+ products and teaching aspiring designers and founders across the globe.
//         </p>
//         <ul className="mt-6 space-y-4">
//           <li className="flex items-start">
//             <span className="w-4 h-4 bg-purple-500 rounded-full mt-1 mr-3"></span>
//             <div>
//               <h3 className="text-lg font-semibold">Understanding Design Systems</h3>
//               <p className="text-white/60">A deep dive into the importance of design systems in product design.</p>
//             </div>
//           </li>
//           <li className="flex items-start">
//             <span className="w-4 h-4 bg-purple-500 rounded-full mt-1 mr-3"></span>
//             <div>
//               <h3 className="text-lg font-semibold">The Future of AI in Design</h3>
//               <p className="text-white/60">Exploring how AI is transforming the design landscape.</p>
//             </div>
//           </li>
//           <li className="flex items-start">
//             <span className="w-4 h-4 bg-purple-500 rounded-full mt-1 mr-3"></span>
//             <div>
//               <h3 className="text-lg font-semibold">Building User-Centric Products</h3>
//               <p className="text-white/60">Tips and strategies for creating products that resonate with users.</p>
//             </div>
//           </li>
//         </ul>
//       </section>


//       {/* Education Section */}
//       <section ref={educationRef} className="py-24 px-6 sm:px-12 border-t border-white/10 bg-black">
//         <h2 className="text-3xl sm:text-4xl font-bold mb-6">Education</h2>
//         <p className="text-white/60 max-w-3xl text-lg leading-relaxed">
//           I occasionally write about design, tech, and my journey in startups. My writings reflect what I’ve learned working on 50+ products and teaching aspiring designers and founders across the globe.
//         </p>
//       </section>

//       {/* Contact Section */}
//       <section ref={contactRef} className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#0a0a0a]">
//         <h2 className="text-3xl sm:text-4xl font-bold mb-6">Contact</h2>
//         <p className="text-white/60 max-w-3xl text-lg leading-relaxed">
//           I share tutorials, behind-the-scenes design breakdowns, and startup insights on my YouTube channel. Subscribe to see how I build products from idea to launch.
//         </p>
//       </section>

//       {/* Footer */}
//       <footer className="py-8 text-center text-white/40 text-sm border-t border-white/10 bg-black">
//         © {new Date().getFullYear()} Manideep Nera. All rights reserved.
//       </footer>
//     </main>
//   );
// }


'use client';
import Image from 'next/image';
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
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <div className="text-white font-semibold text-lg cursor-pointer" onClick={() => scrollToSection(homeRef)}>
          Manideep Nera
        </div>
        <ul className="hidden lg:flex gap-6 text-sm text-white/70">
          {([
            ['About', aboutRef],
            ['Timeline', timelineRef],
            ['Skills', skillsRef],
            ['Projects', projectsRef],
            ['Achievements', achievementsRef],
            ['Resume', resumeRef],
            ['Blog', blogRef],
            ['Education', educationRef],
            ['Contact', contactRef]
          ] as [string, React.RefObject<HTMLDivElement | null>][]).map(([label, ref]) => (
            <li key={label} className="hover:text-white cursor-pointer" onClick={() => scrollToSection(ref)}>{label}</li>
          ))}
        </ul>
        <button ref={contactbtnRef} onClick={scrollToContact} className="text-sm border border-white/20 rounded-md px-4 py-1.5 hover:bg-white hover:text-black transition">
          Contact
        </button>
      </nav>

      {/* Hero Section */}
      <section ref={homeRef} className="flex flex-col-reverse md:flex-row h-[740px] px-6 sm:px-12 py-32 items-center gap-10">
        <div className="md:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Product Designer <br /> based in Nepal.
          </h1>
          <p className="text-white/60 text-base sm:text-lg">
            Hi, I’m Manideep Nera — a passionate developer exploring AI and web technologies.
          </p>
          <div className="flex items-center gap-4">
            <button ref={contactbtnRef}  onClick={scrollToContact} className="px-5 py-2 text-sm border border-white/20 rounded-md hover:bg-white hover:text-black transition">
              Contact
            </button>
            <span className="text-green-400 text-sm">● Available for collaboration.</span>
          </div>
        </div>
        <div className="md:w-1/2 w-full max-w-md mx-auto relative aspect-square rounded-xl overflow-hidden border border-white/10 shadow-xl">
          <Image src="/profile.png" alt="Profile" fill className="object-cover object-center" />
        </div>
      </section>

      <AboutSection ref={aboutRef} />
      <TimelineSection ref={timelineRef} />
      <SkillsSection ref={skillsRef} />
      <ProjectsSection ref={projectsRef} />
      <AchievementsSection ref={achievementsRef} />
      <ResumeSection ref={resumeRef} />
      <BlogSection ref={blogRef} />
      <EducationSection ref={educationRef} />
      <ContactSection ref={contactRef} />

      {/* Footer */}
      <footer className="py-8 text-center text-white/40 text-sm border-t border-white/10 bg-black">
        © {new Date().getFullYear()} Manideep Nera. All rights reserved.
      </footer>
    </main>
  );
}
