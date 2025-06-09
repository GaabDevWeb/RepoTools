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

  window.itensLoja[index].preco = novoPreco;
}
