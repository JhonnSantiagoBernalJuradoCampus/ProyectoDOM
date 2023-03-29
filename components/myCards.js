export default {
    cards: [
        {
            articulo: "JUGADORES TOP",
            titulo: "Bruno",
            altura: "1.9 metros",
            descripcion: "Brasileño que juega como armador en la Selección de voleibol de Brasil",
            btn: {
                name: "Continuar leyendo...",
                href: "https://es.wikipedia.org/wiki/Bruno_Mossa_de_Rezende"
            },
            img: `<img src="images/bruno.jpg" width="250" height="250" alt="">`
        },
        {
            articulo: "JUGADORES TOP",
            titulo: "Margarita",
            altura: "1.78 metros",
            descripcion: "Punta en la Selección de voleibol de Colombia",
            btn: {
                name: "Continuar leyendo...",
                href: "https://en.wikipedia.org/wiki/Mar%C3%ADa_Mart%C3%ADnez_(volleyball)"
            },
            img: `<img src="images/Margarita.jpg" width="250" height="250" alt="">`
        },
        {
            articulo: "JUGADORES TOP",
            titulo: "Nishida",
            altura: "1.86 metros",
            descripcion: "Opuesto en la Selección de voleibol de Japón",
            btn: {
                name: "Continuar leyendo...",
                href: "https://en.wikipedia.org/wiki/Yuji_Nishida"
            },
            img: `<img src="images/nishida.jpg" width="250" height="250" alt="">`
        },
        {
            articulo: "JUGADORES TOP",
            titulo: "Earvin",
            altura: "1.93 metros",
            descripcion: "Punta en la Selección de voleibol de Francia.​",
            btn: {
                name: "Continuar leyendo...",
                href: "https://es.wikipedia.org/wiki/Earvin_N%27Gapeth"
            },
            img: `<img src="images/earvin.jpg" width="250" height="250" alt="">`
        }
    ],
    fragShow(){
        const ws = new Worker("storage/wsMyCards.js", {type: "module"});

        const id = "#cards";

        ws.postMessage({module: "showCard", data: this.cards});

        ws.addEventListener("message", (e)=>{

            let doc = new DOMParser().parseFromString(e.data, "text/html");
            
            document.querySelector(id).append(...doc.body.children);

            ws.terminate
        })
    }
}