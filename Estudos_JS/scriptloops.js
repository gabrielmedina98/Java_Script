
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

 /* for (let name  of names ) { // dessa forma o for of ira imprir cada string dentro array em forma vertical
    console.log(name);
    
}  */

//loop de propriedades
let person =  {
    name: 'gabriel',
    age: 25,
    weight : 72.2
}

for (const property in person) {
    console.log(property);
   // console.log(person.name)
    console.log(person[property])
        
    }

