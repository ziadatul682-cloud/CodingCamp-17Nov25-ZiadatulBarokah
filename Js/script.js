// Smooth scroll
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Login system
function loginUser() {
    const email = document.getElementById("emailInput").value;
    if (!email) return alert("Please enter your email!");

    const name = email.split("@")[0];
    const capName = name.charAt(0).toUpperCase() + name.slice(1);

    document.querySelector(".title").innerHTML = `Welcome ${capName} to Z-Tech`;
}

// Floating message box
function toggleMessageBox() {
    const box = document.getElementById("msgBox");
    box.style.display = box.style.display === "block" ? "none" : "block";
}

function sendMessage() {
    alert("Your message has been sent!");
}
