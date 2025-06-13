import "./firebase.js";

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
  const base = window.location.origin + window.location.pathname.replace(/index\.html$/, '');
  return `${base}loja.html`;
}

criarBtn.onclick = async () => {
  const codigo = gerarCodigoSala();
  const salaRef = firebase.database().ref('salas/' + codigo);
  await salaRef.set({ texto: "" });
  window.location.href = `${getLojaPath()}?modo=multi&sala=${codigo}`;
};

entrarBtn.onclick = async () => {
  const salaId = salaInput.value.trim().toUpperCase();
  if (!salaId) return alert('Digite o código da sala!');
  const salaRef = firebase.database().ref('salas/' + salaId);
  const snapshot = await salaRef.once('value');
  if (!snapshot.exists()) {
    alert('Sala não encontrada!');
    return;
  }
  window.location.href = `${getLojaPath()}?modo=multi&sala=${salaId}`;
};