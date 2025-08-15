document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', function() {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });

    // Cursor Effect
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });
    
    // Make cursor smaller when hovering over clickable elements
    const clickableElements = document.querySelectorAll('a, button, .portfolio-item, input[type="submit"], .filter-btn, .service-card, .testimonial-slide, .menu-toggle');
    
    clickableElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(0.5)';
            cursorFollower.style.transform = 'scale(0.3)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursorFollower.style.transform = 'scale(1)';
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });
    
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuToggle.querySelector('i').classList.remove('fa-times');
        });
    });

    // Sticky Header on Scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Active Nav Link on Scroll
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 300) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Portfolio Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    item.classList.add('animated', 'fade-in');
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Testimonial Slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentSlide = 0;
    
    function showSlide(index) {
        testimonialSlides.forEach(slide => slide.classList.remove('active'));
        testimonialSlides[index].classList.add('active');
    }
    
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length;
        showSlide(currentSlide);
    });
    
    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % testimonialSlides.length;
        showSlide(currentSlide);
    });

    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hero Thumbnail Showcase
    const thumbnailShowcase = document.querySelector('.thumbnail-showcase');
    const thumbnails = thumbnailShowcase.querySelectorAll('img');
    let currentThumbnail = 0;
    
    function changeThumbnail() {
        thumbnails.forEach(img => img.classList.remove('active'));
        thumbnails[currentThumbnail].classList.add('active');
        currentThumbnail = (currentThumbnail + 1) % thumbnails.length;
    }
    
    // Change thumbnail every 3 seconds
    setInterval(changeThumbnail, 3000);

    // Scroll Animations
    const animateElements = document.querySelectorAll('[data-animate]');
    
    function checkScroll() {
        animateElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    }
    
    // Check on initial load
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);

    // Generate Portfolio Items (for demo purposes)
    const portfolioGrid = document.querySelector('.portfolio-grid');
    const portfolioData = [
        { 
            image: 'images/thumbnails/thumbnail1.jpg', 
            title: 'Gaming Thumbnail', 
            category: 'gaming',
            description: 'Designed for a popular gaming channel'
        },
        { 
            image: 'images/thumbnails/thumbnail2.jpg', 
            title: 'Tech Review Thumbnail', 
            category: 'tech',
            description: 'Thumbnail for smartphone review video'
        },
        { 
            image: 'images/thumbnails/thumbnail3.jpg', 
            title: 'Vlog Thumbnail', 
            category: 'vlog',
            description: 'Travel vlog thumbnail design'
        },
        { 
            image: 'images/thumbnails/thumbnail4.jpg', 
            title: 'Tutorial Thumbnail', 
            category: 'education',
            description: 'Photoshop tutorial thumbnail'
        },
        { 
            image: 'images/thumbnails/thumbnail5.jpg', 
            title: 'Gaming Thumbnail', 
            category: 'gaming',
            description: 'Fortnite gameplay thumbnail'
        },
        { 
            image: 'images/thumbnails/thumbnail6.jpg', 
            title: 'Tech Comparison', 
            category: 'tech',
            description: 'iPhone vs Samsung comparison'
        }
    ];
    
    portfolioData.forEach((item, index) => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.setAttribute('data-category', item.category);
        portfolioItem.setAttribute('data-animate', 'fade-in');
        
        // Add delay based on index for staggered animation
        portfolioItem.style.animationDelay = `${index * 0.1}s`;
        
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="portfolio-overlay">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <a href="${item.image}" data-lightbox="portfolio">View Larger</a>
            </div>
        `;
        
        portfolioGrid.appendChild(portfolioItem);
    });

    // Initialize lightbox for portfolio items
    const portfolioLinks = document.querySelectorAll('.portfolio-overlay a');
    portfolioLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // You would typically integrate a lightbox library here
            // For demo purposes, we'll just open the image in a new tab
            window.open(this.getAttribute('href'), '_blank');
        });
    });

    // Form Submission
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelectorAll('input[type="text"]')[1].value;
        const message = this.querySelector('textarea').value;
        
        // Here you would typically send the form data to a server
        // For demo purposes, we'll just show an alert
        alert(`Thank you, ${name}! Your message has been sent. We'll contact you soon at ${email}.`);
        
        // Reset the form
        this.reset();
    });

    // Service Card Animation on Hover
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('.service-icon').classList.add('pulse');
        });
        
        card.addEventListener('mouseleave', () => {
            card.querySelector('.service-icon').classList.remove('pulse');
        });
    });

    // Add animation to hero content
    const heroContent = document.querySelector('.hero-content');
    heroContent.classList.add('slide-left');
    
    // Add animation to hero image
    const heroImage = document.querySelector('.hero-image');
    heroImage.classList.add('slide-right');
    
    // Add animation to section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        header.classList.add('slide-up');
    });
});