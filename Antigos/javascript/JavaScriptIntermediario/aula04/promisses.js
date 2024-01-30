
const condicao = true;
const minhaFuncao = new Promise((resolve,reject)=>{
    if(condicao == true)
        resolve("A promisse foi resolvida com sucesso");
    else    
        reject("houve um erro na execução da promisse");
});

minhaFuncao
    .then(resp => console.log(resp))
    .catch(erro => console.log(erro));
    