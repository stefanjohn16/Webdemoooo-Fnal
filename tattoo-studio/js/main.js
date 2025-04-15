document.addEventListener('DOMContentLoaded', function() {
    // Initialize the gallery
    loadGallery();
    
    // Smooth scrolling for navigation links
    initSmoothScrolling();
    
    // Initialize contact form
    initContactForm();
    
    // Navbar scroll effect
    initNavbarScroll();
    
    // Initialize gallery toggle
    initGalleryToggle();
    
    // Initialize gallery see more button
    initGallerySeeMore();
    
    // Load Google reviews
    loadGoogleReviews();
    
    // Initialize back to top button
    initBackToTop();
});

/**
 * Load gallery images dynamically
 */
function loadGallery() {
    const imagesGalleryContainer = document.querySelector('.images-gallery');
    const videosGalleryContainer = document.querySelector('.videos-gallery');
    
    if (!imagesGalleryContainer || !videosGalleryContainer) return;

    // Create lightbox container
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="lightbox-close">&times;</span>
            <button class="lightbox-nav prev"><i class="fas fa-chevron-left"></i></button>
            <div class="lightbox-media-container">
                <img src="" alt="" class="lightbox-image">
                <video controls class="lightbox-video">
                    <source src="" type="video/mp4">
                </video>
            </div>
            <button class="lightbox-nav next"><i class="fas fa-chevron-right"></i></button>
        </div>
    `;
    
    document.body.appendChild(lightbox);
    
    // Get all gallery items
    const galleryItems = [
        ...imagesGalleryContainer.querySelectorAll('.gallery-item'),
        ...videosGalleryContainer.querySelectorAll('.gallery-item')
    ];
    
    let currentIndex = 0;
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxVideo = lightbox.querySelector('.lightbox-video');
    const lightboxMediaContainer = lightbox.querySelector('.lightbox-media-container');
    
    // Navigation functions
    function showMedia(index) {
        currentIndex = index;
        const item = galleryItems[index];
        const isVideo = item.classList.contains('video-item');
        
        if (isVideo) {
            const videoSrc = item.dataset.videoSrc;
            lightboxVideo.querySelector('source').src = videoSrc;
            lightboxVideo.load();
            lightboxImage.style.display = 'none';
            lightboxVideo.style.display = 'block';
        } else {
            const imgSrc = item.querySelector('img').src;
            lightboxImage.src = imgSrc;
            lightboxImage.alt = item.querySelector('img').alt;
            lightboxVideo.style.display = 'none';
            lightboxImage.style.display = 'block';
        }
    }
    
    function nextMedia() {
        showMedia((currentIndex + 1) % galleryItems.length);
    }
    
    function prevMedia() {
        showMedia((currentIndex - 1 + galleryItems.length) % galleryItems.length);
    }
    
    // Add event listeners for navigation
    lightbox.querySelector('.next').addEventListener('click', nextMedia);
    lightbox.querySelector('.prev').addEventListener('click', prevMedia);
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        
        switch(e.key) {
            case 'ArrowRight':
                nextMedia();
                break;
            case 'ArrowLeft':
                prevMedia();
                break;
            case 'Escape':
                lightbox.classList.remove('active');
                break;
        }
    });
    `;
    document.body.appendChild(lightbox);
    
    // Portfolio images paths
    const galleryImages = [
        {
            url: 'images/portfolio/Portfolio Image 1.jpg',
            title: 'Tatuering 1',
            artist: 'Art\'s Ink'
        },
        {
            url: 'images/portfolio/Portfolio Image 2.jpg',
            title: 'Tatuering 2',
            artist: 'Art\'s Ink'
        },
        {
            url: 'images/portfolio/Portfolio Image 3.jpg',
            title: 'Tatuering 3',
            artist: 'Art\'s Ink'
        },
        {
            url: 'images/portfolio/Portfolio Image 4.jpg',
            title: 'Tatuering 4',
            artist: 'Art\'s Ink'
        },
        {
            url: 'images/portfolio/Portfolio Image 5.jpg',
            title: 'Tatuering 5',
            artist: 'Art\'s Ink'
        },
        {
            url: 'images/portfolio/Portfolio Image 6.jpg',
            title: 'Tatuering 6',
            artist: 'Art\'s Ink'
        },
        {
            url: 'images/portfolio/Portfolio Image 7.jpg',
            title: 'Tatuering 7',
            artist: 'Art\'s Ink'
        },
        {
            url: 'images/portfolio/Portfolio Image 8.jpg',
            title: 'Tatuering 8',
            artist: 'Art\'s Ink'
        },
        {
            url: 'images/portfolio/Portfolio Image 9.jpg',
            title: 'Tatuering 9',
            artist: 'Art\'s Ink'
        },
        {
            url: 'images/portfolio/Portfolio Image 10.jpg',
            title: 'Tatuering 10',
            artist: 'Art\'s Ink'
        },
        {
            url: 'images/portfolio/Portfolio Image 11.jpg',
            title: 'Tatuering 11',
            artist: 'Art\'s Ink'
        },
        {
            url: 'images/portfolio/Portfolio Image 12.jpg',
            title: 'Tatuering 12',
            artist: 'Art\'s Ink'
        },
        {
            url: 'images/portfolio/Portfolio Image 13.jpg',
            title: 'Tatuering 13',
            artist: 'Art\'s Ink'
        },
        {
            url: 'images/portfolio/Portfolio Image 14.jpg',
            title: 'Tatuering 14',
            artist: 'Art\'s Ink'
        },
        {
            url: 'images/portfolio/Portfolio Image 15.jpg',
            title: 'Tatuering 15',
            artist: 'Art\'s Ink'
        },
        {
            url: 'images/portfolio/Portfolio Image 16.jpg',
            title: 'Tatuering 16',
            artist: 'Art\'s Ink'
        }
    ];
    
    // Portfolio videos paths
    const galleryVideos = [
        {
            url: 'images/Videos/Portfolio Mp4 1.mp4',
            title: 'Tatuering Video 1',
            artist: 'Art\'s Ink'
        },
        {
            url: 'images/Videos/Portfolio Mp4 2.mp4',
            title: 'Tatuering Video 2',
            artist: 'Art\'s Ink'
        },
        {
            url: 'images/Videos/Portfolio Mp4 3.mp4',
            title: 'Tatuering Video 3',
            artist: 'Art\'s Ink'
        },
        {
            url: 'images/Videos/Portfolio Mp4 4.mp4',
            title: 'Tatuering Video 4',
            artist: 'Art\'s Ink'
        },
        {
            url: 'images/Videos/Portfolio Mp4 5.mp4',
            title: 'Tatuering Video 5',
            artist: 'Art\'s Ink'
        },
        {
            url: 'images/Videos/Portfolio Mp4 6.mp4',
            title: 'Tatuering Video 6',
            artist: 'Art\'s Ink'
        },
        {
            url: 'images/Videos/Portfolio Mp4 7.mp4',
            title: 'Tatuering Video 7',
            artist: 'Art\'s Ink'
        },
        {
            url: 'images/Videos/Portfolio Mp4 8.mp4',
            title: 'Tatuering Video 8',
            artist: 'Art\'s Ink'
        },
        {
            url: 'images/Videos/Portfolio Mp4 9.mp4',
            title: 'Tatuering Video 9',
            artist: 'Art\'s Ink'
        },
        {
            url: 'images/Videos/Portfolio Mp4 10.mp4',
            title: 'Tatuering Video 10',
            artist: 'Art\'s Ink'
        }
    ];
    
    // Create image gallery items
    // Create intersection observer for lazy loading
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.onload = () => {
                    img.classList.add('loaded');
                    observer.unobserve(img);
                };
            }
        });
    }, {
        rootMargin: '200px',
        threshold: 0.1
    });

    galleryImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        if (index < parseInt(getComputedStyle(document.documentElement).getPropertyValue('--max-gallery-items'))) {
            galleryItem.classList.add('visible');
        }
        
        galleryItem.innerHTML = `
            <div class="gallery-item-inner">
                <img data-src="${image.url}" alt="Art's Ink Tatuering">
                <div class="gallery-overlay">
                    <div class="gallery-caption">
                        <h3>${image.title}</h3>
                        <p>${image.artist}</p>
                    </div>
                </div>
            </div>
        `;
        
        imagesGalleryContainer.appendChild(galleryItem);
        
        // Set up lightbox click handler
        galleryItem.addEventListener('click', () => {
            const lightboxImg = lightbox.querySelector('img');
            lightboxImg.src = image.url;
            lightboxImg.alt = image.title;
            lightbox.classList.add('active');
        });
        
        // Observe the image for lazy loading
        const img = galleryItem.querySelector('img');
        observer.observe(img);
    });

    // Lightbox close handler
    lightbox.querySelector('.lightbox-close').addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    // Close lightbox when clicking outside
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
    
    // Create video gallery items
    // Initialize video modal if it doesn't exist
    let videoModal = document.querySelector('.video-modal');
    if (!videoModal) {
        videoModal = document.createElement('div');
        videoModal.className = 'video-modal';
        videoModal.innerHTML = `
            <div class="video-modal-content">
                <div class="video-modal-close">&times;</div>
                <div class="video-loading">
                    <div class="spinner"></div>
                    <p>Loading video...</p>
                </div>
                <video controls playsinline>
                    <source src="" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        `;
        document.body.appendChild(videoModal);
    }

    // Get modal elements
    const modalVideo = videoModal.querySelector('video');
    const modalContent = videoModal.querySelector('.video-modal-content');
    const modalClose = videoModal.querySelector('.video-modal-close');
    const loadingSpinner = videoModal.querySelector('.video-loading');

    function closeVideoModal() {
        videoModal.classList.remove('active');
        modalVideo.pause();
        modalVideo.currentTime = 0;
        modalVideo.classList.remove('loaded');
        
        // Clear the source element's src attribute
        const videoSources = modalVideo.querySelectorAll('source');
        videoSources.forEach(source => source.remove());
        modalVideo.load();
        
        // Reset background and hide spinner
        modalContent.style.backgroundImage = 'none';
        loadingSpinner.style.display = 'flex';
    }

    // Create video gallery items
    const videoItems = document.querySelectorAll('.video-gallery-item');
    if (!videoItems.length) {
        galleryVideos.forEach((video, index) => {
            const videoItem = document.createElement('div');
            videoItem.className = 'video-gallery-item';
            if (index < parseInt(getComputedStyle(document.documentElement).getPropertyValue('--max-gallery-items'))) {
                videoItem.classList.add('visible');
            }
            
            // Use placeholder image since we don't have videos
            const bgImage = `images/portfolio/Portfolio Image ${index+1}.jpg`;
            
            videoItem.innerHTML = `
                <div class="video-thumbnail" style="background-image: url('${bgImage}')">
                    <div class="video-play-icon">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
                <div class="gallery-overlay"></div>
            `;
            
            videoItem.setAttribute('data-video-url', video.url);
            videoItem.setAttribute('data-video-title', video.title);
            
            videosGalleryContainer.appendChild(videoItem);
        });
        
        // Re-select video items after creation
        videoItems = document.querySelectorAll('.video-gallery-item');
    }

    videoItems.forEach(item => {
        item.addEventListener('click', function() {
            const videoUrl = this.getAttribute('data-video-url');
            const thumbnail = this.querySelector('.video-thumbnail');
            const thumbnailUrl = thumbnail.style.backgroundImage.slice(5, -2);
            
            // Show loading state
            loadingSpinner.style.display = 'flex';
            modalVideo.classList.remove('loaded');
            
            // Set thumbnail as background while video loads
            modalContent.style.backgroundImage = `url(${thumbnailUrl})`;
            modalContent.style.backgroundSize = 'cover';
            modalContent.style.backgroundPosition = 'center';
            
            // Clear previous sources and set new ones
            const videoSources = modalVideo.querySelectorAll('source');
            videoSources.forEach(source => source.remove());
            
            const source = document.createElement('source');
            source.src = videoUrl;
            source.type = 'video/mp4'; // All our videos are MP4
            
            modalVideo.appendChild(source);
            
            // Handle when video is ready to play
            const canPlayHandler = function() {
                loadingSpinner.style.display = 'none';
                modalVideo.classList.add('loaded');
                modalVideo.removeEventListener('canplay', canPlayHandler);
            };
            modalVideo.addEventListener('canplay', canPlayHandler);
            
            // Hide background when video starts playing
            const playingHandler = function() {
                modalContent.style.backgroundImage = 'none';
                modalVideo.removeEventListener('playing', playingHandler);
            };
            modalVideo.addEventListener('playing', playingHandler);
            
            // Add error handling
            const errorHandler = function() {
                console.error('Error loading video:', videoUrl);
                loadingSpinner.innerHTML = '<p>Error loading video</p>';
                setTimeout(closeVideoModal, 2000);
            };
            modalVideo.onerror = errorHandler;
            
            modal.classList.add('active');
            modalVideo.load();
            
            // Try to play the video
            const playPromise = modalVideo.play();
            
            if (playPromise !== undefined) {
                playPromise.catch(e => {
                    console.error('Video play error:', e);
                    errorHandler();
                });
            }
        });
    });
    
    // Close modal when clicking the close button
    modalClose.addEventListener('click', closeVideoModal);
    
    // Close modal when clicking outside the video
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeVideoModal();
        }
    });
}

/**
 * Initialize smooth scrolling for navigation links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Add a subtle highlight effect to the target section
                targetElement.classList.add('section-highlight');
                
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset for fixed navbar
                    behavior: 'smooth'
                });
                
                // Remove the highlight effect after animation completes
                setTimeout(() => {
                    targetElement.classList.remove('section-highlight');
                }, 1000);
                
                // Close mobile menu if open
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    });
}

/**
 * Initialize contact form with validation and submission handling
 */
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;
    
    // Create feedback elements
    const feedbackContainer = document.createElement('div');
    feedbackContainer.className = 'form-feedback mt-3';
    contactForm.appendChild(feedbackContainer);
    
    // Add input validation styling
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateInput(this);
        });
        
        input.addEventListener('input', function() {
            // Remove error styling when user starts typing
            this.classList.remove('is-invalid');
            const feedbackEl = this.nextElementSibling;
            if (feedbackEl && feedbackEl.classList.contains('invalid-feedback')) {
                feedbackEl.textContent = '';
            }
        });
    });
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        
        // Validate all inputs
        let isValid = true;
        
        if (!validateInput(name)) isValid = false;
        if (!validateInput(email)) isValid = false;
        if (!validateInput(message)) isValid = false;
        
        if (!isValid) {
            // Show error message with animation
            showFeedback('Vänligen fyll i alla fält korrekt.', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Skickar...';
        
        // Simulate form submission (in a real app, this would be an API call)
        setTimeout(() => {
            // In a real application, this would send the form data to a server
            console.log('Form submitted:', {
                name: name.value.trim(),
                email: email.value.trim(),
                message: message.value.trim()
            });
            
            // Reset form
            contactForm.reset();
            inputs.forEach(input => {
                input.classList.remove('is-valid');
            });
            
            // Reset button
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
            
            // Show success message with animation
            showFeedback('Tack för ditt meddelande! Vi återkommer så snart som möjligt.', 'success');
        }, 1500);
    });
    
    // Input validation function
    function validateInput(input) {
        const value = input.value.trim();
        let isValid = true;
        let errorMessage = '';
        
        // Remove any existing feedback
        const existingFeedback = input.nextElementSibling;
        if (existingFeedback && existingFeedback.classList.contains('invalid-feedback')) {
            existingFeedback.remove();
        }
        
        // Check if empty
        if (!value) {
            isValid = false;
            errorMessage = 'Detta fält är obligatoriskt';
        }
        // Email validation
        else if (input.id === 'email' && !isValidEmail(value)) {
            isValid = false;
            errorMessage = 'Vänligen ange en giltig e-postadress';
        }
        
        // Add validation styling
        if (isValid) {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
        } else {
            input.classList.remove('is-valid');
            input.classList.add('is-invalid');
            
            // Add error message
            const feedback = document.createElement('div');
            feedback.className = 'invalid-feedback';
            feedback.textContent = errorMessage;
            input.parentNode.insertBefore(feedback, input.nextSibling);
        }
        
        return isValid;
    }
    
    // Feedback message function
    function showFeedback(message, type) {
        feedbackContainer.innerHTML = `
            <div class="alert alert-${type === 'success' ? 'success' : 'danger'} fade-in">
                ${type === 'success'
                    ? '<i class="fas fa-check-circle me-2"></i>'
                    : '<i class="fas fa-exclamation-circle me-2"></i>'}
                ${message}
            </div>
        `;
        
        // Scroll to feedback
        feedbackContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Auto-hide error messages after 5 seconds
        if (type === 'error') {
            setTimeout(() => {
                const alert = feedbackContainer.querySelector('.alert');
                if (alert) {
                    alert.classList.add('fade-out');
                    setTimeout(() => {
                        feedbackContainer.innerHTML = '';
                    }, 500);
                }
            }, 5000);
        }
    }
}

/**
 * Validate email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Initialize gallery toggle between images and videos
 */
function initGalleryToggle() {
    const toggleButtons = document.querySelectorAll('.gallery-toggle button');
    const imagesGallery = document.querySelector('.images-gallery');
    const videosGallery = document.querySelector('.videos-gallery');
    
    if (!toggleButtons.length || !imagesGallery || !videosGallery) return;
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Toggle gallery visibility
            const galleryType = this.getAttribute('data-gallery-type');
            
            if (galleryType === 'images') {
                imagesGallery.classList.add('active');
                videosGallery.classList.remove('active');
            } else {
                imagesGallery.classList.remove('active');
                videosGallery.classList.add('active');
            }
            
            // Reset "See More" state
            const seeMoreBtn = document.getElementById('gallery-see-more');
            if (seeMoreBtn) {
                // Reset the button to show "Se Mer" text and hide "Visa Mindre" text
                const seeMoreText = seeMoreBtn.querySelector('.see-more-text');
                const seeLessText = seeMoreBtn.querySelector('.see-less-text');
                const seeMoreIcon = seeMoreBtn.querySelector('.see-more-icon');
                const seeLessIcon = seeMoreBtn.querySelector('.see-less-icon');
                
                if (seeMoreText && seeLessText && seeMoreIcon && seeLessIcon) {
                    seeMoreText.classList.remove('d-none');
                    seeLessText.classList.add('d-none');
                    seeMoreIcon.classList.remove('d-none');
                    seeLessIcon.classList.add('d-none');
                }
                
                seeMoreBtn.classList.remove('expanded');
                
                // Hide items beyond the initial limit
                const maxItems = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--max-gallery-items'));
                const activeGallery = galleryType === 'images' ? imagesGallery : videosGallery;
                const items = activeGallery.querySelectorAll(galleryType === 'images' ? '.gallery-item' : '.video-gallery-item');
                
                items.forEach((item, index) => {
                    if (index < maxItems) {
                        item.classList.add('visible');
                    } else {
                        item.classList.remove('visible');
                    }
                });
            }
        });
    });
}

/**
 * Initialize gallery "See More" button functionality
 */
function initGallerySeeMore() {
    const seeMoreBtn = document.getElementById('gallery-see-more');
    if (!seeMoreBtn) return;
    
    // Add pulse animation to button on page load
    setTimeout(() => {
        seeMoreBtn.classList.add('pulse-animation');
        setTimeout(() => {
            seeMoreBtn.classList.remove('pulse-animation');
        }, 1500);
    }, 2000);
    
    seeMoreBtn.addEventListener('click', function() {
        const isExpanded = this.classList.contains('expanded');
        const activeGallery = document.querySelector('.gallery-container.active');
        
        if (!activeGallery) return;
        
        const isImagesGallery = activeGallery.classList.contains('images-gallery');
        const items = activeGallery.querySelectorAll(isImagesGallery ? '.gallery-item' : '.video-gallery-item');
        const maxItems = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--max-gallery-items'));
        
        if (!isExpanded) {
            // Expand gallery with staggered animation
            items.forEach((item, index) => {
                if (index >= maxItems) {
                    setTimeout(() => {
                        item.classList.add('visible', 'fade-in-item');
                        
                        // Remove animation class after animation completes
                        setTimeout(() => {
                            item.classList.remove('fade-in-item');
                        }, 500);
                    }, (index - maxItems) * 100);
                }
            });
            
            // Toggle button text
            const seeMoreText = this.querySelector('.see-more-text');
            const seeLessText = this.querySelector('.see-less-text');
            const seeMoreIcon = this.querySelector('.see-more-icon');
            const seeLessIcon = this.querySelector('.see-less-icon');
            
            if (seeMoreText && seeLessText && seeMoreIcon && seeLessIcon) {
                seeMoreText.classList.add('d-none');
                seeLessText.classList.remove('d-none');
                seeMoreIcon.classList.add('d-none');
                seeLessIcon.classList.remove('d-none');
            }
            
            this.classList.add('expanded', 'pulse-animation');
            
            // Remove animation class after animation completes
            setTimeout(() => {
                this.classList.remove('pulse-animation');
            }, 1000);
        } else {
            // Collapse gallery with fade-out animation
            items.forEach((item, index) => {
                if (index >= maxItems) {
                    item.classList.add('fade-out-item');
                    setTimeout(() => {
                        item.classList.remove('visible', 'fade-out-item');
                    }, 300);
                }
            });
            
            // Toggle button text
            const seeMoreText = this.querySelector('.see-more-text');
            const seeLessText = this.querySelector('.see-less-text');
            const seeMoreIcon = this.querySelector('.see-more-icon');
            const seeLessIcon = this.querySelector('.see-less-icon');
            
            if (seeMoreText && seeLessText && seeMoreIcon && seeLessIcon) {
                seeMoreText.classList.remove('d-none');
                seeLessText.classList.add('d-none');
                seeMoreIcon.classList.remove('d-none');
                seeLessIcon.classList.add('d-none');
            }
            
            this.classList.remove('expanded');
            this.classList.add('pulse-animation');
            
            // Remove animation class after animation completes
            setTimeout(() => {
                this.classList.remove('pulse-animation');
            }, 1000);
            
            // Scroll to the top of the gallery section
            const gallerySection = document.getElementById('galleri');
            if (gallerySection) {
                window.scrollTo({
                    top: gallerySection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        }
    });
}

/**
 * Load Google reviews
 */
function loadGoogleReviews() {
    const reviewsContainer = document.getElementById('google-reviews');
    if (!reviewsContainer) return;
    
    // Sample reviews - in a real application, these would come from the Google Places API
    // Updated to include the current date (2025-04-15) for the latest review
    const reviews = [
        {
            author: 'Anna Lindberg',
            date: '2025-04-15', // Updated to today's date
            rating: 5,
            text: 'Fantastisk upplevelse! Min tatuerare var otroligt skicklig och lyssnade verkligen på vad jag ville ha. Studion är ren och professionell. Rekommenderar starkt!',
            profileImage: 'https://randomuser.me/api/portraits/women/1.jpg'
        },
        {
            author: 'Erik Johansson',
            date: '2025-04-05',
            rating: 5,
            text: 'Bästa tatueringsstudion i Jönköping! Artisterna är så talangfulla och miljön är avslappnad och välkomnande. Kommer definitivt tillbaka för min nästa tatuering.',
            profileImage: 'https://randomuser.me/api/portraits/men/2.jpg'
        },
        {
            author: 'Maria Svensson',
            date: '2025-03-28',
            rating: 4,
            text: 'Mycket nöjd med min tatuering. Personalen var professionell och hjälpsam. Enda anledningen till att jag inte ger 5 stjärnor är att jag fick vänta lite längre än planerat.',
            profileImage: 'https://randomuser.me/api/portraits/women/3.jpg'
        },
        {
            author: 'Johan Andersson',
            date: '2025-03-15',
            rating: 5,
            text: 'Helt otroligt resultat! Min tatuerare förstod exakt vad jag ville ha och levererade över mina förväntningar. Studion är ren och modern. Rekommenderas varmt!',
            profileImage: 'https://randomuser.me/api/portraits/men/4.jpg'
        },
        {
            author: 'Lisa Bergman',
            date: '2025-03-10',
            rating: 5,
            text: 'Jag är så nöjd med min tatuering! Personalen var professionell och vänlig. Studion är ren och modern. Kommer definitivt tillbaka!',
            profileImage: 'https://randomuser.me/api/portraits/women/5.jpg'
        },
        {
            author: 'Anders Nilsson',
            date: '2025-03-05',
            rating: 5,
            text: 'Bästa tatueringsstudion i Sverige! Artisterna är otroligt skickliga och kreativa. Rekommenderar starkt!',
            profileImage: 'https://randomuser.me/api/portraits/men/6.jpg'
        }
    ];
    
    // Function to display reviews
    function displayReviews() {
        // Sort reviews by date (newest first)
        reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        // Clear container
        reviewsContainer.innerHTML = '';
        
        // Create review cards
        reviews.forEach(review => {
            const reviewCard = document.createElement('div');
            reviewCard.className = 'review-card';
            
            // Create star rating HTML
            let starsHtml = '';
            for (let i = 1; i <= 5; i++) {
                if (i <= review.rating) {
                    starsHtml += '<i class="fas fa-star"></i>';
                } else {
                    starsHtml += '<i class="far fa-star"></i>';
                }
            }
            
            // Format date to Swedish format
            const reviewDate = new Date(review.date);
            const formattedDate = reviewDate.toLocaleDateString('sv-SE', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            reviewCard.innerHTML = `
                <div class="review-header">
                    <img src="${review.profileImage}" alt="${review.author}" class="reviewer-img">
                    <div class="reviewer-info">
                        <h5>${review.author}</h5>
                        <div class="review-date">${formattedDate}</div>
                    </div>
                </div>
                <div class="review-stars">
                    ${starsHtml}
                </div>
                <p class="review-text">${review.text}</p>
            `;
            
            reviewsContainer.appendChild(reviewCard);
        });
    }
    
    // Function to automatically update reviews
    function updateReviews() {
        // In a real application, this would fetch new reviews from Google Places API
        // For demo purposes, we'll just update the date of the first review to simulate a new review
        const today = new Date();
        reviews[0].date = today.toISOString().split('T')[0];
        
        // Reload reviews
        displayReviews();
    }
    
    // Set up automatic review updates (every 24 hours in a real app)
    // For demo purposes, we'll use a shorter interval
    setInterval(updateReviews, 60000); // Update every minute for demo
    
    // Initial display of reviews
    displayReviews();
    
    // Set up navigation buttons
    const prevBtn = document.querySelector('.review-nav-btn.prev-btn');
    const nextBtn = document.querySelector('.review-nav-btn.next-btn');
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            reviewsContainer.scrollBy({ left: -370, behavior: 'smooth' });
        });
        
        nextBtn.addEventListener('click', () => {
            reviewsContainer.scrollBy({ left: 370, behavior: 'smooth' });
        });
    }
}

/**
 * Initialize back to top button
 */
function initBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');
    if (!backToTopBtn) return;
    
    // Show/hide button based on scroll position with smooth transition
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top when clicked with enhanced animation
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Add rotation animation on click
        this.style.transition = 'transform 0.5s ease';
        this.style.transform = 'rotate(360deg)';
        
        // Reset rotation after animation completes
        setTimeout(() => {
            this.style.transition = 'none';
            this.style.transform = 'rotate(0deg)';
            
            // Then restore the transition
            setTimeout(() => {
                this.style.transition = 'transform 0.5s ease';
            }, 50);
        }, 500);
        
        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Initial check to see if button should be visible
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
    }
}

/**
 * Initialize navbar scroll effect
 */
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.boxShadow = 'none';
        }
    });
}