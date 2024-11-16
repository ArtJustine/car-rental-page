// JavaScript can be used for adding interactive elements such as image sliders, animations, or form handling.
// Currently left empty as no specific interaction was described in the screenshot.

console.log("Car rental website loaded");
document.addEventListener("DOMContentLoaded", function () {
    const fleetSection = document.getElementById("fleet");

    function handleScroll() {
        const fleetTop = fleetSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Check if the fleet section is within view
        if (fleetTop < windowHeight - 100) {
            fleetSection.classList.add("visible");
            // Remove the scroll event listener after the animation is triggered
            window.removeEventListener("scroll", handleScroll);
        }
    }

    window.addEventListener("scroll", handleScroll);
    // Run handleScroll immediately in case the fleet section is already in view
    handleScroll();
});
const buttons = document.querySelectorAll('.category-filters button');
const images = document.querySelectorAll('.car-gallery img');
const carGallery = document.querySelector('.car-gallery');

function filterImages(event, category) {
    // Prevent any default action that might cause scrolling
    event.preventDefault();

    // Remove the 'active' class from all buttons
    buttons.forEach(button => button.classList.remove('active'));

    // Add the 'active' class to the clicked button
    event.target.classList.add('active');

    // Show images that match the selected category, hide others
    images.forEach(image => {
        if (image.getAttribute('data-category') === category || category === 'all') {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });

    // Scroll to the car-gallery container to maintain view stability
    carGallery.scrollIntoView({ behavior: 'smooth' });
}