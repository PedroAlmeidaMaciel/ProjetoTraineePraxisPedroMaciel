document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

let currentSlide = 0;
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  items.forEach((item, i) => item.style.display = i === index ? 'block' : 'none');
  dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
}

document.getElementById('prevBtn').onclick = () => {
  currentSlide = (currentSlide - 1 + items.length) % items.length;
  showSlide(currentSlide);
};

document.getElementById('nextBtn').onclick = () => {
  currentSlide = (currentSlide + 1) % items.length;
  showSlide(currentSlide);
};

dots.forEach((dot, index) => {
  dot.onclick = () => {
    currentSlide = index;
    showSlide(currentSlide);
  };
});

showSlide(currentSlide);