window.addEventListener("scroll", function() {
    // Get the current scroll position
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Check if the scroll position is greater than a certain value (e.g., 500 pixels)
    if (scrollPosition > 500) {
        // If the scroll position is greater than 500 pixels, scroll to the top of the page
        scrollToTop();
    }
});

// Function to scroll to the top of the page
function scrollToTop() {
    // Scroll to the top of the page with smooth animation
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}