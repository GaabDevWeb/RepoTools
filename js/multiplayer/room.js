import { database } from "./firebase.js";
import { ref, set, get } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const salaInput = document.getElementById('sala-codigo');
const entrarBtn = document.getElementById('entrar-sala');
const criarBtn = document.getElementById('criar-sala');

function gerarCodigoSala(tamanho = 5) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let codigo = '';
  for (let i = 0; i < tamanho; i++) {
    codigo += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return codigo;
}

function getLojaPath() {
  // Garante que funciona tanto local quanto no GitHub Pages
  let path = window.location.pathname;
  if (path.endsWith('index.html')) {
    path = path.replace(/index\.html$/, '');  
  }
  if (!path.endsWith('/')) {
    path += '/';
  }
  return window.location.origin + path + 'loja.html';
}

criarBtn.onclick = async () => {
  const codigo = gerarCodigoSala();
  const salaRef = ref(database, 'salas/' + codigo);
  
  // Inicializa todos os dados necessários da sala
  await set(salaRef, {
    jogadores: {},
    creditos: 0,
    filtros: ["todos"],
    criadoEm: new Date().toISOString()
  });
  
  window.location.href = `${getLojaPath()}?modo=multi&sala=${codigo}`;
};

entrarBtn.onclick = async () => {
  const salaId = salaInput.value.trim().toUpperCase();
  if (!salaId) return alert('Digite o código da sala!');
  const salaRef = ref(database, 'salas/' + salaId);
  const snapshot = await get(salaRef);
  if (!snapshot.exists()) {
    alert('Sala não encontrada!');
    return;
  }
  window.location.href = `${getLojaPath()}?modo=multi&sala=${salaId}`;
};