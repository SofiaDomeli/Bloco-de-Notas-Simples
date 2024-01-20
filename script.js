const listaNotas = document.querySelector('.notas')
const criarNota = document.querySelector('.criarNotas')
let notas = document.querySelectorAll('.txtNota')

const hoje = new Date() 
document.getElementById('data').innerHTML = "Última atualização: " + "<br>" + hoje.toLocaleDateString() + ' - ' + hoje.getHours().toString().padStart(2,"0") + ':' + hoje.getMinutes().toString().padStart(2,"0")

function armazenarNota() {
    localStorage.setItem("notas", listaNotas.innerHTML)    
}

function mostrarNotas(){
    listaNotas.innerHTML = localStorage.getItem("notas")
}
mostrarNotas()

criarNota.addEventListener("click", () => {
    let textoNota = document.createElement('p')
    let img = document.createElement('img')
    textoNota.className = 'txtNota'
    textoNota.setAttribute("contenteditable", "true")
    img.src = "images/lixeira.png"
    listaNotas.appendChild(textoNota).appendChild(img)
})

listaNotas.addEventListener("click", function(e){
    if(e.target.tagName === "IMG") {
        e.target.parentElement.remove()
        armazenarNota()
    } else if(e.target.tagName === "P") {
        notas = document.querySelectorAll(".txtNota")
        notas.forEach(nota => {
            nota.onkeyup = function(){
                armazenarNota()
            }
        })
    }
})
