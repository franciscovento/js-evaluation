 ////////////////////////////////////////////////////////////////////////////////////////////////
 // 1. Escribe una función que tome un array de objetos, donde cada objeto representa una persona 
 // y tiene las siguientes propiedades: nombre, edad, género y país. Utiliza el método .filter() 
 // para filtrar solo aquellas personas que sean mayores de edad y de género femenino, y que sean 
 // de países que empiezan por la letra "E". Luego, utiliza el método .map() para crear un nuevo 
 // array que contenga solo los nombres de las personas filtradas.
 // Si no hay personas con ese filtro debe regresar: "No hay personas con ese filtro"

 // Example
//  const users = [
//   { name: "Ana", age: 25, gender: "femenino", country: "España" },
//   { name: "Juan", age: 17, gender: "masculino", country: "México" },
//   { name: "María", age: 31, gender: "femenino", country: "Estados Unidos" },
//   { name: "Pedro", age: 20, gender: "masculino", country: "Ecuador" },
//   { name: "Luisa", age: 18, gender: "femenino", country: "El Salvador" },
//   { name: "Sofia", age: 27, gender: "femenino", country: "Egipto" }
// ];

function usersByFilter(users) {


  return null;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Escribe una función que tome un array de objetos, donde cada objeto representa una canción y tiene 
// las siguientes propiedades: nombre, artista y duracion (en minutos y segundos). Utiliza el 
// método .find() para encontrar la primera canción que tenga una duración mayor o igual a 6 minutos 
// y 30 segundos. Luego, muestra por consola el nombre de la canción y el nombre del artista.
// Si ninguna canción cumple la condición debe regresar "Ninguna canción cumple con esta condición"

// const songs = [
//   { name: "Bohemian Rhapsody", artist: "Queen", duration: "5:55" },
//   { name: "Stairway to Heaven", artist: "Led Zeppelin", duration: "8:02" },
//   { name: "Sweet Child O' Mine", artist: "Guns N' Roses", duration: "4:16" },
//   { name: "Hotel California", artist: "Eagles", duration: "6:30" },
//   { name: "November Rain", artist: "Guns N' Roses", duration: "8:57" }
// ];


function findSongByDuration(songs) {


return null;
}


/////////////////////////////////////////////////////////////////////////////////////////////
// 3. Escribe una función en JavaScript que tome dos arrays de strings como argumentos y 
// devuelva un nuevo array que contenga todos los elementos que estén presentes en ambos 
// arrays. Utiliza el método .includes() para verificar si un elemento está presente en un array.
// Por ejemplo teniendo los siguientes dos arrays: 
// const array1 = ["manzana", "banana", "kiwi", "naranja"];
// const array2 = ["pera", "banana", "durazno", "manzana"];

function commonElements (arr1, arr2) {


return null;
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 4. Escribe una función  que tome un array de strings como argumento y muestre por 
// consola todos los strings del array que empiecen con una letra mayúscula utilizando el método .forEach(). 
// Si el array está vacío o no hay ningún string que empiece con mayúscula, la función debe mostrar un mensaje indicándolo.
// "No hay palabras con mayúsculas"
// Ejemplo: 
// const strings = ["Manzana", "naranja", "Kiwi", "sandía"];

function showCapitalStrings (strings){

  
  return null;
}



// No modifiques nada debajo de esta linea
module.exports = {
  usersByFilter,
  findSongByDuration,
  commonElements,
  showCapitalStrings
}
