export let wsMyMain = {
    listSection(p1){
        let plantilla = ""
        
        p1.forEach((val,id) => {
            
            
            plantilla += `
            <h2 class="blog-post-title">${val.titulo}</h2>
            <p class="blog-post-meta">${val.content.date}</p>
            <p>${val.content.paragraph}</p>`
        })
        return plantilla
    },
    listTable(p1){
        let planTable = "";
        p1.forEach((val,id) =>{
            planTable += `<tr">
                <td>${val.paises}</td>
                <td>${val.participacion}</td>
                <td>${val.mundiales}</td>
            </tr> <br>` 
        })
        return (`
        <tr>
            <th>Paises</th>
            <th>Participacion</th>
            <th>Mundiales</th>
        </tr> <br>
        ${planTable}
        `)   
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyMain[`${e.data.module}`](e.data.data))
})