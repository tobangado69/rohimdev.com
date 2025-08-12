const runningTitle = document.querySelector(".running-title");

if (runningTitle) {
  var typed = new Typed(".running-title", {
    strings: [
      "Frontend Developer",
      "Streamer",
      "Web Developer",
      "Backend Developer",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
}

const canvas = document.getElementById("stars-bg");
const ctx = canvas.getContext("2d");
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function createStars(count) {
  stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.3,
      d: Math.random() * 0.5 + 0.2,
      alpha: Math.random() * 0.5 + 0.5,
    });
  }
}
createStars(160);

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const star of stars) {
    ctx.save();
    ctx.globalAlpha = star.alpha;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
    ctx.fillStyle = "#fff";
    ctx.shadowColor = "#fff";
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.restore();

    // Animate
    star.y += star.d;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  }
  requestAnimationFrame(drawStars);
}
drawStars();
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".center");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

const images = document.querySelectorAll(".screenshot");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");

images.forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
  });
});

if (lightboxClose) {
  lightboxClose.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
}
// Back to top functionality
document.addEventListener("DOMContentLoaded", function () {
  const backToTopButtons = document.querySelectorAll(".back-to-top a");

  backToTopButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      e.preventDefault(); // Mencegah default anchor behavior

      // Scroll ke atas dengan animasi halus
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });
});

// Close lightbox when clicking anywhere inside the lightbox
if (lightbox) {
  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
}
