function efetuarPagamento(total){
    if(total<=saldo)
        return Promise.resolve("Compra autorizada");
    else
        return Promise.reject("Compra não autorizada");
}

let saldo = 100;

efetuarPagamento(80)
    .then(result => console.log("Promise resolved: "+result))
    .catch(error => console.log("Promisse reject: "+error));

console.log("processando...");