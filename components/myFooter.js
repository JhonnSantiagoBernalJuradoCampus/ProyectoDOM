export default {
    btns: {
        btn: {
            p: "Blog template built for ",
            href: "https://getbootstrap.com/",
            a: "Bootstrap",
            p2: " by ",
            href2: "https://twitter.com/mdo",
            a2: "@mdo."
        },
        btn2: {
            href: "#",
            a: "Back to top"
        }
    },
    
    
    fragShow(){
        const ws = new Worker("storage/wsMyFooter.js", {type: "module"});

        let id = "#footer"

        ws.postMessage({module: "showFooter", data: this.btns});

        ws.addEventListener("message", (e)=>{
            let doc= new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(id).append(...doc.body.children);

            ws.terminate()
        })
    }
}