// Script to add Bitcoin symbol particles around the cursor

document.addEventListener('DOMContentLoaded', function() {
  console.log('Cursor script loaded');

  // Create container for Bitcoin particles
  const bitcoinContainer = document.createElement('div');
  bitcoinContainer.style.position = 'fixed';
  bitcoinContainer.style.top = '0';
  bitcoinContainer.style.left = '0';
  bitcoinContainer.style.width = '100%';
  bitcoinContainer.style.height = '100%';
  bitcoinContainer.style.pointerEvents = 'none';
  bitcoinContainer.style.zIndex = '9999';
  document.body.appendChild(bitcoinContainer);

  console.log('Bitcoin particle container created');

  // Track mouse position
  let mouseX = 0;
  let mouseY = 0;

  // Update mouse position
  document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Create Bitcoin particles occasionally
    if (Math.random() > 0.7) {
      createBitcoinParticle(mouseX, mouseY, bitcoinContainer);
    }
  });

  // Create more particles when hovering over interactive elements
  document.addEventListener('mouseover', function(e) {
    if (
      e.target.tagName === 'A' ||
      e.target.tagName === 'BUTTON' ||
      (e.target.tagName === 'INPUT' && (e.target.type === 'submit' || e.target.type === 'button')) ||
      (e.target.hasAttribute('role') && e.target.getAttribute('role') === 'button') ||
      e.target.classList.contains('interactive') ||
      e.target.classList.contains('btn') ||
      e.target.classList.contains('clickable')
    ) {
      // Create multiple Bitcoin particles for interactive elements
      for (let i = 0; i < 5; i++) {
        createBitcoinParticle(mouseX, mouseY, bitcoinContainer);
      }
    }
  });
});

// Create a Bitcoin symbol particle
function createBitcoinParticle(x, y, container) {
  // Create particle element
  const particle = document.createElement('div');

  // Set styles
  particle.style.position = 'absolute';
  const size = 10 + Math.random() * 14; // Random size for Bitcoin symbols
  particle.style.width = size + 'px';
  particle.style.height = size + 'px';
  particle.style.fontSize = size + 'px';
  particle.style.lineHeight = size + 'px';
  particle.style.textAlign = 'center';
  particle.style.fontWeight = 'bold';
  particle.style.fontFamily = 'Arial, sans-serif';

  // Set content to Bitcoin symbol
  particle.textContent = '₿';

  // Random position around cursor
  const offsetX = (Math.random() - 0.5) * 30;
  const offsetY = (Math.random() - 0.5) * 30;
  particle.style.left = (x + offsetX) + 'px';
  particle.style.top = (y + offsetY) + 'px';

  // Golden color with random variation
  const hue = 40 + Math.floor(Math.random() * 20); // Gold to yellow-gold
  const saturation = 80 + Math.floor(Math.random() * 20);
  const lightness = 50 + Math.floor(Math.random() * 20);
  particle.style.color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

  // Add glow effect
  particle.style.textShadow = `0 0 ${Math.floor(Math.random() * 5) + 3}px rgba(255, 215, 0, 0.8)`;
  particle.style.pointerEvents = 'none';
  particle.style.zIndex = '9998'; // Below the cursor

  // Random rotation
  const rotation = Math.random() * 360;
  particle.style.transform = `rotate(${rotation}deg)`;

  // Add to container
  container.appendChild(particle);

  // Animate and remove
  const duration = 1200 + Math.random() * 1200; // Longer duration for larger particles (slowed to half speed)
  const tx = (Math.random() - 0.5) * 50;      // Wider movement range
  const ty = (Math.random() - 0.5) * 50 - 20; // Bias upward for effect
  const rotationEnd = rotation + (Math.random() - 0.5) * 180; // Additional rotation during animation

  // Start animation
  particle.animate([
    {
      transform: `rotate(${rotation}deg) translate(0, 0) scale(1)`,
      opacity: 0.9
    },
    {
      transform: `rotate(${rotation + rotationEnd/2}deg) translate(${tx/2}px, ${ty/2}px) scale(0.7)`,
      opacity: 0.6
    },
    {
      transform: `rotate(${rotation + rotationEnd}deg) translate(${tx}px, ${ty}px) scale(0)`,
      opacity: 0
    }
  ], {
    duration: duration,
    easing: 'ease-out'
  });

  // Remove after animation
  setTimeout(() => {
    particle.remove();
  }, duration);
}
