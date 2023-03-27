export default {
    title: {
        name: "Voleibol",
        href: "#"
    },
    paises: [
        {
            name: "Brasil",
            href: "#"
        },
        {
            name: "EE.UU",
            href: "#"
        },
        {
            name: "Italia",
            href: "#"
        },
        {
            name: "Rusia",
            href: "#"
        },
        {
            name: "Japón",
            href: "#"
        },
        {
            name: "Serbia",
            href: "#"
        },
        {
            name: "Polonia",
            href: "#"
        },
        {
            name: "Cuba",
            href: "#"
        },
        {
            name: "China",
            href: "#"
        },
        {
            name: "Alemania",
            href: "#"
        },
        {
            name: "Colombia",
            href: "#"
        }
    ],
    listTitle(){
        document.querySelector("#title").insertAdjacentHTML("beforeend",`<a class="blog-header-logo text-dark" href="${this.title.href}">${this.title.name}</a>`)
    },
    listPaises(){
        let plantilla = "";
        this.paises.forEach((val,id) => {
            plantilla += `<a class="p-2 link-secondary" href="#">${val.name}</a>`
        });
        document.querySelector("#paises").insertAdjacentHTML("beforeend", plantilla)
    },
    fragShow(){
        const ws = new Worker("storage/wsMyHeader.js", {type: "module"});

        ws.postMessage({nombre: "bernal"});

        ws.addEventListener("message", (e)=>{
            console.log(e.data);
            ws.terminate();
        })
    }
}