/**
 * Responsive Enhancement Script for SHM Simulator
 * Handles mobile navigation, responsive behavior, and touch interactions
 */

(function() {
    'use strict';

    // =================================================
    // RESPONSIVE NAVIGATION
    // =================================================
    
    function initializeNavigation() {
        // Create mobile navigation toggle if it doesn't exist
        const navigationBar = document.querySelector('.navigation-bar');
        if (!navigationBar) return;

        // Check if toggle button already exists
        let navToggle = navigationBar.querySelector('.nav-toggle');
        if (!navToggle) {
            // Create toggle button
            navToggle = document.createElement('button');
            navToggle.className = 'nav-toggle';
            navToggle.innerHTML = '☰';
            navToggle.setAttribute('aria-label', 'Toggle navigation menu');
            
            // Create nav menu if it doesn't exist
            let navMenu = navigationBar.querySelector('.nav-menu');
            if (!navMenu) {
                navMenu = document.createElement('ul');
                navMenu.className = 'nav-menu';
                // Move existing nav links to the menu
                const existingLinks = navigationBar.querySelectorAll('a');
                existingLinks.forEach(link => {
                    const li = document.createElement('li');
                    li.appendChild(link.cloneNode(true));
                    navMenu.appendChild(li);
                    link.remove();
                });
            }
            
            navigationBar.appendChild(navToggle);
            navigationBar.appendChild(navMenu);
        }

        // Toggle navigation menu
        navToggle.addEventListener('click', function() {
            const navMenu = navigationBar.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
            
            // Update toggle button text
            navToggle.innerHTML = navMenu.classList.contains('active') ? '✕' : '☰';
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            const navMenu = navigationBar.querySelector('.nav-menu');
            if (!navigationBar.contains(e.target) && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.innerHTML = '☰';
            }
        });

        // Close menu when clicking on a link
        const navLinks = navigationBar.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                const navMenu = navigationBar.querySelector('.nav-menu');
                navMenu.classList.remove('active');
                navToggle.innerHTML = '☰';
            });
        });
    }

    // =================================================
    // RESPONSIVE SVG HANDLING
    // =================================================
    
    function makeResponsiveSVG() {
        const plottingPanel = document.getElementById('plottingPanel');
        if (!plottingPanel) return;

        // Set SVG to be responsive
        plottingPanel.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        
        // Update viewBox based on current dimensions
        const rect = plottingPanel.getBoundingClientRect();
        const viewBox = `0 0 ${rect.width} ${rect.height}`;
        plottingPanel.setAttribute('viewBox', viewBox);

        // Handle window resize
        function updateSVGDimensions() {
            const container = plottingPanel.parentElement;
            if (container) {
                const containerRect = container.getBoundingClientRect();
                plottingPanel.style.width = '100%';
                plottingPanel.style.height = '100%';
            }
        }

        window.addEventListener('resize', debounce(updateSVGDimensions, 250));
        updateSVGDimensions();
    }

    // =================================================
    // TOUCH ENHANCEMENTS
    // =================================================
    
    function addTouchEnhancements() {
        // Add touch-friendly interactions for control elements
        const controlElements = document.querySelectorAll('button, input[type="range"], fieldset');
        
        controlElements.forEach(element => {
            // Add touch feedback
            element.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.95)';
            });
            
            element.addEventListener('touchend', function() {
                this.style.transform = '';
            });
            
            element.addEventListener('touchcancel', function() {
                this.style.transform = '';
            });
        });

        // Improve range slider touch interaction
        const sliders = document.querySelectorAll('input[type="range"]');
        sliders.forEach(slider => {
            slider.addEventListener('touchstart', function(e) {
                e.preventDefault();
            });
            
            slider.addEventListener('touchmove', function(e) {
                e.preventDefault();
                const touch = e.touches[0];
                const rect = this.getBoundingClientRect();
                const percentage = (touch.clientX - rect.left) / rect.width;
                const value = this.min + (this.max - this.min) * percentage;
                this.value = Math.max(this.min, Math.min(this.max, value));
                
                // Trigger input event
                this.dispatchEvent(new Event('input', { bubbles: true }));
            });
        });
    }

    // =================================================
    // ADAPTIVE LAYOUT ADJUSTMENTS
    // =================================================
    
    function adaptiveLayoutAdjustments() {
        // Adjust control panel layout based on screen size
        function adjustControlLayout() {
            const controlPanel = document.getElementById('controlPanel');
            const parameterPanel = document.getElementById('parameterPanel');
            const buttonPanel = document.getElementById('buttonPanel');
            
            if (!controlPanel) return;

            const screenWidth = window.innerWidth;
            
            if (screenWidth < 768) {
                // Mobile layout adjustments
                if (parameterPanel) {
                    parameterPanel.style.display = 'flex';
                    parameterPanel.style.flexDirection = 'column';
                }
                
                // Stack slider panels vertically
                const sliderPanels = controlPanel.querySelectorAll('[id$="SliderPanel"]');
                sliderPanels.forEach(panel => {
                    panel.style.marginBottom = '1rem';
                });
                
            } else if (screenWidth < 1024) {
                // Tablet layout adjustments
                if (parameterPanel) {
                    parameterPanel.style.flexDirection = 'column';
                }
                
            } else {
                // Desktop layout adjustments
                if (parameterPanel) {
                    parameterPanel.style.flexDirection = 'row';
                }
            }
        }

        // Initial adjustment
        adjustControlLayout();
        
        // Adjust on window resize
        window.addEventListener('resize', debounce(adjustControlLayout, 250));
    }

    // =================================================
    // PLOT PANEL RESPONSIVENESS
    // =================================================
    
    function makePlotPanelResponsive() {
        const plots = document.getElementById('plots');
        const plotPanel = document.getElementById('plotpanel');
        
        if (!plots || !plotPanel) return;

        function adjustPlotSize() {
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            
            // Adjust plot dimensions based on screen size
            if (screenWidth < 768) {
                // Mobile
                plotPanel.style.height = Math.min(screenHeight * 0.4, 300) + 'px';
            } else if (screenWidth < 1024) {
                // Tablet
                plotPanel.style.height = Math.min(screenHeight * 0.5, 400) + 'px';
            } else if (screenWidth < 1280) {
                // Desktop
                plotPanel.style.height = Math.min(screenHeight * 0.6, 500) + 'px';
            } else {
                // Large desktop
                plotPanel.style.height = Math.min(screenHeight * 0.7, 600) + 'px';
            }
            
            // Ensure the SVG updates accordingly
            makeResponsiveSVG();
        }

        adjustPlotSize();
        window.addEventListener('resize', debounce(adjustPlotSize, 250));
        
        // Handle orientation change
        window.addEventListener('orientationchange', function() {
            setTimeout(adjustPlotSize, 100);
        });
    }

    // =================================================
    // ACCESSIBILITY ENHANCEMENTS
    // =================================================
    
    function addAccessibilityEnhancements() {
        // Add ARIA labels to interactive elements
        const buttons = document.querySelectorAll('button:not([aria-label])');
        buttons.forEach(button => {
            if (button.title) {
                button.setAttribute('aria-label', button.title);
            } else if (button.textContent.trim()) {
                button.setAttribute('aria-label', button.textContent.trim());
            }
        });

        // Add ARIA labels to sliders
        const sliders = document.querySelectorAll('input[type="range"]');
        sliders.forEach(slider => {
            if (slider.title && !slider.getAttribute('aria-label')) {
                slider.setAttribute('aria-label', slider.title);
            }
        });

        // Add keyboard navigation for custom controls
        const fieldsets = document.querySelectorAll('fieldset');
        fieldsets.forEach(fieldset => {
            fieldset.setAttribute('tabindex', '0');
            
            fieldset.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const radio = this.querySelector('input[type="radio"]');
                    if (radio) {
                        radio.checked = true;
                        radio.dispatchEvent(new Event('change', { bubbles: true }));
                    }
                }
            });
        });
    }

    // =================================================
    // PERFORMANCE OPTIMIZATIONS
    // =================================================
    
    function addPerformanceOptimizations() {
        // Lazy load non-critical elements
        function lazyLoadElements() {
            const images = document.querySelectorAll('img[data-src]');
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        }

        // Throttle scroll events
        let scrollTimeout;
        window.addEventListener('scroll', function() {
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            scrollTimeout = setTimeout(function() {
                // Handle scroll-based optimizations
                const scrollTop = window.pageYOffset;
                const header = document.getElementById('header');
                
                if (header) {
                    if (scrollTop > 100) {
                        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                    } else {
                        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                    }
                }
            }, 10);
        });

        // Initialize lazy loading if supported
        if ('IntersectionObserver' in window) {
            lazyLoadElements();
        }
    }

    // =================================================
    // UTILITY FUNCTIONS
    // =================================================
    
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    function isMobile() {
        return window.innerWidth < 768;
    }

    function isTablet() {
        return window.innerWidth >= 768 && window.innerWidth < 1024;
    }

    function isDesktop() {
        return window.innerWidth >= 1024;
    }

    // =================================================
    // INITIALIZATION
    // =================================================
    
    function initialize() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initialize);
            return;
        }

        console.log('Initializing responsive enhancements...');

        // Initialize all modules
        initializeNavigation();
        makeResponsiveSVG();
        addTouchEnhancements();
        adaptiveLayoutAdjustments();
        makePlotPanelResponsive();
        addAccessibilityEnhancements();
        addPerformanceOptimizations();

        // Add responsive class to body
        document.body.classList.add('responsive-enhanced');

        // Expose utility functions globally for debugging
        window.ResponsiveUtils = {
            isMobile,
            isTablet,
            isDesktop,
            debounce
        };

        console.log('Responsive enhancements initialized successfully!');
    }

    // Start initialization
    initialize();

    // Handle page visibility change for performance
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            // Page is hidden, pause non-critical operations
            console.log('Page hidden - pausing non-critical operations');
        } else {
            // Page is visible, resume operations
            console.log('Page visible - resuming operations');
        }
    });

})();
