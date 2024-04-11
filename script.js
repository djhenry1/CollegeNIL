document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior
        const targetId = this.getAttribute('href').substring(1); // Get target section ID
        const targetSection = document.getElementById(targetId); // Get target section element
        if (targetSection) {
            // Scroll to the target section
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
