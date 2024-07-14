let palabra 
let cadena = []

while(palabra != ''){
    palabra = prompt("ingrese una palabra o una letra:")  //ingreso las palabras hasta que no ingrese nada en el prompt
    cadena.push(palabra) //los guardo en un array
}
cadena.pop() //le quito el ultimo elemento pues no me aporta nada
let nueva = cadena.toString() //lo convierto a string con el metodo ToString()
let texto2 = nueva.replaceAll(","," ")  //Elimino todas las comas generadas por el metodo anterior, con replaceAll()
console.log(texto2)