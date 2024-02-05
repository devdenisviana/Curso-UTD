let tag = document.getElementsByTagName('ul');

let novoElemento = document.createElement('li');
//quando o novo elemento é criado
novoElemento.innerText = 'ElementoCriado';

tag[0].appendChild(novoElemento);

console.log(tag[4].innerHTML);