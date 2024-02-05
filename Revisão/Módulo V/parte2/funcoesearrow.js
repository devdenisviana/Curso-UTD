//usando arrow function
let myFunction = (a,b) => a *b;

console.log(myFunction(10,5));

//sem arrow function
hello = function(){
    return "Hello world!";
}

console.log(hello());
//com arrow function
hello = () => {
    return "Hello world!";
}

console.log(hello());

//uma versão mais curta - caso vc tenha somente uma instrução
hello = () => "Hello world!";

console.log(hello());
