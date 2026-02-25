import { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedBackground from '@/components/AnimatedBackground';
import ProfileImage from '@/components/ProfileImage';
import { Mail, Phone, Linkedin, Github, ArrowRight } from 'lucide-react';

export default function Index() {
  const [contactSubmitting, setContactSubmitting] = useState(false);

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContactSubmitting(true);
    // Formspree handles the form submission automatically
    // The form will submit via POST to Formspree
  };

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
            <a href="#" className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              MR
            </a>
            <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
              <a href="#projects" className="text-xs sm:text-sm hover:text-neon-blue transition-colors hidden sm:inline">Projects</a>
              <a href="#skills" className="text-xs sm:text-sm hover:text-neon-blue transition-colors hidden sm:inline">Skills</a>
              <a href="#experience" className="text-xs sm:text-sm hover:text-neon-blue transition-colors hidden md:inline">Experience</a>
              <a href="#contact" className="text-xs sm:text-sm hover:text-neon-blue transition-colors">Contact</a>
              <a href="#" className="px-2 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-neon-blue to-neon-purple text-background rounded text-xs sm:text-sm font-semibold button-glow">
                Resume
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            {/* Left: Text Content */}
            <div className="flex flex-col justify-center min-w-0">
              <div className="mb-4 sm:mb-6 md:mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 text-white break-words">
                  Manish Raina
                </h1>
                <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-neon-blue font-semibold mb-2 sm:mb-3">
                  AI/ML Engineer | Full Stack Developer | Research-Focused Engineer
                </p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-foreground/80 leading-relaxed">
                  I'm a technology-driven problem solver passionate about creating intelligent learning systems that adapt and improve. With hands-on experience in Python, deep learning, and modern web technologies, I design AI-powered solutions that bridge logic with innovation.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
                <Link
                  to="/projects"
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-neon-blue to-neon-cyan text-background font-semibold rounded text-xs sm:text-sm md:text-base button-glow hover:shadow-lg transition-all"
                >
                  View Projects
                </Link>
                <a
                  href="#contact"
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 border border-neon-blue/50 text-neon-blue font-semibold rounded text-xs sm:text-sm md:text-base button-glow hover:bg-neon-blue/10 transition-all"
                >
                  Contact Me
                </a>
                <a
                  href="#"
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 border border-neon-purple/50 text-neon-purple font-semibold rounded text-xs sm:text-sm md:text-base button-glow hover:bg-neon-purple/10 transition-all"
                >
                  Resume
                </a>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col gap-2 sm:gap-3 text-xs sm:text-sm">
                <a href="mailto:manishraina2009@gmail.com" className="flex items-center gap-3 hover:text-neon-blue transition-colors">
                  <Mail size={18} /> manishraina2009@gmail.com
                </a>
                <a href="tel:+916005001995" className="flex items-center gap-3 hover:text-neon-blue transition-colors">
                  <Phone size={18} /> +91 6005001995
                </a>
                <div className="flex gap-4 mt-4">
                  <a href="https://linkedin.com/in/manish-raina-53278028b/" target="_blank" rel="noopener noreferrer" className="hover:text-neon-blue transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://github.com/manishraina0904" target="_blank" rel="noopener noreferrer" className="hover:text-neon-blue transition-colors">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Profile Image */}
            <div className="flex justify-center sm:justify-end">
              <ProfileImage 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                alt="Manish Raina"
              />
            </div>
          </div>
        </section>

        {/* Experience & Certifications Section */}
        <section id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="section-title">Experience & Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            <div className="glow-border p-6 rounded-lg bg-card/50">
              <h3 className="text-xl font-semibold text-neon-blue mb-2">
                Machine Learning with Python Internship
              </h3>
              <p className="text-foreground/80 font-medium mb-1">EISystems Technologies</p>
              <p className="text-foreground/60 text-sm">Focused on practical ML implementations and Python best practices</p>
            </div>

            <div className="glow-border p-6 rounded-lg bg-card/50">
              <h3 className="text-xl font-semibold text-neon-blue mb-2">
                Machine Learning Research Intern
              </h3>
              <p className="text-foreground/80 font-medium mb-1">NIT Delhi</p>
              <p className="text-foreground/60 text-sm">July 2025 – August 2025</p>
            </div>

            <div className="glow-border p-6 rounded-lg bg-card/50">
              <h3 className="text-xl font-semibold text-neon-blue mb-2">
                Hackathon Participant
              </h3>
              <p className="text-foreground/80 font-medium mb-1">HackOps Savisjar</p>
              <p className="text-foreground/60 text-sm">2024 - Building innovative solutions under pressure</p>
            </div>

            <div className="glow-border p-6 rounded-lg bg-card/50">
              <h3 className="text-xl font-semibold text-neon-blue mb-2">
                Advanced Diploma in Software Technology
              </h3>
              <p className="text-foreground/80 font-medium mb-1">Supertech India</p>
              <p className="text-foreground/60 text-sm">Comprehensive software development training</p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="section-title">Education</h2>
          <div className="space-y-6">
            <div className="glow-border p-6 rounded-lg bg-card/50">
              <h3 className="text-xl font-semibold text-neon-blue mb-2">
                Panipat Institute of Engineering & Technology
              </h3>
              <p className="text-foreground/80 font-medium mb-1">B.Tech – Artificial Intelligence & Machine Learning</p>
              <p className="text-foreground/60 text-sm">August 2022 – August 2026</p>
            </div>

            <div className="glow-border p-6 rounded-lg bg-card/50">
              <h3 className="text-xl font-semibold text-neon-blue mb-2">
                Kotwal National Institute of Teaching School
              </h3>
              <p className="text-foreground/80 font-medium mb-1">Senior Secondary</p>
              <p className="text-foreground/60 text-sm">2018 – 2022</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="section-title">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Programming */}
            <div className="glow-border p-6 rounded-lg bg-card/50">
              <h3 className="text-lg font-semibold text-neon-blue mb-4 flex items-center gap-2">
                <span>💻</span> Programming Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Python', 'JavaScript', 'TypeScript', 'C', 'C++', 'SQL', 'HTML', 'CSS'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 rounded-full text-sm font-medium text-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks & Tools */}
            <div className="glow-border p-6 rounded-lg bg-card/50">
              <h3 className="text-lg font-semibold text-neon-blue mb-4 flex items-center gap-2">
                <span>🛠️</span> Frameworks & Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'TensorFlow', 'PyTorch', 'Pandas', 'Scikit-learn', 'Node.js', 'Express', 'MongoDB'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 border border-neon-purple/30 rounded-full text-sm font-medium text-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {[
              {
                title: 'Heart Disease Survival Prediction',
                description: 'ML model predicting patient survival rates using health metrics and advanced algorithms',
                tags: ['Python', 'TensorFlow', 'Healthcare'],
                year: '2023-2024',
              },
              {
                title: 'Sentiment-Aware Recommendation System',
                description: 'AI system analyzing user sentiment to provide personalized product recommendations',
                tags: ['ML', 'NLP', 'Python'],
                year: '2023-2024',
              },
              {
                title: 'Accessibility Video Call System',
                description: 'Web platform enabling video communication with real-time accessibility features',
                tags: ['React', 'WebRTC', 'A11y'],
                year: '2022-2023',
              },
            ].map((project, index) => (
              <Link
                key={index}
                to={`/project/${index + 1}`}
                className="group glow-border p-6 rounded-lg bg-card/50 hover:bg-card/80 transition-all cursor-pointer"
              >
                <div className="h-32 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded mb-4 flex items-center justify-center">
                  <span className="text-4xl">✨</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 bg-neon-blue/20 text-neon-blue rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-neon-blue text-sm font-semibold group-hover:gap-2 transition-all">
                  View Details <ArrowRight size={16} className="ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="section-title">Latest Articles</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {[
              {
                title: 'Getting Started with Deep Learning',
                excerpt: 'A beginner\'s guide to understanding neural networks and building your first model',
                date: 'Dec 15, 2024',
              },
              {
                title: 'ML Model Optimization Techniques',
                excerpt: 'Explore practical techniques to optimize your ML models for production performance',
                date: 'Dec 8, 2024',
              },
              {
                title: 'Building Scalable Web Applications',
                excerpt: 'Best practices for architecting web apps that grow with your user base',
                date: 'Dec 1, 2024',
              },
            ].map((post, index) => (
              <Link
                key={index}
                to={`/blog/${index + 1}`}
                className="group glow-border p-6 rounded-lg bg-card/50 hover:bg-card/80 transition-all cursor-pointer"
              >
                <div className="text-sm text-neon-purple mb-2">{post.date}</div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-neon-blue transition-colors">
                  {post.title}
                </h3>
                <p className="text-foreground/70 text-sm mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-neon-blue text-sm font-semibold group-hover:gap-2 transition-all">
                  Read More <ArrowRight size={16} className="ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="section-title">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Let's Connect</h3>
                <p className="text-foreground/70 mb-6">
                  I'm always interested in discussing AI/ML projects, research opportunities, or exciting full-stack development challenges. Feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="text-neon-blue mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <a href="mailto:manishraina2009@gmail.com" className="text-neon-blue hover:underline">
                      manishraina2009@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-neon-blue mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <a href="tel:+916005001995" className="text-neon-blue hover:underline">
                      +91 6005001995
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Linkedin className="text-neon-blue mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-white">LinkedIn</p>
                    <a href="https://linkedin.com/in/manish-raina-53278028b/" target="_blank" rel="noopener noreferrer" className="text-neon-blue hover:underline">
                      Connect with me
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Github className="text-neon-blue mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-white">GitHub</p>
                    <a href="https://github.com/manishraina0904" target="_blank" rel="noopener noreferrer" className="text-neon-blue hover:underline">
                      Check my projects
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Formspree */}
            <form 
              onSubmit={handleContactSubmit}
              action="https://formspree.io/f/mgvnnzql" 
              method="POST"
              className="glow-border p-8 rounded-lg bg-card/50"
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-2 bg-background/50 border border-border/50 rounded-lg text-foreground focus:outline-none focus:border-neon-blue/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 bg-background/50 border border-border/50 rounded-lg text-foreground focus:outline-none focus:border-neon-blue/50 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-background/50 border border-border/50 rounded-lg text-foreground focus:outline-none focus:border-neon-blue/50 transition-colors"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={contactSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-cyan text-background font-semibold rounded-lg button-glow hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {contactSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border/50 bg-background/50 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-foreground/60 text-sm">
              © 2024 Manish Raina. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="https://linkedin.com/in/manish-raina-53278028b/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-neon-blue transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/manishraina0904" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-neon-blue transition-colors">
                GitHub
              </a>
              <a href="mailto:manishraina2009@gmail.com" className="text-foreground/60 hover:text-neon-blue transition-colors">
                Email
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
