// URL: https://sujeitoprogramador.com/rn-api/?api=posts

let listElement = document.querySelector("#app");

let posts = [];


function nutriApp(){
  
  fetch("https://sujeitoprogramador.com/rn-api/?api=posts") // de uma api - é uma promessa de certo ou errado
  .then((r) => r.json()) //caso de sucesso (r.json)=> convertando a resposta em um json
  .then((json) => {
    posts = json;

    posts.map((item)=>{
      let liElement = document.createElement("li"); // criando um elemento do tipo li
      let titleElement = document.createElement("strong");
      let imgElement = document.createElement("img");
      let descriptionElement = document.createElement("a");

      let titleText = document.createTextNode(item.titulo); // criando o um título
      titleElement.appendChild(titleText); // colando o titulo criado dentro de uma strong ou seja deixando o texto mais forte
      liElement.append(titleElement); // colocando o tittulo titleElement dentro da li 

      imgElement.src = item.capa;
      liElement.appendChild(imgElement);

      let descriptionText = document.createTextNode(item.subtitulo);
      descriptionElement.appendChild(descriptionText);
      liElement.appendChild(descriptionElement);

      listElement.appendChild(liElement); //colocando a li com todas as informações dentro da UL


    })

  })
  .catch(()=>{ // capturar o erro 
    console.log("DEU ALGUM ERRO")
  })


}

nutriApp();