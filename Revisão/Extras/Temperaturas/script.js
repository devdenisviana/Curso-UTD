function converterTemperatura() {
    var tempOrigem = document.getElementById('tempOrigem').value;
    var valor = parseFloat(document.getElementById('valor').value);

// Funções de conversão
function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function celsiusParaKelvin(celsius) {
    return celsius + 273.15;
}

function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function fahrenheitParaKelvin(fahrenheit) {
    return (fahrenheit + 459.67) * 5/9;
}

function kelvinParaCelsius(kelvin) {
    return kelvin - 273.15;
}

function kelvinParaFahrenheit(kelvin) {
    return (kelvin * 9/5) - 459.67;
}

// Restante do código permanece igual


    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    if (isNaN(valor)) {
        resultadoDiv.innerHTML = 'Por favor, insira um valor numérico válido.';
        return;
    }

    switch (tempOrigem) {
        case 'celsius':
            exibirResultado('Celsius', valor, celsiusParaFahrenheit(valor), celsiusParaKelvin(valor));
            break;
        case 'fahrenheit':
            exibirResultado('Fahrenheit', valor, fahrenheitParaCelsius(valor), fahrenheitParaKelvin(valor));
            break;
        case 'kelvin':
            exibirResultado('Kelvin', valor, kelvinParaCelsius(valor), kelvinParaFahrenheit(valor));
            break;
        default:
            resultadoDiv.innerHTML = 'Escolha uma escala de temperatura válida.';
    }
}

function exibirResultado(origem, valor, destino1, destino2) {
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `${valor} ${origem} é equivalente a:<br>`;
    resultadoDiv.innerHTML += `${destino1.toFixed(2)} Fahrenheit<br>`;
    resultadoDiv.innerHTML += `${destino2.toFixed(2)} Kelvin`;
}

// Restante do código permanece igual
