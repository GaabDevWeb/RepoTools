import { atualizarTela } from "../loja/atualizarTela.js";

export function removerJogador(index) {
  const jogador = window.jogadores[index];
  if (!jogador) return;

  if (confirm(`Remover ${jogador.nome}?`)) {
    if (window.getModo && window.getModo() === 'multi' && window.removerJogadorMultiplayer) {
      window.removerJogadorMultiplayer(jogador.id);
    } else {
      window.jogadores.splice(index, 1);
      atualizarTela();
    }
  }
}

export function removerItem(jogadorIndex, itemIndex) {
  const jogador = window.jogadores[jogadorIndex];
  if (!jogador) return;

  if (window.getModo && window.getModo() === 'multi' && window.removerItemMultiplayer) {
    window.removerItemMultiplayer(jogador.id, itemIndex);
  } else {
    const item = jogador.itens[itemIndex];
    jogador.total -= item.preco;
    jogador.itens.splice(itemIndex, 1);
    atualizarTela();
  }
}

window.removerItem = removerItem;
window.removerJogador = removerJogador;
