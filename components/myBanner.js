export default {
    info: {
        image: "../images/volei.jpg",
        title: "Voleibol el deporte mas completo",
        parrafo: "El voleibol es considerado el único deporte olímpico que entrena todos los músculos del cuerpo y que cansa menos al jugador. Esto porque no hay contacto o esfuerzo permanente como en otros deportes, tales como fútbol, básquet, entre otros...",
        btn: {
            name: "Continuar leyendo...",
            href: "https://www.palermo.edu/deportes/noticias16/0312voley.html"
        }
    },
    showImage(){
        document.querySelector(".imgStyle").style.backgroundImage = `url(${this.info.image})`
    },
    fragShow() {
        const ws = new Worker("storage/wsMyBanner.js", {type: "module"});

        const id = "#banner";

        ws.postMessage({module: "showSectionBaner", data: this.info});

        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");

            document.querySelector(id).append(...doc.body.children);

            ws.terminate();
        })
    }
}