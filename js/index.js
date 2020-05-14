let bord = document.querySelector('#board')
let input = document.querySelector('#novaTarefa')
let btnAdd = document.querySelector('#add')
let icon = document.getElementsByClassName('icon')

function adicionarTarefa(event) {
  input.style.border = "black"
  const tarefa = input.value
  const divTarefa = document.createElement("div");
  divTarefa.classList.add("tarefa")


  const divConteudo = document.createElement("div")
  divConteudo.classList.add("col-md-8")
  divConteudo.innerText = tarefa

  const divImg = document.createElement("div")
  divImg.classList.add("col-md-2")

  const divCheck = document.createElement("img")
  divCheck.setAttribute("src", "img/check.png")
  divCheck.setAttribute("class", "icon")
  divCheck.onclick = () => divTarefa.remove()
  
  divImg.appendChild(divCheck)
  divTarefa.appendChild(divConteudo)
  divTarefa.appendChild(divImg)

  bord.appendChild(divTarefa)
  input.value = ""
}

input.addEventListener("keypress", (event) => {
  if(event.keyCode === 13){
    if(input.value !== '') {
      adicionarTarefa()
    }else{
      alert('por favor preencha todos os campos')
      input.style.borderColor = "red";
    }
  }
})

btnAdd.addEventListener("click", (event) => {
  if(input.value !== '') {
    adicionarTarefa()
  }else{
    alert('por favor preencha todos os campos')
    input.style.borderColor = "red";
  }
})







