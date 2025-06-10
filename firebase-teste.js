// NÃO use import/export aqui, pois está rodando direto no navegador com <script src="...">

// Botão Criar Sala dinâmico
const salaInput = document.getElementById('sala-codigo');
const entrarBtn = document.getElementById('entrar-sala');
const criarBtn = document.createElement('button');
criarBtn.textContent = 'Criar Sala';
criarBtn.style.marginLeft = '8px';
salaInput.insertAdjacentElement('afterend', criarBtn);

const salaDiv = document.getElementById('sala');
const salaIdSpan = document.getElementById('sala-id');
const textoArea = document.getElementById('texto-compartilhado');

let salaRef = null;
let salaListener = null;

// Função para gerar código aleatório de sala
function gerarCodigoSala(tamanho = 5) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let codigo = '';
    for (let i = 0; i < tamanho; i++) {
        codigo += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return codigo;
}

// Criar Sala
criarBtn.onclick = async () => {
    const codigo = gerarCodigoSala();
    salaRef = firebase.database().ref('salas/' + codigo);
    await salaRef.set({ texto: "" });
    mostrarSala(codigo);
};

// Entrar em Sala
entrarBtn.onclick = async () => {
    const salaId = salaInput.value.trim().toUpperCase();
    if (!salaId) return alert('Digite o código da sala!');
    salaRef = firebase.database().ref('salas/' + salaId);

    const snapshot = await salaRef.once('value');
    if (!snapshot.exists()) {
        alert('Sala não encontrada!');
        return;
    }
    mostrarSala(salaId);
};

function mostrarSala(salaId) {
    salaInput.style.display = 'none';
    entrarBtn.style.display = 'none';
    criarBtn.style.display = 'none';
    salaDiv.style.display = 'flex';
    salaIdSpan.textContent = 'Sala: ' + salaId;

    // Escuta mudanças em tempo real
    if (salaListener) salaRef.off('value', salaListener);
    salaListener = salaRef.on('value', (snapshot) => {
        const data = snapshot.val();
        textoArea.value = data && data.texto ? data.texto : "";
    });
}

textoArea.oninput = () => {
    if (salaRef) {
        salaRef.update({ texto: textoArea.value });
    }
};