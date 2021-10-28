
let form = document.getElementById("form");

form.addEventListener("submit", e =>{
    e.preventDefault();
    
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let errores = []

    if(!email){
        errores.push("No hay email")
    }

    if(!password){
        errores.push("No hay password")
    }

    if(errores.length > 0){
        alert("Completá todos los campos")
    }else{
        alert("Hola!")
    }
    


})