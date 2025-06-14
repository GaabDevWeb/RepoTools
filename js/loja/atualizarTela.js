import { filtrarItens } from "./filtrarItens.js";
import { atualizarListaJogadores } from "../jogadores/adicionarJogador.js";
import { calcularResumoFinanceiro } from "../jogadores/adicionarJogador.js";
import { atualizarRankingJogadores } from "../jogadores/ranking.js";

export function atualizarTela() {
  console.log("Atualizando tela...");
  console.log("Jogadores:", window.jogadores);
  console.log("Itens da loja:", window.itensLoja);
  console.log("Filtros ativos:", window.filtrosAtivos);
  console.log("Créditos:", document.getElementById("creditosInput")?.value);

  // Força atualização dos itens primeiro
  filtrarItens();
  
  // Atualiza a lista de jogadores
  atualizarListaJogadores();
  
  // Atualiza o resumo financeiro
  calcularResumoFinanceiro();
  
  // Atualiza o ranking
  atualizarRankingJogadores();

  // Atualiza o botão de adicionar jogador
  const btnAdicionar = document.getElementById('adicionar-jogador');
  if (btnAdicionar) {
    btnAdicionar.disabled = window.jogadores.length >= window.MAX_JOGADORES;
  }

  // Força atualização do DOM
  document.body.style.display = 'none';
  document.body.offsetHeight; // Força reflow
  document.body.style.display = '';

  console.log("Tela atualizada com sucesso!");
}
