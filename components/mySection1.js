export default{
    titulo1: "Historia del voleibol",
    btn: {
        p: "1895 por ",
        href: "https://es.wikipedia.org/wiki/William_George_Morgan",
        a: "William George Morgan"
    },
    parrafo1: "El voleibol fue ideado en principio como una alternativa más sosegada al baloncesto, pues aunque este se adaptaba bien a los jóvenes, los miembros de mayor edad requerían un juego menos intenso.",
    parrafo2: "Inicialmente lo denominó Mintonette. Por tanto el baloncesto y el voleibol se inventaron al final del siglo xix en dos ciudades, Holyoke y Springfield, separadas por solo 16 km y ambos deportes surgieron en la Asociación Cristiana de Jóvenes (YMCA) difundiéndose rápidamente a nivel internacional por todas sus organizaciones asociadas.12 Fue diseñado para gimnasios o lugares cerrados y también se puede jugar al aire libre. Se trataba de un juego por equipos, que guardaba semejanzas con el tenis o el balonmano.",


    titulo2: "Blockquotes",
    parrafo3: "This is an example blockquote in action:",
    parrafo4: "Quoted text goes here.",
    parrafo5: `This is some additional paragraph placeholder content. It has been written to fill the available space and
    show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the
    demonstration flowing, so be on the lookout for this exact same string of text.`,
    subtitulo: "Example lists",
    parrafo6: `This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly
    repetitive body text used throughout. This is an example unordered list:`,
    listaU1: "First list item",
    listaU2: "Second list item with a longer description",
    listaU3: "Third list item to close it out",
    parrafo7: "And this is an ordered list:",
    listaO1: "First list item",
    listaO2: "Second list item with a longer description",
    listaO3: "Third list item to close it out",
    parrafo8: "And this is a definiton list:",
    dt1: "HyperText Markup Language (HTML)",
    dd1: "The language used to describe and define the content of a Web page",
    dt2: "Cascading Style Sheets (CSS)",
    dd2: "Used to describe the appearance of Web content",
    dt3: "JavaScript (JS)",
    dd3: "The programming language used to build advanced Web sites and applications",
    titulo3: "Inline HTML elements",
    btn2: {
        p: "HTML defines a long list of available inline tags, a complete list of which can be found on the",
        href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element",
        a: "Mozilla Developer Network."
    },
    li: [
        "Primer dato de li",
        "segundo dato de li",
        "tercer dato de li",
        "hola"
    ],
    mensaje: "I dont know",


    showArticle(){
        document.querySelector("#section-1").insertAdjacentHTML("afterbegin", `
        <h2 class="blog-post-title">${this.titulo1}</h2>
        <p class="blog-post-meta">${this.btn.p}<a href="${this.btn.href}">${this.btn.a}</a></p>
        <p>${this.parrafo1}</p>
        <hr>
        <p>${this.parrafo2}</p>
        <h2>${this.titulo2}</h2>
        <p>${this.parrafo3}</p>
        <blockquote class="blockquote">
          <p>${this.parrafo4}</p>
        </blockquote>
        <p>${this.parrafo5}</p>
          <h3>${this.subtitulo}</h3>
          <p>${this.parrafo6}</p>
          <ul>
            <li>${this.listaU1}</li>
            <li>${this.listaU2}</li>
            <li>${this.listaU3}</li>
          </ul>
          <p>${this.parrafo7}</p>
          <ol>
            <li>${this.listaO1}</li>
            <li>${this.listaO2}</li>
            <li>${this.listaO3}</li>
          </ol>
          <p>${this.parrafo8}</p>
          <dl>
            <dt>${this.dt1}</dt>
            <dd>${this.dd1}</dd>
            <dt>${this.dt2}</dt>
            <dd>${this.dd2}</dd>
            <dt>${this.dt3}</dt>
            <dd>${this.dd3}</dd>
          </dl>
          <h2>${this.titulo3}</h2>
          <p>${this.btn2.p}<a
              href="${this.btn2.href}">${this.btn2.a}</a>
          </p>
        `)
    },
    showList3(){
        let plantilla = ""
        this.li.forEach((val,id)=>{
            plantilla += `<li>${val}</li>`
        }); 
        document.querySelector("#section-1").insertAdjacentHTML("beforeend", `<ul>
        ${plantilla}
        </ul>`)
    }
}