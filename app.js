document.write("<h1> Clase 2 javaScript<h1/>")
// comentarios para una linea

let nombreVariable 

let arrayNombres=["Ana","Carlos","Felipe"]

let objetoDatos={
    nombre:"Ana",
    edad:12,
    notas:[4.5,6.8,6.6]
}

console.log(arrayNombres)
console.log(objetoDatos)

// MOSTRAR LOS PRIMEROS NUMEROS POSITIVOS

// ciclo while

let cont=1
while(cont<=10){
    console.log(cont)
    cont=cont+1

}
for(let i=1;1<=10;i++){
    console.log(i)
}

// funciones

function saludo(){
    console.log("hola")
}

// funciones con parametros

function saludoParametro(nombre){
    console.log("hola"+ nombre)
}
saludoParametro("Juan")
saludoParametro(1)

// crear una funcion que retorne si un numero es par o impar

