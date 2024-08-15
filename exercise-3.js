function PiiRemoval(url) {
  // Expressão regular
  const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

  return url.replace(emailRegex, 'pii');
}

console.log(PiiRemoval('https://www.aunica.com?email=john@doe.com&id=12345'));
console.log(PiiRemoval('https://www.aunica.com/page?user=john-doe@doe.com.br'));
console.log(
  PiiRemoval(
    'https://www.aunica.com/page?utm_campaign=2022&id=john+DOE@pm.me&utm_source=facebook'
  )
);

// EXPLICAÇÃO
// Criei uma função `PiiRemoval` que usa uma expressão regular para encontrar e substituir endereços de email na URL por "pii".
//  Assim, os emails são mascarados na URL, protegendo informações sensíveis.
