import "./firebase.js";

// Módulo de sincronização multiplayer (placeholder)
export function iniciarSyncSala(codigoSala) {
  if (!codigoSala) return;

  const salaRef = firebase.database().ref(`salas/${codigoSala}`);
  const jogadoresRef = salaRef.child('jogadores');
  
  // Inicializa o objeto de jogadores no Firebase
  window.jogadoresObj = {};
  
  // Função para sincronizar jogadores
  jogadoresRef.on('value', (snapshot) => {
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
    const novoJogadorRef = jogadoresRef.push();
    novoJogadorRef.set(novoJogador);
  };

  window.removerJogadorMultiplayer = (jogadorId) => {
    jogadoresRef.child(jogadorId).remove();
  };

  window.atualizarNomeJogadorMultiplayer = (jogadorId, novoNome) => {
    jogadoresRef.child(jogadorId).update({ nome: novoNome });
  };

  window.adicionarItemMultiplayer = (jogadorId, item) => {
    const jogadorRef = jogadoresRef.child(jogadorId);
    jogadorRef.once('value', (snapshot) => {
      const jogador = snapshot.val();
      const itens = jogador.itens || [];
      const total = jogador.total || 0;
      
      jogadorRef.update({
        itens: [...itens, item],
        total: total + item.preco
      });
    });
  };

  window.removerItemMultiplayer = (jogadorId, itemKey) => {
    const jogadorRef = jogadoresRef.child(jogadorId);
    jogadorRef.once('value', (snapshot) => {
      const jogador = snapshot.val();
      const itens = jogador.itens || [];
      const item = itens[itemKey];
      
      if (item) {
        const novosItens = [...itens];
        novosItens.splice(itemKey, 1);
        
        jogadorRef.update({
          itens: novosItens,
          total: jogador.total - item.preco
        });
      }
    });
  };
}

