// Script untuk filter portfolio dan animasi
document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi animasi untuk elemen dengan data-animate atribut
    initAnimations();
    
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
    
    // Smooth scrolling for navigation links with animasi
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
            
            // Trigger animations when navigating to new section
            animateSectionElements(targetId.substring(1));
        });
    });
    
    // Form submission (prevent default for demo)
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Animasi tombol submit saat diklik
            const submitBtn = this.querySelector('.form-btn');
            submitBtn.classList.add('animate__animated', 'animate__bounceIn');
            
            setTimeout(() => {
                alert('Form submitted! (This is just a demo)');
                this.reset();
                submitBtn.classList.remove('animate__bounceIn');
            }, 800);
        });
    }
    
    // Animasi saat scroll
    window.addEventListener('scroll', scrollAnimations);
});

// Fungsi untuk menginisialisasi animasi
function initAnimations() {
    // Animasi untuk elemen header saat halaman dimuat
    document.querySelectorAll('.section-header h2').forEach(el => {
        el.classList.add('animate__animated', 'animate__fadeIn');
    });
    
    // Inisialisasi library WOW.js untuk animasi scroll
    new WOW({
        boxClass: 'animate__animated',
        animateClass: 'animate__animated',
        offset: 100,
        mobile: true,
        live: true
    }).init();
}

// Fungsi untuk animasi scroll
function scrollAnimations() {
    const sections = document.querySelectorAll('section[id]');
    
    let scrollY = window.pageYOffset;
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            // Add active class to navigation item
            document.querySelector('nav a[href*=' + sectionId + ']').classList.add('active');
            
            // Animasi elemen dalam section yang terlihat
            animateSectionElements(sectionId);
        } else {
            document.querySelector('nav a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
}

// Fungsi untuk animasi elemen dalam section saat scroll
function animateSectionElements(sectionId) {
    const section = document.getElementById(sectionId);
    
    if (!section) return;
    
    // Animasi elemen dengan data-animate atribut
    const animatedElements = section.querySelectorAll('[data-animate]');
    
    animatedElements.forEach(el => {
        if (!el.classList.contains('animated-in')) {
            const animationName = el.getAttribute('data-animate');
            const delay = el.getAttribute('data-delay') || 0;
            
            setTimeout(() => {
                el.classList.add('animate__' + animationName, 'animated-in');
                
                // Reset animasi setelah selesai
                el.addEventListener('animationend', function() {
                    // Untuk animasi yang perlu diulang, tambahkan kembali class nya disini
                    if (el.classList.contains('animate__infinite')) {
                        return;
                    }
                });
            }, delay);
        }
    });
}

// Filter portfolio
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
                // Animasi keluar dan masuk untuk item galeri
                if (category === 'all' || item.dataset.category === category) {
                    item.classList.remove('animate__fadeOut');
                    item.classList.add('animate__fadeIn');
                    item.style.display = 'block';
                } else {
                    item.classList.remove('animate__fadeIn');
                    item.classList.add('animate__fadeOut');
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 500);
                }
            });
        });
    });

    // Animasi hover untuk item galeri
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('animate__pulse');
        });
        
        item.addEventListener('mouseleave', () => {
            item.classList.remove('animate__pulse');
        });
    });

    // ScrollSpy: Highlight active nav dan animasi pada scroll
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
                
                // Trigger animasi untuk section yang sedang aktif
                animateSectionElements(sectionId);
            }
        });
    });
});