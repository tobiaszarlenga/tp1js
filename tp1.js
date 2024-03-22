//1
alert("un mensaje");
//2
document.write("Hola eze no me ayude con chatgpt !!! ")
//3
document.write(3 + 5);
//4
let nU = prompt("Ingrese su nombre:");
document.write(" Hola  " + nU);
//5
let n1 = parseInt(prompt("Ingrese el primer número:"));
let n2 = parseInt(prompt("Ingrese el segundo número:"));
document.write(" La suma es: " + (n1 + n2));
//6
if (n1 > n2) {
    document.write(" El " + n1 + " es el número más grande.");
} else if (n2 > n1) {
    document.write(" El " + n2 + " es el número más grande.");
} else {
    document.write("Los números son iguales.");
}
//7
let n3 = parseInt(prompt("Ingrese el tercer número:"));

if (n1 >= n2 && n1 >= n3) {
    document.write("El " + n1 + " es el número más grande.");
} else if (n2 >= n1 && n2 >= n3) {
    document.write("El " + n2 + " es el número más grande.");
} else {
    document.write("El " + n3 + " es el número más grande.");
}
//8
let numero = parseInt(prompt("Ingrese un número:"));

if (numero % 2 === 0) {
    document.write("El " + numero + " es divisible por 2.");
} else {
    document.write("El " + numero + " no es divisible por 2.");
}
