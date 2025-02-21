document.addEventListener('DOMContentLoaded', function() {
    const mainNav = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Scroll handler for navbar
    function handleScroll() {
        if (window.scrollY > 50) {
            mainNav.classList.add('navbar-scrolled');
        } else {
            mainNav.classList.remove('navbar-scrolled');
        }
    }

    // Smooth scroll for navigation links
    function smoothScroll(e) {
        if (this.hash !== '') {
            e.preventDefault();
            const hash = this.hash;
            const targetElement = document.querySelector(hash);
            
            window.scrollTo({
                top: targetElement.offsetTop - mainNav.offsetHeight,
                behavior: 'smooth'
            });
        }
    }

    // Active link handler
    function updateActiveLink() {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - mainNav.offsetHeight - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const currentId = section.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Event listeners
    window.addEventListener('scroll', () => {
        handleScroll();
        updateActiveLink();
    });

    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    // Initial call to set correct state
    handleScroll();
    updateActiveLink();
});
