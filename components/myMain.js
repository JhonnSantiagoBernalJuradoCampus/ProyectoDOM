export default{
    frags: [
        {
            titulo: "Voleibol",
            content: {
                date: "21/03/22",
                paragraph: "lorem"
            }
        },
        {
            titulo: "Voleibol",
            content: {
                date: "21/03/22",
                paragraph: "lorem"
            }
        },
        {
            titulo: "Voleibol",
            content: {
                date: "21/03/22",
                paragraph: "lorem"
            }
        },
        {
            titulo: "Voleibol",
            content: {
                date: "21/03/22",
                paragraph: "lorem"
            }
        }
    ],
    table: [
        {
            paises: "Colombia",
            participacion: "3 veces",
            mundiales: "1"
        },
        {
            paises: "Colombia",
            participacion: "3 veces",
            mundiales: "1"
        },
        {
            paises: "Colombia",
            participacion: "3 veces",
            mundiales: "1"
        },
        {
            paises: "Colombia",
            participacion: "3 veces",
            mundiales: "1"
        },
    ],
    fragShow(){
        const ws = new Worker("storage/wsMyMain.js", {type: "module"});

        let id = []
        let count = 0;
        ws.postMessage({module: "listSection", data: this.frags})

        ws.postMessage({module: "listTable", data: this.table})

        id = ["#articulo1","#arTable"];

        ws.addEventListener("message", (e)=>{

            let doc = new DOMParser().parseFromString(e.data, "text/html");

            document.querySelector(id[count]).append(...doc.body.children);

            (id.length-1==count) ? ws.terminate(): count++;
        })
    }
}