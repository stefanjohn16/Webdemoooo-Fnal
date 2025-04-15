/**
 * Art's Ink Jönköping - Booking System
 *
 * This script handles the iframe height adjustment for the embedded booking system.
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize iframe height adjustment
    initIframeHeightAdjustment();
    
    // Handle tab changes to reset iframe heights
    handleTabChanges();
    
    // Update booking tab labels to Swedish
    updateBookingTabLabels();
});

/**
 * Initialize iframe height adjustment
 */
function initIframeHeightAdjustment() {
    // Get all booking iframes
    const bookingIframes = document.querySelectorAll('.booking-iframe-container iframe');
    
    // Add load event listener to each iframe
    bookingIframes.forEach(iframe => {
        iframe.addEventListener('load', function() {
            adjustIframeHeight(this);
        });
        
        // Also try to adjust height after a short delay
        setTimeout(() => {
            adjustIframeHeight(iframe);
        }, 1000);
    });
    
    // Periodically check and adjust iframe heights
    setInterval(() => {
        bookingIframes.forEach(iframe => {
            adjustIframeHeight(iframe);
        });
    }, 2000);
}

/**
 * Adjust iframe height based on content
 * @param {HTMLIFrameElement} iframe - The iframe element to adjust
 */
function adjustIframeHeight(iframe) {
    try {
        // Try to get the height of the iframe content
        const iframeContent = iframe.contentWindow || iframe.contentDocument;
        if (iframeContent.document) {
            // Get the height of the body
            const height = iframeContent.document.body.scrollHeight;
            
            // Add some padding
            iframe.style.height = (height + 50) + 'px';
        }
    } catch (e) {
        // Cross-origin restrictions might prevent access to iframe content
        console.log('Could not adjust iframe height due to cross-origin restrictions');
    }
}

/**
 * Update booking tab labels to Swedish
 */
function updateBookingTabLabels() {
    // Get all tab buttons
    const tabButtons = document.querySelectorAll('#bookingTabs .nav-link');
    
    // Define Swedish translations for tab labels
    const translations = {
        'consultation-tab': 'Konsultation',
        'tattoo1-tab': 'Tatuering 1',
        'tattoo2-tab': 'Tatuering 2',
        'piercing-tab': 'Piercing',
        'piercing1-tab': 'Piercing 1',
        'piercing2-tab': 'Piercing 2'
    };
    
    // Update each tab button text
    tabButtons.forEach(button => {
        const id = button.id;
        if (translations[id]) {
            button.textContent = translations[id];
        }
    });
}

/**
 * Handle tab changes to reset iframe heights
 */
function handleTabChanges() {
    // Get all tab buttons
    const tabButtons = document.querySelectorAll('[data-bs-toggle="tab"]');
    
    // Add click event listener to each tab button
    tabButtons.forEach(button => {
        button.addEventListener('shown.bs.tab', function(event) {
            // Get the newly activated tab
            const activeTab = document.querySelector(this.getAttribute('data-bs-target'));
            
            // Get the iframe in the active tab
            const iframe = activeTab.querySelector('iframe');
            
            // Adjust the iframe height
            if (iframe) {
                setTimeout(() => {
                    adjustIframeHeight(iframe);
                }, 500);
            }
        });
    });
}
