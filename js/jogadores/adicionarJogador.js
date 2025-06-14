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

  const novoJogador = {
    nome,
    foto,
    itens: [],
    total: 0
  };

  if (window.getModo && window.getModo() === 'multi' && window.adicionarJogadorMultiplayer) {
    // Adiciona temporariamente o jogador localmente para exibição imediata
    const tempId = 'temp_' + Date.now();
    window.jogadores.push({ ...novoJogador, id: tempId });
    atualizarListaJogadores();
    
    // Envia para o Firebase
    window.adicionarJogadorMultiplayer(novoJogador);
  } else {
    window.jogadores.push(novoJogador);
    atualizarTela();
  }

  document.getElementById('modal-jogador').style.display = 'none';
  document.getElementById('nome-jogador').value = '';
}

export function adicionarItem(jogadorIndex, itemIndex) {
  const item = window.itensLoja[itemIndex];
  const creditos = parseInt(document.getElementById("creditosInput").value) || 0;
  const jogador = window.jogadores[jogadorIndex];

  if (!jogador) {
    console.error("Jogador não encontrado:", jogadorIndex);
    return;
  }

  // Garante que o jogador tem um array de itens
  if (!jogador.itens) {
    jogador.itens = [];
  }

  if (jogador.total + item.preco > creditos) {
    alert('Saldo insuficiente para este jogador!');
    return;
  }

  if (window.getModo && window.getModo() === 'multi' && window.adicionarItemMultiplayer) {
    // Adiciona temporariamente o item localmente para exibição imediata
    jogador.itens.push({ ...item });
    jogador.total = (parseInt(jogador.total) || 0) + item.preco;
    atualizarListaJogadores();
    calcularResumoFinanceiro();
    
    // Envia para o Firebase
    window.adicionarItemMultiplayer(jogador.id, item);
  } else {
    jogador.itens.push({ ...item });
    jogador.total = (parseInt(jogador.total) || 0) + item.preco;
    atualizarTela();
    calcularResumoFinanceiro();
  }
}

export function atualizarListaJogadores() {
  const container = document.getElementById('lista-jogadores');
  if (!container || !window.jogadores) return;

  console.log("Atualizando lista de jogadores:", window.jogadores);

  container.innerHTML = window.jogadores.map((jogador, index) => `
    <div class="card-jogador" data-index="${index}" data-id="${jogador.id}">
      <img src="${jogador.foto.startsWith('data:') || jogador.foto.startsWith('blob:') ? 
           jogador.foto : 
           'images/avatars/' + jogador.foto}" 
           alt="${jogador.nome}" width="50">
      <input type="text" value="${jogador.nome}" onblur="atualizarNomeJogador(${index}, this.value)" />
      <div class="itens-jogador">
        ${(jogador.itens || []).map((item, itemIndex) => `
          <div class="item-jogador">
            <div>${item.nome}</div>
            <div>
              $${item.preco.toLocaleString()}
              <button onclick="removerItem(${index}, ${itemIndex})"><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
        `).join('')}
      </div>
      <p><i class="fa-solid fa-coins"></i> Total: $${(parseInt(jogador.total) || 0).toLocaleString()}</p>
      <button onclick="removerJogador(${index})"><i class="fa-solid fa-user-minus"></i> Remover</button>
    </div>
  `).join('');

  // Força atualização do DOM
  container.style.display = 'none';
  container.offsetHeight; // Força reflow
  container.style.display = '';
  
  // Atualiza o resumo financeiro após atualizar a lista
  calcularResumoFinanceiro();
}

export function calcularResumoFinanceiro() {
  console.log("Calculando resumo financeiro...");
  console.log("Jogadores:", window.jogadores);
  
  const creditos = parseInt(document.getElementById("creditosInput")?.value) || 0;
  const totalGasto = window.jogadores.reduce((total, j) => {
    const jogadorTotal = parseInt(j.total) || 0;
    console.log("Jogador:", j.nome, "Total:", jogadorTotal);
    return total + jogadorTotal;
  }, 0);
  
  console.log("Total gasto:", totalGasto);
  console.log("Créditos:", creditos);
  
  const saldoRestante = creditos - totalGasto;

  const totalGastoElement = document.getElementById("total-gasto");
  const saldoRestanteElement = document.getElementById("saldo-restante");
  
  if (totalGastoElement) {
    totalGastoElement.textContent = `$${totalGasto.toLocaleString()}`;
    console.log("Total gasto atualizado:", totalGastoElement.textContent);
  } else {
    console.error("Elemento total-gasto não encontrado!");
  }
  
  if (saldoRestanteElement) {
    saldoRestanteElement.textContent = `$${saldoRestante.toLocaleString()}`;
    console.log("Saldo restante atualizado:", saldoRestanteElement.textContent);
  } else {
    console.error("Elemento saldo-restante não encontrado!");
  }

  const barra = document.getElementById("progresso-preenchido");
  if (barra) {
    let porcentagem = 0;
    if (creditos > 0) {
      porcentagem = Math.min(100, Math.round((totalGasto / creditos) * 100));
    }
    barra.style.width = porcentagem + "%";
    console.log("Porcentagem da barra:", porcentagem);
  } else {
    console.error("Elemento progresso-preenchido não encontrado!");
  }
}
