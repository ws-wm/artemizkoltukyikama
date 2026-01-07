document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Toggle ---
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = menuBtn.querySelector('i');

    menuBtn.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('open');

        if (isOpen) {
            mobileMenu.classList.remove('open');
            mobileMenu.classList.add('hidden'); // Use Tailwind's hidden for display management after transition
            setTimeout(() => {
                // specific logic to ensure display:none applied if needed or handled by CSS max-height
            }, 300);
            menuIcon.classList.replace('ph-x', 'ph-list');
        } else {
            mobileMenu.classList.remove('hidden');
            // Small delay to allow display block to apply before opacity transition
            setTimeout(() => {
                mobileMenu.classList.add('open');
            }, 10);
            menuIcon.classList.replace('ph-list', 'ph-x');
        }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            menuIcon.classList.replace('ph-x', 'ph-list');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);
        });
    });

    // --- FAQ Accordion ---
    const accordions = document.querySelectorAll('.accordion-btn');

    accordions.forEach(acc => {
        acc.addEventListener('click', function () {
            // Close other open accordions (optional, but requested "accordion-style" often implies one at a time or independent. Let's make it independent for better UX, or exclusive? usually exclusive is cleaner)
            // Let's keep it independent (multiple open allowed) unless strictly "accordion" usually means 1 open. 
            // The prompt says "accordion-style design". I'll implement exclusive opening for a cleaner look.

            const currentContent = this.nextElementSibling;
            const currentIcon = this.querySelector('i');
            const isOpen = currentContent.style.maxHeight;

            // Close all others
            accordions.forEach(otherAcc => {
                if (otherAcc !== this) {
                    otherAcc.nextElementSibling.style.maxHeight = null;
                    otherAcc.querySelector('i').style.transform = 'rotate(0deg)';
                }
            });

            // Toggle current
            if (isOpen) {
                currentContent.style.maxHeight = null;
                currentIcon.style.transform = 'rotate(0deg)';
                this.classList.remove('text-aqua-green'); // Optional active state styling
            } else {
                currentContent.style.maxHeight = currentContent.scrollHeight + "px";
                currentIcon.style.transform = 'rotate(180deg)';
                this.classList.add('text-aqua-green');
            }
        });
    });

    // --- Header Scroll Effect ---
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled', 'shadow-sm');
        } else {
            navbar.classList.remove('scrolled', 'shadow-sm');
        }
    });
});
