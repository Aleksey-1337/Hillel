const slidesContainer = document.getElementById('slides');
const dotsContainer = document.getElementById('dots');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const imageCount = 5;
let currentIndex = 0;

const images = [];
for (let i = 1; i <= imageCount; i++) {
  const img = document.createElement('img');
  img.src = `images/${i}.jpg`;
  slidesContainer.appendChild(img);
  images.push(img);

  const dot = document.createElement('button');
  dot.addEventListener('click', () => showSlide(i - 1));
  dotsContainer.appendChild(dot);
}

function updateSlider() {
  images.forEach((img, index) => {
    img.style.display = index === currentIndex ? 'block' : 'none';
  });

  [...dotsContainer.children].forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });

  prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
  nextBtn.style.display = currentIndex === imageCount - 1 ? 'none' : 'block';
}

function showSlide(index) {
  currentIndex = index;
  updateSlider();
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) showSlide(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < imageCount - 1) showSlide(currentIndex + 1);
});

updateSlider();
