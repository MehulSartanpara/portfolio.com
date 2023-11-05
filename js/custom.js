const cursor = document.querySelector('.cursor-position');
document.addEventListener('mousemove', (e) => {
  const bgX = e.clientX - cursor.offsetWidth / 2;
  const bgY = e.clientY - cursor.offsetHeight / 2;
  cursor.style.backgroundPosition = `${bgX}px ${bgY}px`;
});
