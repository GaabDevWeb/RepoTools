import { itensLoja } from "./data/itens.js";
import { configurarListeners } from "./eventos/listeners.js";
import { toggleFavorito } from "./loja/toggleFavorito.js";
import { atualizarPrecoItem } from "./loja/atualizarPrecoItem.js";
import { toggleFiltro } from "./loja/toggleFiltro.js";
import "./jogadores/removerJogador.js";
import "./jogadores/selecionarAvatar.js";

window.itensLoja = itensLoja; 
window.jogadores = [];
window.filtrosAtivos = ["todos"];
window.filtroAtivo = "todos";
window.MAX_JOGADORES = 6;
window.draggedItem = null;

document.addEventListener('DOMContentLoaded', () => {
  configurarListeners();
});