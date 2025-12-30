// ========================================
// My Build Homes - JavaScript
// Handles navigation, form validation, and interactions
// ========================================

// ========================================
// Navigation Functionality
// ========================================

/**
 * Handles mobile navigation menu toggle
 */
function initializeNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');

    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Highlight active section in navigation
    window.addEventListener('scroll', highlightActiveSection);
}

/**
 * Highlights the active section in navigation based on scroll position
 */
function highlightActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

// ========================================
// Contact Form Validation & Submission
// ========================================

/**
 * Initializes contact form validation and submission handling
 */
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
        
        // Real-time validation on input blur
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            // Remove error on input
            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    this.classList.remove('error');
                    const errorMessage = document.getElementById(`${this.id}-error`);
                    if (errorMessage) {
                        errorMessage.style.display = 'none';
                    }
                }
            });
        });
    }
}

/**
 * Handles form submission
 * @param {Event} e - Form submit event
 */
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form fields
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const contactNumber = document.getElementById('contactNumber');
    const message = document.getElementById('message');
    
    // Validate all fields
    let isValid = true;
    isValid = validateField(firstName) && isValid;
    isValid = validateField(lastName) && isValid;
    isValid = validateField(contactNumber) && isValid;
    isValid = validateField(message) && isValid;
    
    // If all fields are valid, submit the form
    if (isValid) {
        // Here you would typically send the data to a server
        // For now, we'll show a success message and clear the form
        
        // Get form data
        const formData = {
            firstName: firstName.value.trim(),
            lastName: lastName.value.trim(),
            contactNumber: contactNumber.value.trim(),
            message: message.value.trim()
        };
        
        // Log form data (in production, this would be sent to a server)
        console.log('Form submitted with data:', formData);
        
        // Show success message
        showSuccessMessage();
        
        // Clear form
        document.getElementById('contactForm').reset();
    } else {
        // Scroll to first error
        const firstError = document.querySelector('.error');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}

/**
 * Validates a single form field
 * @param {HTMLElement} field - The form field to validate
 * @returns {boolean} - True if field is valid, false otherwise
 */
function validateField(field) {
    const fieldId = field.id;
    const fieldValue = field.value.trim();
    const errorElement = document.getElementById(`${fieldId}-error`);
    
    // Reset error state
    field.classList.remove('error');
    if (errorElement) {
        errorElement.style.display = 'none';
        errorElement.textContent = '';
    }
    
    // Validation rules
    switch(fieldId) {
        case 'firstName':
            if (fieldValue === '') {
                showError(field, errorElement, 'First name is required');
                return false;
            } else if (fieldValue.length < 2) {
                showError(field, errorElement, 'First name must be at least 2 characters');
                return false;
            } else if (!/^[a-zA-Z\s'-]+$/.test(fieldValue)) {
                showError(field, errorElement, 'First name can only contain letters');
                return false;
            }
            break;
            
        case 'lastName':
            if (fieldValue === '') {
                showError(field, errorElement, 'Last name is required');
                return false;
            } else if (fieldValue.length < 2) {
                showError(field, errorElement, 'Last name must be at least 2 characters');
                return false;
            } else if (!/^[a-zA-Z\s'-]+$/.test(fieldValue)) {
                showError(field, errorElement, 'Last name can only contain letters');
                return false;
            }
            break;
            
        case 'contactNumber':
            if (fieldValue === '') {
                showError(field, errorElement, 'Contact number is required');
                return false;
            } else if (!/^[\d\s\-\+\(\)]+$/.test(fieldValue)) {
                showError(field, errorElement, 'Please enter a valid phone number');
                return false;
            } else if (fieldValue.replace(/\D/g, '').length < 10) {
                showError(field, errorElement, 'Phone number must be at least 10 digits');
                return false;
            }
            break;
            
        case 'message':
            if (fieldValue === '') {
                showError(field, errorElement, 'Message is required');
                return false;
            } else if (fieldValue.length < 10) {
                showError(field, errorElement, 'Message must be at least 10 characters');
                return false;
            } else if (fieldValue.length > 1000) {
                showError(field, errorElement, 'Message must not exceed 1000 characters');
                return false;
            }
            break;
    }
    
    return true;
}

/**
 * Shows error message for a field
 * @param {HTMLElement} field - The form field with error
 * @param {HTMLElement} errorElement - The error message element
 * @param {string} message - The error message to display
 */
function showError(field, errorElement, message) {
    field.classList.add('error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

/**
 * Shows success message after form submission
 */
function showSuccessMessage() {
    const formSuccess = document.getElementById('formSuccess');
    const contactForm = document.getElementById('contactForm');
    
    if (formSuccess && contactForm) {
        // Hide form and show success message
        contactForm.style.display = 'none';
        formSuccess.classList.add('show');
        
        // Scroll to success message
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Reset after 5 seconds
        setTimeout(() => {
            formSuccess.classList.remove('show');
            contactForm.style.display = 'flex';
        }, 5000);
    }
}

// ========================================
// Smooth Scrolling for Anchor Links
// ========================================

/**
 * Adds smooth scrolling to all anchor links
 */
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// Portfolio Image Loading
// ========================================

/**
 * Adds loading animation for portfolio images
 */
function initializePortfolioImages() {
    const portfolioItems = document.querySelectorAll('.portfolio-item img');
    
    portfolioItems.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // If image is already loaded (from cache)
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.style.opacity = '0';
        }
    });
}

// ========================================
// Newsletter Form Handler
// ========================================

/**
 * Handles newsletter subscription
 */
function initializeNewsletterForm() {
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (validateEmail(email)) {
                // In production, send to server
                console.log('Newsletter subscription:', email);
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    });
}

/**
 * Validates email format
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ========================================
// Animation on Scroll (Optional Enhancement)
// ========================================

/**
 * Adds fade-in animation for elements as they come into view
 */
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe service cards, portfolio items, and other elements
    const elementsToAnimate = document.querySelectorAll('.service-card, .value-card, .reason-item');
    
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// ========================================
// Initialize All Features on Page Load
// ========================================

/**
 * Main initialization function
 * Called when DOM is fully loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initializeNavigation();
    initializeContactForm();
    initializeSmoothScrolling();
    initializePortfolioImages();
    initializeNewsletterForm();
    initializeScrollAnimations();
    
    console.log('My Build Homes website initialized successfully!');
});

// ========================================
// Window Load Event
// ========================================

window.addEventListener('load', function() {
    // Hide any loading screens if they exist
    console.log('All resources loaded');
});

// ========================================
// Export functions for testing (if needed)
// ========================================

// Uncomment the following if you need to test individual functions
// window.MyBuildHomes = {
//     validateField,
//     validateEmail,
//     handleFormSubmit
// };
