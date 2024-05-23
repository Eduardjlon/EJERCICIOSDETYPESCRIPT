/* EJERCICIO 5 */
function leerArchivo(nombre: string) {
    let archivo: any;

    try {
        archivo = abrirArchivo(nombre);
        // Operaciones con el archivo
        console.log(`Realizando operaciones con el archivo: ${archivo.nombre}`);
        
        // Simulamos un error para probar el bloque finally
        throw new Error("Error simulado durante la operación del archivo.");
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        } else {
            console.error('Error desconocido', error);
        }
    } finally {
        if (archivo) {
            cerrarArchivo(archivo);
        }
    }
}

// Funciones simuladas de abrir y cerrar archivos
function abrirArchivo(nombre: string) {
    console.log(`Abriendo archivo: ${nombre}`);
    return { nombre: nombre }; // Simulación de objeto de archivo
}

function cerrarArchivo(archivo: any) {
    console.log(`Cerrando archivo: ${archivo.nombre}`);
    // Realizar acciones de cierre del archivo (simulado)
}

leerArchivo("miArchivo.txt");