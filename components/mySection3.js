export default {
    h2: "New feature",
    btn: {
        p: "December 14, 2020 by ",
        href: "#",
        a: "Chris"
    },
    p: `This is some additional paragraph placeholder content. It has been written to fill the available space and
    show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the
    demonstration flowing, so be on the lookout for this exact same string of text.`,
    li: [
        "First list item",
        "Second list item with a longer description",
        "Third list item to close it out"
    ],
    p2: `This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly
    repetitive body text used throughout.`,
    btn2: {
        href: "#",
        a: "Older"
    },
    btn3: {
        href:"#",
        a: "Newer"
    },

    showSection() {
        let plantilla = "";
        this.li.forEach((val,id) => {
            plantilla += `<li>${val}</li>`
        });
        document.querySelector("#section-3").insertAdjacentHTML("beforeend", `
        <h2 class="blog-post-title">${this.h2}</h2>
        <p class="blog-post-meta">${this.btn.p}<a href="${this.btn.href}">${this.btn.a}</a></p>

        <p>${this.p}</p>
        <ul>
            ${plantilla}
        </ul>
        <p>${this.p2}</p>
        `)
    },
    showNav(){
        document.querySelector("#section-3").insertAdjacentHTML("afterend", `
        <nav class="blog-pagination" aria-label="Pagination">
          <a class="btn btn-outline-primary" href="${this.btn2.href}">${this.btn2.a}</a>
          <a class="btn btn-outline-secondary disabled" href="${this.btn3.href}" tabindex="-1" aria-disabled="true">${this.btn3.a}</a>
        </nav>
        `)
    }
}