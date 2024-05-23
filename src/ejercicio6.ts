/* EJERCICIO 6 */
function evaluarExpresionUnPocoMasCompleja(x: number): number {
    try {
        // Calculamos x + 3
        const suma = x + 3;

        // Multiplicamos (x + 3) por 2
        const resultado = suma * 2;

        return resultado;
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error en evaluarExpresionUnPocoMasCompleja: ${error.message}`);
        } else {
            console.error('Error desconocido en evaluarExpresionUnPocoMasCompleja', error);
        }
        throw error; // Propagar el error a la función llamante
    }
}

function ejecutarOperacionUnPocoMasCompleja(x: number) {
    try {
        const resultado = evaluarExpresionUnPocoMasCompleja(x);
        console.log(`Resultado de la evaluación de la expresión un poco más compleja: ${resultado}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error en ejecutarOperacionUnPocoMasCompleja: ${error.message}`);
        } else {
            console.error('Error desconocido en ejecutarOperacionUnPocoMasCompleja', error);
        }
    }
}

// Ejemplo de uso: X= X+3x2
ejecutarOperacionUnPocoMasCompleja(-80); //Colocamos el valor asignado a X