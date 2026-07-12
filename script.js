// =====================================
// MOBILE MENU
// =====================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


// =====================================
// CLOSE MENU AFTER CLICK
// =====================================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// =====================================
// NAVBAR SCROLL EFFECT
// =====================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


// =====================================
// GALLERY LIGHTBOX
// =====================================

const galleryImages =
    document.querySelectorAll(".gallery-item img");

const lightbox =
    document.getElementById("lightbox");

const lightboxImg =
    document.getElementById("lightboxImg");

const closeLightbox =
    document.getElementById("closeLightbox");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = img.src;

    });

});

if (closeLightbox) {

    closeLightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

}

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

});


// =====================================
// SCROLL REVEAL ANIMATION
// =====================================

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


// Elements To Animate

const animateElements = document.querySelectorAll(
`
.section,
.section-heading,
.about-image,
.about-text,
.gallery-item,
.detail-card,
.service-card,
.contact-card,
.instagram-section
`
);

animateElements.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


// =====================================
// ESC KEY CLOSE LIGHTBOX
// =====================================

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        lightbox.style.display = "none";

    }

});


// =====================================
// IMAGE PRELOAD (SMOOTHER GALLERY)
// =====================================

window.addEventListener("load", () => {

    const images = document.images;

    for (let img of images) {

        const image = new Image();

        image.src = img.src;

    }

});