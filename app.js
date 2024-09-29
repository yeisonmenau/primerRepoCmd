let a = parseFloat(prompt("Escribe el valor de a:")); 
let b = parseFloat(prompt("Escribe el valor de b:"));
let c = parseFloat(prompt("Escribe el valor de c:"));

let discriminante = (b * b) - (4 * a * c);

if (discriminante < 0) {
    alert("No hay soluciones reales.");
} else if (discriminante === 0) {
    let solucionUnica = -b / (2 * a);
    alert("Su única solución es: " + solucionUnica);
} else {
    let solucion1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    let solucion2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    alert("Tiene dos soluciones, y son: " + solucion1 + " y " + solucion2);
}

