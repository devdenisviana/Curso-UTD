function myFunction(x, y = 10){
    // y é 10 se nao for aprovado ou definido
    return x + y;
}
myFunction(5); // será retornado 15

console.log(myFunction(5));