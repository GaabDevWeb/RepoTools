import { atualizarTela } from "../loja/atualizarTela.js";

export function atualizarNomeJogador(index, novoNome) {
  if (novoNome.trim()) {
    window.jogadores[index].nome = novoNome.trim();
    atualizarTela();
  }
}

window.atualizarNomeJogador = atualizarNomeJogador;
