import { getIconeCategoria } from "./getIconeCategoria.js";

export function filtrarItens() {
  const creditos = parseInt(document.getElementById("creditosInput").value) || 0;
  const lojaDiv = document.getElementById("loja");
  const termoPesquisa = (document.getElementById("pesquisa-loja")?.value || "").toLowerCase().trim();

  let itensFiltrados = window.itensLoja
    .map((item, indexOriginal) => ({ ...item, indexOriginal }))
    .filter(item => item.preco <= creditos);

  if (!window.filtrosAtivos.includes("todos")) {
    if (window.filtrosAtivos.includes("favoritos")) {
      itensFiltrados = itensFiltrados.filter(item => item.favorito);
    }
    const categorias = window.filtrosAtivos.filter(f =>
      !["favoritos", "preco-asc", "preco-desc"].includes(f)
    );
    if (categorias.length > 0) {
      itensFiltrados = itensFiltrados.filter(item => categorias.includes(item.categoria));
    }
  }

  if (termoPesquisa) {
    const termoNumero = parseInt(termoPesquisa.replace(/\D/g, ''));
    itensFiltrados = itensFiltrados.filter(item => {
      const nomeMatch = item.nome.toLowerCase().includes(termoPesquisa);
      const descMatch = item.descricao && item.descricao.toLowerCase().includes(termoPesquisa);
      const precoMatch = !isNaN(termoNumero) && item.preco.toString().includes(termoNumero.toString());
      return nomeMatch || descMatch || precoMatch;
    });
  }

  if (window.filtrosAtivos.includes("preco-asc")) {
    itensFiltrados.sort((a, b) => a.preco - b.preco);
  } else if (window.filtrosAtivos.includes("preco-desc")) {
    itensFiltrados.sort((a, b) => b.preco - a.preco);
  } else {
    itensFiltrados.sort((a, b) => (b.favorito ? 1 : 0) - (a.favorito ? 1 : 0));
  }

  lojaDiv.innerHTML = itensFiltrados
    .map((item) => `
      <div class="item" draggable="true" data-index="${item.indexOriginal}" title="${item.descricao}">
        <button class="btn-favorito" onclick="toggleFavorito(${item.indexOriginal})" title="Favoritar">
          <i class="fa${item.favorito ? '-solid' : '-regular'} fa-star" style="color:${item.favorito ? '#FFD700' : '#888'}"></i>
        </button>
        <img src="images/itens/${item.imagem}" alt="${item.nome}" class="item-img">
        <div class="item-info">
          <strong>${item.nome}</strong>
          <input type="number" min="0" value="${item.preco}" style="width:80px" id="preco-item-${item.indexOriginal}"
            oninput="atualizarPrecoItem(${item.indexOriginal})">
        </div>
        <div class="item-categoria">
          <i class="fa-solid ${getIconeCategoria(item.categoria)}"></i>
        </div>
      </div>
    `).join('');

  const alturaLimite = 300;
  if (lojaDiv.scrollHeight > alturaLimite) {
    lojaDiv.style.overflowY = 'auto';
  } else {
    lojaDiv.style.overflowY = 'hidden';
  }
}
