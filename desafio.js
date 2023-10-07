/** Developer-Casseli Layza 
* * Date-06-10-23

* * Welcome!! this is our daily challenges of JS , el cual esta destinada a evaluar los conocimientos adquiridos de Javascript.
* * Este prueba constará de 20 ejercicios
* * NOTA1: El examen es individual
* * NOTA2: Fecha límite de entrega: Miércoles 07/10/2023 - 23:59hs
* * INFORMACION SOBRE EL DESARROLLO DE LOS EJERCICIOS:
* * Algunos ejercicios no tendrán que operar con el arreglo u objeto establecido a continuación, otros sí.
* * NO MODIFICAR el arreglo y objeto definido a continuación:
* * (Los datos son ficticios. El objeto es evaluar los conocimientos/nivel en el lenguaje)
*/

const arregloFijo = [1, 3, 4, 7, 12, 18, 20, 26];
const numerosReales = [34.4552, 25.1543, 17.9438, 90.5, 67.82, 5, 9.99, 62.037];

const objetoFijo = {
  empresa: "E-Contact",
  datos: {
    empleados: 100,
    direccion: {
      calle: "Calle Córdoba",
      numero: 476,
      piso: 3,
    },
    sectores: [
      "Contabilidad",
      "Finanzas",
      "Informática",
      "Atención al público",
    ],
    sedes: {
      Chile: { telefono: 56227566262, empleados: 35 },
      Peru: { telefono: 5116358614, empleados: 25 },
      EEUU: { telefono: 17864978777, empleados: 43 },
      Ecuador: { telefono: null, empleados: 19 },
      Colombia: { telefono: 3178952449, empleados: 28 },
    },
  },
};

//? ================================= INICIO DEL DESAFIO. EXITOS A TODOS !!! =============================================================================

/**
 *? EJERCICIO 1: Crear una función la cual reciba un parámetro de tipo string con el nombre de la persona y retornar un nuevo string
 *? dependiendo del largo del nombre:
 *? Si el largo se encuentra entre 0 y 5 retornar "Es un nombre corto. Su largo es de: "
 *? Si el largo es 11 o mayor retornar "Es un nombre largo. Su largo es de: "
 *? IMPORTANTE: validar que el parámetro recibido sea un string al inicio de la función, de lo contrario, retornar "El parámetro recibido es invalido"
 *? RECORDATORIO: al leer la sentencia "return" termina la ejecución de la función.
 */

function largoDelNombre(nombre = "") {
  if (typeof nombre === "string") {
    let largo = "";
    if (nombre.length >= 0 && nombre.length <= 5) {
      largo = `Es un nombre corto. Su largo es de: ${nombre.length}`;
    }
    if (nombre.length >= 6 && nombre.length <= 10) {
      largo = `Es un nombre intermedio entre 6 y 10 de logitud. Su largo es de: ${nombre.length}`;
    }
    if (nombre.length >= 11) {
      largo = `Es un nombre largo. Su largo es de: ${nombre.length}`;
    }

    return largo;
  } else {
    console.log("El parámetro recibido es invalido");
  }
}

console.log(largoDelNombre("casseli"));
console.log(largoDelNombre("casseliLayza"));

//! =======================================================================================================================================================

/**
 *? EJERCICIO 2: Crear una función que reciba un arreglo como parámetro y cuente cuantos valores de tipo "number" se encuentran dentro de dicho arreglo
 */

function contarTipoNumber(arreglo = []) {
  let cuantosNumbers = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (typeof arreglo[i] === "number") {
      cuantosNumbers++;
    }
  }

  return `El numero de datos of number type is: ${cuantosNumbers}`;
}

let arrayResume = ["casseli", 27, true, "experiecia", 7, "años"];
console.log(contarTipoNumber(arrayResume));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 3: Crear una función que reciba un objeto como parámetro con las claves nombre, edad y altura, y retornar un string usando template literals
 *? con el siguiente formato: "Esta persona se llama XXX, tiene XXX años y su altura es de XXX"
 *? NOTA: Desestructurar los valores del objeto antes de utilizarlos
 */

function datosPersona(persona = {}) {
  let nombre = persona.nombre;
  let edad = persona.edad;
  let altura = persona.altura;

  return `Esta persona se llama ${nombre}, tiene ${edad} años y su altura es de ${altura}`;
}

let dtsPersona = { nombre: "casseli", edad: 27, altura: 1.7 };
console.log(datosPersona(dtsPersona));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 4: Crear una función que reciba 2 (dos) parámetros de tipo "number" con el inicio y fin del rango a operar. Evaluar cuántos números dentro de
 *? ese rango son "pares". Luego, retornar un string con la frase "La cantidad de números pares obtenido fue de: "
 *?
 */

function obtenerCantidadDePares(numero1, numero2) {
  let cuantosNUmerosPares = 0;
  for (let index = numero1; index <= numero2; index++) {
    if (index % 2 === 0) {
      cuantosNUmerosPares++;
    }
  }
  return `La cantidad de números pares obtenido fue de: ${cuantosNUmerosPares}`;
}

console.log(obtenerCantidadDePares(1, 10));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 5: Crear una función que reciba el "objetoFijo" definido al inicio y retornar la "cantidad" de sedes que posee.
 *? Ayuda inicial: Primero asegurarse de obtener correctamente el objeto "sedes"
 *? De ser necesario utilizar un "contador" (no es obligatorio para su resolución)
 *? Recordar el método "Object.keys(nombreDelObjeto)" nos devuelve un arreglo de strings con los claves del objeto.
 *?
 */

function obtenerCantidadDeSedes(econtact = {}) {
  let objetoSedes = econtact.datos.sedes;
  console.log(objetoSedes);
  const arraySedes = Object.keys(objetoSedes);
  console.log(arraySedes);
  return `Cantidad de sedes que posee econtact es ${arraySedes.length}`;
}

console.log(obtenerCantidadDeSedes(objetoFijo));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 6: Crear una función que reciba el "objetoFijo" definido al inicio y retornar el teléfono de "Peru".
 *? Validar al inicio de la función si el teléfono de Perú existe. Caso contrario retornar un string que diga "Perú no tiene asignado un teléfono"
 */

function obtenerTelefonoPeru(econtact = {}) {
  let objetoSedes = econtact.datos.sedes;

  const objetoSedePeru = objetoSedes.Peru;

  if (
    objetoSedePeru.telefono !== undefined &&
    objetoSedePeru.telefono !== 0 &&
    objetoSedePeru.telefono !== null
  ) {
    const arraykeysPeru = Object.keys(objetoSedePeru);

    for (let i = 0; i < arraykeysPeru.length; i++) {
      if (arraykeysPeru[i] === "telefono") {
        return `El teléfono de "Peru" es ${objetoSedePeru.telefono}`;
      }
    }
  } else {
    return `Perú no tiene asignado un teléfono`;
  }
}

console.log(obtenerTelefonoPeru(objetoFijo));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 7: Crear una función que reciba el "objetoFijo" definido al inicio y retornar la cantidad de paises que cuentan con telefono asignado
 *?
 */

function obtenerPaisesConTelefono(econtact = {}) {
  const objetoSedes = econtact.datos.sedes;
  let numeroDeSedesContelefono = 0;
  const arrayValuessSedes = Object.values(objetoSedes);

  for (let i = 0; i < arrayValuessSedes.length; i++) {
    if (
      arrayValuessSedes[i].telefono !== null &&
      arrayValuessSedes[i].telefono !== 0 &&
      arrayValuessSedes[i].telefono !== undefined
    ) {
      numeroDeSedesContelefono++;
    }
  }

  return `la cantidad de paises que cuentan con telefono asignado es =>> ${numeroDeSedesContelefono}`;
}

console.log(obtenerPaisesConTelefono(objetoFijo));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 8: Crear una función que reciba 3 (tres) parámetros: uno de tipo "string" con la operación matemática a realizar,
 *? un segundo y tercer parámetro ambos de tipo number. Dependiendo de ello realizar la operación correspondiente y retornar el resultado de esa operación.
 *? Los valores permitidos a recibir son:
 *? "+"
 *? "-"
 *? "*"
 *? "/"
 *? En caso contrario, retornar un string con la frase "La operación matemática que intenta realizar es inexistente"
 */

function calculoMatematico(operacion, numero1, numero2) {
  let resultadoOperacion = 0;
  switch (operacion) {
    case "+":
      resultadoOperacion = numero1 + numero2;
      break;
    case "-":
      resultadoOperacion = numero1 - numero2;
      break;
    case "*":
      resultadoOperacion = numero1 * numero2;
      break;
    case "/":
      resultadoOperacion = numero1 / numero2;
      break;

    default:
      return "La operación matemática que intenta realizar es inexistente";
  }
  return resultadoOperacion;
}

console.log(calculoMatematico("*", 2, 4));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 9: Crear una función que reciba un número como parámetro y, a partir de ahi, ir agregando ese mismo valor y los siguientes a un arreglo hasta que
 *? el número a ser evaluado sea igual al doble de ese número recibido como parámetro
 *? Validar al inicio de la función que el número sea positivo. De lo contrario retornar la frase "El número ingresado debe ser mayor a 0"
 *? Ayuda: usar ciclo while y recordar el método "push" para ir agregando valores al arreglo
 */

function cargarArreglo(numero) {
  if (numero > 0) {
    const arregloaCargar = [];
    let dobleNumeroIngresado = 2 * numero;

    while (numero <= dobleNumeroIngresado) {
      arregloaCargar.push(numero);

      numero++;
    }

    return arregloaCargar;
  } else {
    return "El número ingresado debe ser mayor a 0";
  }
}

console.log(cargarArreglo(2));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 10: Crear una función que reciba un arreglo de números como parámetro y calcule cuántos de esos números son divisibles por 5.
 *? La función debe retornar la cantidad de números divisibles por 5.
 *?  Ayuda: Usar el operador módulo (o resto) "%"
 */

function divisiblesPorCinco(numeros = []) {
  let cuantosNUmerosDivisibles = 0;

  for (let index = 0; index <= numeros.length; index++) {
    if (numeros[index] % 5 === 0) {
      cuantosNUmerosDivisibles++;
    }
  }
  return `La cantidad de números divisibles por 5 obtenida fue de: ${cuantosNUmerosDivisibles}`;
}

console.log(divisiblesPorCinco(arregloFijo));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 11: Crear una función que reciba un arreglo de números y realice la sumatoria de los mismos.
 *? La función debe retornar la sumatoria de esos números.
 *?
 */

function sumatoria(numeros = []) {
  let sumatoriaArray = 0;

  for (let index = 0; index < numeros.length; index++) {
    sumatoriaArray += numeros[index];
  }

  return `La cantidad de la sumatoria obtenida fue de: ${sumatoriaArray}`;
}

console.log(sumatoria(arregloFijo));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 12: Crear una función que reciba el "objetoFijo" definido al inicio y verificar si la cantidad total de empleados de E-Contact indicada (100) es igual
 *? a la sumatoria de los empleados de las sedes.
 *? La función debe retornar True si son iguales, o False en caso de no ser iguales
 */

function verificarCantidadEmpleadosPorSede(econtact = {}) {
  const arrayValuesSedes = Object.values(econtact.datos.sedes);
  let sumatoriaDeEmpleadosEcontact = 0;

  for (let index = 0; index < arrayValuesSedes.length; index++) {
    sumatoriaDeEmpleadosEcontact += arrayValuesSedes[index].empleados;
  }

  if (econtact.datos.empleados === sumatoriaDeEmpleadosEcontact) {
    return (
      true +
      `, La cantidad de empleados econtact general es ${econtact.datos.empleados} y cantidad de empleados econtact por sede ${sumatoriaDeEmpleadosEcontact}`
    );
  } else {
    return (
      false +
      `, La cantidad de empleados econtact general es ${econtact.datos.empleados} y cantidad de empleados econtact por sede ${sumatoriaDeEmpleadosEcontact}`
    );
  }
}

console.log(verificarCantidadEmpleadosPorSede(objetoFijo));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 13: Crear una función que retorne un nuevo arreglo con el cuadrado de cada número del "arregloFijo" definido al inicio
 *? Ayuda: para calcular el cuadrado de un número podemos usar la expresión "**" o la clase "Math" con su método "pow". Ver ejemplos a continuación:
 *? Ejemplo de 3 al cuadrado:
 *? console.log(3 ** 2)
 *? Ejemplo de 5 al cuadrado:
 *? console.log(Math.pow(5, 2))
 */

function calcularCuadrados(arreglo = []) {
  if (arreglo.length > 0) {
    const arrayNumerosAlCuadrado = [];
    let numerosalCuadrado = 0;

    for (let index = 0; index < arreglo.length; index++) {
      numerosalCuadrado = Math.pow(arreglo[index], 2);
      arrayNumerosAlCuadrado.push(numerosalCuadrado);
    }

    return (
      `El nuevo arreglo con elementos al cuadrado es:\n` +
      arrayNumerosAlCuadrado
    );
  } else {
    return `No se ingreso un arreglo con valores`;
  }
}

console.log(calcularCuadrados(arregloFijo));
console.log(calcularCuadrados());
//! =======================================================================================================================================================

/**
 *? EJERCICIO 14: Crear una función que reciba como parámetro un arreglo de 6 (seis) números como mínimo y realizar la sumatoria de los mismos.
 *? Si la sumatoria supera un valor de 100 retornar True.
 *? Caso contrario retornar False.
 *? Validar al inicio de la función que el arreglo cuente con la condición establecida. Si no cumple la misma, retornar False
 */

function validarArreglo(numeros = []) {
  if (numeros.length >= 6) {
    let sumatoriaArray = 0;

    for (let index = 0; index < numeros.length; index++) {
      sumatoriaArray += numeros[index];
    }

    let mayorQueCien = sumatoriaArray > 100 ? true : false;
    return mayorQueCien;
  } else {
    return false;
  }
}

console.log(validarArreglo(arregloFijo));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 15: Crear una función que reciba dos parámetros: un arreglo de strings con diferentes nombres, y un segundo parámetro con un nombre (string) cualquiera.
 *? La función debe retornar True si en ese arreglo se encuentra el nombre pasado como segundo parámetro. Caso contrario retornar False.
 *? Recordar que Javascript es "Case Sensitive", es decir, distingue entre mayúsculas y minúsculas.
 */

function validarNombre(nombres = [], nombre) {
  if (typeof nombres === "object") {
    if (typeof nombre === "string") {
      let nombreEncontrado = "";
      for (let index = 0; index < nombres.length; index++) {
        if (nombre === nombres[index]) {
          nombreEncontrado = nombres[index];
        }
      }

      let resoult = nombreEncontrado ? true : false;
      return resoult;
    } else {
      return `Ingrese un string como segundo parametro`;
    }
  } else {
    return `Ingrese un array como primer parametro`;
  }
}

let arrayNombres = ["Casseli", "Pepe", "Maria", "Alexandra", "Irene"];
console.log(validarNombre(arrayNombres, "Casseli"));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 16: Crear una función que reciba 2 (dos) parámetros: un arreglo de números y número. La función debe retornar la posición de ese valor en el arreglo
 */

function devolverPosicion(numeros = [], numero) {
  if (numeros.indexOf(numero) !== -1) {
    let indiceDelElemento = numeros.indexOf(numero);

    return indiceDelElemento;
  } else {
    return `El segundo parametro ingresado ${numero}, no se encuentra dentro de los valores: ${numeros} del primer parametro ingresado`;
  }
}

console.log(devolverPosicion(arregloFijo, 7));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 17: Crear una función que reciba 2 (dos) parámetros: el "objetoFijo" definido al inicio y un string. Retornar True si el segundo parámetro se encuentra
 *? dentro de los sectores de E-Contact. Caso contrario, retornar False
 */

function verificarSector(econtact = {}, sector) {
  const sectoresEcontact = econtact.datos.sectores;

  console.log(
    `El sector '${sector}' se encuentra dentro de los sectores: '${sectoresEcontact}' de eContact? La respuesta es:`
  );

  let sectorEncontrado = false;

  for (let index = 0; index < sectoresEcontact.length; index++) {
    if (sector === sectoresEcontact[index]) {
      sectorEncontrado = true;
    }
  }

  return sectorEncontrado;
}

console.log(verificarSector(objetoFijo, "Finanzas"));
console.log(verificarSector(objetoFijo, "Finanzasaaaaa"));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 18: Crear una función que reciba 2 (dos) parámetros: el "objetoFijo" definido al inicio y un número (cantidad de empleados).
 *? La función debe retornar la cantidad de sedes que tengan una cantidad de empleados menor a la cantidad establecida como segundo parámetro.
 */

function verificarCantidadEmpleados(econtact = {}, cantidad) {
  const arrayValuesSedes = Object.values(econtact.datos.sedes);
  let cantidadDeSedesConMenosEmpleados = 0;

  for (let index = 0; index < arrayValuesSedes.length; index++) {
    if (arrayValuesSedes[index].empleados < cantidad) {
      cantidadDeSedesConMenosEmpleados++;
    }
  }

  if (cantidadDeSedesConMenosEmpleados > 0) {
    return `La cantidad de sedes que tienen menos de ${cantidad} empleados es: ==>> ${cantidadDeSedesConMenosEmpleados}`;
  } else {
    return `No existe sedes de e-Contact que tengan una cantidad de empleados menor a ${cantidad}`;
  }
}

console.log(verificarCantidadEmpleados(objetoFijo, 100));
console.log(verificarCantidadEmpleados(objetoFijo, 10));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 19: Crear una función que reciba 2 (dos) parámetros: un objeto y un string (clave a verificar). Si el objeto cuenta con la clave que se solicita
 *? como segundo parámetro, retornar True. Caso contrario retornar False.
 *? Ejemplo: El siguiente objeto cuenta con las claves nombre, edad y profesion. PERO no cuenta con la clave "altura" por ejemplo.
 *? const alumno = { nombre: 'Juan', edad: 35, profesion: 'programador' }
 *?
 */

function verificarClave(objeto = {}, clave) {
  const ArrayClaves = Object.keys(objeto);
  console.log(ArrayClaves);

  let claveEncontrada = "";

  for (let index = 0; index < ArrayClaves.length; index++) {
    if (clave === ArrayClaves[index]) {
      claveEncontrada = ArrayClaves[index];
    }
  }

  if (claveEncontrada.length > 0) {
    return true;
  } else {
    return false;
  }
}

const alumno = { nombre: "Juan", edad: 35, profesion: "programador" };
console.log(verificarClave(alumno, "profesion"));
console.log(verificarClave(alumno, "altura"));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 20: Crear una función que reciba un arreglo de numeros reales y retornar un nuevo arreglo con los mismos numeros pero quitando su parte decimal.
 *? Recordatorio: al inicio hay un arreglo de numeros reales como ejemplo.
 */

function quitarParteDecimal(arregloNumerosReales = []) {
  const arrayNumerosEnteros = [];

  for (let index = 0; index < arregloNumerosReales.length; index++) {
    let numeroEntero = Math.trunc(arregloNumerosReales[index]);

    arrayNumerosEnteros.push(numeroEntero);
  }

  if (arrayNumerosEnteros.length > 0) {
    return `El nuevo arreglo sin parte decimal es:\n${arrayNumerosEnteros}`;
  } else {
    return `No se ingreso un arreglo`;
  }
}

console.log(quitarParteDecimal(numerosReales));
console.log(quitarParteDecimal());
