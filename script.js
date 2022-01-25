let articulo = {
    nombre: "Caguamas",
    descripcion: "Bien frias" ,
    precio: 25,
    cantidad: 30,
    /*imagen: URL("https://blog.tacoguru.com/wp-content/uploads/2018/07/Template-Blog-No-Carrusel-4.png")*/
}

document.getElementById("tienda").innerHTML = "articulo";


let venta = {
    articulos: articulo.nombre,
    total: 25,
    ID: 1234,
    mail: "equipo6@gmail.com"
}

document.getElementById("tienda2").innerHTML = "venta";



/*
Definan 2 objetos para modelar el proceso de compra de una plataforma de comercio electrónico:

Artículo: representa el producto que se está comprando y tiene los siguientes atributos:
nombre
descripción
precio
cantidad
fotografía URL
Venta: representa una instancia de venta y tiene los siguientes atributos
artículos (lista de artículos)
total
ID del cliente
correo electrónico del cliente

Implementen los objetos Artículo y Venta usando JavaScript.
*/