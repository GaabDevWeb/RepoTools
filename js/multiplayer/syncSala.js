import { database } from "./firebase.js";
import { ref, onValue, push, set, remove, update, child, get } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

export function iniciarSyncSala(codigoSala) {
  if (!codigoSala) return;

  const salaRef = ref(database, `salas/${codigoSala}`);
  const jogadoresRef = ref(database, `salas/${codigoSala}/jogadores`);
  
  // Inicializa o objeto de jogadores no Firebase
  window.jogadoresObj = {};
  
  // Função para sincronizar jogadores
  onValue(jogadoresRef, (snapshot) => {
    const jogadoresData = snapshot.val() || {};
    window.jogadoresObj = jogadoresData;
    
    // Converte o objeto de jogadores para array
    window.jogadores = Object.values(jogadoresData);
    
    // Atualiza a tela
    if (window.atualizarTela) {
      window.atualizarTela();
    }
  });

  // Funções multiplayer
  window.adicionarJogadorMultiplayer = (novoJogador) => {
    const novoJogadorRef = push(jogadoresRef);
    set(novoJogadorRef, novoJogador);
  };

  window.removerJogadorMultiplayer = (jogadorId) => {
    remove(child(jogadoresRef, jogadorId));
  };

  window.atualizarNomeJogadorMultiplayer = (jogadorId, novoNome) => {
    update(child(jogadoresRef, jogadorId), { nome: novoNome });
  };

  window.adicionarItemMultiplayer = (jogadorId, item) => {
    const jogadorRef = child(jogadoresRef, jogadorId);
    get(jogadorRef).then((snapshot) => {
      const jogador = snapshot.val();
      const itens = jogador.itens || [];
      const total = jogador.total || 0;
      
      update(jogadorRef, {
        itens: [...itens, item],
        total: total + item.preco
      });
    });
  };

  window.removerItemMultiplayer = (jogadorId, itemKey) => {
    const jogadorRef = child(jogadoresRef, jogadorId);
    get(jogadorRef).then((snapshot) => {
      const jogador = snapshot.val();
      const itens = jogador.itens || [];
      const item = itens[itemKey];
      
      if (item) {
        const novosItens = [...itens];
        novosItens.splice(itemKey, 1);
        
        update(jogadorRef, {
          itens: novosItens,
          total: jogador.total - item.preco
        });
      }
    });
  };

  // Sincroniza os créditos da sala
  const creditosRef = ref(database, `salas/${codigoSala}/creditos`);
  onValue(creditosRef, (snapshot) => {
    const creditos = snapshot.val() || 0;
    const creditosInput = document.getElementById('creditosInput');
    if (creditosInput) {
      creditosInput.value = creditos;
      if (window.atualizarTela) {
        window.atualizarTela();
      }
    }
  });

  // Adiciona listener para atualizar créditos
  const creditosInput = document.getElementById('creditosInput');
  if (creditosInput) {
    creditosInput.addEventListener('change', () => {
      const creditos = parseInt(creditosInput.value) || 0;
      set(creditosRef, creditos);
    });
  }

  // Sincroniza os filtros ativos
  const filtrosRef = ref(database, `salas/${codigoSala}/filtros`);
  onValue(filtrosRef, (snapshot) => {
    const filtros = snapshot.val() || ["todos"];
    window.filtrosAtivos = filtros;
    window.filtroAtivo = filtros[0];
    if (window.atualizarTela) {
      window.atualizarTela();
    }
  });

  // Adiciona listener para atualizar filtros
  window.toggleFiltroMultiplayer = (filtro) => {
    const novosFiltros = [filtro];
    set(filtrosRef, novosFiltros);
  };

  // Sincroniza os preços dos itens
  const itensRef = ref(database, `salas/${codigoSala}/itens`);
  onValue(itensRef, (snapshot) => {
    const itensData = snapshot.val();
    if (itensData) {
      Object.entries(itensData).forEach(([index, preco]) => {
        if (window.itensLoja[index]) {
          window.itensLoja[index].preco = preco;
        }
      });
      if (window.atualizarTela) {
        window.atualizarTela();
      }
    }
  });

  // Adiciona função para atualizar preço do item
  window.atualizarPrecoItemMultiplayer = (index, novoPreco) => {
    update(child(itensRef, index), novoPreco);
  };
}

