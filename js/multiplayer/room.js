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

criarBtn.onclick = async () => {
  const codigo = gerarCodigoSala();
  const salaRef = firebase.database().ref('salas/' + codigo);
  await salaRef.set({ texto: "" });
  window.location.href = `./public/loja.html?sala=${codigo}`;
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
  window.location.href = `./public/loja.html?sala=${salaId}`;
};