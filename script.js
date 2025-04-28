// === Script principal du site ===

// Fonction pour mettre à jour le compteur de visiteurs
function updateVisitorCount() {
  fetch('https://api.countapi.xyz/update/hibouxtelegram/site/?amount=1')
    .then(response => response.json())
    .then(data => {
      const counter = document.getElementById('visitor-count');
      if (counter) {
        counter.textContent = data.value;
      }
    })
    .catch(error => {
      console.error('Erreur lors de la récupération du compteur :', error);
    });
}

// Appel de la fonction quand la page est chargée
document.addEventListener('DOMContentLoaded', updateVisitorCount);
