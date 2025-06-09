import { atualizarTela } from "../loja/atualizarTela.js";

export function adicionarJogador() {
  let nome = document.getElementById('nome-jogador').value.trim();
  if (!nome || nome.length < 3) {
    const nomesAleatorios = ['Jogador 1', 'Jogador 2', 'Jogador 3'];
    nome = nomesAleatorios[Math.floor(Math.random() * nomesAleatorios.length)];
  }

  let foto = document.querySelector('input[name="avatar"]:checked')?.value || 
             document.getElementById('foto-jogador').value || 
             'avatar1.png';

  if (foto.startsWith('data:')) {
    document.getElementById('upload-avatar').value = '';
  } else {
    document.getElementById('foto-jogador').value = '';
  }

  const uploadButton = document.querySelector('.avatar-option label[for="upload-avatar"]');
  if (uploadButton) {
    uploadButton.style.backgroundImage = '';
    uploadButton.style.color = 'var(--accent)';
  }

  if (window.jogadores.length >= window.MAX_JOGADORES) {
    alert(`Limite de ${window.MAX_JOGADORES} jogadores atingido!`);
    return;
  }

  window.jogadores.push({
    nome,
    foto,
    itens: [],
    total: 0
  });

  document.getElementById('modal-jogador').style.display = 'none';
  document.getElementById('nome-jogador').value = '';
  atualizarTela();
}

export function adicionarItem(jogadorIndex, itemIndex) {
  const item = window.itensLoja[itemIndex];
  const creditos = parseInt(document.getElementById("creditosInput").value) || 0;

  if (window.jogadores[jogadorIndex].total + item.preco > creditos) {
    alert('Saldo insuficiente para este jogador!');
    return;
  }

  window.jogadores[jogadorIndex].itens.push({ ...item });
  window.jogadores[jogadorIndex].total += item.preco;
  atualizarTela();
}

export function atualizarListaJogadores() {
  const container = document.getElementById('lista-jogadores');
  container.innerHTML = window.jogadores.map((jogador, index) => `
    <div class="card-jogador" data-index="${index}">
      <img src="${jogador.foto.startsWith('data:') || jogador.foto.startsWith('blob:') ? 
           jogador.foto : 
           'images/avatars/' + jogador.foto}" 
           alt="${jogador.nome}" width="50">
      <input type="text" value="${jogador.nome}" onblur="atualizarNomeJogador(${index}, this.value)" />
      <div class="itens-jogador">
        ${jogador.itens.map((item, itemIndex) => `
          <div class="item-jogador">
            <div>${item.nome}</div>
            <div>
              $${item.preco.toLocaleString()}
              <button onclick="removerItem(${index}, ${itemIndex})"><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
        `).join('')}
      </div>
      <p><i class="fa-solid fa-coins"></i> Total: $${jogador.total.toLocaleString()}</p>
      <button onclick="removerJogador(${index})"><i class="fa-solid fa-user-minus"></i> Remover</button>
    </div>
  `).join('');
}

export function calcularResumoFinanceiro() {
  const creditos = parseInt(document.getElementById("creditosInput").value) || 0;
  const totalGasto = window.jogadores.reduce((total, j) => total + j.total, 0);
  const saldoRestante = creditos - totalGasto;

  document.getElementById("total-gasto").textContent = `$${totalGasto.toLocaleString()}`;
  document.getElementById("saldo-restante").textContent = `$${saldoRestante.toLocaleString()}`;

  const barra = document.getElementById("progresso-preenchido");
  let porcentagem = 0;
  if (creditos > 0) {
    porcentagem = Math.min(100, Math.round((totalGasto / creditos) * 100));
  }
  if (barra) {
    barra.style.width = porcentagem + "%";
  }
}
