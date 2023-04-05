//declaracion de variables
let precio = 0;
let cantidad = 0;
let nombre;
let direccion;
let x = 0;

//objetos
let producto1 ={
  tipo: 'Estandar',
  vale: 450
}

let producto2 ={
  tipo: 'Light',
  vale: 400
}

let producto3 ={
  tipo: 'Guarnición',
  vale: 200
}

//declaracion de funciones
//funcion de pedido de nombre
function ident(){
  nombre = prompt ("Bienvenido! Ingresa tu nombre:");
}

//funcion de pedido de direccion
function address(){
  direccion = prompt ("Ingresa la dirección de envío:");
}

//funcion de acumulacion de precios
function price(producto){
    switch (producto) {
        case "1":
          precio = precio + (cantidad * producto1.vale);
          break;
        case "2":
          precio = precio + (cantidad * producto2.vale);
          break;
        case "3":
          precio = precio + (cantidad * producto3.vale);
          break;
        default:
          alert("Usted ingresó una opción no válida");
          break;
    }
    return(precio);
    }

//funcion de indicacion de cantidades
function amount(producto){
    switch (producto) {
        case "1":
          cantidad = prompt ("Ingresa la cantidad:");
          break;
        case "2":
          cantidad = prompt ("Ingresa la cantidad:");
          break;
        case "3":
          cantidad = prompt ("Ingresa la cantidad:");
          break;
    }
}

//funcion de validacion de caracteres
function validname(nombre) {
    let name = nombre.toUpperCase();
    if(!/^[ABCDEFGHIJKLMNOPQRSTUVWXYZÑÁÉÍÓÚ ]+$/.test(name)){
      console.log("Nombre no válido");
      alert("El nombre ingresado sólo debe contener letras")
      x = 0;
    }else{
      console.log("Nombre aceptado");
      x = 1;
      }
}

//recopilacion de datos
function user(identif,direc){
  this.identif = nombre;
  this.direc = direccion;
}

//desarrollo
do{  
ident();
validname(nombre);
console.log(x);
}while(x == 0);
address();
let user1 = new user(nombre,direccion);
console.log(user1.identif);
console.log(user1.direc);

let producto = prompt("Elige la opción de tus viandas: \n1-" + producto1.tipo + "\n2-" + producto2.tipo + "\n3-" + producto3.tipo);

amount(producto);

price(producto);

let continuar = prompt ("Desea agregar algún otro producto a su pedido?: \nSI \nNO");

while ((continuar == "SI") || (continuar == "si")){
  producto = prompt("Elige la opción de tus viandas: \n1-Estandar \n2-Light \n3-Guarnicion");
  amount(producto);
  price(producto);
  continuar = prompt ("Desea agregar algún otro producto a su pedido?: \nSI \nNO");
}
  alert ("Gracias" + " " + user1.identif + ". " + "El total de tu pedido es:" + " " + precio);

