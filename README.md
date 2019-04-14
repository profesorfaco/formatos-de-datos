# formatos-de-datos

### DATOS

**El contexto de *dataviz* nos exige examinar cuidadosamente la idea que tenemos respecto de un "dato"**.

En castellano, sin computadoras, un dato es información sobre algo concreto que permite su conocimiento exacto o sirve para deducir las consecuencias derivadas de un hecho.

También en castellano, con computadoras, un **dato es información dispuesta de manera adecuada para su tratamiento**. Lo que queda muy cerca de una acepción del término inglés *data* que es definida en el [Diccionario Merriam-Webster](https://www.merriam-webster.com/dictionary/data), como: *information in digital form that can be **transmitted or processed***. Acepción que se complejiza en el [Diccionario Oxford](https://en.oxforddictionaries.com/definition/data): *The **quantities, characters, or symbols** on which operations are performed by a computer, which may be stored and transmitted in the form of electrical signals and recorded on magnetic, optical, or mechanical recording media*

Pero hay una condición de la palabra *data* que exige avanzar un poco más: *plural in form but singular or plural in construction* ([Merriam-Webster](https://www.merriam-webster.com/dictionary/data)). Así, por ejemplo, en un artículo del [Wall Street Journal](https://blogs.wsj.com/economics/2012/07/05/is-data-is-or-is-data-aint-a-plural/) Phil Izzo (2012) escribe:

> As usage has evolved from the word's origin as the Latin plural of datum, singular verbs now are often used to refer to collections of information: **Little data is available to support the conclusions**.
> 
> Otherwise, generally continue to use the plural: **Data are still being collected**.

Pero en la traducción de ambas frases al castellano tendríamos que usar el plural (tenemos pocos datos para apoyar las conclusiones; los datos aún nos están siendo recolectados). Y en esta línea podemos conectar con algunas definiciones que aporta Russell Lincoln Ackoff (1989):

> **Data are symbols that represent the properties of objects and events. Information consists of processed data, the processing directed at increasing its usefulness**. For example, census takers collect data. The Bureau of the Census processes that data, converting it into information that is presented in the numerous tables published in the Statistical Abstracts. Like data, information also represents the properties of objects and events, but it does so more compactly and usefully than data. **The difference between data and information is functional, not structural**.

##### Más información sobre la *DIKW pyramid* 

- Ackoff, R. L. (1989) From Data to Wisdom - http://faculty.ung.edu/kmelton/documents/datawisdom.pdf

- Bellinger, Castro & Mills - Data, Information, Knowledge, and Wisdom - http://www.systems-thinking.org/dikw/dikw.htm

- Bernstein - The Data-Information-Knowledge-Wisdom Hierarchy and its Antithesis - https://journals.lib.washington.edu/index.php/nasko/article/viewFile/12806/11288

- Rowley - The wisdom hierarchy: representations of the DIKW hierarchy - http://wisdomresearch.org/forums/storage/26/220/rowley_jis_042007.pdf

- Schumaker - From Data to Wisdom: The Progression of Computational Learning in Text Mining - https://pdfs.semanticscholar.org/3e1f/fd7e97589b35df7c3d08c94357882fe88cbd.pdf

- - - - - - - - - - - - - - - - 

### TIPO DE DATO

Si compartiera con ustedes el número entero 18261884 (*integer*), sin contexto alguno, resultaría inútil. Pero sería distinto de la siguiente manera: 

| País      |  Población       | Superficie     |
|:----------|:-----------------|:---------------|
| Chile     | 18261884         | 756102         |

Gracias a la [tabla](http://www.visual-literacy.org/periodic_table/periodic_table.html), podemos utilizar tal número como información sobre algo concreto: La población en Chile. Luego, si tales datos estuvieran en una hoja de cálculo, bastaría con escribir `=B2/C2` en una celda, para obtener la densidad de población, que resulta un número de coma flotante 24,15267252 (*floating point*).

En la tabla, entregando contexto y sentido, también hay palabras. Cada una de ellas se forma con una serie de caracteres (*characters*) dentro de una cadena (*string*).

Con lo recién expuesto, podrá comprenderse la razón de que Java, un lenguaje de programación, utilice las siguientes palabras reservadas para apuntar al tipo de dato que será asignado a una determinada variable que, en el siguiente ejemplo, denominaremos "x":

```
int x = 18261884;
float x = 24.15267252;
char x = "P";
String x = "Superficie";
```

Por norma general, el contenido numérico no utiliza comillas. El contenido de caracteres sí. Aunque habría que considerar un tipo de dato primitivo, que es el Booleano, que puede escribirse de una de las siguientes maneras en Java: 

```
boolean x = true;
boolean y = false;
```

- - - - - - - - - - - - - - - - -

### VARIABLES EN JAVASCRIPT

Para entender el uso de datos en JavaScript: 

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


- - - - - - - - - - - - - - - - -

### MÁS INFORMACIÓN

- Escuela de datos: https://es.schoolofdata.org/que-es-un-dat/
