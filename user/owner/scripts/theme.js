// Sprawdzenie, czy użytkownik już zaakceptował ciasteczka
if (!checkCookiesAccepted()) {
  document.getElementById('main').style.display = 'none'; // Ukryj element main
  var button1 = document.getElementById("confirmButton");
  if (button1) {
    button1.onclick = function() {
      setCookie("cookiesAccepted", "true", 365); // Ustawienie ciasteczka na 365 dni
      gotoPersonlization(); // Przełączenie na drugi blok
      document.getElementById('main').style.display = 'block'; // Pokaż element main po zaakceptowaniu ciasteczek
    };
  }

  var button2 = document.getElementById("declineButton");
  if (button2) {
    button2.onclick = function() {
      dont(); // Wyświetlenie informacji o braku spersonalizowania
      document.getElementById('main').style.display = 'block'; // Pokaż element main po odmowie akceptacji ciasteczek
    };
  }
} else {
  // Jeśli użytkownik już zaakceptował ciasteczka, ukryj komunikat od razu i przełącz na drugi blok
  document.getElementById('firstscreen').style.display = 'none';
  document.getElementById('firstscreen2').style.display = 'none';
  document.getElementById('main').style.display = 'block';
}
