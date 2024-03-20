let x = 10;
let y = 20;

[y , x] = [x , y];
console.log(`x: ${x}`);
console.log(`y: ${y}`);

/**
 *  Desestructuración 
 *  La desestructuración en JavaScript es una característica 
 *  que te permite extraer datos de arrays y objetos 
 *  de manera más conveniente y legible, 
 *  asignándolos a variables individuales.  
 */ //====================================================
/* const lastName = ["Islas", "Pardo", "Elizondo", "Gavia"];
const [giss,    , eric] = lastName;
console.log( giss ); // Islas
console.log( eric ); // Elizondo */
//====================================================
// Desestructuración de objetos
/* const datosFer = {
    name: "Fernando",
    lastName: "Cervantes",
    age: 20
}
const { age , lastName:apellido } = datosFer;
console.log("edad: " + age );
console.log("apellido: " + apellido ); */
//====================================================
const product = {
    name: "Jabón Zote",
    precio: {
        frontera: 10,
        zonaCentro: 20 
    },
    color: "blanco"
}
// Obtener el color del jabón zote, que se llame la variable "tipo"
const {color:tipo , precio: {zonaCentro : centro} } = product;
console.log(tipo);
console.log(centro);