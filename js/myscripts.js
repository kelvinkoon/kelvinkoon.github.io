var toggle = document.getElementById("toggle");
var darkTheme = document.getElementById("dark-mode-theme");
// the default theme is light
var savedTheme = localStorage.getItem("dark-mode-storage") || "light";
setTheme(savedTheme);

toggle.addEventListener("click", () => {
    if (toggle.className === "fas fa-moon") {
        setTheme("dark");
    } else if (toggle.className === "fas fa-sun") {
        setTheme("light");
    }
});

function setTheme(mode) {
    localStorage.setItem("dark-mode-storage", mode);
    if (mode === "dark") {
        darkTheme.disabled = false;
        toggle.className = "fas fa-sun";
    } else if (mode === "light") {
        darkTheme.disabled = true;
        toggle.className = "fas fa-moon";
    }
}

var quoteEl = document.querySelector(".post-quote-text");
if (quoteEl) {
    var quotes = [quoteEl.dataset.quote, quoteEl.dataset.quoteAlt];
    quoteEl.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
}
