import { useEffect, useRef } from 'react';
import styles from '../styles/DynamicBackground.module.css';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  element: HTMLDivElement;
}

export const useMouseParticles = (containerRef: React.RefObject<HTMLElement>) => {
  const particles = useRef<Particle[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mousePosition.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };

      // Create new particles on mouse move
      createParticles(e.clientX - rect.left, e.clientY - rect.top);
    };

    const createParticles = (x: number, y: number) => {
      for (let i = 0; i < 3; i++) {
        const particle = document.createElement('div');
        particle.className = styles.mouseParticle;
        container.appendChild(particle);

        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2 + 1;
        const life = Math.random() * 1000 + 500;

        particles.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life,
          element: particle,
        });
      }
    };

    const updateParticles = () => {
      particles.current = particles.current.filter((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 16; // Assuming 60fps

        if (particle.life <= 0) {
          particle.element.remove();
          return false;
        }

        const opacity = particle.life / 1000;
        particle.element.style.transform = `translate(${particle.x}px, ${particle.y}px)`;
        particle.element.style.opacity = opacity.toString();

        return true;
      });

      requestAnimationFrame(updateParticles);
    };

    container.addEventListener('mousemove', handleMouseMove);
    const animationFrame = requestAnimationFrame(updateParticles);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
      particles.current.forEach((particle) => particle.element.remove());
      particles.current = [];
    };
  }, [containerRef]);
}; 