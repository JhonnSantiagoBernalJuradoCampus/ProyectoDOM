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
    

    
    fragShow(){
        const ws = new Worker("storage/wsMyHeader.js", {type: "module"});

        let id = [];
        let count = 0;

        ws.postMessage({module: "listTitle", data: this.title});

        ws.postMessage({module: "listPaises", data: this.paises});

        id= ["#title", "#paises"];

        ws.addEventListener("message", (e)=>{

            let doc = new DOMParser().parseFromString(e.data, "text/html");

            document.querySelector(id[count]).append(...doc.body.children);

            (id.length-1==count) ? ws.terminate(): count++;
        })

    }
}