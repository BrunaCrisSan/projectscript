function toggleMode() {
  const html = document.documentElement
  //simplificado abaixo - função ->(toggle) faz sozinho a lógica e condicionais
  html.classList.toggle("light")

  //exemplo de condicionais abaixo para mudar o fundo->
  // if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else {
  // html.classList.add("light")
  //}

  //pegar tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    // condição -> se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver sem light mode manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
