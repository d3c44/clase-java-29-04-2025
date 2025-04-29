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
for(let i=1;i<=10;i++){
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
// numero es par o impar
// numero %2==0

function parImpar (numero){
    if (numero%2==0){
        console.log("numero Par")
    }
    else {
        console.log("Numero impar")

    }
}
//Ejemplo numero
parImpar()


//Crear una funcion que obtenga 
// si el nuemero almacenado en un 
// arreglo es par o impar ademas 
// cuantos pares e impares
 
let arrayNum=[12,54,65,98,65,32,4587,12,54,232]
function parImpar (numero){
    if (numero%2==0){
      return true
    }
    else {
     return false

    }
}
let contP=0,contI=0
for (let i=0;i<arrayNum.length;i++){
    if(parImpar(arrayNum[i])){
        contP++;
    }
    else{
        contI++;
    }
}

console.log("numeros Par= ",contP)
console.log("Numeros impar= ",contI)


//crear un arreglo con 20 numeros pares

let arrayNuevo=[]
for(let i=0;i<=20;i++){
    arrayNuevo.push(i*2)
}
console.log(arrayNuevo)
//  crear un arreglo con 5 elementos 
// muestre ordenados de forma ascendente

let array5numeros=[5,3,1,2,4]
function ordenar(arreglo){
    return  arreglo.sort((a,b)=> a-b);
}
const ordenado = ordenar(array5numeros);
console.log(array5numeros)

// lo mismo pero al reves

let arraycorto=[5,3,1,2,4]
function ordenario(arreglo){
    return  arreglo.sort((a,b)=> b-a);
}
const ordenad1 = ordenario(arraycorto);
console.log(arraycorto)


// sumar en un arreglo


let edades=[32,54,21]
 let suma=0
edades.forEach(funsuma) 

function funsuma(item){
suma+=item
}
console.log("la suma es", suma)

/// crear un arreglo con los nombres de 5 alumnos 
// y un arreglo con las notas 
// Mostrar el nombre y la nota con la nota mayor
const alumnos = [
    { nombre: 'Juan', nota: 85 },
    { nombre: 'Ana', nota: 92 },
    { nombre: 'Pedro', nota: 78 },
    { nombre: 'Laura', nota: 95 }
  ];
  
  // Usamos reduce para encontrar el alumno con la mayor nota
  const alumnoConMayorNota = alumnos.reduce((max, alumno) => {
    return alumno.nota > max.nota ? alumno : max;
  });
  
  console.log(`El alumno con la mayor nota es ${alumnoConMayorNota.nombre} con una nota de ${alumnoConMayorNota.nota}`);
  