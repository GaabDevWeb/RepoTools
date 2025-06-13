// Módulo de sincronização multiplayer (placeholder)
export function iniciarSyncSala(codigoSala) {
  // Implemente a sincronização aqui
  console.log("Sincronização multiplayer ativada para sala:", codigoSala);
}

// Dentro do listener de jogadores em syncSala.js
salaRef.child('jogadores').on('value', snapshot => {
  const jogadoresObj = snapshot.val() || {};
  window.jogadoresObj = jogadoresObj; // <-- Adicione isso!
  window.jogadores = Object.values(jogadoresObj);
  if (typeof window.atualizarListaJogadores === 'function') {
    window.atualizarListaJogadores();
  }
  if (typeof window.atualizarRankingJogadores === 'function') {
    window.atualizarRankingJogadores();
  }
});