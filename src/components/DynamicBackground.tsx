import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/DynamicBackground.module.css';
import { useMouseParticles } from '../hooks/useMouseParticles';

const DynamicBackground: React.FC = () => {
  const { scrollY } = useScroll();
  const containerRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  // Initialize mouse particles
  useMouseParticles(containerRef);

  // Parallax effect for background elements
  const y = useTransform(scrollY, [0, 1000], [0, 200]);

  // Particle system
  useEffect(() => {
    if (!containerRef.current) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = styles.particle;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
      containerRef.current?.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 5000);
    };

    const interval = setInterval(createParticle, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.dynamicBackground} ref={containerRef}>
      {/* Base gradient layer */}
      <div className={styles.baseGradient} />

      {/* Geometric pattern layer */}
      <motion.div 
        className={styles.hexGrid}
        style={{ y }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Aurora waves */}
      <div className={styles.auroraWaves}>
        <div className={`${styles.wave} ${styles.wave1}`} />
        <div className={`${styles.wave} ${styles.wave2}`} />
      </div>

      {/* Floating Bitcoin symbols */}
      <div className={styles.floatingSymbols}>
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.bitcoinSymbol}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0, 0.1, 0],
              y: [-100, 100],
              x: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: i * 2,
            }}
          >
            ₿
          </motion.div>
        ))}
      </div>

      {/* Interactive particles */}
      <div className={styles.interactiveParticles} ref={ref}>
        {inView && (
          <motion.div
            className={styles.particleContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </div>

      {/* Glow effects */}
      <div className={styles.glowEffects}>
        <div className={styles.pulseRing} />
        <div className={`${styles.pulseRing} ${styles.delay1}`} />
        <div className={`${styles.pulseRing} ${styles.delay2}`} />
      </div>
    </div>
  );
};

export default DynamicBackground; 