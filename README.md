# Datos para el Diplomado en Visualización de Datos v.2019

Formatos de datos + Introducción a herramientas para el proceso de visualización

_

Miércoles 24 de abril
18:30 a 21:30 hrs.

_

Profesor Felipe Cortez
http://profesor.faco.cl/
profesor@faco.cl

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

Para mayor información sobre la *DIKW pyramid*, favor consultar:

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

Además del dato de la población de Chile, cuentan con la superficie de su territorio. Si dividimos el primer dato por el segundo, obtengo un tercer dato: [La densidad de la población](https://es.wikipedia.org/wiki/Densidad_de_población) en Chile. El resultado de aquella operación es otro número 24,15267252.

A pesar de que 18261884 y 24,15267252 son números, corresponde diferenciarlos para disponer a cada uno, de manera adecuada, para su tratamiento en computación: 

- **18261884** es un `int`: Del inglés *integer*.  

- **24,15267252** es un `float`: Del inglés *floating point number*.

Y así como se puden reconocer distintos tipos de número, podemos decir que:

- **"A"** es un `char`: Del inglés *character*.

- **true** es una de dos opciones de dato lógico en un `bool`: Del inglés [*Boolean*](https://es.wikipedia.org/wiki/Tipo_de_dato_l%C3%B3gico). 

Podrán notar que en el tipo de dato booleano y numérico no se usaron comillas, pero en el caso de los caracteres sí se utiliza. 

Si sospechan que la utilización de `int`, `bool`, `char` y `float` está siguiendo alguna lógica, están en lo cierto: Esas son palabras reservadas en C++ para declarar que una variable (un espacio en la memoria del computador donde se almacenará un dato que puede variar en la ejecución del programa del que son parte) almacenará un [tipo de dato básico](https://www.javatpoint.com/cpp-data-types). 

Más información:

- http://decsai.ugr.es/~jfv/ed1/c/cdrom/cap2/cap24.htm

- https://beginnersbook.com/2017/08/cpp-data-types/

- https://www.javatpoint.com/java-data-types


- - - - - - - - - - - - - - - - -

### DATOS EN JAVASCRIPT

Los datos son contenidos en las variables. Aunque todas las variables de JavaScript se crean de la misma forma (mediante la palabra reservada `var`), corresponde poner atención a lo que vaya a contener:

```
var a = 18261884;

var b = 24,15267252;

var c = false;

var d = "Falso como beso de Judas";

var e = ["Pedro", "Juan", "Santiago", "Santiago el Menor", "Felipe", "Bartolomé", "Judas Tadeo", "Simón", "Andrés", "Mateo", "Tomás", "Judas Iscariote"]

var f = { mom: "Marge", dad:"Homer", children:["Bart","Lisa","Maggie"]}
```

Las variables `a`, `b` y `c` no requieren comillas. La variable `d`, que contiene una cadena de caracteres (*string*) usa comillas. La variable `e`, que contiene un arreglo, usa paréntesis de cuadrado y cada elemento, por tratarse de un *string*, usa comillas. La variable `f`que contiene un objeto, usa paréntesis de llave que en su interior contiene pares separados por comas.

Para avanzar en el uso de datos, y hacer una introducción a las herramientas para el proceso de visualización, haremos una exploración doble:

- Revisaremos las páginas contenidas en este repositorio: https://profesorfaco.github.io/datos/

- Aprovecharemos el editor en línea de p5.js, con los ejercicios:

  - 000 - un número - https://editor.p5js.org/profesorfaco/sketches/wCJrC97zb

  - 001 - un número que incrementa - https://editor.p5js.org/profesorfaco/sketches/Jxux74Irs

  - 002 - ídem - https://editor.p5js.org/profesorfaco/sketches/K21IBXOzj

  - 003 - cadenas de caracteres - https://editor.p5js.org/profesorfaco/sketches/_EoptWEIC

  - 004 - arreglo - https://editor.p5js.org/profesorfaco/sketches/b8o79kL3k

  - 005 - objeto - https://editor.p5js.org/profesorfaco/sketches/jkRGOch8N

  - 006 - sudamerica - https://editor.p5js.org/profesorfaco/sketches/jkRGOch8N

  - 007 - JSON - https://editor.p5js.org/profesorfaco/sketches/yKB14D8RQ

  - 008 - CSV - https://editor.p5js.org/profesorfaco/sketches/JYt_9R75T

  - 009 - XML - https://editor.p5js.org/profesorfaco/sketches/YIGnDZVAC


