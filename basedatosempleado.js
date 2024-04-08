let empleados=Array(
    {
        id:1,
        nombre:"linda moreno",
        cargo:"jefe",
        telefono:"3107332176",
        correo:"lindakaterinemoreno@gmail.com",
        salario:1000000,
        contactoemergencia:"3126230128",
        foto:"./img/persona 1.jpg"
    },
    {
        id:2,
        nombre:"Rihana",
        cargo:"Probadora de productos",
        telefono:"3107332176",
        correo:"lindakaterinemoreno@gmail.com",
        salario:60000000,
        contactoemergencia:"3126230128",
        foto:"./img/persona 9.jpg"

    },
    {
        id:3,
        nombre:"Rosa Moreno",
        cargo:"Probadora de productos",
        telefono:"3107332176",
        correo:"lindakaterinemoreno@gmail.com",
        salario:50000000,
        contactoemergencia:"3126230128",
        foto:"./img/persona 2.jpg"

    },
    {
        id:4,
        nombre:"marily hernandez",
        cargo:"Probadora de productos",
        telefono:"3107332176",
        correo:"lindakaterinemoreno@gmail.com",
        salario:90000000,
        contactoemergencia:"3126230128",
        foto:"./img/persona 4.jpg"
    },
    {
        id:5,
        nombre:"snoo doog",
        cargo:"Probadora de productos",
        telefono:"3107332176",
        correo:"lindakaterinemoreno@gmail.com",
        salario:10000000,
        contactoemergencia:"3126230128",
        foto:"./img/persona 5.jpg"
    },
    {
        id:6,
        nombre:"celeste mendez",
        cargo:"Probadora de productos",
        telefono:"3107332176",
        correo:"lindakaterinemoreno@gmail.com",
        salario:50000000,
        contactoemergencia:"3126230128",
        foto:"./img/persona 6.jpg"
    },
    {
        id:7,
        nombre:"keily gener",
        cargo:"Probadora de productos",
        telefono:"3107332176",
        correo:"lindakaterinemoreno@gmail.com",
        salario:40000000,
        contactoemergencia:"3126230128",
        foto:"./img/persona 7.jpg"
    },
    {
        id:8,
        nombre:"rossana de warrior",
        cargo:"Probadora de productos",
        telefono:"3107332176",
        correo:"lindakaterinemoreno@gmail.com",
        salario:60000000,
        contactoemergencia:"3126230128",
        foto:"./img/persona 8.jpg"
    },
    {
        id:9,
        nombre:"briller blu",
        cargo:"Probadora de productos",
        telefono:"3107332176",
        correo:"lindakaterinemoreno@gmail.com",
        salario:30000000,
        contactoemergencia:"3126230128",
        foto:"./img/persona 10.jpg"
    },
    {
        id:10,
        nombre:"La roca",
        cargo:"Probadora de productos",
        telefono:"3107332176",
        correo:"lindakaterinemoreno@gmail.com",
        salario:80000000,
        contactoemergencia:"3126230128",
        foto:"./img/persona 11.jpg"
    },
    {
        id:11,
        nombre:"celia cruz",
        cargo:"Probadora de productos",
        telefono:"3107332176",
        correo:"lindakaterinemoreno@gmail.com",
        salario:90000000,
        contactoemergencia:"3126230128",
        foto:"./img/persona 12.jpg"
    },
    {
        id:1,
        nombre:"Cristiano ronaldo",
        cargo:"Probadora de productos",
        telefono:"3107332176",
        correo:"lindakaterinemoreno@gmail.com",
        salario:40000000,
        contactoemergencia:"3126230128",
        foto:"./img/persona 13.jpg"
    },
    {
        id:12,
        nombre:"Nataly humaña",
        cargo:"Probadora de productos",
        telefono:"3107332176",
        correo:"lindakaterinemoreno@gmail.com",
        salario:30000000,
        contactoemergencia:"3126230128",
        foto:"./img/persona 14.jpg"
    },
    {
        id:13,
        nombre:"La segura",
        cargo:"Probadora de productos",
        telefono:"3107332176",
        correo:"lindakaterinemoreno@gmail.com",
        salario:60000000,
        contactoemergencia:"3126230128",
        foto:"./img/persona 15.jpg"
    },
    {
        id:14,
        nombre:"mike jason",
        cargo:"Probadora de productos",
        telefono:"3107332176",
        correo:"lindakaterinemoreno@gmail.com",
        salario:70000000,
        contactoemergencia:"3126230128",
        foto:"./img/persona 16.jpg"
    },
    {
        id:15,
        nombre:"Dayana Borja",
        cargo:"Probadora de productos",
        telefono:"3107332176",
        correo:"lindakaterinemoreno@gmail.com",
        salario:50000000,
        contactoemergencia:"3126230128",
        foto:"./img/persona 17.jpg"
    },
    {
        id:16,
        nombre:"riki martin",
        cargo:"Probadora de productos",
        telefono:"3107332176",
        correo:"lindakaterinemoreno@gmail.com",
        salario:20000000,
        contactoemergencia:"3126230128",
        foto:"./img/persona 18.jpg"
    },
    {
        id:17,
        nombre:"Karen sevillano",
        cargo:"Probadora de productos",
        telefono:"3107332176",
        correo:"lindakaterinemoreno@gmail.com",
        salario:40000000,
        contactoemergencia:"3126230128",
        foto:"./img/persona 19.jpg"
    },
    {
        id:18,
        nombre:"shakira",
        cargo:"Probadora de productos",
        telefono:"3107332176",
        correo:"lindakaterinemoreno@gmail.com",
        salario:30000000,
        contactoemergencia:"3126230128",
        foto:"./img/persona 20.jpg"
    },
    {
        id:20,
        nombre:"Reina isabel segunda",
        cargo:"Probadora de productos",
        telefono:"3107332176",
        correo:"lindakaterinemoreno@gmail.com",
        salario:50000000,
        contactoemergencia:"3126230128",
        foto:"./img/persona 21.jpg"
    }

)

    //creando una referencia al contenedor de empleados

    let contenedor=document.getElementById("contenedor")

    //pasos para crear una lista dinamica de elementos

    //1.debo recorrer la base de datos del problema
    empleados.forEach(function(empleado){
        console.log(empleado)


        let columna=document.createElement("div")
        columna.classList.add("col")




        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","shadow")




        let foto=document.createElement("img")
        foto.classList.add("img-fluid","mx-auto","d-block")
        foto.src=empleado.foto


        let nombre=document.createElement("h3")
        nombre.textContent=empleado.nombre


        let cargo=document.createElement("h3")
        cargo.textContent=empleado.cargo


        let telefono=document.createElement("h3")
        telefono.textContent=empleado.telefono


        let correo=document.createElement("h3")
        correo.textContent=empleado.correo


        let salario=document.createElement("h3")
        salario.textContent=empleado.salario


        //se asocian las estructuras en orden logico
        tarjeta.appendChild(foto)
        tarjeta.appendChild(nombre)
        columna.appendChild(tarjeta)
        contenedor.appendChild(columna)
        tarjeta.appendChild(cargo)
        tarjeta.appendChild(telefono)
        tarjeta.appendChild(correo)
        tarjeta.appendChild(salario)
    })






