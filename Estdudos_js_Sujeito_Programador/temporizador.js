//setInterval -  executar infinitamente

 function acao(){
    document.write("Executando... <br/>")

} 
/* var timer = setInterval(() =>{
    document.write("Executando!!! <br/>");
},1000
) */ // Caso queira para o interval ir no console.log e digitar "clearInterval('nome da váriavel')"

setTimeout (() => {
    console.log("Executou o nosso TIMEOUT")
},3000
) // Após executar ele não faz mais nada pois so executára somente uma vez.