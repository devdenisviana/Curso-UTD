//a instrução JavaScript For/of percorre os valores de objetos iteráveis.
//permite fazer um loop em estruturas de dados iteráveis como arrays, Maps, NodeLists e muito mais
//exemplo de loop sobre um array

const cars =["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars){
    text += x + " ";
}

console.log(cars);
console.log(text);

//loop sobre uma string
let language = "JavaScript";
let text1 = "";

for (let x of language){
    text1 += x + " ";
}

console.log(language);
console.log(text1);