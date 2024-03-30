// Funkcja przełączająca między pierwszym a drugim blokiem
function gotoPersonlization() {
  document.getElementById('firstscreen').style.display = 'none';
  document.getElementById('firstscreen2').style.display = 'block';
}

// Funkcja obsługująca przypadki, gdy użytkownik nie chce spersonalizować
function dont() {
  alert("Możesz zawsze wrócić i spersonalizować swój profil później!");
}

// Funkcja do ustawiania ciasteczka
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Funkcja do pobierania wartości ciasteczka
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Funkcja sprawdzająca, czy użytkownik zaakceptował ciasteczka
function checkCookiesAccepted() {
  return getCookie("cookiesAccepted") === "true";
}

// Sprawdzenie, czy użytkownik już zaakceptował ciasteczka
if (!checkCookiesAccepted()) {
  var button1 = document.getElementById("confirmButton");
  if (button1) {
    button1.onclick = function() {
      setCookie("cookiesAccepted", "true", 365); // Ustawienie ciasteczka na 365 dni
      gotoPersonlization(); // Przełączenie na drugi blok
    };
  }

  var button2 = document.getElementById("declineButton");
  if (button2) {
    button2.onclick = function() {
      dont(); // Wyświetlenie informacji o braku spersonalizowania
    };
  }
} else {
  // Jeśli użytkownik już zaakceptował ciasteczka, ukryj komunikat od razu i przełącz na drugi blok
  document.getElementById('firstscreen').style.display = 'none';
  document.getElementById('firstscreen2').style.display = 'block';
}

// Obsługa zmiany tła strony na czarne lub białe
window.onload = function() {
  document.getElementById('changeBackgroundToBlack').addEventListener('change', function() {
    if (this.checked) {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    }
  });

  document.getElementById('changeBackgroundToWhite').addEventListener('change', function() {
    if (this.checked) {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    } else {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    }
  });
};
