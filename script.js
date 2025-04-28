// Fonction pour générer des flocons de neige
function generateSnowflakes() {
  const numberOfSnowflakes = 100; // Le nombre de flocons
  const snowflakeContainer = document.body; // L'élément sur lequel les flocons seront ajoutés

  for (let i = 0; i < numberOfSnowflakes; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄'; // Symbole de flocon de neige
    snowflake.style.left = `${Math.random() * 100}vw`; // Position aléatoire
    snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Durée d'animation aléatoire
    snowflake.style.animationDelay = `${Math.random() * 10}s`; // Délai d'animation aléatoire
    snowflakeContainer.appendChild(snowflake);
  }
}

// Appeler la fonction pour générer les flocons au chargement de la page
window.onload = generateSnowflakes;
