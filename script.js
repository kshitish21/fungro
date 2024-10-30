// Testimonial Carousel
const testimonials = document.querySelectorAll('.testimonial');
let currentIndex = 0;

function showNextTestimonial() {
  testimonials.forEach((testimonial, index) => {
    testimonial.style.transform = `translateX(${(index - currentIndex) * 100}%)`; // Fixed here
  });
  currentIndex = (currentIndex + 1) % testimonials.length;
}

setInterval(showNextTestimonial, 3000);

// Scroll to Top Button
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
