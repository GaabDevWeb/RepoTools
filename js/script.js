let itensLoja = [
  // Armas
  { 
    nome: "Martelo Inflável", 
    preco: 9000, 
    categoria: "armas", 
    imagem: "marteloInflavel.jpg",
    descricao: "Tem ~24 acertos antes de precisar recarregar. Tem ~5% de chance de causar uma explosão, causando 250 pontos de dano."
  },
  { 
    nome: "Espada", 
    preco: 25000, 
    categoria: "armas",
    imagem: "espada.jpg",
    descricao: "Tem 10 acertos antes de precisar recarregar. Arma rápida, causa dano."
  },
  { 
    nome: "Frigideira", 
    preco: 25000, 
    categoria: "armas",
    imagem: "frigideira.jpg",
    descricao: "Tem 12-15 acertos antes de precisar recarregar. Causa dano a jogadores (fora da loja) e monstros, pode derrubar inimigos pequenos."
  },
  { 
    nome: "Taco de Beisebol", 
    preco: 26000, 
    categoria: "armas",
    imagem: "tacoBeisebol.jpg",
    descricao: "Tem 6 acertos até precisar recarregar. Causa breve atordoamento e enorme repulsão. Devido à força, muitos inimigos levam 25 de dano por acerto."
  },
  { 
    nome: "Marreta", 
    preco: 45000, 
    categoria: "armas",
    imagem: "marreta.jpg",
    descricao: "Tem 6 acertos antes de recarregar. Arma pesada, força não facilita o uso. Excelente para empurrar inimigos atordoados."
  },
  { 
    nome: "Pistola Tranquilizante", 
    preco: 16000, 
    categoria: "armas",
    imagem: "pistolaTranquilizante.jpg",
    descricao: "Tem 3 tiros antes de recarregar. Pode atordoar qualquer inimigo por ~15 segundos."
  },
  { 
    nome: "Pistola", 
    preco: 45000, 
    categoria: "armas",
    imagem: "pistola.jpg",
    descricao: "Tem 6 tiros antes de precisar recarregar."
  },
  { 
    nome: "Espingarda", 
    preco: 94000, 
    categoria: "armas",
    imagem: "espingarda.jpg",
    descricao: "Tem 3 tiros antes de recarregar. Dispara 5 projéteis causando 50 de dano cada."
  },
  
  // Upgrades
  { 
    nome: "Força", 
    preco: 7000, 
    categoria: "upgrades",
    imagem: "upgradeForca.jpg",
    descricao: "Aumenta sua Força em 25% (Máximo de 2 em circulação)."
  },
  { 
    nome: "Resistência", 
    preco: 2000, 
    categoria: "upgrades",
    imagem: "upgradeResistencia.jpg",
    descricao: "Aumenta a Resistência máxima em 10 (Máximo de 4 em circulação)."
  },
  { 
    nome: "Saúde", 
    preco: 7000, 
    categoria: "upgrades",
    imagem: "upgradeVida.jpg",
    descricao: "Aumenta a Saúde máxima em 20 (Máximo de 2 em circulação)."
  },
  { 
    nome: "Corrida", 
    preco: 8000, 
    categoria: "upgrades",
    imagem: "upgradeVelocidade.jpg",
    descricao: "Aumenta a velocidade de corrida em 20% (Máximo de 3 em circulação)."
  },
  { 
    nome: "Salto Extra", 
    preco: 11000, 
    categoria: "upgrades",
    imagem: "upgradePuloDuplo.jpg",
    descricao: "Aumenta a quantidade máxima de pulos no ar (Máximo de 1 em circulação)."
  },
  { 
    nome: "Contagem de Jogadores", 
    preco: 11000, 
    categoria: "upgrades",
    imagem: "upgradeRadar.jpg",
    descricao: "Mostra quantos jogadores estão vivos no mapa (Máximo de 1, não reaparece no mesmo save)."
  },
  { 
    nome: "Lançamento de Queda", 
    preco: 5000, 
    categoria: "upgrades",
    imagem: "upgradeLancamento.jpg",
    descricao: "Aumenta a força do lançamento durante quedas (Máximo de 1 em circulação)."
  },
  { 
    nome: "Alcance", 
    preco: 10000, 
    categoria: "upgrades",
    imagem: "upgradeAlcance.jpg",
    descricao: "Aumenta seu alcance de coleta em 30% (Máximo de 3 podem estar em circulação ao mesmo tempo)."
  },

  { 
    nome: "Descanso Agachado", 
    preco: 3500, 
    categoria: "upgrades",
    imagem: "upgradeAsas.jpg",
    descricao: "Aumenta a velocidade de regeneração de resistência enquanto agachado."
  },
  
  // Cura
  { 
    nome: "Pequeno Pacote de Saúde", 
    preco: 4000, 
    categoria: "cura",
    imagem: "kitCuraPequeno.jpg",
    descricao: "Cura 25 de HP."
  },
  { 
    nome: "Pacote de Saúde Médio", 
    preco: 7000, 
    categoria: "cura",
    imagem: "kitCuraMedio.jpg",
    descricao: "Cura 50 de HP."
  },
  { 
    nome: "Pacote de Saúde Grande", 
    preco: 10000, 
    categoria: "cura",
    imagem: "kitCuraGrande.jpg",
    descricao: "Cura 100 de HP."
  },
  
  // Ferramentas
  { 
    nome: "Rastreador Valioso", 
    preco: 15000, 
    categoria: "ferramentas",
    imagem: "detectorTesouros.jpg",
    descricao: "Quando ativado [E], aponta para o tesouro desconhecido mais próximo."
  },
  { 
    nome: "Rastreador de Extração", 
    preco: 6000, 
    categoria: "ferramentas",
    imagem: "detectorExtracao.jpg",
    descricao: "Quando ativado [E], aponta para a zona de extração inativa mais próxima."
  },
  { 
    nome: "Carrinho de Bolso", 
    preco: 17000, 
    categoria: "ferramentas",
    imagem: "carrinhoBolso.jpg",
    descricao: "Uma C.A.R.T. menor que pode ser armazenada no inventário."
  },
  { 
    nome: "Carrinho", 
    preco: 42000, 
    categoria: "ferramentas",
    imagem: "carrinhoGrande.jpg",
    descricao: "A C.A.R.T. grande com a qual você começa o jogo."
  },
  { 
    nome: "Cristal de Energia", 
    preco: 8000, 
    categoria: "ferramentas",
    imagem: "cristalEnergia.jpg",
    descricao: "Cada cristal fornece 5 barras de energia, recarregando completamente um único item."
  },
  { 
    nome: "Drone de Recarga", 
    preco: 4000, 
    categoria: "ferramentas",
    imagem: "droneRecarga.jpg",
    descricao: "Pode ser acoplado a um item recarregável para recarregá-lo (5 barras/s)."
  },
  { 
    nome: "Drone Indestrutível", 
    preco: 23000, 
    categoria: "ferramentas",
    imagem: "droneIndestrutivel.jpg",
    descricao: "Torna o item acoplado indestrutível, prevenindo danos."
  },
  { 
    nome: "Drone de Rolamento", 
    preco: 9000, 
    categoria: "ferramentas",
    imagem: "droneRolamento.jpg",
    descricao: "Faz o jogador/inimigo/item rolar quando acoplado."
  },
  { 
    nome: "Drone de Pena", 
    preco: 15000, 
    categoria: "ferramentas",
    imagem: "dronePena.jpg",
    descricao: "Permite pular mais alto e cair mais devagar. Torna itens e inimigos (atordoados) muito leves."
  },
  { 
    nome: "Drone Zero-G", 
    preco: 23000, 
    categoria: "ferramentas",
    imagem: "droneGravidade.jpg",
    descricao: "Permite pular mais alto e cair mais devagar. Pode ser usado para manter itens no ar."
  },
  { 
    nome: "Balde de Pato", 
    preco: 5000, 
    categoria: "ferramentas",
    imagem: "baldePato.jpg",
    descricao: "Pode ser colocado em cima de um pato para reduzir drasticamente seu movimento."
  },
  
  // Arremessáveis
  { 
    nome: "Granada", 
    preco: 3000, 
    categoria: "arremessaveis",
    imagem: "granada.jpg",
    descricao: "Causa uma pequena explosão que danifica monstros próximos."
  },
  { 
    nome: "Granada Humana", 
    preco: 2000, 
    categoria: "arremessaveis",
    imagem: "granadaHumana.jpg",
    descricao: "Causa uma pequena explosão que danifica monstros e jogadores."
  },
  { 
    nome: "Granada com Fita Adesiva", 
    preco: 2000, 
    categoria: "arremessaveis",
    imagem: "granadaFita.jpg",
    descricao: "Explode e depois projeta 3 Granadas Humanas, causando dano em área."
  },
  { 
    nome: "Granada de Onda de Choque", 
    preco: 3000, 
    categoria: "arremessaveis",
    imagem: "minaChoque.jpg",
    descricao: "Atordoa monstros ou jogadores quando ativada após 5s."
  },
  { 
    nome: "Orbe de Gravidade Zero", 
    preco: 45000, 
    categoria: "arremessaveis",
    imagem: "orbeGravidade.jpg",
    descricao: "Cria um campo de gravidade zero. Itens mantêm sua inércia dentro do campo."
  },
  { 
    nome: "Pato de Borracha", 
    preco: 16000, 
    categoria: "arremessaveis",
    imagem: "patoBorracha.jpg",
    descricao: "Quando lançado, tem 10% de chance de explodir (250 de dano). Com velocidade suficiente, causa 50 de dano no impacto."
  },
  { 
    nome: "Mina de Choque", 
    preco: 3000, 
    categoria: "arremessaveis",
    imagem: "minaChoque.jpg",
    descricao: "Ativada com [E]. Após 5s, empurra monstros/jogadores quando acionada."
  },
  { 
    nome: "Mina Explosiva", 
    preco: 3000, 
    categoria: "arremessaveis",
    imagem: "minaExplosiva.jpg",
    descricao: "Ativada com [E]. Após 5s, causa 200 de dano a monstros quando acionada."
  },
  { 
    nome: "Mina Atordoante", 
    preco: 3000, 
    categoria: "arremessaveis",
    imagem: "minaAtordoante.jpg",
    descricao: "Quando acionada, voa em direção ao monstro, atordoando-o com eletricidade."
  },
  { 
    nome: "Prodzap", 
    preco: 12000, 
    categoria: "arremessaveis",
    imagem: "prodzap.jpg",
    descricao: "Arma beta que causa efeito elétrico (dano/controle não especificado)."
  }
];


const MAX_JOGADORES = 6;
let jogadores = [];
let filtroAtivo = "todos";
let filtrosAtivos = ["todos"];
let draggedItem = null;

document.addEventListener('DOMContentLoaded', function() {
  // Configurar eventos
  document.getElementById('creditosInput').addEventListener('input', function() {
      if (this.value < 0) this.value = 0;
      atualizarTela();
  });
  
  document.getElementById('adicionar-jogador').addEventListener('click', mostrarModalJogador);
  document.getElementById('confirmar-jogador').addEventListener('click', adicionarJogador);
  document.getElementById('resetar-loja').addEventListener('click', resetarLoja);
  document.getElementById('pesquisa-loja').addEventListener('input', atualizarTela);
  
  configurarDragAndDrop();
  
  // Tema: alternar múltiplos temas
  const themeSelector = document.getElementById('theme-selector');
  const themeClasses = [
    'light-theme',
    'dracula-theme'
  ];

  function setTheme(themeClass) {
    document.body.classList.remove(...themeClasses);
    if (themeClass) document.body.classList.add(themeClass);
    localStorage.setItem('repo-theme', themeClass || '');
  }

  if (themeSelector) {
    // Carrega preferência salva
    const temaSalvo = localStorage.getItem('repo-theme') || '';
    if (temaSalvo) {
      themeSelector.value = temaSalvo;
      setTheme(temaSalvo);
    }
    themeSelector.addEventListener('change', function() {
      setTheme(this.value);
    });
  }

  // Exibe o ranking só ao passar o mouse no ícone
  const rankingIcone = document.getElementById('ranking-icone');
  const rankingBox = document.getElementById('ranking-jogadores');

  if (rankingIcone && rankingBox) {
    rankingIcone.addEventListener('mouseenter', () => {
      rankingBox.classList.add('mostrar');
    });
    rankingIcone.addEventListener('mouseleave', () => {
      rankingBox.classList.remove('mostrar');
    });
    rankingBox.addEventListener('mouseenter', () => {
      rankingBox.classList.add('mostrar');
    });
    rankingBox.addEventListener('mouseleave', () => {
      rankingBox.classList.remove('mostrar');
    });
  }
});

function atualizarTela() {
  filtrarItens();
  atualizarListaJogadores();
  calcularResumoFinanceiro();
  atualizarRankingJogadores(); // <-- adicione esta linha

  // Desabilita o botão se atingir o limite
  const btnAdicionar = document.getElementById('adicionar-jogador');
  btnAdicionar.disabled = jogadores.length >= MAX_JOGADORES;
}

function filtrarItens() {
  const creditos = parseInt(document.getElementById("creditosInput").value) || 0;
  const lojaDiv = document.getElementById("loja");
  const termoPesquisa = (document.getElementById("pesquisa-loja")?.value || "").toLowerCase().trim();

  let itensFiltrados = itensLoja
    .map((item, indexOriginal) => ({ ...item, indexOriginal }))
    .filter(item => item.preco <= creditos);

  // Filtros de categoria e favoritos
  if (!filtrosAtivos.includes("todos")) {
    if (filtrosAtivos.includes("favoritos")) {
      itensFiltrados = itensFiltrados.filter(item => item.favorito);
    }
    // Filtra por categoria se houver alguma (exceto favoritos e ordenação)
    const categorias = filtrosAtivos.filter(f => 
      !["favoritos", "preco-asc", "preco-desc"].includes(f)
    );
    if (categorias.length > 0) {
      itensFiltrados = itensFiltrados.filter(item => categorias.includes(item.categoria));
    }
  }

  if (termoPesquisa) {
    const termoNumero = parseInt(termoPesquisa.replace(/\D/g, ''));
    itensFiltrados = itensFiltrados.filter(item => {
      const nomeMatch = item.nome.toLowerCase().includes(termoPesquisa);
      const descMatch = item.descricao && item.descricao.toLowerCase().includes(termoPesquisa);
      const precoMatch = !isNaN(termoNumero) && item.preco.toString().includes(termoNumero.toString());
      return nomeMatch || descMatch || precoMatch;
    });
  }

  // Ordenação por preço
  if (filtrosAtivos.includes("preco-asc")) {
    itensFiltrados.sort((a, b) => a.preco - b.preco);
  } else if (filtrosAtivos.includes("preco-desc")) {
    itensFiltrados.sort((a, b) => b.preco - a.preco);
  } else {
    itensFiltrados.sort((a, b) => (b.favorito ? 1 : 0) - (a.favorito ? 1 : 0));
  }

  lojaDiv.innerHTML = itensFiltrados
  .map((item) => `
    <div class="item" draggable="true" data-index="${item.indexOriginal}" title="${item.descricao}">
      <button class="btn-favorito" onclick="toggleFavorito(${item.indexOriginal})" title="Favoritar">
        <i class="fa${item.favorito ? '-solid' : '-regular'} fa-star" style="color:${item.favorito ? '#FFD700' : '#888'}"></i>
      </button>
      <img src="images/itens/${item.imagem}" alt="${item.nome}" class="item-img">
      <div class="item-info">
        <strong>${item.nome}</strong>
        <input type="number" min="0" value="${item.preco}" style="width:80px" id="preco-item-${item.indexOriginal}"
          oninput="atualizarPrecoItem(${item.indexOriginal})">
      </div>
      <div class="item-categoria">
        <i class="fa-solid ${getIconeCategoria(item.categoria)}"></i>
      </div>
    </div>
  `)
  .join('');

  const alturaLimite = 300; 

  if (lojaDiv.scrollHeight > alturaLimite) {
    lojaDiv.style.overflowY = 'auto'; 
  } else {
    lojaDiv.style.overflowY = 'hidden'; 
  }
}

function atualizarListaJogadores() {
  const container = document.getElementById('lista-jogadores');
  container.innerHTML = jogadores.map((jogador, index) => `
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

function atualizarNomeJogador(index, novoNome) {
  if (novoNome.trim()) {
    jogadores[index].nome = novoNome.trim();
    atualizarTela();
  }
}

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

function mostrarModalJogador() {
  document.getElementById('modal-jogador').style.display = 'flex';
}

function handleAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        // Desmarca qualquer avatar selecionado
        document.querySelectorAll('input[name="avatar"]').forEach(radio => {
            radio.checked = false;
        });
        
        // Armazena a URL da imagem no campo hidden
        document.getElementById('foto-jogador').value = e.target.result;
        
        // Atualiza o fundo do botão de upload
        const uploadButton = document.querySelector('.avatar-option label[for="upload-avatar"]');
        uploadButton.style.backgroundImage = `url(${e.target.result})`;
        uploadButton.style.backgroundSize = 'cover';
        uploadButton.style.backgroundPosition = 'center';
        uploadButton.style.color = 'transparent';
    };
    reader.readAsDataURL(file);
}

function adicionarJogador() {
    let nome = document.getElementById('nome-jogador').value.trim();
    
    if (!nome || nome.length < 3) {
        // Gera nome aleatório se nenhum nome válido for fornecido
        const nomesAleatorios = ['Jogador 1', 'Jogador 2', 'Jogador 3'];
        nome = nomesAleatorios[Math.floor(Math.random() * nomesAleatorios.length)];
    }
    
    let foto = document.querySelector('input[name="avatar"]:checked')?.value || 
               document.getElementById('foto-jogador').value || 
               'avatar1.png';
    
    // Limpa o campo de upload após salvar
    if (foto.startsWith('data:')) {
      document.getElementById('upload-avatar').value = '';
    } else {
      document.getElementById('foto-jogador').value = '';
    }
    
    // Resetar o botão de upload
    const uploadButton = document.querySelector('.avatar-option label[for="upload-avatar"]');
    uploadButton.style.backgroundImage = '';
    uploadButton.style.color = 'var(--accent)';
    
    
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

function calcularResumoFinanceiro() {
  const creditos = parseInt(document.getElementById("creditosInput").value) || 0;
  const totalGasto = jogadores.reduce((total, j) => total + j.total, 0);
  const saldoRestante = creditos - totalGasto;

  document.getElementById("total-gasto").textContent = `$${totalGasto.toLocaleString()}`;
  document.getElementById("saldo-restante").textContent = `$${saldoRestante.toLocaleString()}`;

  // Atualiza barra de progresso (sem porcentagem)
  const barra = document.getElementById("progresso-preenchido");
  let porcentagem = 0;
  if (creditos > 0) {
    porcentagem = Math.min(100, Math.round((totalGasto / creditos) * 100));
  }
  if (barra) {
    barra.style.width = porcentagem + "%";
  }
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

window.toggleFiltro = function(categoria) {
  if (categoria === "todos" || categoria === "favoritos") {
    // Permite combinar "todos" ou "favoritos" apenas com ordenação de preço
    filtrosAtivos = [categoria, ...filtrosAtivos.filter(f => f === "preco-asc" || f === "preco-desc")];
  } else if (categoria === "preco-asc" || categoria === "preco-desc") {
    // Só pode um filtro de ordenação por vez
    if (filtrosAtivos.includes(categoria)) {
      filtrosAtivos = filtrosAtivos.filter(f => f !== categoria);
      // Se só sobrou "todos" ou "favoritos", mantém só ele
      if (
        filtrosAtivos.length === 0 ||
        (filtrosAtivos.length === 1 && (filtrosAtivos[0] === "todos" || filtrosAtivos[0] === "favoritos"))
      ) {
        filtrosAtivos = [filtrosAtivos[0] || "todos"];
      }
    } else {
      filtrosAtivos = filtrosAtivos.filter(f => f !== "preco-asc" && f !== "preco-desc");
      filtrosAtivos.push(categoria);
    }
  } else {
    // Remove "todos" e "favoritos" se outro filtro for selecionado
    filtrosAtivos = filtrosAtivos.filter(f => f !== "todos" && f !== "favoritos");
    if (filtrosAtivos.includes(categoria)) {
      filtrosAtivos = filtrosAtivos.filter(f => f !== categoria);
      // Se nenhum filtro ficar ativo, volta para "todos" (mantendo ordenação se houver)
      if (
        filtrosAtivos.length === 0 ||
        (filtrosAtivos.length === 1 && (filtrosAtivos[0] === "preco-asc" || filtrosAtivos[0] === "preco-desc"))
      ) {
        const ordenacao = filtrosAtivos.find(f => f === "preco-asc" || f === "preco-desc");
        filtrosAtivos = ordenacao ? ["todos", ordenacao] : ["todos"];
      }
    } else {
      filtrosAtivos.push(categoria);
    }
  }

  // Atualiza classes dos botões
  const botoesFiltro = document.querySelectorAll('.filtro-btn');
  botoesFiltro.forEach(btn => {
    const cat = btn.getAttribute('onclick').match(/'([^']+)'/)[1];
    if (filtrosAtivos.includes(cat)) {
      btn.classList.add('ativo');
    } else {
      btn.classList.remove('ativo');
    }
  });

  atualizarTela();
};

window.selecionarAvatar = function(avatar) {
  document.querySelector(`input[value="${avatar}"]`).checked = true;
};


window.atualizarPrecoItem = function(index) {
  const input = document.getElementById(`preco-item-${index}`);
  
  // Verificação mais rigorosa que remove qualquer caractere não numérico
  input.value = input.value.replace(/[^0-9]/g, '');
  
  if (input.value === "") {
    input.value = itensLoja[index].preco;
    return;
  }
  
  let novoPreco = parseInt(input.value);
  if (isNaN(novoPreco) || novoPreco < 0) {
    input.value = itensLoja[index].preco;
    return;
  }
  
  itensLoja[index].preco = novoPreco;
};

function getIconeCategoria(categoria) {
  const icones = {
    'armas': 'fa-gun',
    'upgrades': 'fa-arrow-up',
    'cura': 'fa-heart',
    'ferramentas': 'fa-screwdriver-wrench',
    'arremessaveis': 'fa-bomb'
  };
  return icones[categoria] || 'fa-list';
}

window.toggleFavorito = function(index) {
  itensLoja[index].favorito = !itensLoja[index].favorito;
  atualizarTela();

  // Após atualizar a tela, anima o botão favorito se estiver favoritado
  setTimeout(() => {
    const btn = document.querySelector(`.item[data-index="${index}"] .btn-favorito`);
    if (btn && itensLoja[index].favorito) {
      btn.classList.remove('favoritado'); // Remove para reiniciar animação
      void btn.offsetWidth; // Força reflow
      btn.classList.add('favoritado');
    }
  }, 0);
};

function atualizarRankingJogadores() {
  const rankingDiv = document.getElementById('ranking-jogadores');
  if (jogadores.length === 0) {
    rankingDiv.innerHTML = "<em>Nenhum jogador adicionado.</em>";
    return;
  }

  // Ordena por total gasto (decrescente)
  const ordenados = [...jogadores].sort((a, b) => b.total - a.total);
  // Pega até 3 jogadores
  const top3 = ordenados.slice(0, 3);

  // Medalhas para os 3 primeiros
  const medalhas = [
    '<span class="medalha medalha-ouro"><i class="fa-solid fa-crown"></i></span>',
    '<span class="medalha medalha-prata"><i class="fa-solid fa-medal"></i></span>',
    '<span class="medalha" style="color:#cd7f32"><i class="fa-solid fa-award"></i></span>'
  ];

  // Títulos engraçados para o pódio
  const titulos = [
    'Magnata',
    'Gastador',
    'Mão Aberta'
  ];

  // Título para o último colocado (se houver mais de 1 jogador)
  let ultimoTitulo = '';
  if (ordenados.length > 1) {
    const ultimo = ordenados[ordenados.length - 1];
    ultimoTitulo = `
      <div class="ranking-bottom">
        <span style="font-size:1.2em;">🥖</span>
        <span><strong>${ultimo.nome}</strong> — <span style="color:#bfa76f">Pão Duro</span></span>
        <span class="valor-gasto">$${ultimo.total.toLocaleString()}</span>
      </div>
    `;
  }

  rankingDiv.innerHTML = `
    <div class="ranking-box">
      <h3><i class="fa-solid fa-ranking-star"></i> Ranking de Gastos</h3>
      <div class="ranking-destaques">
        ${top3.map((jogador, i) => `
          <div class="ranking-top" style="color:${i === 0 ? 'var(--accent)' : i === 1 ? 'silver' : '#cd7f32'}">
            ${medalhas[i] || ''}
            <span>
              <strong>${jogador.nome}</strong>
              <span class="titulo-podio">${titulos[i] || ''}</span>
            </span>
            <span class="valor-gasto">$${jogador.total.toLocaleString()}</span>
          </div>
        `).join('')}
        ${ultimoTitulo}
      </div>
    </div>
  `;
}
