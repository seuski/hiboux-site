// Configuration de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAV29QVCCVZdNrdAl6RuO2MyaEo374mrFE",
  authDomain: "hiboux-1a6bd.firebaseapp.com",
  databaseURL: "https://hiboux-1a6bd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hiboux-1a6bd",
  storageBucket: "hiboux-1a6bd.firebasestorage.app",
  messagingSenderId: "496073367701",
  appId: "1:496073367701:web:4a86dc95db45fe782a3b9c",
  measurementId: "G-X9FW544GFR"
};

// Initialiser Firebase
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get } from "firebase/database";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Fonction pour augmenter le compteur de membres
function incrementVisitorCount() {
  const visitorRef = ref(database, 'visitor_count');
  get(visitorRef).then((snapshot) => {
    let visitorCount = snapshot.exists() ? snapshot.val() : 0;
    visitorCount++;
    set(visitorRef, visitorCount);
    document.getElementById('visitor-count').innerText = visitorCount;
  }).catch((error) => {
    console.error("Erreur lors de la récupération du compteur de visiteurs: ", error);
  });
}

// Appeler la fonction pour initialiser le compteur à chaque visite
window.onload = function() {
  incrementVisitorCount();
};

// Animation pour chaque lettre du texte "HIBOUX TELEGRAM" au survol
document.addEventListener("DOMContentLoaded", function () {
  const title = document.querySelector("h1");
  const text = title.textContent.trim();
  title.textContent = '';

  // Créer un span pour chaque lettre
  text.split('').forEach(function(letter, index) {
    const span = document.createElement('span');
    span.textContent = letter;
    title.appendChild(span);
  });

  // Ajouter un effet au survol de chaque lettre
  const letters = title.querySelectorAll('span');
  letters.forEach(function (letter) {
    letter.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-10px)';
      this.style.color = '#ff6347';
    });
    letter.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0)';
      this.style.color = '';
    });
  });
});
