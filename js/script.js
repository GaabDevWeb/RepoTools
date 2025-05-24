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

const MAX_JOGADORES = 6;
let filtroAtivo = "todos";
let jogadores = [];

function atualizarTela() {
  filtrarItens();
  atualizarListaJogadores();
  atualizarResumoFinanceiro();
}

function filtrarItens() {
  const creditos = parseInt(document.getElementById("creditosInput").value) || 0;
  const lojaDiv = document.getElementById("loja");
  
  lojaDiv.innerHTML = itensLoja
    .filter(item => 
      item.preco <= creditos && 
      (filtroAtivo === "todos" || item.categoria === filtroAtivo)
    )
    .map(item => {
      const quantidade = Math.floor(creditos / item.preco);
      const itemIndex = itensLoja.indexOf(item);
      
      return `
        <div class="item">
          <strong>${item.nome}</strong> - $${item.preco.toLocaleString()}${quantidade > 1 ? ` (${quantidade}x)` : ''}
          ${jogadores.length > 0 ? `
            <div class="botoes-jogadores">
              <button class="botao-adicionar-todos" onclick="adicionarItemAoTodos(${itemIndex})">+ Todos</button>
              ${jogadores.map((jogador, idx) => `
                <button class="botao-adicionar" onclick="adicionarItem(${idx}, ${itemIndex})">+ ${jogador.nome}</button>
              `).join('')}
            </div>
          ` : ''}
          <button class="botao-editar" onclick="iniciarEdicao(${itemIndex})">✏️</button>
          <span class="edicao-container" id="edicao-${itemIndex}" style="display:none">
            $<input type="number" class="input-preco" id="input-${itemIndex}" value="${item.preco}" min="0">
            <button class="botao-salvar" onclick="salvarPreco(${itemIndex})">✔️</button>
            <button class="botao-cancelar" onclick="cancelarEdicao(${itemIndex})">❌</button>
          </span>
        </div>
      `;
    })
    .join('') || `<p>Nenhum item ${filtroAtivo === 'todos' ? 'disponível' : 'nesta categoria'} dentro do orçamento.</p>`;
}

function atualizarListaJogadores() {
  const container = document.getElementById('lista-jogadores');
  container.innerHTML = jogadores
    .map((jogador, index) => `
      <div class="card-jogador">
        <div class="avatar-container">
          <img src="images/avatars/${jogador.foto}" alt="${jogador.nome}" class="avatar">
        </div>
        <h3>${jogador.nome}</h3>
        <div class="itens-jogador">
          ${jogador.itens.map((item, itemIndex) => `
            <div>
              ${item.nome} - $${item.preco.toLocaleString()}
              <button class="botao-remover-item" onclick="removerItem(${index}, ${itemIndex})">❌</button>
            </div>
          `).join('')}
        </div>
        <p>Total: $<span class="total-jogador">${jogador.total.toLocaleString()}</span></p>
        <button class="botao-remover" onclick="removerJogador(${index})">Remover</button>
      </div>
    `)
    .join('');
}

const gerenciarJogadores = {
  adicionar: (nome, foto) => {
    if (jogadores.length >= MAX_JOGADORES) return alert(`Limite de ${MAX_JOGADORES} jogadores!`);
    if (jogadores.some(j => j.nome === nome)) return alert('Jogador já existe!');
    
    jogadores.push({ nome, foto, itens: [], total: 0 });
    document.getElementById('modal-jogador').style.display = 'none';
    document.getElementById('nome-jogador').value = '';
    atualizarTela();
  },

  remover: (index) => {
    jogadores.splice(index, 1);
    atualizarTela();
  }
};

const gerenciarItens = {
  adicionar: (jogadorIndex, itemIndex) => {
    const item = itensLoja[itemIndex];
    const creditos = parseInt(document.getElementById("creditosInput").value) || 0;
    const totalAtual = jogadores.reduce((total, j) => total + j.total, 0);

    if (totalAtual + item.preco > creditos) return alert(`Saldo insuficiente!`);
    
    jogadores[jogadorIndex].itens.push({...item});
    jogadores[jogadorIndex].total += item.preco;
    atualizarTela();
  },

  adicionarTodos: (itemIndex) => {
    const item = itensLoja[itemIndex];
    const creditos = parseInt(document.getElementById("creditosInput").value) || 0;
    const totalAtual = jogadores.reduce((total, j) => total + j.total, 0);

    if (totalAtual + (item.preco * jogadores.length) > creditos) return alert("Saldo insuficiente!");
    
    jogadores.forEach(jogador => {
      jogador.itens.push({...item});
      jogador.total += item.preco;
    });
    atualizarTela();
  },

  remover: (jogadorIndex, itemIndex) => {
    const item = jogadores[jogadorIndex].itens[itemIndex];
    jogadores[jogadorIndex].total -= item.preco;
    jogadores[jogadorIndex].itens.splice(itemIndex, 1);
    atualizarTela();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('creditosInput').addEventListener('input', filtrarItens);
  
  document.getElementById('adicionar-jogador').addEventListener('click', () => {
    document.getElementById('modal-jogador').style.display = 'flex';
  });
  
  document.getElementById('confirmar-jogador').addEventListener('click', () => {
    const nome = document.getElementById('nome-jogador').value.trim();
    const foto = document.getElementById('foto-jogador').value;
    if (!nome || !foto) return alert('Preencha todos os campos!');
    gerenciarJogadores.adicionar(nome, foto);
  });
  
  atualizarTela();
});

window.toggleFiltro = (categoria) => {
  filtroAtivo = categoria;
  filtrarItens();
};

window.selecionarAvatar = (avatar) => {
  document.getElementById('foto-jogador').value = avatar;
};

document.getElementById('resetar-loja').addEventListener('click', () => {
  const creditos = parseInt(document.getElementById("creditosInput").value) || 0;
  document.getElementById("creditosInput").value = "";
  filtrarItens();
});

window.adicionarItem = gerenciarItens.adicionar;
window.adicionarItemAoTodos = gerenciarItens.adicionarTodos;
window.removerItem = gerenciarItens.remover;
window.removerJogador = gerenciarJogadores.remover;

function atualizarResumoFinanceiro() {
  const creditos = parseInt(document.getElementById("creditosInput").value) || 0;
  const totalGasto = jogadores.reduce((total, jogador) => total + jogador.total, 0);
  const saldoRestante = creditos - totalGasto;

  document.getElementById("total-gasto").textContent = `$${totalGasto.toLocaleString()}`;
  document.getElementById("saldo-restante").textContent = `$${saldoRestante.toLocaleString()}`;
}

function iniciarEdicao(itemIndex) {
    const edicaoContainer = document.getElementById(`edicao-${itemIndex}`);
    edicaoContainer.style.display = 'inline-block';
}

function salvarPreco(itemIndex) {
    const novoPreco = parseInt(document.getElementById(`input-${itemIndex}`).value);
    if (isNaN(novoPreco) || novoPreco < 0) {
        alert('Por favor, insira um valor válido!');
        return;
    }
    
    itensLoja[itemIndex].preco = novoPreco;
    cancelarEdicao(itemIndex);
    atualizarTela();
}

function cancelarEdicao(itemIndex) {
    const edicaoContainer = document.getElementById(`edicao-${itemIndex}`);
    edicaoContainer.style.display = 'none';
}