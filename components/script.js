const numStars = 50; 
const starsContainer = document.querySelector('.stars');

for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  starsContainer.appendChild(star);
}

const stars = document.querySelectorAll('.star');
stars.forEach((star) => {
  const duration = Math.random() * 3 + 1;
  star.style.animation = `twinkle ${duration}s infinite`;
});