// Modifica este objeto, con tus propios datos
// Copia y pega el objeto en la consola
// Luego escribe yo.saludo()

var yo = {
	nombre: ["Felipe", "Cortez"],
	apodo: "faco",
	correo: "profesor@faco.cl",
	estudios: {pregrado:"Diseño Gráfico", postgrado:"Filosofía", diplomas: ["Métodos Mixtos en Investigaciones Sociales", "Docencia Universitaria","Diseño de Interacción y physical computing","Filosofía y Estética","Filosofía"]}, 
	intereses: ["Docencia", "Diseño", "Fenomenología", "Bicicleta"],
	saludo: function(){
		document.write("Hola, mi nombre es " + this.nombre[0] + " " + this.nombre[2])
	},
	repositorio: function(){
		window.location.replace("https://github.com/profesorfaco/datos/")
	}
}
