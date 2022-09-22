# Introducción

Este repositorio es una actividad de la asignatura IPO (Interacción Personal Ordenador). La asignatura IPO se imparte en las titulaciones de informática de la Universidad de Sevilla.

La actividad tiene como cometido completar el proyecto web inacabado del repositorio atendiendo a unos objetivos que se detallan en este documento.

El proyecto consiste en una aplicación para testar la velocidad en mecanografía.
Incluye dos botones: _Comenzar_ y _Detener_.

_Comenzar_: Empieza un nuevo test de velocidad, de manera que se muestran palabras en un panel de palabras de muestra que deben ser escritas en el panel de entrada reservado para ello.
Cada vez que se completa correctamente una palabra:

- se incrementa el contador de palabras correctas
- y se genera una nueva palabra de muestra.
  El marcador refleja el tiempo en segundos transcurrido desde
  el comienzo del test.

_Detener_: Concluye el test, lo que implica que no se generan más palabras de muestra y se detiene el conteo de tiempo.

Para calcular los segundos empleados en mecanografíar las palabras, se hará uso de un temporizador.
Los temporizadores permiten ejecutar una función cada cierto intervalo de tiempo
y son identificados (pueden definirse varios) con un entero no negativo
La construcción se basa en una variable (de identificación) y dos funciones: _setInterval_ y _clearInterval_
idetificadorTemporizador = setInterval(unaFuncion,1000)
clearInterval(idetificadoTemporizador)

[MDN: setInterval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)
[MDN: clearInterval] (https://developer.mozilla.org/en-US/docs/Web/API/clearInterval)

Para gestionar el texto escrito en el panel de entrada se apoya en el evento
[MDN input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)

# Contenido

La carperta _www_ incluye los ficheros de partida: _index.html_, _script.js_ y _style.css_.

Los cambios se harán fundamentalmente en _style.css_ y _script.js_. En general, consistirán en:

- añadir declaraciones en las reglas CSS preexistentes
- completar funciones vacías en JS. Para su fácil identificación, los nombres de las funciones a completar comenzarán con tres subrayados. Ej.: \_\_\_funcionVacia()

Se admitirán cambios puntuales en la hoja CSS:

- que obedezcan a alguna observación realizada explícitamente en la actividad
- para fomentar la comprensión de la interacción o realzar la estética (márgenes, sombras, redondeado de esquinas, etc.)
- para dotar de un diseño cromático y tipográfico personal al proyecto.

Los cambios en _index.html_ serán admitidos sólo en el caso de que la solución aportada suponga una modificación significativa de la composición del proyecto que requiera dicha intervención.

# Identificación del trabajo:

- script.js: Se actualizará el nombre del equipo de laboratorio en la variable

            const nombreDelEquipoDeLaboratorio = "XXXXXX";

- style.css: Se actualizará el nombre del equipo de laboratorio en la cabecera

             /* EQUIPO <<XXXXXXX>> */

# Objetivos:

El objetivo de la actividad es el aprendizaje de las dos siguientes técnicas:

- realizar composiciones apoyándose en flexbox [MDN: Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox). F
- temporizadores

Desde el punto de vista del diseño, esta actividad pretende:

- ampliar las estrategias de composición (en este caso, monodireccional) resolviendo los problemas de distribución y centrado del flujo normal
- aprender a combinar de forma oportuna Flexbox y Flujo Normal

Como objetivos globales (ya tenido en cuenta en actividades anterirores):

- el uso apropiado de las unidades de medida espaciales en el diseño (em, rem, %, ...)
- la estilización de los elementos como apoyo a la comprensión de la interacción (ej.: ¿cómo hacer notar al usuario que sus acciones son correctas?)
- la flexibilidad en el diseño: _var()_, _calc()_, _clamp(min, preferente, max)_

# Indicaciones

El estilo de codificación en el proyecto se apoya en las siguientes características:

- Atributo id: reservar este atributo para el acceso en JS de elementos HTML
- Atributo class: reservar las clases fundamentalmente para estilizar con CSS los elementos HTML
- [Notación BEM](https://getbem.com/) para seleccionar en CSS los elementos HTML
- Notación hsl() para codificar los colores
- Elemento :root para aunar las variables del diseño cromático y tipográfico
- Variables: Generalizar los estilos CSS mediante el uso de variables var() y la función calc()
- Uso preferente de unidades de longitud flexibles (em, rem, vh, vw, %)
- Criterio homogéneo de organización y nomenclatura
  - En reglas y declaraciones en CSS
  - En variables/funciones en JS
  - Notación camello en los nombres en JS
- Comentarios
  - incluir las referencias utilizadas para el diseño o codificación (MDN, Youtube, Stackoverflow , Coolors, etc.)
  - comentar los aspectos que faciliten la lectura del código cuando sea necesario, evitando los comentarios triviales que se limitan a reescribir el código
