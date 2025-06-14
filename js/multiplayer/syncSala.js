import { database } from "./firebase.js";
import { ref, onValue, push, set, remove, update, child, get } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

export function iniciarSyncSala(codigoSala) {
  if (!codigoSala) {
    console.error("Código da sala não fornecido!");
    return;
  }

  console.log("Iniciando sincronização para sala:", codigoSala);

  const salaRef = ref(database, `salas/${codigoSala}`);
  const jogadoresRef = ref(database, `salas/${codigoSala}/jogadores`);
  
  // Inicializa o objeto de jogadores no Firebase
  window.jogadoresObj = {};
  window.jogadores = [];
  
  // Função para sincronizar jogadores
  onValue(jogadoresRef, (snapshot) => {
    console.log("Recebendo atualização de jogadores:", snapshot.val());
    const jogadoresData = snapshot.val() || {};
    window.jogadoresObj = jogadoresData;
    
    // Converte o objeto de jogadores para array
    window.jogadores = Object.entries(jogadoresData).map(([id, jogador]) => ({
      ...jogador,
      id // Mantém o ID do Firebase para referência
    }));
    
    // Atualiza a tela
    if (window.atualizarTela) {
      window.atualizarTela();
    }
  }, (error) => {
    console.error("Erro ao sincronizar jogadores:", error);
  });

  // Funções multiplayer
  window.adicionarJogadorMultiplayer = (novoJogador) => {
    console.log("Adicionando jogador:", novoJogador);
    const novoJogadorRef = push(jogadoresRef);
    set(novoJogadorRef, novoJogador).catch(error => {
      console.error("Erro ao adicionar jogador:", error);
    });
  };

  window.removerJogadorMultiplayer = (jogadorId) => {
    console.log("Removendo jogador:", jogadorId);
    remove(child(jogadoresRef, jogadorId)).catch(error => {
      console.error("Erro ao remover jogador:", error);
    });
  };

  window.atualizarNomeJogadorMultiplayer = (jogadorId, novoNome) => {
    console.log("Atualizando nome do jogador:", jogadorId, novoNome);
    update(child(jogadoresRef, jogadorId), { nome: novoNome }).catch(error => {
      console.error("Erro ao atualizar nome do jogador:", error);
    });
  };

  window.adicionarItemMultiplayer = (jogadorId, item) => {
    console.log("Adicionando item ao jogador:", jogadorId, item);
    const jogadorRef = child(jogadoresRef, jogadorId);
    get(jogadorRef).then((snapshot) => {
      const jogador = snapshot.val();
      const itens = jogador.itens || [];
      const total = jogador.total || 0;
      
      update(jogadorRef, {
        itens: [...itens, item],
        total: total + item.preco
      }).catch(error => {
        console.error("Erro ao adicionar item:", error);
      });
    }).catch(error => {
      console.error("Erro ao buscar jogador:", error);
    });
  };

  window.removerItemMultiplayer = (jogadorId, itemKey) => {
    console.log("Removendo item do jogador:", jogadorId, itemKey);
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
        }).catch(error => {
          console.error("Erro ao remover item:", error);
        });
      }
    }).catch(error => {
      console.error("Erro ao buscar jogador:", error);
    });
  };

  // Sincroniza os créditos da sala
  const creditosRef = ref(database, `salas/${codigoSala}/creditos`);
  onValue(creditosRef, (snapshot) => {
    console.log("Recebendo atualização de créditos:", snapshot.val());
    const creditos = snapshot.val() || 0;
    const creditosInput = document.getElementById('creditosInput');
    if (creditosInput) {
      creditosInput.value = creditos;
      if (window.atualizarTela) {
        window.atualizarTela();
      }
    }
  }, (error) => {
    console.error("Erro ao sincronizar créditos:", error);
  });

  // Adiciona listener para atualizar créditos
  const creditosInput = document.getElementById('creditosInput');
  if (creditosInput) {
    creditosInput.addEventListener('change', () => {
      const creditos = parseInt(creditosInput.value) || 0;
      console.log("Atualizando créditos:", creditos);
      set(creditosRef, creditos).catch(error => {
        console.error("Erro ao atualizar créditos:", error);
      });
    });
  }

  // Sincroniza os filtros ativos
  const filtrosRef = ref(database, `salas/${codigoSala}/filtros`);
  onValue(filtrosRef, (snapshot) => {
    console.log("Recebendo atualização de filtros:", snapshot.val());
    const filtros = snapshot.val() || ["todos"];
    window.filtrosAtivos = filtros;
    window.filtroAtivo = filtros[0];
    if (window.atualizarTela) {
      window.atualizarTela();
    }
  }, (error) => {
    console.error("Erro ao sincronizar filtros:", error);
  });

  // Adiciona listener para atualizar filtros
  window.toggleFiltroMultiplayer = (filtro) => {
    console.log("Atualizando filtros:", filtro);
    const novosFiltros = [filtro];
    set(filtrosRef, novosFiltros).catch(error => {
      console.error("Erro ao atualizar filtros:", error);
    });
  };

  // Sincroniza os preços dos itens
  const itensRef = ref(database, `salas/${codigoSala}/itens`);
  onValue(itensRef, (snapshot) => {
    console.log("Recebendo atualização de preços:", snapshot.val());
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
  }, (error) => {
    console.error("Erro ao sincronizar preços:", error);
  });

  // Adiciona função para atualizar preço do item
  window.atualizarPrecoItemMultiplayer = (index, novoPreco) => {
    console.log("Atualizando preço do item:", index, novoPreco);
    update(child(itensRef, index), novoPreco).catch(error => {
      console.error("Erro ao atualizar preço do item:", error);
    });
  };

  console.log("Sincronização iniciada com sucesso!");
}

