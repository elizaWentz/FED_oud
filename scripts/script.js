// JavaScript Document

//reduced motion
const motionToggleButton = document.getElementById('toggle-motion');

motionToggleButton.addEventListener('click', () => {
  document.body.classList.toggle('reduced-motion');
});



//hamburger menu
const toggleButton = document.querySelector(".hamburger-toggle");

toggleButton.onclick = function () {
  const deNav = document.querySelector("nav:not(.desktop-nav)");

  const isOpen = deNav.classList.toggle("toonMenu");

  toggleButton.setAttribute('aria-expanded', isOpen);
};



//filter knoppen
// met behulp van ChatGPT
const filterButtons = document.querySelectorAll('.filter-button');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(button => button.classList.remove('active'));
    button.classList.add('active');
  });
});



//uitgelicht caroussel
// met behulp van ChatGPT
const slides = document.querySelectorAll('.carousel-slides li');
const dots = document.querySelectorAll('.carousel-dots .dot');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 10000); // 10 seconden

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
    
    // aria-current toevoegen of verwijderen
    if (i === index) {
      dot.setAttribute('aria-current', 'true');
    } else {
      dot.removeAttribute('aria-current');
    }
  });

  currentSlide = index;
}

function nextSlide() {
  let nextIndex = (currentSlide + 1) % slides.length;
  showSlide(nextIndex);
}

// Handmatig klikken op de bolletjes
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    clearInterval(slideInterval); // reset automatisch wisselen
    showSlide(index);
    slideInterval = setInterval(nextSlide, 10000); // start opnieuw
  });
});

// Start met eerste slide
showSlide(0);




//referentie carousel
// met behulp van ChatGPT
document.addEventListener('DOMContentLoaded', () => {     //zorgt ervoor dat pagina eerst geladen wordt
  const slider = document.querySelector('.referenties ul');
  const prevBtn = document.querySelector('.referenties button:first-of-type');
  const nextBtn = document.querySelector('.referenties button:last-of-type');

  prevBtn.addEventListener('click', () => {
    slider.scrollBy({
      left: -slider.clientWidth,
      behavior: 'smooth'
    });
  });

  nextBtn.addEventListener('click', () => {
    slider.scrollBy({
      left: slider.clientWidth,
      behavior: 'smooth'
    });
  });
});



//header background veranderen
// met behulp van ChatGPT
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const scrollTrigger = 100;

  if (window.scrollY > scrollTrigger) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


