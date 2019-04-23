# Diplomado en Visualización de Datos v.2019

#### Miércoles 24 de abril (18.30 - 21.30 hrs.)

**[DATOS](https://github.com/profesorfaco/datos/blob/gh-pages/README.md#datos) ⇢ [TIPOS DE DATOS](https://github.com/profesorfaco/datos/blob/gh-pages/README.md#tipos-de-datos) ⇢ [DATOS EN JAVASCRIPT](https://github.com/profesorfaco/datos/blob/gh-pages/README.md#datos-en-javascript)**

Profesor Felipe Cortez / http://profesor.faco.cl / profesor@faco.cl

- - - - - - - - - - 

### DATOS

En castellano, sin computadoras, un **dato es información sobre algo concreto** que permite su conocimiento exacto o sirve para deducir las consecuencias derivadas de un hecho.

También en castellano, con computadoras, un **dato es información dispuesta de manera adecuada para su tratamiento**. Lo que queda muy cerca de una acepción del término inglés *data* que es definida en el [Diccionario Merriam-Webster](https://www.merriam-webster.com/dictionary/data), como: ***information in digital form that can be transmitted or processed***. Acepción que se complejiza en el [Diccionario Oxford](https://en.oxforddictionaries.com/definition/data): ***The quantities, characters, or symbols on which operations are performed by a computer**, which may be stored and transmitted in the form of electrical signals and recorded on magnetic, optical, or mechanical recording media*

Pero hay una condición de la palabra *data* que la diferencia de nuestra palabra *dato*. A saber: *noun, plural in form but singular or plural in construction, often attributive*. Refiriéndose a esta condición, Phil Izzo (2012) escribe en un artículo del blog de [Wall Street Journal](https://blogs.wsj.com/economics/2012/07/05/is-data-is-or-is-data-aint-a-plural/):

> As usage has evolved from the word's origin as the Latin plural of datum, singular [is] used to refer to collections of information: **Little data is available to support the conclusions**.
> 
> Otherwise, generally continue to use the plural: **Data are still being collected**.

En la traducción de ambas frases al castellano tendríamos que usar el plural (tenemos pocos datos para apoyar las conclusiones; los datos aún nos están siendo recolectados). Y en plural hay una definición que conviene conocer:

> **Data are symbols that represent the properties of objects and events. Information consists of processed data, the processing directed at increasing its usefulness**. For example, census takers collect data. The Bureau of the Census processes that data, converting it into information that is presented in the numerous tables published in the Statistical Abstracts. Like data, information also represents the properties of objects and events, but it does so more compactly and usefully than data. **The difference between data and information is functional, not structural**.

Tal definición de *data* está a la base de la pirámide DIKW (Data, Information, Knowledge, Wisdom):

![DIKW pyramid](https://eight2late.files.wordpress.com/2011/03/dikw.jpg)

#### Datos cuantitativos v/s datos cualitativos. 

Apoyándonos en Hernández Sampieri (2014), podemos decir que: 

- En el enfoque cuantitativo la recolección de los datos se fundamenta en la medición y el análisis, en procedimientos estadísticos, buscando regularidades y relaciones causales entre elementos, para la formulación y demostración de teorías.
 
- En el enfoque cualitativo NO se pretende generalizar los resultados a poblaciones más amplias de manera probabilística. Por esta razón los datos cualitativos son descripciones detalladas de situaciones, eventos, personas, interacciones, conductas observadas y sus manifestaciones.

A lo dicho, podemos agregar apuntes de Babbie (2000), quien señala que la distinción entre datos cualitativos y cuantitativos en la investigación social es la distinción entre datos numéricos y no numéricos: 

> Cuando usted encomia la belleza de alguien está emitiendo una afirmación cualitativa. **Cuando dice que esa persona tiene "9" en una escala del 1 al 10, trata de cuantificar su aseveración cualitativa** […]. La cuantificación hace más explícitas nuestras observaciones. También facilita congregar y resumir los datos. Más aún, **abre la posibilidad de realizar análisis estadísticos que van de los meros promedios a las fórmulas y modelos matemáticos complejos** (pp. 23-24).

Ahora bien, la posibilidad de análisis estadísticos es una posibilidad de enfoque cuantitativo. Y el origen de la [visualización de datos](http://www.visual-literacy.org/periodic_table/periodic_table.html), si lo ubicamos con William Playfair (1759-1923), también tiende a lo estadístico, lo cuantitativo, lo numérico.

![W. Playfair](http://www.branchcollective.org/wp-content/uploads/2012/10/SachsFigure1-1024x632.jpg)

#### Variables y atributos

En la recolección de datos cuantitativos, los investigadores de ciencias sociales diferencias entre variables y atributos. 

**Las variables son los agrupamientos lógicos de atributos**. Mientras que los atributos o valores son las características o cualidades que describen un objeto. La relación entre ambas pueden entenderse en la siguiente tabla (Babbie, 2000:17)

| Variable       | Atributos      |
|:---------------|:---------------|
| Género         | Mujer, hombre |
| Edad          | joven, mediana edad, anciano… |
| Raza/etnicidad | Caucásico, afroestadounidense, asiático, latino… |
| Clase social | Clase baja, clase media, clase alta… |
| Ocupación | Plomero, carpintero, sociólogo, abogado… | 

- - - - - - - - - - - - - - - - 

### TIPOS DE DATOS

Si compartiera con ustedes el número 18261884, sin contexto alguno (como puro atributo), resultaría inútil. Pero sería distinto de la siguiente manera: 

| País      |  Población       | Superficie     |
|:----------|:-----------------|:---------------|
| Chile     | 18261884         | 756102         |

Entendiendo cómo funciona una [tabla](http://www.visual-literacy.org/periodic_table/periodic_table.html), ustedes cuentan con pistas sobre el atributo al que corresponde, lo que es orientar a la utilización de tal número como información sobre algo concreto: La población en Chile. 

Además del dato de la población de Chile, contamos con su superficie. Si dividimos el primer dato por el segundo, obtenemos [la densidad de la población](https://es.wikipedia.org/wiki/Densidad_de_población) en Chile. El resultado de aquella división es 24,15267252.

Los números 18261884 y 24,15267252 tienen una diferencia que corresponde señalar al momento de disponerlos para su tratamiento en computación: 

- **18261884** es un número entero, un `int` (del inglés *integer*) en varios lenguajes de programación.

- **24,15267252** es un número de coma flotante, un `float` (del inglés *floating point number*) en varios lenguajes de programación.

Y así como se puden reconocer dos tipos de número, podemos decir que:

- **true** es una de dos opciones de dato lógico en un `bool`: Del inglés [*Boolean*](https://es.wikipedia.org/wiki/Tipo_de_dato_l%C3%B3gico). 

- **"A"** es un `char`: Del inglés *character*.

Podrán notar que en el tipo de dato numérico y booleano no se usaron comillas, pero en el caso del caracter sí se utiliza. 

Usamos `int`, `bool`, `char` y `float` porque son palabras reservadas en [C++](https://es.wikipedia.org/wiki/C%2B%2B) para declarar que una variable que almacenará cierto [tipo de dato](https://beginnersbook.com/2017/08/cpp-data-types/). 

**En el contexto computacional, una variable debe entenderse como un espacio en la memoria del computador donde se almacenará un dato que puede variar en la ejecución del programa del que son parte.** 

**Para información respecto de la declaración de los tipos de datos en otros lenguajes de programación, favor consultar:**

- Tipos de datos en [C](https://es.wikipedia.org/wiki/C_(lenguaje_de_programaci%C3%B3n)) → http://decsai.ugr.es/~jfv/ed1/c/cdrom/cap2/cap24.htm

- Tipos de datos en [Java](https://es.wikipedia.org/wiki/Java_(lenguaje_de_programaci%C3%B3n)) → https://www.w3schools.com/java/java_data_types.asp

- Tipos de datos en [JavaScript](https://es.wikipedia.org/wiki/JavaScript) → https://www.w3schools.com/JS/js_datatypes.asp

- Tipos de datos en [PHP](https://es.wikipedia.org/wiki/PHP) → https://www.w3schools.com/php/php_datatypes.asp

- Tipos de datos en [Python](https://es.wikipedia.org/wiki/Python) → http://progra.usm.cl/apunte/materia/tipos.html

- Tipos de datos en [Processing](https://es.wikipedia.org/wiki/Processing) → http://processing-spain.blogspot.com/2015/09/42-creando-variables.html

- Tipos de datos en [Ruby](https://es.wikipedia.org/wiki/Ruby) → https://www.geeksforgeeks.org/ruby-data-types/

- - - - - - - - - - - - - - - - -

### DATOS EN JAVASCRIPT

**En programación, los datos puede ser contenidos en las variables. En [JavaScript](https://es.wikipedia.org/wiki/JavaScript) todas las variables se crean con una única palabra reservada,`var`, sin importar el tipo de dato**. La diferencia está en los símbolos que se utilizan para la asignación de contenido, los que se utilizan después del signo igual:

```
var a = 18261884;

var b = 24,15267252;

var c = false;

var d = "Falso como beso de Judas";

var e = ["Pedro", "Juan", "Santiago", "Santiago el Menor", "Felipe", "Bartolomé", "Judas Tadeo", "Simón", "Andrés", "Mateo", "Tomás", "Judas Iscariote"];

var f = { mom: "Luann", dad:"Kirk", children:"Milhouse"};
```

Las variables `a`, `b` y `c` no requieren comillas. La variable `d`, que contiene una cadena de caracteres (*string*) usa comillas. La variable `e`, que contiene un arreglo, usa paréntesis cuadrado y cada elemento, por tratarse de un *string*, usa comillas. La variable `f`que contiene un objeto, usa paréntesis de llave que en su interior contiene pares separados por comas.

Para avanzar en el uso de datos en JavaScript, y hacer una introducción a las herramientas para el proceso de visualización, haremos una exploración que dividiremos en 5 partes:

- **Primero revisaremos [las páginas contenidas en este repositorio](https://profesorfaco.github.io/datos/)**.

- **Luego aprovecharemos el [editor en línea de p5.js](https://editor.p5js.org/), para revisar**:

  - [wCJrC97zb](https://editor.p5js.org/profesorfaco/sketches/wCJrC97zb): una variable conteniendo un número.

  - [Jxux74Irs](https://editor.p5js.org/profesorfaco/sketches/Jxux74Irs): una variable conteniendo un número que incrementa.

  - [K21IBXOzj](https://editor.p5js.org/profesorfaco/sketches/K21IBXOzj): una variable conteniendo dos números que se suman.

  - [_EoptWEIC](https://editor.p5js.org/profesorfaco/sketches/_EoptWEIC): una variable conteniendo dos [strings](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String) que se concatenan.

  - [b8o79kL3k](https://editor.p5js.org/profesorfaco/sketches/b8o79kL3k): una variable conteniendo un [array](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array).

  - [mvI9d1djc](https://editor.p5js.org/profesorfaco/sketches/mvI9d1djc): una variable conteniendo un [objeto](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Basics).

  - [EraL9UErk](https://editor.p5js.org/profesorfaco/sketches/EraL9UErk): una variable conteniendo un ensamblaje.

- **Tomaremos un descanso y luego volveremos al [editor en línea de p5.js](https://editor.p5js.org/), para revisar tres formatos para el intercambio de datos: [CSV](https://es.wikipedia.org/wiki/Valores_separados_por_comas), [JSON](https://www.json.org/json-es.html) y [XML](https://developer.mozilla.org/es/docs/Introducci%C3%B3n_a_XML)**:

  - [JYt_9R75T](https://editor.p5js.org/profesorfaco/sketches/JYt_9R75T): una variable conteniendo un objeto p5.Table que resulta de la lectura de un [CSV en línea](https://raw.githubusercontent.com/profesorfaco/datos/gh-pages/datos/sudamerica.csv).

  - [XJSJcAKfh](https://editor.p5js.org/profesorfaco/sketches/XJSJcAKfh): una variable conteniendo un objeto o arreglo que resulta de la lectura de un [JSON en línea](https://raw.githubusercontent.com/profesorfaco/datos/gh-pages/datos/sudamerica.json), sea como objeto o arreglo.

  - [YIGnDZVAC](https://editor.p5js.org/profesorfaco/sketches/YIGnDZVAC): una variable conteniendo un objeto XML que resulta de la lectura de un [XML en línea](https://raw.githubusercontent.com/profesorfaco/datos/gh-pages/datos/sudamerica.xml).

- **En un paréntesis, pensaremos en algún asunto particular con el que podamos generar un JSON que será validado y luego puesto en línea, para ser consultado con [loadJSON()](https://p5js.org/es/reference/#/p5/loadJSON) en p5.js. Para ello, usaremos:**

  - JSONLint - The JSON Validator - https://jsonlint.com/

  - Myjson - A simple json storage and hosting service - http://myjson.com/

- **Para terminar, obtendremos datos de distintas [interfaces de programación de aplicaciones (API)](https://es.wikipedia.org/wiki/Interfaz_de_programaci%C3%B3n_de_aplicaciones)**:

  - [yKB14D8RQ](https://editor.p5js.org/profesorfaco/sketches/yKB14D8RQ): la API de [Chuck Norris](https://api.chucknorris.io/).
    
  - [DvO_4Lucl](https://editor.p5js.org/profesorfaco/sketches/DvO_4Lucl): la API de [Indicadores económicos](https://mindicador.cl/).

  - [EVA9TKXl_](https://editor.p5js.org/profesorfaco/sketches/EVA9TKXl_): la API [OpenWeatherMap](https://openweathermap.org/).

- - - - - - - - - - - - - - - - - 

### Para practicar

**Más datos y APIs:**

- [Awesome JSON Datasets](https://github.com/jdorfman/awesome-json-datasets#awesome-json-datasets-)

- [Catálogo de Datos - Gobierno Digital de Chile](https://beta.datos.gob.cl/search/)

- [Datasets - Data.gov](https://catalog.data.gov/dataset?res_format=JSON)

- [SmartCitizen API Reference](https://developer.smartcitizen.me/)

- [USGS - GeoJSON Summary](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)
