
 //break - para execução
 //continue - pula a execução do momento
/* for ( i = 10;  i=0; i--) {
if(i === 5 ){
    continue

}
    console.log(i);
    
}  */

//quando não sabemos quando é o momento da parada usamos o while.
/* let i = 4958634505

while (i>10){
    console.log(i);

    i /= 35
} */


/* let name =  'Mayk'
let names   = ['gabrie', 'rodrigues' , 'pedro'] */

/* for (let char  of name ) { // dessa forma irá pegar cada letra do valor da várivel name e posteriormente imprimir no console.
    console.log(char);
    
} */

//----------

//Exemplo usando o for of --- percorremos o valor dentro dele.
/* let notas = [100,50,70,
72,60,85,50,98,65]
let aprovado = 0
let reprovado = 0

    for (const n of notas) {
        n>=60 ? aprovado++:reprovado++
    }
    console.log(`Aprovados ${aprovado}`);
    console.log(`Reprovados ${reprovado}`); */


//loop de propriedades
/* let person =  {
    name: 'gabriel',
    age: 25,
    weight : 72.2
} */

/* for (const property in person) {
    console.log(property); // informa quais são os objetos 
   //console.log(person.name) // informa a quandtidade de objetos que possui
    console.log(person[property]) // informa seus respectivos valores
        
    } 
 */