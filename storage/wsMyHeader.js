self.addEventListener("message", (e)=>{
    console.log(e.data);
    postMessage({mensaje: `el mensaje ${e.data.nombre} obtenido`})
})