const menuToggle = document.getElementById("list-toggle");
const menuBar = document.getElementById("bar");
const mobileToggle = document.getElementById("mobile-toggle")


const toggle = () => {
    menuBar.classList.toggle('hidden');
}

menuToggle.addEventListener("click", toggle);

mobileToggle.addEventListener("click", toggle);