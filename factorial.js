
const readline = require("node:readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Bienvenido a su programa para calcular el factorial de un numero");
rl.question("Ingresa un numero entero positivo: ", function (respuesta) {
    const num = Number(respuesta);
    let factorial = 1;

    if (!Number.isSafeInteger(num) || num < 0) {
        console.log("Ingresa un numero entero no negativo valido.");

    } else if (num > 100) {
        console.log("El numero ingresado no debe superar 100, ingresa un numero valido!.");

    } else {
        for (let i = 1; i <= num; i++) {
            factorial = factorial * i;
        }

        console.log("El factorial del numero " + num + " es: " + factorial);
    }

    rl.close();
});
