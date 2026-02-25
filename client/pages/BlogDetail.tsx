import { useParams, Link } from 'react-router-dom';
import AnimatedBackground from '@/components/AnimatedBackground';
import { ArrowLeft, Clock, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Deep Learning',
    author: 'Manish Raina',
    date: 'December 15, 2024',
    readTime: '8 min read',
    excerpt: 'A beginner\'s guide to understanding neural networks and building your first model',
    content: `
# Getting Started with Deep Learning

Deep learning has revolutionized the field of artificial intelligence, enabling computers to learn patterns from data in ways that mimic human brain function. In this guide, we'll explore the fundamentals of deep learning and how you can get started with building your first neural network.

## What is Deep Learning?

Deep learning is a subset of machine learning that uses artificial neural networks with multiple layers (hence "deep") to learn from data. These networks are inspired by the structure and function of biological neural networks in animal brains.

### Key Components:

1. **Neurons**: The basic units that process information
2. **Layers**: Multiple neurons organized in layers that transform data
3. **Activation Functions**: Functions that introduce non-linearity to the network
4. **Weights and Biases**: Parameters that the network learns during training

## Getting Started with TensorFlow

TensorFlow is one of the most popular frameworks for deep learning. Here's how to set it up:

\`\`\`python
import tensorflow as tf
from tensorflow import keras

# Build a simple neural network
model = keras.Sequential([
    keras.layers.Dense(128, activation='relu', input_shape=(784,)),
    keras.layers.Dropout(0.2),
    keras.layers.Dense(64, activation='relu'),
    keras.layers.Dense(10, activation='softmax')
])
\`\`\`

## Training Your First Model

Once you have your model defined, training is straightforward:

\`\`\`python
model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

model.fit(x_train, y_train, epochs=10, batch_size=32)
\`\`\`

## Best Practices

- Start simple and gradually increase complexity
- Always split your data into training and testing sets
- Monitor both training and validation losses to detect overfitting
- Use regularization techniques like dropout
- Experiment with different hyperparameters

Deep learning is a powerful tool, and while it might seem intimidating at first, with practice and experimentation, you'll be building impressive models in no time!
    `,
  },
  {
    id: 2,
    title: 'ML Model Optimization Techniques',
    author: 'Manish Raina',
    date: 'December 8, 2024',
    readTime: '10 min read',
    excerpt: 'Explore practical techniques to optimize your ML models for production performance',
    content: `
# ML Model Optimization Techniques

Building a machine learning model is one thing, but optimizing it for production is where the real challenge lies. This article explores practical techniques to improve your model's performance and efficiency.

## Quantization

Quantization reduces the precision of your model's weights and activations, making it faster and more memory-efficient without significantly sacrificing accuracy.

## Pruning

Pruning removes unnecessary connections in your neural network, reducing its size and computational requirements.

## Knowledge Distillation

Knowledge distillation transfers knowledge from a large, complex model (teacher) to a smaller, simpler model (student) that's faster to run in production.

## Hardware Optimization

- Leverage GPUs for parallel computation
- Use TPUs for large-scale training
- Optimize for specific hardware targets

## Model Serving

- Use TensorFlow Serving for scalable serving
- Containerize with Docker for easy deployment
- Implement caching strategies for frequently requested predictions

Optimization is an iterative process that requires monitoring, testing, and continuous improvement. The key is finding the right balance between performance and accuracy for your specific use case.
    `,
  },
  {
    id: 3,
    title: 'Building Scalable Web Applications',
    author: 'Manish Raina',
    date: 'December 1, 2024',
    readTime: '12 min read',
    excerpt: 'Best practices for architecting web apps that grow with your user base',
    content: `
# Building Scalable Web Applications

As your web application grows, scalability becomes critical. This guide covers architectural patterns and best practices for building applications that can handle increased load.

## Microservices Architecture

Breaking your application into smaller, independently deployable services allows you to scale different components based on demand.

## Database Optimization

- Implement proper indexing strategies
- Use database replication for read-heavy operations
- Consider sharding for large datasets
- Implement caching layers (Redis, Memcached)

## API Design

- Use pagination for list endpoints
- Implement rate limiting
- Version your APIs for backward compatibility
- Use GraphQL for flexible data fetching

## Deployment and CI/CD

- Automate testing and deployment
- Use containerization (Docker, Kubernetes)
- Implement monitoring and alerting
- Plan for zero-downtime deployments

## Load Balancing

- Distribute traffic across multiple servers
- Use auto-scaling groups
- Implement health checks
- Monitor server performance

Scalability isn't just about handling more users—it's about maintaining quality and performance as your application grows. Plan ahead, monitor constantly, and be ready to adapt your architecture as needs change.
    `,
  },
];

export default function BlogDetail() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id || '1'));

  if (!post) {
    return (
      <div className="relative min-h-screen bg-background">
        <AnimatedBackground />
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
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
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link to="/" className="flex items-center gap-2 text-neon-blue hover:text-neon-cyan transition-colors">
              <ArrowLeft size={20} /> Back to Portfolio
            </Link>
          </div>
        </nav>

        {/* Content */}
        <article className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-foreground/70 mb-8 pb-8 border-b border-border/50">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{post.readTime}</span>
              </div>
              <div className="text-neon-blue">{post.date}</div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none mb-12">
            <div className="text-foreground/90 leading-relaxed">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('#')) {
                  const level = paragraph.match(/^#+/)?.[0].length || 1;
                  const text = paragraph.replace(/^#+\s/, '');
                  if (level === 1) {
                    return (
                      <h1 key={index} className="text-3xl font-bold text-white mt-8 mb-4">
                        {text}
                      </h1>
                    );
                  } else if (level === 2) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-neon-blue mt-6 mb-3">
                        {text}
                      </h2>
                    );
                  } else {
                    return (
                      <h3 key={index} className="text-xl font-semibold text-white mt-4 mb-2">
                        {text}
                      </h3>
                    );
                  }
                }
                
                if (paragraph.startsWith('```')) {
                  return null;
                }
                
                if (paragraph.trim() === '') {
                  return <br key={index} />;
                }
                
                if (paragraph.startsWith('-')) {
                  return (
                    <li key={index} className="ml-6 mb-2">
                      {paragraph.substring(1).trim()}
                    </li>
                  );
                }
                
                if (paragraph.trim()) {
                  return (
                    <p key={index} className="mb-4 text-foreground/80">
                      {paragraph}
                    </p>
                  );
                }
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="glow-border p-8 rounded-lg bg-card/50 text-center">
            <h3 className="text-xl font-bold text-white mb-3">Found this helpful?</h3>
            <p className="text-foreground/80 mb-6">
              Have thoughts or questions? Let's discuss in detail.
            </p>
            <a href="/#contact" className="inline-block px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-cyan text-background font-semibold rounded-lg button-glow hover:shadow-lg transition-all">
              Get In Touch
            </a>
          </div>
        </article>

        {/* Footer */}
        <footer className="border-t border-border/50 bg-background/50 backdrop-blur-xl mt-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
            <p className="text-foreground/60 text-sm">
              © 2024 Manish Raina. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
