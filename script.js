window.addEventListener("scroll", function() {
    // Get the current scroll position
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    
    if (scrollPosition > 300) {
        scrollToTop(this.top);
    }
});
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}