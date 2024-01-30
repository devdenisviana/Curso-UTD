let person = prompt("Por favor digite seu nome: ", "Harry Potter");

if (person != null){
    document.getElementById("demo").innerHTML = "Hello " + person + "! How are you today?";
}