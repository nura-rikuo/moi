const themeButtons = document.querySelectorAll("[data-theme-toggle]");
const storedTheme = localStorage.getItem("theme");
const preferredTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
const initialTheme = storedTheme || preferredTheme;

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);

  themeButtons.forEach((button) => {
    button.textContent = theme === "light" ? "Dark" : "Light";
    button.setAttribute("aria-label", `Switch to ${theme === "light" ? "dark" : "light"} theme`);
  });
}

applyTheme(initialTheme);

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    applyTheme(nextTheme);
  });
});

const rotating = document.getElementById("rotating");

if (rotating) {
  const lines = [
    "Shipping calm systems beats dramatic architecture.",
    "Useful automation should feel almost invisible.",
    "Good tooling removes panic before it starts.",
    "Most complexity is just deferred cleanup.",
    "The best ops work leaves very little theater behind."
  ];

  let index = 0;

  setInterval(() => {
    rotating.style.opacity = 0;
    setTimeout(() => {
      index = (index + 1) % lines.length;
      rotating.textContent = lines[index];
      rotating.style.opacity = 1;
    }, 220);
  }, 3600);
}
