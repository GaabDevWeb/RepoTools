import { atualizarTela } from "./atualizarTela.js";

export function toggleFiltro(filtro) {
  if (filtro === "todos" || filtro === "favoritos") {
    // Permite combinar "todos" ou "favoritos" apenas com ordenação de preço
    window.filtrosAtivos = [filtro, ...window.filtrosAtivos.filter(f => f === "preco-asc" || f === "preco-desc")];
  } else if (filtro === "preco-asc" || filtro === "preco-desc") {
    // Só pode um filtro de ordenação por vez
    if (window.filtrosAtivos.includes(filtro)) {
      window.filtrosAtivos = window.filtrosAtivos.filter(f => f !== filtro);
      // Se só sobrou "todos" ou "favoritos", mantém só ele
      if (
        window.filtrosAtivos.length === 0 ||
        (window.filtrosAtivos.length === 1 && (window.filtrosAtivos[0] === "todos" || window.filtrosAtivos[0] === "favoritos"))
      ) {
        window.filtrosAtivos = [window.filtrosAtivos[0] || "todos"];
      }
    } else {
      window.filtrosAtivos = window.filtrosAtivos.filter(f => f !== "preco-asc" && f !== "preco-desc");
      window.filtrosAtivos.push(filtro);
    }
  } else {
    // Remove "todos" e "favoritos" se outro filtro for selecionado
    window.filtrosAtivos = window.filtrosAtivos.filter(f => f !== "todos" && f !== "favoritos");
    if (window.filtrosAtivos.includes(filtro)) {
      window.filtrosAtivos = window.filtrosAtivos.filter(f => f !== filtro);
      // Se nenhum filtro ficar ativo, volta para "todos" (mantendo ordenação se houver)
      if (
        window.filtrosAtivos.length === 0 ||
        (window.filtrosAtivos.length === 1 && (window.filtrosAtivos[0] === "preco-asc" || window.filtrosAtivos[0] === "preco-desc"))
      ) {
        const ordenacao = window.filtrosAtivos.find(f => f === "preco-asc" || f === "preco-desc");
        window.filtrosAtivos = ordenacao ? ["todos", ordenacao] : ["todos"];
      }
    } else {
      window.filtrosAtivos.push(filtro);
    }
  }

  atualizarTela();

  // Atualiza classes dos botões
  document.querySelectorAll('.filtro-btn').forEach(btn => {
    const txt = btn.textContent.trim().toLowerCase();
    let key = btn.innerText.trim().toLowerCase();
    if (txt.includes("todos")) key = "todos";
    else if (txt.includes("favoritos")) key = "favoritos";
    else if (txt.includes("armas")) key = "armas";
    else if (txt.includes("upgrades")) key = "upgrades";
    else if (txt.includes("cura")) key = "cura";
    else if (txt.includes("ferramentas")) key = "ferramentas";
    else if (txt.includes("arremessáveis")) key = "arremessaveis";
    else if (txt.includes("mais barato")) key = "preco-asc";
    else if (txt.includes("mais caro")) key = "preco-desc";
    if (window.filtrosAtivos.includes(key)) btn.classList.add("ativo");
    else btn.classList.remove("ativo");
  });
}

window.toggleFiltro = toggleFiltro;