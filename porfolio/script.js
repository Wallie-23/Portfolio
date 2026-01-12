/* =========================
   INTERSECTION OBSERVER
========================= */
document.addEventListener("DOMContentLoaded", () => {

  const projectCards = document.querySelectorAll('.skills-column');
  if (projectCards.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    projectCards.forEach(card => observer.observe(card));
  }

  /* =========================
     MODE SWITCHING
  ========================= */
  const lightBtn = document.getElementById('lightModeBtn');
  const darkBtn = document.getElementById('darkModeBtn');
  const dropdownToggle = document.getElementById('modeDropdown');

  const lightVideo = document.getElementById('homeVideo');
  const darkVideo = document.getElementById('darkVideo');

  function clearModes() {
    document.body.classList.remove('dark-mode');
    if (lightVideo) lightVideo.style.display = 'none';
    if (darkVideo) darkVideo.style.display = 'none';
  }

  if (lightBtn) {
    lightBtn.addEventListener('click', e => {
      e.preventDefault();
      clearModes();
      lightVideo.style.display = 'block';
      if (dropdownToggle) dropdownToggle.innerHTML = "Mode1";
      document.documentElement.style.setProperty('--main-color', 'cyan');
    });
  }

  if (darkBtn) {
    darkBtn.addEventListener('click', e => {
      e.preventDefault();
      clearModes();
      document.body.classList.add('dark-mode');
      darkVideo.style.display = 'block';
      if (dropdownToggle) dropdownToggle.innerHTML = "Mode2";
      document.documentElement.style.setProperty('--main-color', 'goldenrod');
    });
  }

  clearModes();
  if (lightVideo) lightVideo.style.display = 'block';

  /* =========================
     COIN SPIN
  ========================= */
  /*const coin = document.querySelector('.coin-spin');
  if (coin) {
    let rotation = 0;
    let speed = 2;
    const maxSpeed = 15;

    function spinCoin() {
      rotation += speed;
      coin.style.transform = `rotateY(${rotation}deg)`;
      requestAnimationFrame(spinCoin);
    }
    spinCoin();

    coin.addEventListener('click', () => {
      speed = maxSpeed;
      setTimeout(() => {
        const slowDown = setInterval(() => {
          if (speed > 0.5) {
            speed -= 0.2;
          } else {
            speed = 0.5;
            clearInterval(slowDown);
          }
        }, 50);
      }, 3000);
    });
  }*/


  /* =========================
   MOBILE TAP COIN SPIN
  ========================= */

  const coinInner = document.querySelector(".coin-inner");

  if (coinInner) {
    let rotated = false;

    coinInner.addEventListener("click", () => {
      rotated = !rotated;
      coinInner.style.transform = rotated
        ? "rotateY(180deg)"
        : "rotateY(0deg)";
    });
  }

  /* =========================
     READ MORE DROPDOWN (FIXED)
  ========================= */
  const dropdownBtn = document.querySelector(".dropdown-btn");
  const dropdownContainer = document.querySelector(".dropdown-btn-container");

  if (dropdownBtn && dropdownContainer) {
    dropdownBtn.addEventListener("click", () => {
      const isOpen = dropdownContainer.classList.toggle("active");
      dropdownBtn.textContent = isOpen ? "Read Less" : "Read More";
      dropdownBtn.setAttribute("aria-expanded", isOpen);
    });
  } else {
    console.warn("Dropdown elements not found");
  }

  /* =========================
     SWIPER
  ========================= */
  if (typeof Swiper !== "undefined") {
    new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        464: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });
  }

  /* =========================
     CONTACT FORM
  ========================= */
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Message sent successfully!");
      contactForm.reset();
    });
  }

});
