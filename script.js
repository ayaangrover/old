// Function to reveal elements with a delay
function revealElements() {
  const title = document.getElementById('title');
  const paragraph = document.getElementById('paragraph');

  setTimeout(() => {
    title.style.opacity = '1';
    title.style.transform = 'translateY(0)';
  }, 0); // Title starts revealing immediately

  setTimeout(() => {
    paragraph.style.opacity = '1';
    paragraph.style.transform = 'translateY(0)';
  }, 1000); // Paragraph starts revealing 1 second after the title
}

// Function to gradually reduce the background darkness
function fadeBackground() {
  let opacity = 1;
  const container = document.querySelector('.container');
  const duration = 5000; // Adjust the duration (in milliseconds) for slower animation

  const startTime = performance.now();
  const animate = (currentTime) => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const easedProgress = easeInOutQuart(progress);
    const newOpacity = 1 - easedProgress;
    container.style.backgroundColor = `rgba(0, 0, 0, ${newOpacity.toFixed(2)})`;

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
}

// Easing function (ease-in-out quart)
function easeInOutQuart(t) {
  return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
}


// Function to reveal the boxes when the page loads
function revealBoxes() {
  const boxes = document.querySelector('.box-container');
  boxes.style.opacity = '1';
}

// Function to fade out the scroll down box when the user scrolls
function fadeOutScrollBox() {
  const scrollBox = document.querySelector('.scroll-down-box');
  const scrollText = document.getElementById('scroll-text');
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  // Calculate the opacity based on the scroll position and window height
  const opacity = 1 - scrollPosition / windowHeight;

  scrollBox.style.opacity = opacity.toFixed(2);
  scrollText.style.opacity = opacity.toFixed(2);
}

// Call the revealElements and fadeBackground functions when the page loads
window.onload = function() {
  revealElements();
  fadeBackground();
  revealBoxes();
};

// Call the fadeOutScrollBox function when the user scrolls
window.addEventListener('scroll', fadeOutScrollBox);
