// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBRaS3532rAu_epRz8NMAGVonhCjauPsoc",
  authDomain: "alfred-f2330.firebaseapp.com",
  databaseURL: "https://alfred-f2330-default-rtdb.firebaseio.com",
  projectId: "alfred-f2330",
  storageBucket: "alfred-f2330.firebasestorage.app",
  messagingSenderId: "958011202011",
  appId: "1:958011202011:web:831d83a1826a2ab1ba2ffe"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const contenedor = document.getElementById('contenido-aprendido');

db.collection("aprendizajes").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
  contenedor.innerHTML = ""; // Limpiar pantalla antes de renderizar
  snapshot.forEach((doc) => {
    const data = doc.data();
    const item = document.createElement("div");
    item.classList.add("item-aprendizaje");
    item.innerHTML = `
      <h3>📁 ${data.tipo}</h3>
      <p>📝 ${data.mensaje}</p>
      <small>⏱️ ${new Date(data.timestamp.toDate()).toLocaleString()}</small>
    `;
    contenedor.appendChild(item);
  });
});
