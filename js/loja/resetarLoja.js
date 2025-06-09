import { atualizarTela } from "./atualizarTela.js";

export function resetarLoja() {
  if (!confirm('Resetar toda a loja? Isso removerá todos os itens dos jogadores.')) return;

  document.getElementById("creditosInput").value = "";
  window.jogadores.forEach(jogador => {
    jogador.itens = [];
    jogador.total = 0;
  });
  atualizarTela();
}
