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
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database(app);

// Référence à la base de données pour stocker les visites
const visitsRef = database.ref('visitors');

// Augmenter le compteur à chaque fois que le site est visité
function incrementVisitorCount() {
  visitsRef.transaction((currentCount) => {
    return (currentCount || 0) + 1;
  });
}

// Afficher le compteur sur la page
function updateVisitorCount() {
  visitsRef.on('value', (snapshot) => {
    const count = snapshot.val();
    document.getElementById('visitor-count').textContent = count || 0;
  });
}

// Augmenter le compteur et afficher les valeurs
incrementVisitorCount();
updateVisitorCount();

