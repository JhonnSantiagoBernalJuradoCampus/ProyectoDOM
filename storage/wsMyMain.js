export let wsMyMain = {
    listSection1(p1) {
        let plantilla = "";
        p1.forEach((val, id) => {
            plantilla = `${val.part.map((val, id) => `<h2 class="blog-post-title">${val.title}</h2> ${val.content.map((val, id) => `<pclass="blog-post-meta">${val.date}</p><p>${val.paragraph1}</p>`)}`)}`

            return plantilla
        })
    },
    listSection2(p1) {
        return `${p1.map((val, id) => `<h2 class="blog-post-title">${val.title}</h2> ${val.content.map((val, id) => `<pclass="blog-post-meta">${val.date}</p><p>${val.paragraph1}</p>`)}`)}`

    },
    listTable(p1) {
        let planTable = "";
        p1.map((val, id) => {
            `${val.table.forEach((val, id) => {
                planTable += `<tr>
                    <td>${val.server}</td>
                    <td>${val.players}</td>
                    <td>${val.ip}</td>
                </tr> <br>`
            })}`
        });
        return `
        <tr>
            <th>Server</th>
            <th>Jugadores</th>
            <th>Ip</th>
        </tr> <br>
        ${planTable}
        `
    },
    listSection3(p1) {

        let title = p1[0].title;
        let date = p1[0].date;
        let games = p1.map((val, id) => {
            return `
        ${val.paragraph1.map((val, id) => {
                return `
            <p>${val.game1}</p>
            <p>${val.game2}</p>
            <p>${val.game3}</p>
            <p>${val.game4}</p>
            `
            })}
        `});

        let plantilla = `
        <h2 class="blog-post-title">${title}</h2>
        <pclass="blog-post-meta">${date}</p>
        ${games}
        `
        return plantilla
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyMain[`${e.data.module}`](e.data.data))
})