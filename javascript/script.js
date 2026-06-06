
function rechercher() {
    let input = document.getElementById("recherche").value.toLowerCase();
    let cartes = document.querySelectorAll(".carte");

    cartes.forEach(carte => {
        let titre = carte.querySelector("h3").innerText.toLowerCase();

        if (titre.includes(input)) {
            carte.style.display = "block";
        } else {
            carte.style.display = "none";
        }
    });
}
afficherVoitures();
const users = [
    { email: "test@gmail.com", password: "1234" },
    { email: "admin@gmail.com", password: "admin" }
];

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    let user = users.find(u => u.email === email && u.password === password);

    if (user) {
        message.textContent = "✅ Connexion réussie";
        message.style.color = "green";

        localStorage.setItem("user", email);

        window.location.href = "index.html";
    } else {
        message.textContent = "❌ Email ou mot de passe incorrect";
        message.style.color = "red";
    }
});