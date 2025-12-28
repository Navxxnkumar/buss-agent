// Wrap everything in a load listener
document.addEventListener('DOMContentLoaded', function () {

    // --- 1. Mobile view toggle menu ---
    let mobileicon = document.getElementById("menutoggle");
    let mobilemenu = document.getElementById("navbar");

    if (mobileicon && mobilemenu) {
        mobileicon.addEventListener("click", () => {
            mobilemenu.classList.toggle("open");
            if (mobilemenu.classList.contains("open")) {
                mobileicon.classList.replace("bx-menu-left", "bx-x");
            } else {
                mobileicon.classList.replace("bx-x", "bx-menu-left");
            }
        });
    }

    // --- 2. Home Page Slider (slide-row) ---
    const slides = document.getElementById("slide-row");
    const buttons = document.querySelectorAll(".btnn");

    if (slides && buttons.length > 0) {
        buttons.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                slides.style.transform = `translateX(-${index * 800}px)`;
                buttons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
            });
        });
    }

    // --- 3. Header Link Color Change ---
    const navLinks = document.querySelectorAll(".menubar ul li a");
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener("click", function () {
                navLinks.forEach(l => l.classList.remove("home"));
                this.classList.add("home");
            });
        });
    }

    // --- 4. CONTACT FORM VALIDATION (The main fix) ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            let isValid = true;
            const fields = ['name', 'email', 'subject', 'message'];

            fields.forEach(field => {
                const input = document.getElementById(field);
                if (input) {
                    const error = input.nextElementSibling;
                    // Reset
                    input.classList.remove('invalid');
                    if (error) error.innerText = "";

                    // Check Empty
                    if (input.value.trim() === "") {
                        input.classList.add('invalid');
                        if (error) error.innerText = field.charAt(0).toUpperCase() + field.slice(1) + " is required!";
                        isValid = false;
                    }
                }
            });

            if (isValid) {
                const status = document.getElementById('formStatus');
                if (status) {
                    status.innerHTML = "<span style='color:#00bcd4; font-weight:bold;'>Success! Message Sent.</span>";
                }
                contactForm.reset();
            }
        });
    }
});

// --- 5. BX SLIDER (Keep outside DOMContentLoaded as it uses jQuery) ---
$(document).ready(function () {
    if ($('.bxslider').length) {
        var slider = $('.bxslider').bxSlider({
            minSlides: 2,
            maxSlides: 5,
            slideWidth: 300,
            slideMargin: 10,
            auto: true,
            pause: 5000,
            speed: 1000,
            pager: true,
            controls: true,
            autoHover: true,
            infiniteLoop: true
        });

        $('.bxslider li').hover(
            function () { slider.stopAuto(); },
            function () { slider.startAuto(); }
        );
    }
});