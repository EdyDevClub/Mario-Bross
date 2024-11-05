const form = document.querySelector(".Formulario")
const mascara = document.querySelector(".mascara-furmulario")

function cliqueiNoBotao(){
    form.style.left = "30%"
    form.style.transform = "translateX(-50)"
    mascara.style.visibility = "visible"
  
}

function esconderForm(){
    form.style.left = "-300%"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
  
}