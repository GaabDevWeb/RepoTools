import { adicionarItem } from "../jogadores/adicionarJogador.js";

export function configurarDragAndDrop() {
  document.addEventListener('dragstart', function (e) {
    if (e.target.classList.contains('item')) {
      window.draggedItem = e.target;
      e.target.classList.add('dragging');
    }
  });

  document.addEventListener('dragend', function (e) {
    if (e.target.classList.contains('item')) {
      e.target.classList.remove('dragging');
    }
  });

  document.addEventListener('dragover', function (e) {
    if (e.target.classList.contains('card-jogador')) {
      e.preventDefault();
      e.target.classList.add('highlight-drop');
    }
  });

  document.addEventListener('dragleave', function (e) {
    if (e.target.classList.contains('card-jogador')) {
      e.target.classList.remove('highlight-drop');
    }
  });

  document.addEventListener('drop', function (e) {
    if (e.target.classList.contains('card-jogador') && window.draggedItem) {
      e.preventDefault();
      e.target.classList.remove('highlight-drop');

      const jogadorIndex = e.target.closest('.card-jogador').dataset.index;
      const itemIndex = window.draggedItem.dataset.index;

      adicionarItem(jogadorIndex, itemIndex);
    }
  });
}
