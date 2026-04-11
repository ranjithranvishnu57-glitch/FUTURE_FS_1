// 🔤 TYPING EFFECT
const text = "Full Stack Developer | Node.js | JavaScript";
let i = 0;

function typingEffect() {
  const el = document.querySelector("#typing");
  if (!el) return;

  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 80);
  }
}

window.addEventListener("DOMContentLoaded", typingEffect);


// 🔽 SMOOTH SCROLL FUNCTION (BUTTON USE)
function scrollToSection(id) {
  const section = document.getElementById(id);

  if (section) {
    const offset = 100;
    const top = section.offsetTop - offset;

    window.scrollTo({
      top: top,
      behavior: "smooth"
    });
  }
}


// 📩 FORM SUBMIT
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("✅ Message sent successfully!");
    form.reset();
  });
}


// 🔥 SCROLL REVEAL
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// 🔗 OPEN LINKS (SAFE)
function openLink(url) {
  if (!url) return;
  window.open(url, "_blank");
}


// 🌙 DARK MODE TOGGLE
function toggleMode() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}


// 💾 LOAD SAVED MODE
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
});


// 🔥 NAVBAR SMOOTH SCROLL (FIXED PERFECT)
document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    if (target) {
      const offset = 100;
      const top = target.offsetTop - offset;

      window.scrollTo({
        top: top,
        behavior: "smooth"
      });
    }
  });
});


// 📂 RESUME ALERT
const resumeBtn = document.querySelector(".resume-section .btn");
if (resumeBtn) {
  resumeBtn.addEventListener("click", () => {
    alert("📄 Resume download started!");
  });
}


// 🌟 SOCIAL LINKS CLICK (NO STYLE CHANGE)
document.querySelectorAll(".social-links a").forEach(link => {
  link.addEventListener("click", () => {
    // allow default behavior (no preventDefault)
  });
});
/* 🔥 CURSOR MOTION INSIDE CARDS */
document.querySelectorAll(".about-card").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", x + "px");
    card.style.setProperty("--y", y + "px");
  });
});