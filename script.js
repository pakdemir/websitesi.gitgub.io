document.getElementById('hakkinda-link').addEventListener('click', function (event) {
  event.preventDefault(); // Varsayılan davranışı (sayfa yenilemeyi) engeller
  window.location.href = 'hakkında.html'; // Hakkında sayfasına yönlendir
});

document.getElementById('projeler-link').addEventListener('click', function (event) {
  event.preventDefault();
  window.location.href = 'projeler.html'; // Projeler sayfasına yönlendir
});

document.getElementById('anket-link').addEventListener('click', function (event) {
  event.preventDefault();
  window.location.href = 'anket.html'; // Anket sayfasına yönlendir
});