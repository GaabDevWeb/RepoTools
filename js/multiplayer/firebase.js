// Importa o Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

export const firebaseConfig = {
  apiKey: "AIzaSyDAm1-pfNQWwU0XkwMgWX49E3B98vdu_30",
  authDomain: "repotools.firebaseapp.com",
  databaseURL: "https://repotools-default-rtdb.firebaseio.com",
  projectId: "repotools",
  storageBucket: "repotools.appspot.com",
  messagingSenderId: "424897022287",
  appId: "1:424897022287:web:3f5169519d4c726e2cdd3a"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Exporta o database para uso em outros arquivos
export { database };