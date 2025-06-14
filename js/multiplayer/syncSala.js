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

  // Função para atualizar a tela com os dados
  function atualizarTelaComDados(salaData) {
    console.log("Atualizando tela com dados:", salaData);
    
    // Inicializa os jogadores
    if (salaData.jogadores) {
      window.jogadoresObj = salaData.jogadores;
      window.jogadores = Object.entries(salaData.jogadores).map(([id, jogador]) => ({
        ...jogador,
        id
      }));
      console.log("Jogadores carregados:", window.jogadores);
    }

    // Inicializa os créditos
    if (salaData.creditos !== undefined) {
      const creditosInput = document.getElementById('creditosInput');
      if (creditosInput) {
        creditosInput.value = salaData.creditos;
      }
    }

    // Inicializa os filtros
    if (salaData.filtros) {
      window.filtrosAtivos = salaData.filtros;
      window.filtroAtivo = salaData.filtros[0];
    }

    // Inicializa os preços dos itens
    if (salaData.itens) {
      Object.entries(salaData.itens).forEach(([index, preco]) => {
        if (window.itensLoja[index]) {
          window.itensLoja[index].preco = preco;
        }
      });
    }

    // Força atualização da tela
    if (window.atualizarListaJogadores) {
      window.atualizarListaJogadores();
    }
    if (window.atualizarTela) {
      window.atualizarTela();
    }
  }

  // Carrega os dados iniciais da sala
  get(salaRef).then((snapshot) => {
    const salaData = snapshot.val();
    if (salaData) {
      console.log("Dados da sala carregados:", salaData);
      atualizarTelaComDados(salaData);
    }
  }).catch(error => {
    console.error("Erro ao carregar dados iniciais da sala:", error);
  });
  
  // Função para sincronizar jogadores
  onValue(jogadoresRef, (snapshot) => {
    console.log("Recebendo atualização de jogadores:", snapshot.val());
    const jogadoresData = snapshot.val() || {};
    window.jogadoresObj = jogadoresData;
    
    // Converte o objeto de jogadores para array
    window.jogadores = Object.entries(jogadoresData).map(([id, jogador]) => ({
      ...jogador,
      id
    }));
    
    console.log("Jogadores atualizados:", window.jogadores);
    
    // Força atualização imediata
    if (window.atualizarListaJogadores) {
      window.atualizarListaJogadores();
    }
    if (window.calcularResumoFinanceiro) {
      window.calcularResumoFinanceiro();
    }
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
    const tempId = novoJogadorRef.key;
    
    // Adiciona temporariamente o jogador localmente
    window.jogadores.push({ ...novoJogador, id: tempId });
    if (window.atualizarListaJogadores) {
      window.atualizarListaJogadores();
    }
    if (window.calcularResumoFinanceiro) {
      window.calcularResumoFinanceiro();
    }
    
    set(novoJogadorRef, novoJogador)
      .then(() => {
        console.log("Jogador adicionado com sucesso!");
        if (window.atualizarTela) {
          window.atualizarTela();
        }
      })
      .catch(error => {
        console.error("Erro ao adicionar jogador:", error);
        // Remove o jogador temporário em caso de erro
        window.jogadores = window.jogadores.filter(j => j.id !== tempId);
        if (window.atualizarListaJogadores) {
          window.atualizarListaJogadores();
        }
        if (window.calcularResumoFinanceiro) {
          window.calcularResumoFinanceiro();
        }
      });
  };

  window.removerJogadorMultiplayer = (jogadorId) => {
    console.log("Removendo jogador:", jogadorId);
    
    // Remove temporariamente o jogador localmente
    const jogadorIndex = window.jogadores.findIndex(j => j.id === jogadorId);
    if (jogadorIndex !== -1) {
      window.jogadores.splice(jogadorIndex, 1);
      if (window.atualizarListaJogadores) {
        window.atualizarListaJogadores();
      }
      if (window.calcularResumoFinanceiro) {
        window.calcularResumoFinanceiro();
      }
    }
    
    remove(child(jogadoresRef, jogadorId))
      .then(() => {
        console.log("Jogador removido com sucesso!");
        if (window.atualizarTela) {
          window.atualizarTela();
        }
      })
      .catch(error => {
        console.error("Erro ao remover jogador:", error);
        // Restaura o jogador em caso de erro
        if (window.jogadoresObj[jogadorId]) {
          window.jogadores.push({ ...window.jogadoresObj[jogadorId], id: jogadorId });
          if (window.atualizarListaJogadores) {
            window.atualizarListaJogadores();
          }
          if (window.calcularResumoFinanceiro) {
            window.calcularResumoFinanceiro();
          }
        }
      });
  };

  window.atualizarNomeJogadorMultiplayer = (jogadorId, novoNome) => {
    console.log("Atualizando nome do jogador:", jogadorId, novoNome);
    
    // Atualiza temporariamente o nome localmente
    const jogador = window.jogadores.find(j => j.id === jogadorId);
    if (jogador) {
      jogador.nome = novoNome;
      if (window.atualizarListaJogadores) {
        window.atualizarListaJogadores();
      }
    }
    
    update(child(jogadoresRef, jogadorId), { nome: novoNome })
      .then(() => {
        console.log("Nome atualizado com sucesso!");
        if (window.atualizarTela) {
          window.atualizarTela();
        }
      })
      .catch(error => {
        console.error("Erro ao atualizar nome do jogador:", error);
        // Restaura o nome em caso de erro
        if (window.jogadoresObj[jogadorId]) {
          const jogador = window.jogadores.find(j => j.id === jogadorId);
          if (jogador) {
            jogador.nome = window.jogadoresObj[jogadorId].nome;
            if (window.atualizarListaJogadores) {
              window.atualizarListaJogadores();
            }
          }
        }
      });
  };

  window.adicionarItemMultiplayer = (jogadorId, item) => {
    console.log("Adicionando item ao jogador:", jogadorId, item);
    
    // Adiciona temporariamente o item localmente
    const jogador = window.jogadores.find(j => j.id === jogadorId);
    if (jogador) {
      jogador.itens = jogador.itens || [];
      jogador.itens.push({ ...item });
      jogador.total = (jogador.total || 0) + item.preco;
      if (window.atualizarListaJogadores) {
        window.atualizarListaJogadores();
      }
      if (window.calcularResumoFinanceiro) {
        window.calcularResumoFinanceiro();
      }
    }
    
    const jogadorRef = child(jogadoresRef, jogadorId);
    get(jogadorRef).then((snapshot) => {
      const jogador = snapshot.val();
      const itens = jogador.itens || [];
      const total = jogador.total || 0;
      
      update(jogadorRef, {
        itens: [...itens, item],
        total: total + item.preco
      })
      .then(() => {
        console.log("Item adicionado com sucesso!");
        if (window.atualizarTela) {
          window.atualizarTela();
        }
      })
      .catch(error => {
        console.error("Erro ao adicionar item:", error);
        // Remove o item em caso de erro
        if (jogador) {
          jogador.itens.pop();
          jogador.total -= item.preco;
          if (window.atualizarListaJogadores) {
            window.atualizarListaJogadores();
          }
          if (window.calcularResumoFinanceiro) {
            window.calcularResumoFinanceiro();
          }
        }
      });
    }).catch(error => {
      console.error("Erro ao buscar jogador:", error);
    });
  };

  window.removerItemMultiplayer = (jogadorId, itemKey) => {
    console.log("Removendo item do jogador:", jogadorId, itemKey);
    
    // Remove temporariamente o item localmente
    const jogador = window.jogadores.find(j => j.id === jogadorId);
    if (jogador && jogador.itens && jogador.itens[itemKey]) {
      const item = jogador.itens[itemKey];
      jogador.itens.splice(itemKey, 1);
      jogador.total -= item.preco;
      if (window.atualizarListaJogadores) {
        window.atualizarListaJogadores();
      }
      if (window.calcularResumoFinanceiro) {
        window.calcularResumoFinanceiro();
      }
    }
    
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
        })
        .then(() => {
          console.log("Item removido com sucesso!");
          if (window.atualizarTela) {
            window.atualizarTela();
          }
        })
        .catch(error => {
          console.error("Erro ao remover item:", error);
          // Restaura o item em caso de erro
          if (jogador) {
            jogador.itens.splice(itemKey, 0, item);
            jogador.total += item.preco;
            if (window.atualizarListaJogadores) {
              window.atualizarListaJogadores();
            }
            if (window.calcularResumoFinanceiro) {
              window.calcularResumoFinanceiro();
            }
          }
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
      // Força atualização do resumo financeiro
      if (window.calcularResumoFinanceiro) {
        window.calcularResumoFinanceiro();
      }
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
      
      // Atualiza temporariamente os créditos localmente
      if (window.calcularResumoFinanceiro) {
        window.calcularResumoFinanceiro();
      }
      if (window.atualizarTela) {
        window.atualizarTela();
      }
      
      set(creditosRef, creditos)
        .then(() => {
          console.log("Créditos atualizados com sucesso!");
        })
        .catch(error => {
          console.error("Erro ao atualizar créditos:", error);
          // Restaura os créditos em caso de erro
          if (window.jogadoresObj) {
            const creditosAnteriores = window.jogadoresObj.creditos || 0;
            creditosInput.value = creditosAnteriores;
            if (window.calcularResumoFinanceiro) {
              window.calcularResumoFinanceiro();
            }
            if (window.atualizarTela) {
              window.atualizarTela();
            }
          }
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
    
    // Atualiza temporariamente os filtros localmente
    window.filtrosAtivos = novosFiltros;
    window.filtroAtivo = filtro;
    if (window.atualizarTela) {
      window.atualizarTela();
    }
    
    set(filtrosRef, novosFiltros)
      .then(() => {
        console.log("Filtros atualizados com sucesso!");
      })
      .catch(error => {
        console.error("Erro ao atualizar filtros:", error);
        // Restaura os filtros em caso de erro
        if (window.jogadoresObj) {
          window.filtrosAtivos = window.jogadoresObj.filtros || ["todos"];
          window.filtroAtivo = window.filtrosAtivos[0];
          if (window.atualizarTela) {
            window.atualizarTela();
          }
        }
      });
  };

  // Sincroniza os preços dos itens
  const itensRef = ref(database, `salas/${codigoSala}/itens`);
  onValue(itensRef, (snapshot) => {
    console.log("Recebendo atualização de preços:", snapshot.val());
    const itensData = snapshot.val();
    if (itensData) {
      let precoAlterado = false;
      Object.entries(itensData).forEach(([index, preco]) => {
        if (window.itensLoja[index] && window.itensLoja[index].preco !== preco) {
          window.itensLoja[index].preco = preco;
          precoAlterado = true;
        }
      });
      if (precoAlterado && window.atualizarTela) {
        window.atualizarTela();
      }
    }
  }, (error) => {
    console.error("Erro ao sincronizar preços:", error);
  });

  // Adiciona função para atualizar preço do item
  window.atualizarPrecoItemMultiplayer = (index, novoPreco) => {
    console.log("Atualizando preço do item:", index, novoPreco);
    
    // Atualiza temporariamente o preço localmente
    if (window.itensLoja[index]) {
      window.itensLoja[index].preco = novoPreco;
      if (window.atualizarTela) {
        window.atualizarTela();
      }
    }
    
    update(child(itensRef, index), novoPreco)
      .then(() => {
        console.log("Preço atualizado com sucesso!");
      })
      .catch(error => {
        console.error("Erro ao atualizar preço do item:", error);
        // Restaura o preço em caso de erro
        if (window.jogadoresObj && window.jogadoresObj.itens && window.jogadoresObj.itens[index]) {
          window.itensLoja[index].preco = window.jogadoresObj.itens[index];
          if (window.atualizarTela) {
            window.atualizarTela();
          }
        }
      });
  };

  console.log("Sincronização iniciada com sucesso!");
}

