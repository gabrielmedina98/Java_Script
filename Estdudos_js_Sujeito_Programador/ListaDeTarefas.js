let listElement = document.querySelector ("#app ul");
let inputElement = document.querySelector ("#app input");
let buttonElement = document.querySelector ("#app button");

let tarefas = [];

function renderTarefas(){
    listElement.innerHTML = "" ; // nessa linha de código estou acessando a tag  ul do html que está dentro da div com id #app e também estou limpando ela deixando vazia caso haja alguma coisa dentro dela.

   tarefas.map((todo) =>{
let liElement =  document.createElement ("li"); // vou criar um elemento no meu visual do html do tipo li
let tarefaText =  document.createTextNode(todo); // vou criar um tipo de texto que será as tarefas digitadas


let linkElement =  document.createElement("a") // cria um elemento de link no meu html
linkElement.setAttribute("href" , "#") // setAttribute -> estou passando um atributo para o link (a) que conhecido como href e # para não levar em lugar nenhum manter na página

linkText = document.createTextNode(" Excluir"); // Essa código informa qual será o texto do link - no caso será o Excluir

linkElement.appendChild(linkText) // essa código pega o texto que foi criado e coloca dentro da tag (a) que foi criada pelo linkElement

let posicao =  tarefas.indexOf(todo)

//linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`) ---- É UMA FORMA PARA NAVEGADORES MAIS ANTIGOS QUE NÃO SUPORTÃO O OUVINTE addEventListener
linkElement.addEventListener('click', () => {
    deletarTarefa(posicao);
  });
// quando clicarmos no botão exlcluir iremos chamar a função deletear tarefa deseja -> no entando e preciso indicar qual tarefa que será excluída pela posição dela 


// adicionando um texto dentro da li
liElement.appendChild(tarefaText); // appeChild =  colocar o filho da Li que no caso seria o Text

 liElement.appendChild(linkElement)  // colando o linkElement para aparecer , ou seja, quando inserimos o elemento filho que seria o link Excluir

//adicionado li dentro da UL
listElement.appendChild(liElement);


   }) // o map sever para percorrer o array
   // o parâmetro (todo) eu vou ter acesso ao item que foi cadastrado 
}

function adicionarTarefas (){
    if (inputElement.value === ""){
        alert ("Digite alguma tarefa");
        return false ; // o return false seria para parar o procedimento para o Usuário digite a tarefa no campo
    }
    else{
        let novaTarefa = inputElement.value;
        tarefas.push(novaTarefa);// para adiconar um novo objeto no array de tarefas usamos o metodo push - o que usuário digitar em novasTarefas será adicionado no array de Tarefas

        inputElement.value = '' // deixara o campo vazio para futuramente poder digitar outra tarefa

        renderTarefas(); // nessa linha de código estou falando para ele renderizar a minha nova tarefa, ou seja, mostrar novamente.
    }
}



buttonElement.onclick = adicionarTarefas; 
// preciso criar o evento de click fora da função , pois preciso chamar a função depois (quando o usuário clicar em adicionar tarefas seria chamado a função)

function deletarTarefa(posicao){
    tarefas.splice(posicao,1)
    renderTarefas(); //  nessa linha de código estou falando para ele renderizar a minha nova tarefa, ou seja, mostrar novamente.
}