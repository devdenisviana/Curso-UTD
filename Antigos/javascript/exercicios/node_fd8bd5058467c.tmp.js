var contador = 0;
var a = 0, b = 1, c = 0;

while(contador <=100){
    c = a + b;
    a = b;
    b = c;

    console.log(c);
}