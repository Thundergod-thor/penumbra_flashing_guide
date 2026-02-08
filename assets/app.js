/* Cursor-follow glow */
const glow = document.getElementById("cursor-glow");
if (glow) {
  window.addEventListener("mousemove", e => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
}

/* Theme toggle */
const toggle = document.getElementById("themeToggle");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) root.setAttribute("data-theme", savedTheme);

if (toggle) {
  toggle.onclick = () => {
    const next = root.getAttribute("data-theme") === "light" ? "" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };
}

/* One-time typing animation */
const title = document.getElementById("typingTitle");
if (title && !sessionStorage.getItem("typed")) {
  const text = title.textContent;
  title.textContent = "";
  let i = 0;
  const t = setInterval(() => {
    title.textContent += text[i++];
    if (i >= text.length) {
      clearInterval(t);
      sessionStorage.setItem("typed", "yes");
    }
  }, 60);
}

/* Copy buttons (Linux only) */
document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.onclick = () => {
    const code = btn.previousElementSibling.innerText;
    navigator.clipboard.writeText(code);
    btn.textContent = "Copied ✓";
    setTimeout(() => btn.textContent = "Copy", 1200);
  };
});
