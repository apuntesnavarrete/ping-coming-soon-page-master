let ingreso = document.getElementById("correo")
let parrafo_error = document.getElementsByClassName("form_error")[0]

const expresiones = {
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

ingreso.addEventListener("keyup",(e)=>{
    let texto = e.target.value
    console.log(texto)
    if (expresiones.correo.test(texto)){
        parrafo_error.style.display="none";
        } else{
        parrafo_error.style.display="block";
    }
    
}
)