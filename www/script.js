// -------------------------------------------------------
// PREAMBULO

// El premabulo tiene como cometido la identificación de la autoría del trabajo
// El nombre será mostrada en el elemento HTML #equipo de la página web
// Cada equipo debe actualizar la constante con su nombre de equipo

const nombreDelEquipoDeLaboratorio = "XXXXXXXXX";
document.getElementById("equipo").innerHTML = nombreDelEquipoDeLaboratorio;

// -------------------------------------------------------
// ACTIVIDAD MECANOGRAFÍA

// La actividad consiste en desarrollar una aplicación para testar la
// velocidad en mecanografía.
// Incluye dos botones: Comenzar y Detener.

// Comenzar: Empieza un nuevo test de velocidad, de manera que se
// muestran palabras en un panel de palabras de muestra que deben ser
// escritas en el panel de entrada reservado para ello.
// Cada vez que se completa correctamente una palabra:
//      - se incrementa el contador de palabras correctas
//       - y se genera una nueva palabra de muestra.
// El marcador refleja el tiempo en segundos transcurrido desde
// el comienzo del test.

// Detener: Concluye el test, lo que implica que no se generan
// más palabras de muestra y se detiene el conteo de tiempo.

// Para calcular los segundos empleados en mecanografíar las
// palabras, se hará uso de un temporizador.
// Los temporizadores permiten ejecutar una función cada cierto intervalo de tiempo
// y son identificados (pueden definirse varios) con un entero no negativo
// La construcción se basa en una variable (de identificación) y dos funciones: setInterval y clearInterval
//              idetificadorTemporizador = setInterval(unaFuncion,1000)
//              clearInterval(idetificadoTemporizador)
//
// https://developer.mozilla.org/en-US/docs/Web/API/setInterval
// https://developer.mozilla.org/en-US/docs/Web/API/clearInterval

// Para gestionar el texto escrito en el panel de entrada
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event

// -------------------------------------------------------
//  VARIABLES

// Variables de acceso a elementos HTML interactivos

const comienzo = document.getElementById("comienzo");
const detencion = document.getElementById("detencion");
const entrada = document.getElementById("entrada");

comienzo.addEventListener("click", comenzarTestDeVelocidad);
detencion.addEventListener("click", ___detenerTestDeVelocidad);
entrada.addEventListener("input", (e) => ___comprobarPalabraMecanografiada(e.target.value));

//  Variables de acceso a elementos HTML informativos
const tiempo = document.getElementById("tiempo");
const palabrasCorrectas = document.getElementById("palabrasCorrectas");
const palabraDeMuestra = document.getElementById("palabraDeMuestra");

// Variable que identifica el temporizador. De partida su valor
// es cero para indicar que no ha ningun temporizador activose ha activado.
let identificadorTemporizador = 0;

// Colección de palabras que pueden aparecer en el panel de palabras de muesta
// Se ha obtenido de la página web https://www.palabrasaleatorias.com/

const palabrasDeMuestra = [
  "autopista",
  "chicle",
  "visitar",
  "amistoso",
  "puerta",
  "avellana",
  "despedida",
  "fantasma",
  "sirena",
  "monumento",
  "radioaficionado",
  "tímido",
  "arruga",
  "caro",
  "abuelo",
  "convento",
  "gafas",
  "rabino",
  "sufrir",
  "nuez",
  "sauce",
  "orejera",
  "apagar",
];

// -------------------------------------------------------
// FUNCIONES AUXILIARES

function seleccionaPalabraDeMuestra() {
  // La palabra de muestra se selecciona aleatoriamente del array palabrasDeMuestra

  // Numero de elementos en el array
  const size = palabrasDeMuestra.length;
  // Numero real aleatorio entre 0 y size
  const indiceRealAleatorio = Math.random() * size;
  // Redondeo del número real obtenido al entero más próximo
  // para que se corresponda con una posición (indice) correcta.
  const indiceAleatorio = Math.floor(indiceRealAleatorio);

  // Devuelve el elemento del array ubicado en el indice aleatorio
  return palabrasDeMuestra[indiceAleatorio];
}

function actualizaPalabraDeMuestra() {
  // Genera una nueva palabra de muestra aleatoria
  // y la muestra en el panel de muestra.

  const nuevaPalabra = seleccionaPalabraDeMuestra();
  palabraDeMuestra.innerText = nuevaPalabra;
}

// -------------------------------------------------------
// GESTORES DE EVENTOS

function comenzarTestDeVelocidad() {
  // Realiza todos los preparativos para comenzar un nuevo test de velocidad
  //   - Se actualiza la palabra de muestra
  //   - Se inicializan los contadores de tiempo y de puntos
  //   - Se vacía el área de texto del panel de entrada y se pone en foco
  //     para que el usuario pueda comenzar a escribir inmediatamente
  //        https://developer.mozilla.org/es/docs/Web/API/HTMLElement/focus
  //   - Se inicializa el temporizador que se encargaraá de ejecutar
  //     con una cadencia de 1000 (1 segundo) la función actualizaTiempo

  function actualizaTiempo() {
    //  Incrementa en una unidad el contador de tiempo
    let valorTiempo = +tiempo.innerText;
    valorTiempo++;
    tiempo.innerText = valorTiempo.toString();
  }

  actualizaPalabraDeMuestra();

  tiempo.innerText = "0";
  palabrasCorrectas.innerText = "0";
  entrada.value = "";
  entrada.focus();

  // Activa el temporizador para que se actualiza el tiempo cada segundo (1000msg)
  // NOTA: 1) Dado que el botón Comenzar se puede pulsar de forma independiente del de Detener,
  //       sólo se inicializa el temporizador en el caso de que la variable temporizador sea cero.
  //       Con esta precaución, evitamos tener variso temporizadores activos al mismo tiempo.
  //       2) El argumento primero de setInterval es el nombre de la función (es un método callback)
  if (identificadorTemporizador == 0) {
    identificadorTemporizador = setInterval(actualizaTiempo, 1000);
  }
}

function ___detenerTestDeVelocidad() {
  //  Detiene el temporizador y actualiza la variable identificadorTemporizador
  //  a cero, para indicar que no hay activo ningun temporizador
  //  OBSERVACIÓN: Al detener el tiempo, la página refleja en el marcador
  //  el resultado del test. Es decir, el número de segundos empleados y el numero
  //  de palabras correctamente mecanografiadas
}

function ___comprobarPalabraMecanografiada(palabraEscritaEnPanelDeEntrada) {
  // Comprueba si la palabraa escrita en el panel de entrada
  // coincide con la palabra de muestra.
  // Si ambas coinciden se deberá:
  //    -  actualizar el número de palabras correctas
  //    -  generar aleatoriamente una nueva palabra de muestra
  //    -  vaciar el panel de entrada para permitir escribir una nueva palabra
}
