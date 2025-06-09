import { atualizarTela } from "../loja/atualizarTela.js";

export function removerJogador(index) {
  if (confirm(`Remover ${window.jogadores[index].nome}?`)) {
    window.jogadores.splice(index, 1);
    atualizarTela();
  }
}

export function removerItem(jogadorIndex, itemIndex) {
  const item = window.jogadores[jogadorIndex].itens[itemIndex];
  window.jogadores[jogadorIndex].total -= item.preco;
  window.jogadores[jogadorIndex].itens.splice(itemIndex, 1);
  atualizarTela();
}

window.removerItem = removerItem;
window.removerJogador = removerJogador;
