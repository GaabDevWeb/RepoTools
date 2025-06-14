export function atualizarPrecoItem(index) {
  console.log("Atualizando preço do item:", index);
  
  const input = document.getElementById(`preco-item-${index}`);
  if (!input) {
    console.error("Input de preço não encontrado para o item:", index);
    return;
  }

  // Remove caracteres não numéricos
  input.value = input.value.replace(/[^0-9]/g, '');

  // Se o valor estiver vazio, restaura o preço original
  if (input.value === "") {
    input.value = window.itensLoja[index].preco;
    return;
  }

  let novoPreco = parseInt(input.value);
  if (isNaN(novoPreco) || novoPreco < 0) {
    input.value = window.itensLoja[index].preco;
    return;
  }

  console.log("Novo preço:", novoPreco);

  // Atualiza o preço localmente primeiro para feedback instantâneo
  window.itensLoja[index].preco = novoPreco;
  
  // Atualiza a tela para refletir a mudança
  if (window.atualizarTela) {
    window.atualizarTela();
  }

  // Se estiver em modo multiplayer, sincroniza com outros jogadores
  if (window.getModo && window.getModo() === 'multi' && window.atualizarPrecoItemMultiplayer) {
    console.log("Sincronizando preço com outros jogadores...");
    window.atualizarPrecoItemMultiplayer(index, novoPreco);
  }
}

// Adiciona a função ao objeto window para acesso global
window.atualizarPrecoItem = atualizarPrecoItem;
