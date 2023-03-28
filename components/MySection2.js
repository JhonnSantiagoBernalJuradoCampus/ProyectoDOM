export default{
    firstPart: {
        h2: "Another blog post",
        btn: {
            p: "December 23, 2020 by ",
            href: "#",
            a: "Jacob" 
        },
        p: `This is some additional paragraph placeholder content. It has been written to fill the available space and
        show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the
        demonstration flowing, so be on the lookout for this exact same string of text.`,
        block: {
            p: "Longer quote goes here, maybe with some <strong>emphasized text</strong> in the middle of it."
        },
        p2: `This is some additional paragraph placeholder content. It has been written to fill the available space and
        show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the
        demonstration flowing, so be on the lookout for this exact same string of text.`,
        h3: "Example table",
        p3: "And don't forget about tables in these posts:"
    },
    table: [
        {
            th: [
                "Name",
                "Upvotes",
                "Downvotes"
            ]
        },
        {
            td: [
                [
                    "Alice",
                    "10",
                    "11"
                ],
                [
                    "Bob",
                    "4",
                    "3"
                ],
                [
                    "Charlie",
                    "7",
                    "9"
                ]
            ]
        },
        {
            td2: [
                "Totals",
                "21",
                "23"
            ]
        }
    ],
    p: `This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly
    repetitive body text used throughout.`,
    showFirstPart(){
        document.querySelector("#section-2").insertAdjacentHTML("afterbegin",`
        <h2 class="blog-post-title">${this.firstPart.h2}</h2>
        <p class="blog-post-meta">${this.firstPart.btn.p}<a href="${this.firstPart.btn.href}">${this.firstPart.btn.a}</a></p>
        <p>${this.firstPart.p}</p>
        <blockquote>
            <p>${this.firstPart.block.p}</p>
        </blockquote>
        <p>${this.firstPart.p2}</p>
        <h3>${this.firstPart.h3}</h3>
        <p>${this.firstPart.p3}}</p>
        `)
    },
    showTable(){
        const data = this.table.map((val,id) => {
            return (
                (val.th)
            );
        }); 
        let plantilla = "";
        data[0].forEach((val,id) => {
            plantilla += `<th>${val}</th>`
        });
        document.querySelector("#thead").insertAdjacentHTML("beforeend",`
        <tr>
        ${plantilla}
        </tr>
        `);
        const data2 = this.table.map((val,id) => {
            return(
                (val.td)
            );
        });
        plantilla = "";
        let tds = "";
        data2[1].forEach((val,id) => {
            plantilla += `
            <tr>
                ${tds = ""}
                ${val.forEach((val,id) => {
                tds += `<td>${val}</td>`
                })}
                ${tds}
            </tr>`
        });
        document.querySelector("#tbody").insertAdjacentHTML("beforeend", plantilla);
        plantilla = "";
        this.table[2].forEach((val,id) => {
            plantilla += `
            <td>${val}</td>`
        });
        document.querySelector("#tfoot").insertAdjacentHTML("beforeend",`
        <tr>
        ${plantilla}
        </tr>
        `)
    },
    
}