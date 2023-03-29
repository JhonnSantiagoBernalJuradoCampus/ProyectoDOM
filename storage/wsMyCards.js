export let wsMyCards = {
    showCard(p1) {
        let plantilla = "";
        p1.forEach((val,id) => {
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
        return plantilla
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyCards[`${e.data.module}`](e.data.data))
})