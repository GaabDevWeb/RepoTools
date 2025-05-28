let itensLoja = [
  { nome: "Martelo Inflável", preco: 9000, categoria: "armas" },
  { nome: "Espada", preco: 25000, categoria: "armas" },
  { nome: "Frigideira", preco: 25000, categoria: "armas" },
  { nome: "Taco de Beisebol", preco: 26000, categoria: "armas" },
  { nome: "Marreta", preco: 45000, categoria: "armas" },
  { nome: "Pistola Tranquilizante", preco: 16000, categoria: "armas" },
  { nome: "Pistola", preco: 45000, categoria: "armas" },
  { nome: "Espingarda", preco: 94000, categoria: "armas" },
  
  { nome: "Força", preco: 7000, categoria: "upgrades" },
  { nome: "Resistência", preco: 2000, categoria: "upgrades" },
  { nome: "Saúde", preco: 7000, categoria: "upgrades" },
  { nome: "Corrida", preco: 8000, categoria: "upgrades" },
  { nome: "Salto Extra", preco: 11000, categoria: "upgrades" },
  { nome: "Contagem de Jogadores", preco: 11000, categoria: "upgrades" },
  { nome: "Lançamento de Queda", preco: 5000, categoria: "upgrades" },
  { nome: "Radar", preco: 10000, categoria: "upgrades" },
  { nome: "Faixa", preco: 7000, categoria: "upgrades" },
  
  { nome: "Pequeno Pacote de Saúde", preco: 4000, categoria: "cura" },
  { nome: "Pacote de Saúde Médio", preco: 7000, categoria: "cura" },
  { nome: "Pacote de Saúde Grande", preco: 10000, categoria: "cura" },
  
  { nome: "Rastreador Valioso", preco: 15000, categoria: "ferramentas" },
  { nome: "Rastreador de Extração", preco: 6000, categoria: "ferramentas" },
  { nome: "Carrinho de Bolso", preco: 17000, categoria: "ferramentas" },
  { nome: "CARRINHO", preco: 42000, categoria: "ferramentas" },
  { nome: "Cristal de Energia", preco: 8000, categoria: "ferramentas" },
  
  { nome: "Granada de Choque", preco: 3000, categoria: "arremessaveis" },
  { nome: "Granada", preco: 3000, categoria: "arremessaveis" },
  { nome: "Granada Humana", preco: 2000, categoria: "arremessaveis" },
  { nome: "Granada com Fita Adesiva", preco: 2000, categoria: "arremessaveis" },
  { nome: "Granada de Onda de Choque", preco: 3000, categoria: "arremessaveis" },
  { nome: "Orbe de Gravidade Zero", preco: 45000, categoria: "arremessaveis" },
  { nome: "Pato de Borracha", preco: 16000, categoria: "arremessaveis" },
  { nome: "Mina de Choque", preco: 3000, categoria: "arremessaveis" },
  { nome: "Mina Explosiva", preco: 3000, categoria: "arremessaveis" },
  { nome: "Mina de Ondas de Choque", preco: 3000, categoria: "arremessaveis" }
];

// Variáveis globais
const MAX_JOGADORES = 6;
let jogadores = [];
let filtroAtivo = "todos";
let draggedItem = null;

// Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
  // Configurar eventos
  document.getElementById('creditosInput').addEventListener('input', function() {
      if (this.value < 0) this.value = 0;
      atualizarTela();
  });
  
  document.getElementById('adicionar-jogador').addEventListener('click', mostrarModalJogador);
  document.getElementById('confirmar-jogador').addEventListener('click', adicionarJogador);
  document.getElementById('resetar-loja').addEventListener('click', resetarLoja);
  
  // Configurar drag and drop
  configurarDragAndDrop();
  
  // Atualizar a tela inicial
  atualizarTela();
});

// Função principal para atualizar toda a interface
function atualizarTela() {
  filtrarItens();
  atualizarListaJogadores();
  calcularResumoFinanceiro();
}

// Filtra os itens da loja baseado no crédito e categoria
function filtrarItens() {
  const creditos = parseInt(document.getElementById("creditosInput").value) || 0;
  const lojaDiv = document.getElementById("loja");
  
  // Filtra e mapeia mantendo o índice original
  const itensFiltrados = itensLoja
    .map((item, indexOriginal) => ({ ...item, indexOriginal }))
    .filter(item => item.preco <= creditos && (filtroAtivo === "todos" || item.categoria === filtroAtivo));
  
  lojaDiv.innerHTML = itensFiltrados
    .map((item) => `
      <div class="item" draggable="true" data-index="${item.indexOriginal}">
        <strong>${item.nome}</strong> - $${item.preco.toLocaleString()}
      </div>
    `)
    .join('');
}

// Atualiza a lista de jogadores na tela
function atualizarListaJogadores() {
  const container = document.getElementById('lista-jogadores');
  container.innerHTML = jogadores.map((jogador, index) => `
    <div class="card-jogador" data-index="${index}">
      <img src="images/avatars/${jogador.foto}" alt="${jogador.nome}" width="50">
      <h3>${jogador.nome}</h3>
      <div class="itens-jogador">
        ${jogador.itens.map((item, itemIndex) => `
          <div class="item-jogador">
            ${item.nome} - $${item.preco.toLocaleString()}
            <button onclick="removerItem(${index}, ${itemIndex})">❌</button>
          </div>
        `).join('')}
      </div>
      <p>Total: $${jogador.total.toLocaleString()}</p>
      <button onclick="removerJogador(${index})">Remover</button>
    </div>
  `).join('');
}

// Configura o sistema de drag and drop
function configurarDragAndDrop() {
  document.addEventListener('dragstart', function(e) {
    if (e.target.classList.contains('item')) {
      draggedItem = e.target;
      e.target.classList.add('dragging');
    }
  });

  document.addEventListener('dragend', function(e) {
    if (e.target.classList.contains('item')) {
      e.target.classList.remove('dragging');
    }
  });

  document.addEventListener('dragover', function(e) {
    if (e.target.classList.contains('card-jogador')) {
      e.preventDefault();
      e.target.classList.add('highlight-drop');
    }
  });

  document.addEventListener('dragleave', function(e) {
    if (e.target.classList.contains('card-jogador')) {
      e.target.classList.remove('highlight-drop');
    }
  });

  document.addEventListener('drop', function(e) {
    if (e.target.classList.contains('card-jogador') && draggedItem) {
      e.preventDefault();
      e.target.classList.remove('highlight-drop');
      
      const jogadorIndex = e.target.closest('.card-jogador').dataset.index;
      const itemIndex = draggedItem.dataset.index;
      
      adicionarItem(jogadorIndex, itemIndex);
    }
  });
}

// Funções para gerenciar jogadores
function mostrarModalJogador() {
  document.getElementById('modal-jogador').style.display = 'flex';
}

function adicionarJogador() {
  const nome = document.getElementById('nome-jogador').value.trim();
  const foto = document.querySelector('input[name="avatar"]:checked')?.value || 'avatar1.png';
  
  if (!nome) {
    alert('Digite um nome para o jogador!');
    return;
  }
  
  if (jogadores.length >= MAX_JOGADORES) {
    alert(`Limite de ${MAX_JOGADORES} jogadores atingido!`);
    return;
  }
  
  jogadores.push({
    nome,
    foto,
    itens: [],
    total: 0
  });
  
  document.getElementById('modal-jogador').style.display = 'none';
  document.getElementById('nome-jogador').value = '';
  atualizarTela();
}

function removerJogador(index) {
  if (confirm(`Remover ${jogadores[index].nome}?`)) {
    jogadores.splice(index, 1);
    atualizarTela();
  }
}

// Funções para gerenciar itens
function adicionarItem(jogadorIndex, itemIndex) {
  const item = itensLoja[itemIndex];
  const creditos = parseInt(document.getElementById("creditosInput").value) || 0;
  
  if (jogadores[jogadorIndex].total + item.preco > creditos) {
    alert('Saldo insuficiente para este jogador!');
    return;
  }
  
  jogadores[jogadorIndex].itens.push({...item});
  jogadores[jogadorIndex].total += item.preco;
  atualizarTela();
}

function removerItem(jogadorIndex, itemIndex) {
  const item = jogadores[jogadorIndex].itens[itemIndex];
  jogadores[jogadorIndex].total -= item.preco;
  jogadores[jogadorIndex].itens.splice(itemIndex, 1);
  atualizarTela();
}

// Funções auxiliares
function calcularResumoFinanceiro() {
  const creditos = parseInt(document.getElementById("creditosInput").value) || 0;
  const totalGasto = jogadores.reduce((total, j) => total + j.total, 0);
  const saldoRestante = creditos - totalGasto;

  document.getElementById("total-gasto").textContent = `$${totalGasto.toLocaleString()}`;
  document.getElementById("saldo-restante").textContent = `$${saldoRestante.toLocaleString()}`;
}

function resetarLoja() {
  if (!confirm('Resetar toda a loja? Isso removerá todos os itens dos jogadores.')) return;
  
  document.getElementById("creditosInput").value = "";
  jogadores.forEach(jogador => {
    jogador.itens = [];
    jogador.total = 0;
  });
  atualizarTela();
}

// Funções globais para uso no HTML
window.toggleFiltro = function(categoria) {
  filtroAtivo = categoria;
  atualizarTela();
};

window.selecionarAvatar = function(avatar) {
  document.querySelector(`input[value="${avatar}"]`).checked = true;
};