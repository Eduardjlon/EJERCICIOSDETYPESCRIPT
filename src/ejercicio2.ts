function getElementAtPosition(array: any[], position: number): any {
    try {
        if (position < 0 || position >= array.length) {
            throw new Error("La posición no es válida. Debe estar entre 0 y " + (array.length - 1));
        }
        return array[position];
    } catch (error) {
        if (error instanceof Error) {
            return `Error: ${error.message}`;
        }
        return "Error: No se pudo obtener el elemento en la posición especificada";
    }
}

// Ejemplo de uso:
const miArray = ["a", "b", "c", "d", "e"];

console.log(getElementAtPosition(miArray, 0)); // Acá tirara el arreglo posicion 2 que es C
console.log(getElementAtPosition(miArray, 80)); // Acá tirara error ya que no hay arreglo en el 80
