export function atualizarPrecoItem(index) {
  const input = document.getElementById(`preco-item-${index}`);
  input.value = input.value.replace(/[^0-9]/g, '');

  if (input.value === "") {
    input.value = window.itensLoja[index].preco;
    return;
  }

  let novoPreco = parseInt(input.value);
  if (isNaN(novoPreco) || novoPreco < 0) {
    input.value = window.itensLoja[index].preco;
    return;
  }

  // Atualiza o preço localmente primeiro para feedback instantâneo
  window.itensLoja[index].preco = novoPreco;
  if (window.atualizarTela) {
    window.atualizarTela();
  }

  // Se estiver em modo multiplayer, sincroniza com outros jogadores
  if (window.getModo && window.getModo() === 'multi' && window.atualizarPrecoItemMultiplayer) {
    window.atualizarPrecoItemMultiplayer(index, novoPreco);
  }
}
