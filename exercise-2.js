const obj = {
  carrinho: {
    produtos: [
      {
        id: 458,
        nome: 'Produto 1',
      },
      {
        id: 789,
        nome: 'Produto 2',
      },
      {
        id: 123,
        nome: 'Produto 3',
      },
    ],
  },
};

let idsConcatenados = obj.carrinho.produtos
  .map((produto) => produto.id)
  .join(',');

console.log(idsConcatenados);

//EXPLICAÇÃO
// Para pegar todos os IDs dos produtos em uma string, eu acessei a lista de produtos com `obj.carrinho.produtos`.
// Usei o `map` para criar um novo array somente com os IDs e depois usei o `join(',')`
// para transformar esse array em uma string onde os IDs estão separados por vírgulas.
// Isso me deu exatamente o formato que precisava, como `'458,789,123'`.
