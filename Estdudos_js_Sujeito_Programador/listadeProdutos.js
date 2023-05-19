const ListaProdutos = 
["Computador", "Telefone" , "Mouse", "Teclado"]

ListaProdutos.splice(2,1)
console.log("Mouse Retirado: " + ListaProdutos);

// Mostrando quantos produtos tem na lista
console.log('quantidade de produtos ' + ListaProdutos.length)

// procurando algum determinado produto na lista
const findProdut = ListaProdutos.find(p=> p === "Computador")

if(findProdut) {
    console.log(`Correto!! existe ${findProdut} na sua lista`);

} else{
    console.log("parece que esse produto não existe");
}

// Removendo o segundo item da lista
// Removendo o segundo item da lista
ListaProdutos.splice(1,1)
console.log('Meus Produtos: ' + ListaProdutos)

// Ordenando os numeros
const num = [1,3,5,7,0,9]

console.log('Numeros ordenados: ' + num.sort());

//retirando o primeiro numero array usamos o shift
console.log('Item removido ' + num.shift());

//Invertendo a ordem do array usamos o reverve 
console.log("Ordem invertida: " + num.reverse());

//Adcionando um novo numero na lista
num.push(8)
console.log('Novo numero adicionado ' + num);


//Dia de hoje
let day = "18/05/2023"
//separando a data usando a funçã split
const[dia,mes,ano] = day.split('/')

console.log('Dia: ' + dia);
console.log('Mes: ' + mes);
console.log('Ano: ' + ano);
