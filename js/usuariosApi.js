
const urlUsuarios = "https://jsonplaceholder.typicode.com/users";
const listaUsuarios = document.querySelector("#listaclientesTop")


fetch(urlUsuarios)
  .then(response => response.json())
  .then((json) => {
    json.forEach(usuario => {
        const li = document.createElement("li");
        li.textContent = usuario.name
        listaClientesTop.append(li)
    })
  })


  