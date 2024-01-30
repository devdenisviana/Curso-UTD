const ePrimo = numero => {
    let numeroDivisores = 0;

    for(let divisor = 1;divisor<=80;divisor++){
        if(numero % divisor === 0){
            numeroDivisores++;
        }
    }
    if (numeroDivisores == 2)
        console.log("O número "+numero+" é primo");
    else
        console.log("O número "+numero+" não é primo");
}
ePrimo(33);