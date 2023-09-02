// 1. Exibe a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World!");

// 2. Declara duas variáveis e exibe o resultado da soma entre elas.
let num1 = parseFloat(prompt("Digite o primeiro número para a soma:"));
let num2 = parseFloat(prompt("Digite o segundo número para a soma:"));
alert("Resultado da soma: " + (num1 + num2));

// 3. Declara uma variável e verifica se o seu valor é um número.
let varCheck1 = prompt("Digite algo para verificar se é um número:");
if (!isNaN(varCheck1)) {
    alert("É um número");
} else {
    alert("Não é um número");
}

// 4. Declara uma variável e verifica se o seu valor é uma string.
let varCheck2 = prompt("Digite algo para verificar se é uma string:");
if (typeof varCheck2 === 'string') {
    alert("É uma string");
} else {
    alert("Não é uma string");
}

// 5. Declara uma variável e verifica se o seu valor é um booleano.
let varCheck3 = prompt("Digite 'true' ou 'false' para verificar se é um booleano:").toLowerCase();
if (varCheck3 === 'true' || varCheck3 === 'false') {
    alert("É um booleano");
} else {
    alert("Não é um booleano");
}

// 6. Declara duas variáveis e exibe o resultado da subtração entre elas.
num1 = parseFloat(prompt("Digite o primeiro número para a subtração:"));
num2 = parseFloat(prompt("Digite o segundo número para a subtração:"));
alert("Resultado da subtração: " + (num1 - num2));

// 7. Declara duas variáveis e exibe o resultado da multiplicação entre elas.
num1 = parseFloat(prompt("Digite o primeiro número para a multiplicação:"));
num2 = parseFloat(prompt("Digite o segundo número para a multiplicação:"));
alert("Resultado da multiplicação: " + (num1 * num2));

// 8. Declara duas variáveis e exibe o resultado da divisão entre elas.
num1 = parseFloat(prompt("Digite o divisor:"));
num2 = parseFloat(prompt("Digite o dividendo:"));
alert("Resultado da divisão: " + (num1 / num2));

// 9. Declara uma variável e verifica se o seu valor é um número par.
varCheck1 = parseFloat(prompt("Digite um número para verificar se é par:"));
if (varCheck1 % 2 === 0) {
    alert("É um número par");
} else {
    alert("Não é um número par");
}

// 10. Declara uma variável e verifica se o seu valor é um número ímpar.
varCheck4 = parseFloat(prompt("Digite um número para verificar se é ímpar:"));
if (varCheck4 % 2 !== 0) {
    alert("É um número ímpar");
} else {
    alert("Não é um número ímpar");
}
