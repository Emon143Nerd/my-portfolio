'use client'

import { useState } from 'react'

export default function Portfolio() {
  const [activeNav, setActiveNav] = useState('home')

  const scrollToSection = (id: string) => {
    setActiveNav(id)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            Emon Bepari.
          </button>

          <div className="flex gap-8 items-center">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-sm font-medium transition-colors ${
                activeNav === 'home' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`text-sm font-medium transition-colors ${
                activeNav === 'about' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={`text-sm font-medium transition-colors ${
                activeNav === 'skills' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`text-sm font-medium transition-colors ${
                activeNav === 'projects' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className={`text-sm font-medium transition-colors ${
                activeNav === 'experience' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className={`text-sm font-medium transition-colors ${
                activeNav === 'education' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`text-sm font-medium transition-colors ${
                activeNav === 'contact' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Contact
            </button>
            <a
              href="mailto:emon99284@gmail.com"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-primary text-sm font-medium uppercase tracking-wide mb-4">Building innovative tech solutions</p>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
                Full-Stack Engineer building <span className="text-primary">scalable, innovative</span> healthcare systems and AI solutions.
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I design and develop modern applications with expertise in full-stack development, AI/ML integration, IoT systems, and real-time platforms. Focused on creating products that are performant, elegant, and ready for real-world use.
              </p>

              <div className="flex gap-6 mb-8 text-muted-foreground text-sm">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Full-Stack Development
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Healthcare Systems
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  AI/ML Integration
                </span>
              </div>

              <div className="flex gap-4 mb-8">
                <a
                  href="#projects"
                  onClick={() => scrollToSection('projects')}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all inline-flex items-center gap-2"
                >
                  View Projects
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="mailto:emon99284@gmail.com"
                  className="px-6 py-3 border border-muted rounded-lg font-semibold hover:bg-muted/50 transition-all"
                >
                  Contact Me
                </a>
              </div>

              <div className="flex gap-6">
                <a
                  href="https://github.com/Emon143Nerd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/emon-bepari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:emon99284@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm"
                >
                  Email
                </a>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-3xl"></div>
                <img
                  src="/profile.png"
                  alt="Emon Bepari"
                  className="relative w-72 h-96 rounded-2xl object-cover border border-border shadow-2xl"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-card/80 backdrop-blur-md rounded-lg p-4 border border-border">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">ENGINEERING FOCUS</p>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-muted-foreground">Stack</p>
                    <p className="text-sm text-foreground">React · Next · Node · Python</p>
                    <p className="text-xs font-semibold text-muted-foreground mt-2">Core</p>
                    <p className="text-sm text-foreground">Full-Stack · AI/ML · IoT · DSA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <p className="text-primary text-sm font-medium uppercase tracking-wide mb-4">ABOUT ME</p>

          <h2 className="text-5xl md:text-6xl font-bold mb-12">
            Engineering with <span className="text-primary">clarity, structure</span>, and real-world impact.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed">
                I am a Computer Science student at United International University focused on full-stack development, healthcare systems, and AI integration. I enjoy transforming ideas into robust digital products with strong engineering discipline.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">What I Bring</h3>
              <p className="text-muted-foreground leading-relaxed">
                Strong problem-solving, solid computer science fundamentals, full-stack development experience, and a mindset of continuous learning. I care about maintainable code, performance, scalability, and real-world business value.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Career Direction</h3>
              <p className="text-muted-foreground leading-relaxed">
                I am interested in full-stack development, healthcare tech, AI/ML integration, backend systems, and product-focused engineering roles where I can solve meaningful technical challenges and build scalable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-primary text-sm font-medium uppercase tracking-wide mb-4">TECHNICAL PROFILE</p>

          <h2 className="text-5xl md:text-6xl font-bold mb-4">Skills & Technology Stack</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            A structured skill set across full-stack development, modern tools, backend systems, and AI/ML.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <h3 className="font-bold uppercase text-sm tracking-wide">Languages</h3>
              </div>
              <div className="space-y-2">
                {['JavaScript', 'TypeScript', 'Python', 'C++', 'SQL'].map(skill => (
                  <p key={skill} className="text-sm text-muted-foreground">{skill}</p>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="font-bold uppercase text-sm tracking-wide">Frontend</h3>
              </div>
              <div className="space-y-2">
                {['React', 'Next.js', 'Tailwind CSS', 'shadcn/ui', 'TanStack Query'].map(skill => (
                  <p key={skill} className="text-sm text-muted-foreground">{skill}</p>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
                <h3 className="font-bold uppercase text-sm tracking-wide">Backend</h3>
              </div>
              <div className="space-y-2">
                {['Node.js', 'Express.js', 'Prisma ORM', 'PostgreSQL', 'FastAPI'].map(skill => (
                  <p key={skill} className="text-sm text-muted-foreground">{skill}</p>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                <h3 className="font-bold uppercase text-sm tracking-wide">Tools & AI</h3>
              </div>
              <div className="space-y-2">
                {['Git & GitHub', 'YOLOv8', 'Stripe', 'Redis', 'Claude AI', 'RAG Systems'].map(skill => (
                  <p key={skill} className="text-sm text-muted-foreground">{skill}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <p className="text-primary text-sm font-medium uppercase tracking-wide mb-4">PORTFOLIO</p>

          <h2 className="text-5xl md:text-6xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Selection of my most impactful work demonstrating expertise in full-stack development, AI/ML, and healthcare systems.
          </p>

          <div className="space-y-8">
            <div className="bg-background border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2">E-Doctor: Multi-Role Healthcare Platform</h3>
              <p className="text-muted-foreground mb-4">
                End-to-end healthcare system with AI medical assistant, real-time appointments, and secure payments. Built with modern tech stack for scalability and performance.
              </p>

              <div className="mb-4">
                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'Stripe', 'RAG', 'Redis'].map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs border border-primary/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Key Highlights</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• AI-powered medical assistant with RAG for context-aware clinical data</li>
                  <li>• Secure authentication & automated appointment notifications</li>
                  <li>• Stripe webhook integration for seamless payment processing</li>
                  <li>• High-performance responsive UI with real-time updates</li>
                </ul>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/Emon143Nerd/e-doctor-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-cyan-300 transition-colors text-sm font-medium flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  Frontend
                </a>
                <a
                  href="https://github.com/Emon143Nerd/healthcare-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-cyan-300 transition-colors text-sm font-medium flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  Backend
                </a>
              </div>
            </div>

            <div className="bg-background border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2">ShasthoAI: Bone Fracture Detection System</h3>
              <p className="text-muted-foreground mb-4">
                AI-powered diagnostic platform using YOLOv8 for real-time fracture detection with high accuracy. Deployed as integrated healthcare solution.
              </p>

              <div className="mb-4">
                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Express.js', 'MongoDB', 'YOLOv8', 'FastAPI', 'Python'].map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs border border-primary/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Key Highlights</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Specialized dataset creation and YOLOv8 model training</li>
                  <li>• Surpassed legacy model benchmarks with improved accuracy</li>
                  <li>• Real-time healthcare platform integration via FastAPI</li>
                  <li>• Rigorous system testing and model validation</li>
                </ul>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/Emon143Nerd/ShasthoAI-fracture-detection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-cyan-300 transition-colors text-sm font-medium flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  Repository
                </a>
                <a
                  href="https://shastho-ai-fracture-detection-clien.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-cyan-300 transition-colors text-sm font-medium flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  Live Demo
                </a>
              </div>
            </div>

            <div className="bg-background border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2">PhysioSmart: IoT Wheelchair & Health Monitoring</h3>
              <p className="text-muted-foreground mb-4">
                Automated IoT system for medication verification and real-time patient health monitoring. Hardware-software integration for patient safety.
              </p>

              <div className="mb-4">
                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Raspberry Pi', 'OCR API', 'IoT', 'gTTS', 'Hardware Integration'].map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs border border-primary/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Key Highlights</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Embedded IoT system with Raspberry Pi camera integration</li>
                  <li>• Automated OCR text extraction and text-to-speech feedback</li>
                  <li>• Real-time prescription matching and voice alerts</li>
                  <li>• Hardware-software integration for patient safety</li>
                </ul>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/Emon143Nerd/TechNerds_Micro_lab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-cyan-300 transition-colors text-sm font-medium flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-primary text-sm font-medium uppercase tracking-wide mb-4">EXPERIENCE</p>

          <h2 className="text-5xl md:text-6xl font-bold mb-12">Professional Experience</h2>

          <div className="space-y-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Research Assistant</h3>
                  <p className="text-primary font-medium">United International University</p>
                </div>
                <span className="text-sm text-muted-foreground">2024 - Present</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Contributing to IoT Lab research projects focusing on healthcare automation and embedded systems. Developing innovative solutions for real-time health monitoring and medical device integration.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Full-Stack Developer Intern</h3>
                  <p className="text-primary font-medium">Healthcare Startup</p>
                </div>
                <span className="text-sm text-muted-foreground">2023 - 2024</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Developed and maintained full-stack healthcare applications using Next.js and Node.js. Implemented secure payment processing with Stripe and real-time features with WebSockets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <p className="text-primary text-sm font-medium uppercase tracking-wide mb-4">EDUCATION</p>

          <h2 className="text-5xl md:text-6xl font-bold mb-12">Academic Background</h2>

          <div className="space-y-8">
            <div className="bg-background border border-border rounded-lg p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">B.Sc. in Computer Science & Engineering</h3>
                  <p className="text-primary font-medium">United International University</p>
                </div>
                <span className="text-sm text-muted-foreground">Expected: March 2026</span>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p>CGPA: 3.91/4.0</p>
                <p>100% & 50-75% Scholarship throughout university</p>
                <p>Champions Award in Electronics Lab - IoT shuttle service project</p>
                <p>First Runner-up in Microprocessors Lab - Smart wheelchair project</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-primary text-sm font-medium uppercase tracking-wide mb-4">GET IN TOUCH</p>

          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Let&apos;s build something <span className="text-primary">amazing together</span>.
          </h2>

          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="mailto:emon99284@gmail.com"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              Send me an email
            </a>
            <a
              href="https://www.linkedin.com/in/emon-bepari"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-muted rounded-lg font-semibold hover:bg-muted/50 transition-all"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Emon Bepari. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/Emon143Nerd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/emon-bepari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="mailto:emon99284@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
