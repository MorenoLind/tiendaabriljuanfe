let cajaUsuario=document.getElementById("Usuario")
let cajaCorreo=document.getElementById("correo")
let CajaContraseña=document.getElementById("Contraseña")


//Validadon el Formulario
let boton=document.getElementById("boton")

boton.addEventListener("click",function(Evento){
    Evento.preventDefault()

   if(cajaUsuario.value==""&&CajaContraseña.value==""&&cajaCorreo.value==""){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Revisa, Tienes campos sin llenar",
      });

   }else{

    Swal.fire({
        title: "Buen Trabajo",
        text: "Bienvenido,espera un momento",
        icon: "success"
      });
    setTimeout(function(){
        window.location.href="./home.html"
       },5000)

   }
})