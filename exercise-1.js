function placar(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    let numero = numbers[i];

    if (numero === 5) {
      total += 5;
    } else if (numero % 2 === 0) {
      total += 1;
    } else {
      total += 3;
    }
  }

  return total;
}

console.log(placar([1, 2, 3, 4, 5]));
console.log(placar([19, 20, 21]));

//EXPLICAÇÃO:
// Criei uma função `placar` que percorre o array e soma pontos de acordo com as regras: 
// 1 ponto para números pares, 3 para ímpares, e mais 5 se o número for 5. 
// A função calcula tudo e retorna a pontuação total.
