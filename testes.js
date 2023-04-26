let score = 40
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






console.log(ScoreFinal);