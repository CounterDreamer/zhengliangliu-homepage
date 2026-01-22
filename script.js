// Page navigation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page-content');
    
    // Handle navigation link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-page');
            
            // Hide all pages
            pages.forEach(page => {
                page.classList.remove('active');
            });
            
            // Show target page
            const targetPageElement = document.getElementById(`${targetPage}-page`);
            if (targetPageElement) {
                targetPageElement.classList.add('active');
            }
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Handle hash navigation on page load
    const hash = window.location.hash;
    if (hash === '#publications') {
        pages.forEach(page => page.classList.remove('active'));
        const publicationsPage = document.getElementById('publications-page');
        if (publicationsPage) {
            publicationsPage.classList.add('active');
        }
        navLinks.forEach(l => {
            l.classList.remove('active');
            if (l.getAttribute('data-page') === 'publications') {
                l.classList.add('active');
            }
        });
    }

    // Year filter for publications page
    const yearItems = document.querySelectorAll('.year-item');
    const yearSections = document.querySelectorAll('.publications-year-section');
    
    yearItems.forEach(item => {
        item.addEventListener('click', function() {
            const year = this.getAttribute('data-year');
            
            // Update active year
            yearItems.forEach(y => y.classList.remove('active'));
            this.classList.add('active');
            
            // Show/hide year sections
            yearSections.forEach(section => {
                if (section.getAttribute('data-year') === year) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });

    // Add fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all content sections
    const contentSections = document.querySelectorAll('.content-section, .publication-item, .publication-item-full');
    contentSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});
