// NÃO use import/export aqui, pois está rodando direto no navegador com <script src="...">

// Botão Criar Sala dinâmico
const salaInput = document.getElementById('sala-codigo');
const entrarBtn = document.getElementById('entrar-sala');
const criarBtn = document.createElement('button');
criarBtn.textContent = 'Criar Sala';
criarBtn.style.marginLeft = '8px';
salaInput.insertAdjacentElement('afterend', criarBtn);

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
    const salaRef = firebase.database().ref('salas/' + codigo);
    await salaRef.set({ texto: "" });
    console.log('Sala criada:', codigo);
    window.location.href = `loja.html?sala=${codigo}`;
};

// Entrar em Sala
entrarBtn.onclick = async () => {
    const salaId = salaInput.value.trim().toUpperCase();
    if (!salaId) return alert('Digite o código da sala!');
    const salaRef = firebase.database().ref('salas/' + salaId);

    const snapshot = await salaRef.once('value');
    console.log('Tentando entrar na sala:', salaId, 'Snapshot:', snapshot.val());
    if (!snapshot.exists()) {
        alert('Sala não encontrada!');
        return;
    }
    window.location.href = `loja.html?sala=${salaId}`;
};