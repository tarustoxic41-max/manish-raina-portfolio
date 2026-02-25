import { useParams, Link } from 'react-router-dom';
import AnimatedBackground from '@/components/AnimatedBackground';
import { ArrowLeft } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Heart Disease Survival Prediction',
    description: 'Advanced machine learning model that predicts patient survival rates using comprehensive health metrics and sophisticated algorithms.',
    fullDescription: 'This project implements a robust ML pipeline using Python and TensorFlow to predict heart disease survival outcomes. The model analyzes various patient health indicators and provides accurate predictions that can assist medical professionals in treatment planning.',
    tags: ['Python', 'TensorFlow', 'Healthcare', 'Machine Learning'],
    year: '2023-2024',
    image: '✨',
    technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn', 'Flask'],
    challenges: [
      'Handling imbalanced medical data',
      'Feature engineering for health metrics',
      'Model validation with cross-validation',
    ],
    results: [
      '95% accuracy on test dataset',
      'Deployed on production server',
      'Successfully integrated with healthcare portal',
    ],
  },
  {
    id: 2,
    title: 'Sentiment-Aware Recommendation System',
    description: 'AI-powered system that analyzes user sentiment to deliver highly personalized product recommendations.',
    fullDescription: 'A sophisticated recommendation engine that combines sentiment analysis with collaborative filtering to provide context-aware product suggestions. The system learns from user interactions and sentiment patterns to improve recommendations over time.',
    tags: ['ML', 'NLP', 'Python', 'Recommendation'],
    year: '2023-2024',
    image: '🤖',
    technologies: ['Python', 'NLP', 'BERT', 'Keras', 'MongoDB'],
    challenges: [
      'Real-time sentiment analysis',
      'Scaling collaborative filtering',
      'Handling cold-start problem',
    ],
    results: [
      'Improved user engagement by 40%',
      'Reduced computational overhead by 35%',
      'Increased recommendation relevance',
    ],
  },
  {
    id: 3,
    title: 'Accessibility Video Call System',
    description: 'Innovative web platform enabling video communication with integrated accessibility features for diverse users.',
    fullDescription: 'A comprehensive video communication platform built with modern web technologies, featuring real-time video/audio streaming and built-in accessibility tools including captions, high contrast modes, and keyboard navigation.',
    tags: ['React', 'WebRTC', 'Accessibility', 'Web'],
    year: '2022-2023',
    image: '📹',
    technologies: ['React', 'WebRTC', 'Node.js', 'Socket.io', 'MongoDB'],
    challenges: [
      'Low-latency real-time communication',
      'Cross-browser compatibility',
      'Implementing robust accessibility',
    ],
    results: [
      'WCAG 2.1 AA compliant',
      'Sub-100ms latency achieved',
      'Supported 1000+ concurrent connections',
    ],
  },
];

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id || '1'));

  if (!project) {
    return (
      <div className="relative min-h-screen bg-background">
        <AnimatedBackground />
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
            <Link to="/" className="text-neon-blue hover:underline">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-background">
      <AnimatedBackground />

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link to="/" className="flex items-center gap-2 text-neon-blue hover:text-neon-cyan transition-colors">
              <ArrowLeft size={20} /> Back to Portfolio
            </Link>
          </div>
        </nav>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Hero */}
          <div className="mb-12">
            <div className="h-64 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-lg flex items-center justify-center mb-8">
              <span className="text-8xl">{project.image}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-foreground/80 mb-6">
              {project.fullDescription}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-4 py-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 rounded-full text-sm font-medium text-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Technologies */}
            <div className="glow-border p-6 rounded-lg bg-card/50">
              <h3 className="text-lg font-semibold text-neon-blue mb-4">Technologies Used</h3>
              <ul className="space-y-2">
                {project.technologies.map((tech) => (
                  <li key={tech} className="flex items-center gap-2 text-foreground/80">
                    <span className="w-2 h-2 bg-neon-blue rounded-full" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div className="glow-border p-6 rounded-lg bg-card/50">
              <h3 className="text-lg font-semibold text-neon-purple mb-4">Challenges Overcome</h3>
              <ul className="space-y-2">
                {project.challenges.map((challenge) => (
                  <li key={challenge} className="flex items-center gap-2 text-foreground/80">
                    <span className="w-2 h-2 bg-neon-purple rounded-full" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div className="glow-border p-6 rounded-lg bg-card/50">
              <h3 className="text-lg font-semibold text-neon-cyan mb-4">Key Results</h3>
              <ul className="space-y-2">
                {project.results.map((result) => (
                  <li key={result} className="flex items-center gap-2 text-foreground/80">
                    <span className="w-2 h-2 bg-neon-cyan rounded-full" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="glow-border p-8 rounded-lg bg-card/50 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Interested in this project?</h3>
            <p className="text-foreground/80 mb-6">
              Let's discuss how this project demonstrates my skills and vision for innovation.
            </p>
            <a href="#contact" className="inline-block px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-cyan text-background font-semibold rounded-lg button-glow hover:shadow-lg transition-all">
              Get In Touch
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-border/50 bg-background/50 backdrop-blur-xl">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
            <p className="text-foreground/60 text-sm">
              © 2024 Manish Raina. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
