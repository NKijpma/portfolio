const root = document.documentElement;
const stored = localStorage.getItem("theme");
if (stored) root.setAttribute("data-theme", stored);

let switcher = document.getElementById("theme-switcher")

switcher.innerHTML = " ";

function toggleTheme() {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);

    switcher.innerHTML =
        next === "light" ? "" : "";
}