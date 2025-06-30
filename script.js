// Theme toggle
function toggleTheme() {
    document.body.classList.toggle('dark');
  }
  
  const icons = document.querySelectorAll('.floating-icons .icon');

icons.forEach(icon => {
  const speed = 0.5 + Math.random(); // each icon has a different speed
  const amplitude = 30 + Math.random() * 20; // range of movement
  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight;

  let angle = Math.random() * 360;

  icon.style.left = `${startX}px`;
  icon.style.top = `${startY}px`;

  function float() {
    angle += speed;
    const x = startX + Math.cos(angle / 50) * amplitude;
    const y = startY + Math.sin(angle / 50) * amplitude;
    
    icon.style.transform = `translate(${x - startX}px, ${y - startY}px)`;

    requestAnimationFrame(float);
  }

  float();
});
