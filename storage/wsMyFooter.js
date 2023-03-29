export let wsMyFooter = {
    showFooter(p1) {
        return `
        <p>${p1.btn.p}<a href="${p1.btn.href}">${p1.btn.a}</a>${p1.btn.p2}<a
            href="${p1.btn.href2}">${p1.btn.a2}</a></p>
        <p>
            <a href="${p1.btn2.href}">${p1.btn2.a}</a> 
        </p>
        `
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyFooter[`${e.data.module}`](e.data.data))
})