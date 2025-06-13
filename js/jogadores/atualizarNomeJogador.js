import { atualizarTela } from "../loja/atualizarTela.js";

export function atualizarNomeJogador(index, novoNome) {
  if (novoNome.trim()) {
    if (window.getModo && window.getModo() === 'multi' && window.atualizarNomeJogadorMultiplayer) {
      const jogadorId = Object.keys(window.jogadoresObj || {})[index];
      window.atualizarNomeJogadorMultiplayer(jogadorId, novoNome.trim());
    } else {
      window.jogadores[index].nome = novoNome.trim();
      atualizarTela();
    }
  }
}

window.atualizarNomeJogador = atualizarNomeJogador;
