import { atualizarTela } from "../loja/atualizarTela.js";

export function removerJogador(index) {
  if (confirm(`Remover ${window.jogadores[index].nome}?`)) {
    if (window.getModo && window.getModo() === 'multi' && window.removerJogadorMultiplayer) {
      // Descubra o jogadorId (no Firebase, geralmente é a key, então adapte conforme necessário)
      const jogadorId = Object.keys(window.jogadoresObj || {})[index];
      window.removerJogadorMultiplayer(jogadorId);
    } else {
      window.jogadores.splice(index, 1);
      atualizarTela();
    }
  }
}

export function removerItem(jogadorIndex, itemIndex) {
  if (window.getModo && window.getModo() === 'multi' && window.removerItemMultiplayer) {
    const jogadorId = Object.keys(window.jogadoresObj || {})[jogadorIndex];
    const itemKey = Object.keys(window.jogadores[jogadorIndex].itens || {})[itemIndex];
    window.removerItemMultiplayer(jogadorId, itemKey);
  } else {
    const item = window.jogadores[jogadorIndex].itens[itemIndex];
    window.jogadores[jogadorIndex].total -= item.preco;
    window.jogadores[jogadorIndex].itens.splice(itemIndex, 1);
    atualizarTela();
  }
}

window.removerItem = removerItem;
window.removerJogador = removerJogador;
