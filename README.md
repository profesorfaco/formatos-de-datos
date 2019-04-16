# Diplomado en Visualización de Datos v.2019

**Formatos de datos + Introducción a herramientas para el proceso de visualización**

Miércoles 24 de abril / 18:30 a 21:30 hrs.

Profesor Felipe Cortez / http://profesor.faco.cl / profesor@faco.cl

- - - - - - - - - - 

### DATOS

En castellano, sin computadoras, un **dato es información sobre algo concreto** que permite su conocimiento exacto o sirve para deducir las consecuencias derivadas de un hecho.

También en castellano, con computadoras, un **dato es información dispuesta de manera adecuada para su tratamiento**. Lo que queda muy cerca de una acepción del término inglés *data* que es definida en el [Diccionario Merriam-Webster](https://www.merriam-webster.com/dictionary/data), como: *information in digital form that can be **transmitted or processed***. Acepción que se complejiza en el [Diccionario Oxford](https://en.oxforddictionaries.com/definition/data): *The **quantities, characters, or symbols** on which operations are performed by a computer, which may be stored and transmitted in the form of electrical signals and recorded on magnetic, optical, or mechanical recording media*

Pero hay una condición de la palabra *data* que la diferencia de nuestra palabra *dato*. A saber: *noun, plural in form but singular or plural in construction, often attributive* ([Merriam-Webster](https://www.merriam-webster.com/dictionary/data)). Así, por ejemplo, Phil Izzo (2012) escribe en un artículo del blog de [Wall Street Journal](https://blogs.wsj.com/economics/2012/07/05/is-data-is-or-is-data-aint-a-plural/):

> As usage has evolved from the word's origin as the Latin plural of datum, singular [is] used to refer to collections of information: **Little data is available to support the conclusions**.
> 
> Otherwise, generally continue to use the plural: **Data are still being collected**.

Pero en la traducción de ambas frases al castellano tendríamos que usar el plural (tenemos pocos datos para apoyar las conclusiones; los datos aún nos están siendo recolectados). Y en esta línea podemos conectar con algunas definiciones que aporta Russell Lincoln Ackoff (1989):

> **Data are symbols that represent the properties of objects and events. Information consists of processed data, the processing directed at increasing its usefulness**. For example, census takers collect data. The Bureau of the Census processes that data, converting it into information that is presented in the numerous tables published in the Statistical Abstracts. Like data, information also represents the properties of objects and events, but it does so more compactly and usefully than data. **The difference between data and information is functional, not structural**.

Tal definición de *data* está a la base de la pirámide DIKW (Data, Information, Knowledge, Wisdom):

![DIKW pyramid](https://eight2late.files.wordpress.com/2011/03/dikw.jpg)

**Para mayor información sobre la *DIKW pyramid*, favor consultar:**

- Ackoff - From Data to Wisdom - http://faculty.ung.edu/kmelton/documents/datawisdom.pdf

- Bellinger, Castro & Mills - Data, Information, Knowledge, and Wisdom - http://www.systems-thinking.org/dikw/dikw.htm

- Bernstein - The Data-Information-Knowledge-Wisdom Hierarchy and its Antithesis - https://journals.lib.washington.edu/index.php/nasko/article/viewFile/12806/11288

- Rowley - The wisdom hierarchy: representations of the DIKW hierarchy - http://wisdomresearch.org/forums/storage/26/220/rowley_jis_042007.pdf

- Schumaker - From Data to Wisdom: The Progression of Computational Learning in Text Mining - https://pdfs.semanticscholar.org/3e1f/fd7e97589b35df7c3d08c94357882fe88cbd.pdf

- - - - - - - - - - - - - - - - 

### TIPO DE DATO

Si compartiera con ustedes el número 18261884, sin contexto alguno, resultaría inútil. Pero sería distinto de la siguiente manera: 

| País      |  Población       | Superficie     |
|:----------|:-----------------|:---------------|
| Chile     | 18261884         | 756102         |

Gracias a la [tabla](http://www.visual-literacy.org/periodic_table/periodic_table.html), ustedes cuentan con pistas que los orientan a la utilización de tal número como información sobre algo concreto: La población en Chile. 

Además del dato de la población de Chile, contamos con la superficie de su territorio. Si dividimos el primer dato por el segundo, obtenemos un tercer dato: [La densidad de la población](https://es.wikipedia.org/wiki/Densidad_de_población) en Chile. El resultado de aquella división es 24,15267252.

Los números 18261884 y 24,15267252 tienen una diferencia que corresponde señalar al momento de disponerlos para su tratamiento en computación: 

- **18261884** es un `int`: Del inglés *integer*.  

- **24,15267252** es un `float`: Del inglés *floating point number*.

Y así como se puden reconocer distintos tipos de número, podemos decir que:

- **true** es una de dos opciones de dato lógico en un `bool`: Del inglés [*Boolean*](https://es.wikipedia.org/wiki/Tipo_de_dato_l%C3%B3gico). 

- **"A"** es un `char`: Del inglés *character*.

Podrán notar que en el tipo de dato numérico y booleano no se usaron comillas, pero en el caso del caracter sí se utiliza. 

Usamos `int`, `bool`, `char` y `float` porque son palabras reservadas en [C++](https://es.wikipedia.org/wiki/C%2B%2B) para declarar que una variable (un espacio en la memoria del computador donde se almacenará un dato que puede variar en la ejecución del programa del que son parte) almacenará cierto [tipo de dato](https://beginnersbook.com/2017/08/cpp-data-types/). 

**Para información respecto de los tipos de datos en otros lenguajes de programación, favor consultar:**

- Tipos de datos en [C](https://es.wikipedia.org/wiki/C_(lenguaje_de_programaci%C3%B3n)): http://decsai.ugr.es/~jfv/ed1/c/cdrom/cap2/cap24.htm

- Tipos de datos en [Java](https://es.wikipedia.org/wiki/Java_(lenguaje_de_programaci%C3%B3n)): https://www.javatpoint.com/java-data-types

- Tipos de datos en [PHP](https://es.wikipedia.org/wiki/PHP): https://www.tutorialrepublic.com/php-tutorial/php-data-types.php

- Tipos de datos en [Python](https://es.wikipedia.org/wiki/Python): http://progra.usm.cl/apunte/materia/tipos.html

- Tipos de datos en [Processing](https://es.wikipedia.org/wiki/Processing): http://processing-spain.blogspot.com/2015/09/42-creando-variables.html

- Tipos de datos en [Ruby](https://es.wikipedia.org/wiki/Ruby): https://www.geeksforgeeks.org/ruby-data-types/


- - - - - - - - - - - - - - - - -

### DATOS EN JAVASCRIPT

**En programación, los datos puede ser contenidos en las variables. En [JavaScript](https://es.wikipedia.org/wiki/JavaScript) todas las variables se crean con una única palabra reservada,`var`, sin importar el tipo de dato**. La diferencia está en los símbolos que se utilizan para la asignación de contenido, signos que se utilizan después del signo igual:

```
var a = 18261884;

var b = 24,15267252;

var c = false;

var d = "Falso como beso de Judas";

var e = ["Pedro", "Juan", "Santiago", "Santiago el Menor", "Felipe", "Bartolomé", "Judas Tadeo", "Simón", "Andrés", "Mateo", "Tomás", "Judas Iscariote"];

var f = { mom: "Luann", dad:"Kirk", children:"Milhouse"};
```

Las variables `a`, `b` y `c` no requieren comillas. La variable `d`, que contiene una cadena de caracteres (*string*) usa comillas. La variable `e`, que contiene un arreglo, usa paréntesis cuadrado y cada elemento, por tratarse de un *string*, usa comillas. La variable `f`que contiene un objeto, usa paréntesis de llave que en su interior contiene pares separados por comas.

Para avanzar en el uso de datos, y hacer una introducción a las herramientas para el proceso de visualización, haremos una exploración que dividiremos en 4 partes:

- **Primero aprovecharemos el [editor en línea de p5.js](https://editor.p5js.org/), con los ejercicios**:

  - 00 / un número [/wCJrC97zb](https://editor.p5js.org/profesorfaco/sketches/wCJrC97zb)

  - 01 / un número que incrementa [/Jxux74Irs](https://editor.p5js.org/profesorfaco/sketches/Jxux74Irs)

  - 02 / dos números que se suman [/K21IBXOzj](https://editor.p5js.org/profesorfaco/sketches/K21IBXOzj)

  - 03 / dos [strings](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String) que se concatenan [_EoptWEIC](https://editor.p5js.org/profesorfaco/sketches/_EoptWEIC)

  - 04 / un [array](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array) con 2 strings, que también se contatenan: [/b8o79kL3k](https://editor.p5js.org/profesorfaco/sketches/b8o79kL3k)

  - 05 - lo mismo con un [objeto](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Basics): [/mvI9d1djc](https://editor.p5js.org/profesorfaco/sketches/mvI9d1djc)

  - 06 - un ensamblaje: [/EraL9UErk](https://editor.p5js.org/profesorfaco/sketches/EraL9UErk)

- **Luego revisaremos [las páginas contenidas en este repositorio](https://profesorfaco.github.io/datos/)**.

- **Tomaremos un descanso y luego volveremos al [editor en línea de p5.js](https://editor.p5js.org/), para revisar tres formatos para el intercambio de datos: [JSON](https://www.json.org/json-es.html), [CSV](https://es.wikipedia.org/wiki/Valores_separados_por_comas) y [XML](https://developer.mozilla.org/es/docs/Introducci%C3%B3n_a_XML)**:

  - 07 - [JSON](https://raw.githubusercontent.com/profesorfaco/datos/gh-pages/datos/sudamerica.json): https://editor.p5js.org/profesorfaco/sketches/XJSJcAKfh

  - 08 - [CSV](https://raw.githubusercontent.com/profesorfaco/datos/gh-pages/datos/sudamerica.csv): https://editor.p5js.org/profesorfaco/sketches/JYt_9R75T

  - 09 - [XML](https://raw.githubusercontent.com/profesorfaco/datos/gh-pages/datos/sudamerica.xml): https://editor.p5js.org/profesorfaco/sketches/YIGnDZVAC

- **Para terminar, obtendremos datos de distintas interfaces de programación de aplicaciones (API)**:

  - 10 - [Chuck Norris](https://api.chucknorris.io/) - https://editor.p5js.org/profesorfaco/sketches/yKB14D8RQ
    
  - 11 - [Indicadores económicos](https://mindicador.cl/) - https://editor.p5js.org/profesorfaco/sketches/DvO_4Lucl

  - 12 - [OpenWeatherMap](https://openweathermap.org/) - https://editor.p5js.org/profesorfaco/sketches/EVA9TKXl_
