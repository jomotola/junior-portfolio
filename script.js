const header = document.querySelector(".header");
const scrollWatcher = document.createElement("div");

const contactForm = document.querySelector("form");
const submitBtn = document.getElementById("submit-button");

scrollWatcher.setAttribute("data-scroll-watcher", "");
header.before(scrollWatcher);

const navObserver = new IntersectionObserver(
    (entries) => {
        header.classList.toggle("sticking", !entries[0].isIntersecting);
    },
    { rootMargin: "50px 0px 0px 0px" }
);

navObserver.observe(scrollWatcher); 

window.addEventListener("DOMContentLoaded", () => {
    const hamburgerButton = document.querySelector(".hamburger-button");
    const mobileMenu = document.querySelector(".mobile-menu");
    const header = document.querySelector("header");

    hamburgerButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
        header.classList.toggle("slide");
    });
});

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    submitBtn.innerText = "Sending... ✨";

    const data = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: data,
            headers: {
                Accept: "application/json"
            }
        });

        if (response.ok) {
            submitBtn.innerText = "Message sent 💖";
            submitBtn.style.background = "#6fdc8c";
            form.reset();
        } else {
            submitBtn.innerText = "Oops! Something went wrong 😢";
            submitBtn.style.background = "#ff8fbd";
        }
    } catch (error) {
        submitBtn.innerText = "Error sending message 😭";
        submitBtn.style.background = "#ff8fbd";
    }
});