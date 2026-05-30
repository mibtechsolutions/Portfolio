import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const AnimatedBackground = ({ 
  type = 'particles', 
  color = 'gold', 
  density = 'medium' }) => {
  const canvasRef = useRef(null);
  const [mouse, setMouse] = useState({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];
    let interpolatedMouse = { x: null, y: null };
    let targetMouse = { x: null, y: null };

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const particleCount = {
      low: 40,
      medium: 80,
      high: 150,
    };

    const colors = {
      gold: {
        primary: 'rgba(212, 175, 55, 0.8)',
        secondary: 'rgba(212, 175, 55, 0.4)',
        glow: 'rgba(212, 175, 55, 0.15)',
      },
      white: {
        primary: 'rgba(255, 255, 255, 0.6)',
        secondary: 'rgba(255, 255, 255, 0.3)',
        glow: 'rgba(255, 255, 255, 0.1)',
      },
    };

    const selectedColors = colors[color] || colors.gold;

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.6 + 0.3;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update(mousePos) {
        this.x += this.speedX;
        this.y += this.speedY;
        this.pulsePhase += this.pulseSpeed;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        if (mousePos.x !== null && mousePos.y !== null) {
          const dx = mousePos.x - this.x;
          const dy = mousePos.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 300;

          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;
            const angle = Math.atan2(dy, dx);
            this.x -= Math.cos(angle) * force * 0.5;
            this.y -= Math.sin(angle) * force * 0.5;
          }
        }
      }

      draw(mousePos) {
        const pulseSize = this.size + Math.sin(this.pulsePhase) * 0.5;
        
        let particleOpacity = this.opacity;
        if (mousePos.x !== null && mousePos.y !== null) {
          const dx = mousePos.x - this.x;
          const dy = mousePos.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150;
          
          if (distance < maxDistance) {
            particleOpacity = this.opacity + (1 - this.opacity) * (1 - distance / maxDistance);
          }
        }

        ctx.beginPath();
        ctx.arc(this.x, this.y, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = selectedColors.primary;
        ctx.globalAlpha = particleOpacity;
        ctx.fill();
        ctx.globalAlpha = 1;

        ctx.beginPath();
        ctx.arc(this.x, this.y, pulseSize * 3, 0, Math.PI * 2);
        ctx.fillStyle = selectedColors.glow;
        ctx.globalAlpha = particleOpacity * 0.3;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    const initParticles = () => {
      particles = [];
      const count = particleCount[density] || particleCount.medium;
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const connectParticles = (mousePos) => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          let lineOpacity = 0;
          if (distance < 180) {
            lineOpacity = 1 - distance / 180;
            
            if (mousePos.x !== null && mousePos.y !== null) {
              const mx = (particles[i].x + particles[j].x) / 2;
              const my = (particles[i].y + particles[j].y) / 2;
              const mouseDistance = Math.sqrt((mousePos.x - mx) ** 2 + (mousePos.y - my) ** 2);
              
              if (mouseDistance < 200) {
                lineOpacity *= 1 + (1 - mouseDistance / 200);
              }
            }
          }

          if (lineOpacity > 0) {
            ctx.beginPath();
            ctx.strokeStyle = selectedColors.secondary;
            ctx.lineWidth = 0.8;
            ctx.globalAlpha = lineOpacity * 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
    };

    const drawMouseEffect = (mousePos) => {
      if (mousePos.x !== null && mousePos.y !== null) {
        ctx.beginPath();
        ctx.arc(mousePos.x, mousePos.y, 80, 0, Math.PI * 2);
        ctx.fillStyle = selectedColors.glow;
        ctx.globalAlpha = 0.1;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    };

    const animate = () => {
      if (targetMouse.x !== null && targetMouse.y !== null) {
        if (interpolatedMouse.x === null || interpolatedMouse.y === null) {
          interpolatedMouse = { ...targetMouse };
        } else {
          interpolatedMouse.x = interpolatedMouse.x + (targetMouse.x - interpolatedMouse.x) * 0.05;
          interpolatedMouse.y = interpolatedMouse.y + (targetMouse.y - interpolatedMouse.y) * 0.05;
        }
      } else {
        interpolatedMouse = { x: null, y: null };
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawMouseEffect(interpolatedMouse);
      
      particles.forEach((particle) => {
        particle.update(interpolatedMouse);
        particle.draw(interpolatedMouse);
      });
      
      connectParticles(interpolatedMouse);
      
      animationId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      targetMouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const handleMouseLeave = () => {
      targetMouse = { x: null, y: null };
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    resizeCanvas();
    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, [type, color, density, mouse]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export const GradientBlob = ({ className = '' }) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 50,
        y: (e.clientY / window.innerHeight - 0.5) * 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          x: [0, 60 + mouse.x, 0],
          y: [0, 40 + mouse.y, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-gold-gradient/25 rounded-full blur-3xl"
        style={{
          filter: 'blur(80px)',
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.35, 1],
          x: [0, -40 - mouse.x, 0],
          y: [0, -60 - mouse.y, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-gold-500/20 rounded-full blur-3xl"
        style={{
          filter: 'blur(80px)',
        }}
      />
    </div>
  );
};

export const GridLines = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(212, 175, 55, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(212, 175, 55, 0.06) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
};
