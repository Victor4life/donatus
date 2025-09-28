document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const background = document.getElementById("backgroundContainer");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  /* ================================
         1. Navbar Drop-in Animation
      ================================= */
  const showNavbar = () => {
    setTimeout(() => {
      navbar.classList.add("is-visible");
    }, 500);
  };

  /* ================================
         2. Hamburger Menu Toggle
      ================================= */
  const initHamburger = () => {
    if (!hamburger || !navLinks) return;
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });
  };

  /* ================================
         3. Background Motion Effects
            - Mobile: shake effect (devicemotion)
            - Desktop: parallax with mouse
      ================================= */
  const initBackgroundMotion = () => {
    const sensitivity = 0.5;

    // Mobile shake effect
    if ("DeviceMotionEvent" in window) {
      window.addEventListener("devicemotion", (event) => {
        const x = event.accelerationIncludingGravity.x || 0;
        const y = event.accelerationIncludingGravity.y || 0;

        const moveX = x * 4 * sensitivity;
        const moveY = y * 4 * sensitivity;

        background.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) scale(1.05)`;
      });
    }

    // Desktop parallax with mouse
    window.addEventListener("mousemove", (event) => {
      const { innerWidth, innerHeight } = window;
      const moveX = (event.clientX / innerWidth - 0.5) * 60 * sensitivity;
      const moveY = (event.clientY / innerHeight - 0.5) * 60 * sensitivity;

      background.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) scale(1.05)`;
    });
  };

  /* ================================
         Init
      ================================= */
  showNavbar();
  initHamburger();
  initBackgroundMotion();
});
