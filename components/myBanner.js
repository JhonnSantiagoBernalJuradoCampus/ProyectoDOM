export default {
    image: "../images/volei.jpg",
    title: "Voleibol el deporte mas completo",
    parrafo: "El voleibol es considerado el único deporte olímpico que entrena todos los músculos del cuerpo y que cansa menos al jugador. Esto porque no hay contacto o esfuerzo permanente como en otros deportes, tales como fútbol, básquet, entre otros...",
    btn: {
        name: "Continuar leyendo...",
        href: "https://www.palermo.edu/deportes/noticias16/0312voley.html"
    },
    showImage(){
        document.querySelector(".imgStyle").style.backgroundImage = `url(${this.image})`
    },
    showSectionBaner(){
        document.querySelector("#banner").insertAdjacentHTML("beforeend", `
        <h1 class="display-4 fst-italic">${this.title}</h1>
        <p class="lead my-3">${this.parrafo}</p>
        <p class="lead mb-0"><a href="${this.btn.href}" class="text-white fw-bold">${this.btn.name}</a></p>
        `)
    },
}