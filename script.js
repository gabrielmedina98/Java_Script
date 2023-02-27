var area = document.getElementById ('area');

function entrar(){
    var nome = prompt ("Digite seu nome")

    if(nome==='' || nome===null){
        alert("Aldo deu errado")
        area.innerHTML = "clique no botão para acessar"
    }
    else {
        area.innerHTML = "Bem vindo " + nome;

        let botaoSair = document.createElement ("button")
        botaoSair.innerText = "Sair da conta"
        botaoSair.onclick = sair;

        area.appendChild (botaoSair)

    }
    
}

function sair(){
    alert ("Até mais!")
    area.innerHTML = "Você saiu"
}

function mediaAluno (nota1,nota2){
    var media =  (nota1+nota2) / 2 ;

    if (media >= 7 ){
        console.log("Aluno aprovado com média " + media);

  } else if ( media <7 ) {
    console.log ("Aluno reprovado com a média de " + media);
  }
}

function Aluno (nome, curso) {
    var mensagem = "Seja bem-vindo " + nome + " ao curso de " +  curso;
    console.log(mensagem);
}



/* ---------- Udemy --------- */

/* function calcularAreaTerreno ( largura , comprimento ){
    // lógica;
  
    /* document.write( " O terreno possui :" + area) */

     /* var area = largura*comprimento;
     return area
}
var largura = prompt ('Digite a largura do terreno: ')
var comprimento = prompt ('Digite o comprimento do terro : ')
 var area = calcularAreaTerreno(largura,comprimento)
 document.write ('O terro possui ' + area )

 */
/* Parametros , podemos passar diferços parametros para as funções  */
 function soma (a,b){
    return a+b;
 }
 console.log(soma(7,7))
 console.log (soma(7,7,9,15))
