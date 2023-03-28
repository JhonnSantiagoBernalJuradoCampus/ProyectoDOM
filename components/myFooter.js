export default {
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
    },
    showFooter() {
        document.querySelector("#footer").insertAdjacentHTML("beforeend", `
        <p>${this.btn.p}<a href="${this.btn.href}">${this.btn.a}</a>${this.btn.p2}<a
            href="${this.btn.href2}">${this.btn.a2}</a></p>
        <p>
            <a href="${this.btn2.href}">${this.btn2.a}</a> 
        </p>
        `)
    }
}