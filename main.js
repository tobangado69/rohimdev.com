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
//
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

// filepath: c:\Users\Administrator\Portofolio\main.js
document.querySelectorAll(".nav-link").forEach((link) => {
  // Ambil path dari href (tanpa domain dan query)
  let linkPath = link.getAttribute("href");
  // Untuk halaman utama ("/"), cocokkan juga dengan "/index.html"
  if (
    linkPath === window.location.pathname ||
    (window.location.pathname === "/" && linkPath === "/")
  ) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});
