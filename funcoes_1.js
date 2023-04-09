/* const sum = function(number1, number2){
//parâmetros (parametrs)
let total = number1+ number2
return total
}


let  number1 = 34 
let number2 = 25

console.log(` o numero 1 é ${number1}` )
console.log(` o numero 1 é ${number2}` )
console.log(`a some é ${(number1, number2)}`) */

// function scope

let subject =  'create video'


function creatthink(subject){
subject = 'study'
return subject
}

console.log(creatthink(subject))
console.log(subject)

