function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"});}

        window.addEventListener("scroll", function() 
        {var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollPosition > 500) {scrollToTop();}});function scrollToTop() 
        {window.scrollTo({top: 0,behavior: "smooth"});}