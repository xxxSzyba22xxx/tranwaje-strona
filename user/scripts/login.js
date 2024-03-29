document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById("submit");
    button.addEventListener('click', login);
});

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Wprowadź login i hasło!");
    } else if (username === "owner" && password === "stasioowner") {
        console.log("Owner logged in!");
        window.location.href = "https://tranwaje-strona.pages.dev/user/owner/user";
    } else {
        alert("Nieprawidłowy login lub hasło. Spróbuj ponownie.");
    }
}
