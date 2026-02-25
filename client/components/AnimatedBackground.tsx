import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create stars
    const stars: Array<{
      x: number;
      y: number;
      radius: number;
      opacity: number;
      vx: number;
      vy: number;
      twinkleSpeed: number;
    }> = [];

    const starCount = 150;
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random() * 0.7 + 0.3,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    let animationFrameId: number;

    const animate = () => {
      // Clear canvas with dark background - RGB format for canvas
      ctx.fillStyle = 'rgb(24, 26, 35)'; // hsl(220, 13%, 9%) converted to RGB
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add subtle gradient overlay using RGBA
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(24, 26, 35, 0.8)');
      gradient.addColorStop(0.5, 'rgba(24, 26, 35, 0.95)');
      gradient.addColorStop(1, 'rgba(24, 26, 35, 0.8)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update stars
      stars.forEach((star) => {
        // Update position
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Update opacity for twinkling effect
        star.opacity += (Math.random() - 0.5) * star.twinkleSpeed;
        star.opacity = Math.max(0.1, Math.min(1, star.opacity));

        // Draw star - using rgba for canvas compatibility
        // hsl(200, 100%, 50%) = rgb(0, 204, 255)
        ctx.fillStyle = `rgba(0, 204, 255, ${star.opacity * 0.8})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect to some stars
        // hsl(190, 95%, 48%) = rgb(0, 217, 245)
        if (Math.random() > 0.9) {
          ctx.fillStyle = `rgba(0, 217, 245, ${star.opacity * 0.3})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{ background: 'hsl(220, 13%, 9%)' }}
    />
  );
};

export default AnimatedBackground;
