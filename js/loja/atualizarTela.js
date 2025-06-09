import { filtrarItens } from "./filtrarItens.js";
import { atualizarListaJogadores } from "../jogadores/adicionarJogador.js";
import { calcularResumoFinanceiro } from "../jogadores/adicionarJogador.js";
import { atualizarRankingJogadores } from "../jogadores/ranking.js";

export function atualizarTela() {
  filtrarItens();
  atualizarListaJogadores();
  calcularResumoFinanceiro();
  atualizarRankingJogadores();

  const btnAdicionar = document.getElementById('adicionar-jogador');
  btnAdicionar.disabled = window.jogadores.length >= window.MAX_JOGADORES;
}
