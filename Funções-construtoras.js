function Person (name){
    this.name =  name // este this está referenciando o mayke que está la fora 
    this.walk =  ()=> {
        return this.name + " está andando "
    }
}

const mayk = new Person (" Gabriel")
const joao = new Person ("  Joao")
console.log(mayk.walk())
console.log(joao.walk())
