/* --------- TESTE 1 --------- */

/* let score = 40
let scoreA = score >= 90 && score<=100;
let scoreB = score >= 80 && score<=89;
let scoreC = score >= 70 && score<=79;
let scoreD = score >= 60 && score<=69;
let scoreE = score <60 && score>=0



if (scoreA){
    ScoreFinal = 'A'
}
else if(scoreB){
    ScoreFinal = 'B'
}
else if (scoreC){
    ScoreFinal = 'C'
}
else if (scoreD){
    ScoreFinal = 'D'
}
else if (scoreE){
    ScoreFinal = 'E'
} */



/* let score = 40

function getScore(score){
let scoreA = score >= 90 && score<=100;
let scoreB = score >= 80 && score<=89;
let scoreC = score >= 70 && score<=79;
let scoreD = score >= 60 && score<=69;
let scoreE = score <60 && score>=0

    let ScoreFinal;

    if (scoreA){
        ScoreFinal = 'A'
    }
    else if(scoreB){
        ScoreFinal = 'B'
    }
    else if (scoreC){
        ScoreFinal = 'C'
    }
    else if (scoreD){
        ScoreFinal = 'D'
    }
    else if (scoreE){
        ScoreFinal = 'E'
    } 
    return ScoreFinal;
}

console.log(getScore(101));
console.log(getScore(100));
console.log(getScore(60));
console.log(getScore(65));
console.log(getScore(0)); 

console.log(ScoreFinal);*/

// --------- TESTE 2 --------- 
/*  let family = {
    incomes :[2500,3000,5000,60,61.20,12.60],
    expenses :[5000,8000,250.52,30,50.20,10]
 }

 function sum(array){
let total = 0;
for (let value of array){
    total += value
}
return total
 }

 function calculateBalance(){
    const calculateIncomes = sum(family.incomes) // recebe a soma do incomes 
    const calculeteExpenses =  sum(family.expenses) // recebe a some do expenses
    const total =  calculateIncomes -  calculeteExpenses 
    const itsOk = total>=0 // variavel recebe o toral incomes - expenses e caso esse total seja maior == a (0)
    let balanceText = "negativo" // irá inicia como negativo caso a váriavel its ok seja conforme a condição acima, o texto da variável balanceText será laterado para "positivo"

    if(itsOk){
        balanceText = "positivo"
    }
    
    console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)}R$`); // é necessário que o console log fique dentro função pois para acessar a várivel balanceText e total precisa esta no mesmo escopo
 }

 calculateBalance() // rodamos apenas essa função no final pois criamos as outras para chamar dentro dessa função. */

// --------- TESTE 3 ---------

function convertDegree (degree){
    const celsius = degree.toUpperCase().includes('C')
    const fahrenheit = degree.toUpperCase().includes('F')

    if(!celsius && !fahrenheit){
        throw new Error ('Grau não identificado')
    }
    let updatedDregree = Number(degree.toUpperCase().replace("F",""));
    let formula = fahrenheit => (fahrenheit-32) * 5/9
    let degreeSign = ' C'
//fluxo alternativo
    if(celsius){
         updatedDregree = Number(degree.toUpperCase().replace("C",""));
         formula = celsius => celsius * 9/5 + 32
         degreeSign = ' F'
        
    }


    return formula (updatedDregree ) + degreeSign
}

try{
    console.log(convertDegree('10C'))
    console.log(convertDegree('50F'))
    convertDegree('50Z')

} catch(error){
    console.log(error);

}