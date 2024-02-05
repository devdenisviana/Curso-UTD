function calcular() {
    // Limpa os resultados anteriores
    document.getElementById("resultados").innerHTML = "";
  
    // Obtém os números inseridos pelo usuário
    const input = document.getElementById("numInput").value;
    const numeros = input.split(",").map(Number);
  
    // Verifica se há entre 2 e 5 números
    if (numeros.length < 2 || numeros.length > 5) {
      alert("Insira entre 2 e 5 números.");
      return;
    }
  
    // Funções para as operações desejadas
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    const subtracao = numeros.reduce((acc, num) => acc - num);
    const multiplicacao = numeros.reduce((acc, num) => acc * num, 1);
    const divisores = encontrarDivisores(numeros);
    const parOuImpar = numeros.map(numero => (numero % 2 === 0 ? "Par" : "Ímpar"));
    const primos = numeros.map(numero => (isPrimo(numero) ? "Primo" : "Não Primo"));
    const mdc = calcularMDC(numeros);
    const mmc = calcularMMC(numeros);
  
    // Exibe os resultados
    document.getElementById("resultados").innerHTML = `
      <p>Soma: ${soma}</p>
      <p>Subtração: ${subtracao}</p>
      <p>Multiplicação: ${multiplicacao}</p>
      <p>Divisores: ${divisores.join(", ")}</p>
      <p>Par ou Ímpar: ${parOuImpar.join(", ")}</p>
      <p>Primo ou Não Primo: ${primos.join(", ")}</p>
      <p>MDC: ${mdc}</p>
      <p>MMC: ${mmc}</p>
    `;
  }
  
  function encontrarDivisores(numeros) {
    const divisores = [];
    for (let i = 1; i <= Math.min(...numeros); i++) {
      if (numeros.every(numero => numero % i === 0)) {
        divisores.push(i);
      }
    }
    return divisores;
  }
  
  function isPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function calcularMDC(numeros) {
    // Implementação do algoritmo de Euclides para o MDC
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    return numeros.reduce((acc, num) => gcd(acc, num));
  }
  
  function calcularMMC(numeros) {
    // Implementação do cálculo do MMC a partir do MDC
    const lcm = (a, b) => (a * b) / calcularMDC([a, b]);
    return numeros.reduce((acc, num) => lcm(acc, num));
  }
  