// Funkcja sprawdzająca, czy użytkownik wcześniej zaakceptował ciasteczka
function checkCookiesAccepted() {
  return document.cookie.includes("cookiesAccepted=true");
}

// Funkcja ukrywająca komunikat o ciasteczkach i ustawiająca ciasteczko informujące o zaakceptowaniu
function hideCookies() {
  var blockdown1 = document.getElementById("container");
  var blockdown2 = document.getElementsByClassName("cookies")[0];

  blockdown1.style.display = 'none';
  blockdown2.style.display = 'none';

  // Ustawienie ciasteczka informującego o zaakceptowaniu ciasteczek
  document.cookie = "cookiesAccepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
}

// Sprawdzenie, czy użytkownik już zaakceptował ciasteczka
if (!checkCookiesAccepted()) {
  var button1 = document.getElementById("confirmButton");
  if (button1) {
    button1.onclick = hideCookies;
  }

  var button2 = document.getElementById("declineButton");
  if (button2) {
    button2.onclick = hideCookies;
  }
} else {
  // Jeśli użytkownik już zaakceptował ciasteczka, ukryj komunikat od razu
  hideCookies();
}

function panelKlienta() {
  var button = document.getElementById("loginButton");
  window.location.href = "https://tranwaje-strona.pages.dev/user/login";
}

// Tworzymy funkcję do dodawania loadera
function addLoader() {
  // Tworzymy element loadera
  var loader = document.createElement("div");
  loader.className = "loader";
  
  // Tworzymy kontener dla loadera i dodajemy do niego loader
  var loaderContainer = document.createElement("div");
  loaderContainer.className = "loader-container";
  loaderContainer.appendChild(loader);
  
  // Dodajemy loaderContainer do ciała dokumentu
  document.body.appendChild(loaderContainer);
  
  // Używamy setTimeout() do usunięcia loadera po 3 sekundach
  setTimeout(function() {
    document.body.removeChild(loaderContainer);
  }, 3000);
}

// Wywołujemy funkcję dodawania loadera
addLoader();


button.onclick = panelKlienta();
