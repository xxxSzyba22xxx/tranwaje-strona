function hideCookies() {
  // Pobranie elementów tutaj, aby upewnić się, że są dostępne globalnie dla obu funkcji
  var blockdown1 = document.getElementById("container");
  var blockdown2 = document.getElementsByClassName("cookies")[0]; // Dostęp do pierwszego elementu zwróconego przez getElementsByClassName

  // Ukrycie elementów
  blockdown1.style.display = 'none';
  blockdown2.style.display = 'none';
}

// Przypisanie funkcji hideCookies do zdarzenia onclick przycisku confirmButton
var button1 = document.getElementById("confirmButton");
if (button1) { // Upewnij się, że element istnieje, zanim przypiszesz do niego zdarzenie
  button1.onclick = hideCookies; // Brak nawiasów, aby przypisać funkcję, a nie jej wynik
}

// Przypisanie funkcji hideCookies do zdarzenia onclick przycisku declineButton
var button2 = document.getElementById("declineButton");
if (button2) { // Analogicznie jak wyżej
  button2.onclick = hideCookies; // Możesz użyć tej samej funkcji, jeśli zachowanie ma być identyczne
}