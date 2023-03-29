export default {
    nav: [
        {
            name: "Dato curioso",
            description: `En diciembre de 2011, Países Bajos batió el récord del partido de voleibol más largo jamás jugado, con una increíble duración de 85 horas. Pero el récord no duró mucho: en enero de 2017, la misma ciudad batió su propio récord con un partido aún más impresionante de 101 horas.`
        },
        {
            title: "Mundiales",
            link: [
                {
                    name: "I",
                    href: "https://es.wikipedia.org/wiki/Campeonato_Mundial_de_Voleibol_Masculino_de_1949"
                },
                {
                    name: "II",
                    href: "https://es.wikipedia.org/wiki/Campeonato_Mundial_de_Voleibol_Masculino_de_1952"
                },
                {
                    name: "III",
                    href: "https://es.wikipedia.org/wiki/Campeonato_Mundial_de_Voleibol_Masculino_de_1956"
                },
                {
                    name: "IV",
                    href: "https://es.wikipedia.org/wiki/Campeonato_Mundial_de_Voleibol_Masculino_de_1960"
                },
                {
                    name: "V",
                    href: "https://es.wikipedia.org/wiki/Campeonato_Mundial_de_Voleibol_Masculino_de_1962"
                },
                {
                    name: "VI",
                    href: "https://es.wikipedia.org/wiki/Campeonato_Mundial_de_Voleibol_Masculino_de_1966"
                },
                {
                    name: "VII",
                    href: "https://es.wikipedia.org/wiki/Campeonato_Mundial_de_Voleibol_Masculino_de_1970"
                },
                {
                    name: "VIII",
                    href: "https://es.wikipedia.org/wiki/Campeonato_Mundial_de_Voleibol_Masculino_de_1974"
                },
                {
                    name: "IX",
                    href: "https://es.wikipedia.org/wiki/Campeonato_Mundial_de_Voleibol_Masculino_de_1978"
                },
                {
                    name: "X",
                    href: "https://es.wikipedia.org/wiki/Campeonato_Mundial_de_Voleibol_Masculino_de_1982"
                },
                {
                    name: "XI",
                    href: "https://es.wikipedia.org/wiki/Campeonato_Mundial_de_Voleibol_Masculino_de_1986"
                },
                {
                    name: "XII",
                    href: "https://es.wikipedia.org/wiki/Campeonato_Mundial_de_Voleibol_Masculino_de_1990"
                },
                {
                    name: "XIII",
                    href: "https://es.wikipedia.org/wiki/Campeonato_Mundial_de_Voleibol_Masculino_de_1994"
                },
                {
                    name: "XIV",
                    href: "https://es.wikipedia.org/wiki/Campeonato_Mundial_de_Voleibol_Masculino_de_1998"
                },
                {
                    name: "XV",
                    href: "https://es.wikipedia.org/wiki/Campeonato_Mundial_de_Voleibol_Masculino_de_2002"
                },
                {
                    name: "XVI",
                    href: "https://es.wikipedia.org/wiki/Campeonato_Mundial_de_Voleibol_Masculino_de_2006"
                },
                {
                    name: "XVII",
                    href: "https://es.wikipedia.org/wiki/Campeonato_Mundial_de_Voleibol_Masculino_de_2010"
                },
                {
                    name: "XVIII",
                    href: "https://es.wikipedia.org/wiki/Campeonato_Mundial_de_Voleibol_Masculino_de_2014"
                },
                {
                    name: "XIX",
                    href: "https://es.wikipedia.org/wiki/Campeonato_Mundial_de_Voleibol_Masculino_de_2018"
                },
                {
                    name: "XX",
                    href: "https://es.wikipedia.org/wiki/Campeonato_Mundial_de_Voleibol_Masculino_de_2022"
                }
            ]
        },
        {
            title: "Redes sociales",
            link: [
                {
                    name: "Github",
                    href: "https://github.com/JhonnSantiagoBernalJuradoCampus"
                },
                {
                    name: "Instragram",
                    href: "https://www.instagram.com/santiagobernalj11/"
                },
                {
                    name: "Facebook",
                    href: "https://www.facebook.com/jhonsantiago.bernaljurado"
                }
            ]
        }
    ],
    fragShow(){
        const ws = new Worker("storage/wsMyAside.js", {type: "module"});

        let id = "#nav";

        ws.postMessage({module: "showAside", data: this.nav})

        ws.addEventListener("message", (e)=>{

            let doc = new DOMParser().parseFromString(e.data, "text/html");

            document.querySelector(id).append(...doc.body.children);

            ws.terminate();
        })
    }
}