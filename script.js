document.addEventListener("DOMContentLoaded", () => {
    const testimonials = document.querySelectorAll(".testimonial-card");
    const prevButton = document.querySelector("button.prev");
    const nextButton = document.querySelector("button.next");
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? "block" : "none";
        });
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }

    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    }

    prevButton.addEventListener("click", prevTestimonial);
    nextButton.addEventListener("click", nextTestimonial);
    showTestimonial(currentIndex);

    const searchInput = document.querySelector(".search-bar input");
    
    searchInput.addEventListener("input", function() {
        const query = this.value.toLowerCase();
        const products = document.querySelectorAll(".product");
        
        products.forEach(product => {
            const productName = product.querySelector("h3").textContent.toLowerCase();
            const productDescription = product.querySelector("p").textContent.toLowerCase();
            
            if (productName.includes(query) || productDescription.includes(query)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
});
