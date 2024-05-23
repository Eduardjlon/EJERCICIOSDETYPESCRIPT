function calcularAreaTriangulo(base: number, altura: number): number | string {
    try {
        if (base < 0 || altura < 0) {
            throw new Error("Los valores de base y altura deben positivos");
        }
        const area = (base * altura) / 2;
        return area;
    } catch (error) {
        if (error instanceof Error) {
            return `Error: ${error.message}`;
        }
        return "Error: No se pudo calcular el área del triángulo.";
    }
}

console.log(calcularAreaTriangulo(5, 10));  // Debería imprimir 25 ya que son positivos
console.log(calcularAreaTriangulo(-5, 10)); // Error ya que son negativos
console.log(calcularAreaTriangulo(-5, -10)); // Error ya que son negativos