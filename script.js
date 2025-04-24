// Script untuk filter portfolio
document.addEventListener('DOMContentLoaded', function() {
    // Filter buttons functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Here you would add filtering functionality
            // For example:
            // const category = this.textContent.toLowerCase();
            // filterProjects(category);
        });
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
    
    // Form submission (prevent default for demo)
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Form submitted! (This is just a demo)');
            this.reset();
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Get all tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    // Add click event listeners to each tab button
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get the category from the button text
            const category = this.textContent.trim().toLowerCase();
            
            // Get all gallery items
            const galleryItems = document.querySelectorAll('.gallery-item');
            
            // Show all items if "ALL" is selected, otherwise filter by category
            galleryItems.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // === Filter Portfolio ===
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.dataset.category;

            galleryItems.forEach(item => {
                // Animasi keluar
                item.style.opacity = '0';
                setTimeout(() => {
                    if (category === 'all' || item.dataset.category === category) {
                        item.style.display = 'block';
                        setTimeout(() => item.style.opacity = '1', 100);
                    } else {
                        item.style.display = 'none';
                    }
                }, 200);
            });
        });
    });

    // === Smooth Scroll for Navigation Links ===
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        });
    });

    // === ScrollSpy: Highlight active nav on scroll ===
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        let scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 70;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // === Form Submission (Demo) ===
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            alert('Form submitted! (This is just a demo)');
            contactForm.reset();
        });
    }
});