const toggleBtn = document.getElementById("themeToggle");
const body = document.body;
const icon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("darkmode");
    body.classList.toggle("lightmode");

    if (body.classList.contains("darkmode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});