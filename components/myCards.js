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
    showCard() {
        let plantilla = "";
        this.cards.forEach((val,id) => {
            plantilla += `
            <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" >
            <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary">${val.articulo}</strong>
            <h3 class="mb-0">${val.titulo}</h3>
            <div class="mb-1 text-muted">${val.altura}</div>
            <p class="card-text mb-auto">${val.descripcion}</p>
            <a href="${val.btn.href}" class="stretched-link">${val.btn.name}</a>
          </div>
          <div class="col-auto d-none d-lg-block">
            ${val.img}
          </div>
          </div>
          </div>`
        }
        );
        document.querySelector("#cards").insertAdjacentHTML("beforeend", plantilla)
    }
}