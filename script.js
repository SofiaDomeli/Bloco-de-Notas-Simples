const listaNotas = document.querySelector('.notas')
const criarNota = document.querySelector('.criarNotas')
const notas = document.querySelectorAll('.txtNota')

const hoje = new Date() 
document.getElementById('data').innerHTML = "Última atualização: " + hoje.toLocaleDateString() + ' - ' + hoje.getHours()+ ':' + hoje.getMinutes().toString().padStart(2,"0")

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
    }
})
