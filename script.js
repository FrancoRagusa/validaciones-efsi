const ValidarNumero = (e)=> {
    if(parseInt(e.target.value) > 10 || parseInt(e.target.value) < 0) {
        console.log(e.target)
        e.target.style.backgroundColor = "red"
    } else{
        e.target.style.backgroundColor = "green"
    }
}
const ComprobarDatos = (inputs) => {
    let retornar = true
    inputs.forEach(element => {
       if (!element.value || parseInt(element.value) >10 || parseInt(element.value) <0) {
        alert("Dato Incorrecto De " + element.placeholder)
        retornar = false
       } 
    });
    return retornar
}
let inputs = document.querySelectorAll("input")
const Promedio = ()=> {
    let promedio = 0
    inputs.forEach(element => {
        promedio+=  parseInt(element.value)
    });
    if(ComprobarDatos(inputs)) {
        valor = document.getElementById("Valor")
        promedio = promedio/3
        valor.textContent = promedio
        let imagen = document.getElementById("imagen")
        if(promedio>=6) {
            imagen.src = imagenes[0]
            valor.style.color = "green"
        } else {
            imagen.src = imagenes[1]
            valor.style.color = "red"
        }
    }
    
}
const Mayor = ()=> {
    let mayor = -1
    let mayorN = ""
    let continuar = true
    inputs.forEach(element => {
        if (parseInt(element.value) >= mayor) {
            if(parseInt(element.value) == mayor) {
                mayorN = mayorN + " " + element.placeholder 
            } else {
                mayorN = element.placeholder
            }
            mayor = parseInt(element.value)
        }
    });
    if(ComprobarDatos(inputs)) {
        valor = document.getElementById("Valor")
        valor.style.color = "blue"
        
        valor.textContent = mayorN
    }
    
}