import { atualizarTela } from "../loja/atualizarTela.js";
import { configurarDragAndDrop } from "../utils/dragDrop.js";
import { mostrarModalJogador } from "../jogadores/modal.js";
import { adicionarJogador } from "../jogadores/adicionarJogador.js";
import { resetarLoja } from "../loja/resetarLoja.js";

export function configurarListeners() {
  document.getElementById('creditosInput')?.addEventListener('input', () => {
    if (creditosInput.value < 0) creditosInput.value = 0;
    atualizarTela();
  });

  document.getElementById('adicionar-jogador')?.addEventListener('click', mostrarModalJogador);
  document.getElementById('confirmar-jogador')?.addEventListener('click', adicionarJogador);
  document.getElementById('resetar-loja')?.addEventListener('click', resetarLoja);
  document.getElementById('pesquisa-loja')?.addEventListener('input', atualizarTela);

  configurarDragAndDrop();

  const themeSelector = document.getElementById('theme-selector');
  const themeClasses = ['light-theme', 'dracula-theme'];

  function setTheme(themeClass) {
    document.body.classList.remove(...themeClasses);
    if (themeClass) document.body.classList.add(themeClass);
    localStorage.setItem('repo-theme', themeClass || '');
  }

  if (themeSelector) {
    const temaSalvo = localStorage.getItem('repo-theme') || '';
    if (temaSalvo) {
      themeSelector.value = temaSalvo;
      setTheme(temaSalvo);
    }
    themeSelector.addEventListener('change', function () {
      setTheme(this.value);
    });
  }

  const rankingIcone = document.getElementById('ranking-icone');
  const rankingBox = document.getElementById('ranking-jogadores');

  if (rankingIcone && rankingBox) {
    rankingIcone.addEventListener('mouseenter', () => rankingBox.classList.add('mostrar'));
    rankingIcone.addEventListener('mouseleave', () => rankingBox.classList.remove('mostrar'));
    rankingBox.addEventListener('mouseenter', () => rankingBox.classList.add('mostrar'));
    rankingBox.addEventListener('mouseleave', () => rankingBox.classList.remove('mostrar'));
  }
}
