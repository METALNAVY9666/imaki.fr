// Initialiser AOS après que la page est chargée
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1000, // Durée de l'animation en millisecondes
    once: true, // L'animation ne se déclenche qu'une seule fois
  });
});
