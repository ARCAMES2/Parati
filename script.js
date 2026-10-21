// 1. CAMBIA esta fecha por el día en que comenzó vuestra relación.
// Formato: año, mes (enero = 0, febrero = 1, ..., diciembre = 11), día.
// Ejemplo: new Date(2025, 9, 20) representa el 20 de octubre de 2025.
const fechaInicio = new Date(2025, 0, 4);

function actualizarContador() {
  const ahora = new Date();
  const diferencia = ahora.getTime() - fechaInicio.getTime();
  const ids = ["days", "hours", "minutes", "seconds"];

  if (Number.isNaN(fechaInicio.getTime()) || diferencia < 0) {
    ids.forEach(id => document.getElementById(id).textContent = "—");
    document.getElementById("counter-note").textContent =
      "Revisa la fecha de inicio: debe ser válida y no estar en el futuro.";
    return;
  }

  const totalSegundos = Math.floor(diferencia / 1000);
  document.getElementById("days").textContent =
    Math.floor(totalSegundos / 86400).toLocaleString("es");
  document.getElementById("hours").textContent =
    Math.floor((totalSegundos % 86400) / 3600);
  document.getElementById("minutes").textContent =
    Math.floor((totalSegundos % 3600) / 60);
  document.getElementById("seconds").textContent = totalSegundos % 60;

  document.getElementById("counter-note").textContent =
    "Contando desde el " + fechaInicio.toLocaleDateString("es", {
      day: "numeric", month: "long", year: "numeric"
    }) + ".";
}
actualizarContador();
setInterval(actualizarContador, 1000);

// 2. Música de fondo. Guarda tu archivo como music/cancion.mp3.
const audio = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");

musicToggle.addEventListener("click", async () => {
  if (audio.paused) {
    try {
      await audio.play();
      musicToggle.textContent = "❚❚ Pausar música";
    } catch (error) {
      musicToggle.textContent = "No se pudo reproducir";
      alert("Comprueba que exista music/cancion.mp3 y vuelve a intentarlo.");
    }
  } else {
    audio.pause();
    musicToggle.textContent = "▶ Reproducir música";
  }
});

audio.addEventListener("ended", () => {
  musicToggle.textContent = "▶ Reproducir música";
});
audio.addEventListener("pause", () => {
  musicToggle.textContent = "▶ Reproducir música";
});
audio.addEventListener("play", () => {
  musicToggle.textContent = "❚❚ Pausar música";
});
