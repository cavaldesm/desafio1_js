/* Se le solicitará al usuario o usuaria ingresar su nombre para luego pedirle escribir cuáles ingredientes desea para su orden, 
pudiendo elegir un máximo de 4. Luego se le presenta una lista con lo que escribió */

let entrada = prompt("Por favor, ingresa tu nombre para realizar tu orden.");

let cantidad = prompt('¿Cuántas pizzas quiere?');
let texto = prompt('¿Para cuántas personas?');
for (let index = 0; index < cantidad; index++){
    console.log(texto);
}

let ingredientes = '';
for (let index = 0; index < 4; index++) {
    ingredientes += prompt("Por favor, escribe 4 ingredientes para tu pizza. Al finalizar, verás la lista de los ingredientes seleccionados.")+"\n";
}
alert(ingredientes);

/* Se le solicitará al usuario o usuaria ingresar un número de salsas. Si pone un número mayor de 4, entrará en un loop.
Si no, verá un cuadro por el número de salsas que eligió */

let salsas = prompt('Por favor, indique cuántas salsas quiere. No pueden ser más de 4.');
for (let index = 0; index < salsas; index++){
    if (index > 3) {
        break;
    }
    alert("¡Salsa!");
}

let hello = prompt("Ingresa un número del 1 al 5 para elegir un postre sorpresa. Al ingresar un número, verás a qué corresponde.");
while (hello != 'ESC'){
    switch (hello) {
        case "1":
            alert("Brownie de chocolate.");
            break;
            case "2":
                alert("Cheesecake de frutos rojos.");
                case "3":
                    alert("Helado de vainilla.");
                break;
                case "4":
                    alert("Banana split.");
                    break;
                    case "5":
                        alert("Kuchen de manzana.");
                default:
                    alert("Error");
                    break;
    }
    hello = prompt("Escribe un número del 1 al 5 distinto del que escogiste para ver de qué te perdiste :) Escribe ESC para continuar.");
}

/* Si escribe "SevenUp", se terminará y se le mostrará los nombres y cantidad ya ingresados */

let lol = prompt("¿Cuántas bebidas quieres?");
let bebidas = '';
while (lol != "SevenUp"){
    bebidas += lol +"\n";
    lol = prompt("¿Qué bebidas quieres? SevenUp no está disponible. Al finalizar verás la cantidad y las bebidas seleccionadas.");
}
alert(bebidas);