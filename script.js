// Рік у футері
document.getElementById("year").textContent = new Date().getFullYear();

// Перемикач світлої та темної теми
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  themeToggle.innerHTML = isLight
    ? '<i class="bi bi-sun"></i>'
    : '<i class="bi bi-moon-stars"></i>';
  themeToggle.setAttribute("aria-label", isLight ? "Увімкнути темну тему" : "Увімкнути світлу тему");
});

// Закривати мобільне меню після переходу за посиланням
document.querySelectorAll("#navMenu .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("navMenu");
    if (menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
