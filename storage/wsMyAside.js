export let wsMyAside = {
    showAside(p) {
        const data = p.map((val, id) => {
            return (
                (val.link)
                ?this.list(val)
                :this.card(val)
            );
        });

        return data.join("")
    },

    card(p1) {
        return `
        <div class="p-4 mb-0 bg-light rounded">
            <h4 class="fst-italic">${p1.name}</h4>
            <p class="mb-0">${p1.description}</p>
        </div>
        `
    },
    list(p1) {
        return `
        <div class="p-4 pt-3" >
            <h4 class="fst-italic">${p1.title}</h4>
            <ol class="list-unstyled mb-0">
            ${p1.link.map((val,id) => `<li><a href="${val.href}">${val.name}</a></li>`).join("")}
            </ol>
        </div>
        `
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyAside[`${e.data.module}`](e.data.data))
})