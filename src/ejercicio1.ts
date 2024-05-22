function numberToString(input: any): string {
    const units = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    const teens = ["diez", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve"];
    const tens = ["", "", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
    const hundreds = ["", "cien", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];

    function convertToWords(number: number): string {
        if (number < 10) return units[number];
        if (number < 20) return teens[number - 10];
        if (number < 100) {
            if (number % 10 === 0) return tens[Math.floor(number / 10)];
            return tens[Math.floor(number / 10)] + " y " + units[number % 10];
        }
        if (number < 200) {
            if (number === 100) return "cien";
            return "ciento " + convertToWords(number - 100);
        }
        if (number < 1000) {
            if (number % 100 === 0) return hundreds[Math.floor(number / 100)];
            return hundreds[Math.floor(number / 100)] + " " + convertToWords(number % 100);
        }
        throw new Error("El número es demasiado grande para convertirlo");
    }

    try {
        const number = parseInt(input, 10);
        if (isNaN(number) || number < 0 || number > 999) {
            throw new Error("El argumento no es un número válido (debe estar entre 0 y 999)");
        }
        return convertToWords(number);
    } catch (error) {
        if (error instanceof Error) {
            return `Error: ${error.message}`;
        }
        return "Error: El argumento no es un número válido";
    }
}

console.log("Solo podemos usar números del 0 al 999");

console.log(numberToString("100"));     
console.log(numberToString("1000"));     
console.log(numberToString("ESTE NO FUNCIONA TAMPOCO DEBIDO A QUE ES TEXTO"));