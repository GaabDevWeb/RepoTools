import { atualizarTela } from "./atualizarTela.js";

export function toggleFavorito(index) {
  window.itensLoja[index].favorito = !window.itensLoja[index].favorito;
  atualizarTela();
  setTimeout(() => {
    const btn = document.querySelector(`.item[data-index="${index}"] .btn-favorito`);
    if (btn && window.itensLoja[index].favorito) {
      btn.classList.remove('favoritado');
      void btn.offsetWidth;
      btn.classList.add('favoritado');
    }
  }, 0);
}

window.toggleFavorito = toggleFavorito;
