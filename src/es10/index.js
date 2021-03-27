//==== method flat ==== //
//devolver una matriz con una submatriz aplanada, 
//recibe como argunmento la profundidad
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2))

// ==== flatMap ==== //
//mapear cada elemento, luego pasarle una funcion y aplanar

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));

// ==== trim (elimina espaciones en blanco en un string) ====//
let hello = '                      hello world';
console.log(hello);
console.log(hello.trimStart()); // inicio

let hello = 'hello world                  ';
console.log(hello);
console.log(hello.trimEnd()); // final

// ==== optional catch biding ====//

try {
    
} catch /*(error) ya no es necesario colocarlo*/ {
    error
}

// ==== fromEntries (transforma array a objetos) ==== //

let entries = [["name", "Miguel"], ["age", 26]];
console.log(Object.fromEntries(entries))

// ==== symbol object ==== //

let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);

// ===== Resumen de todo https://static.platzi.com/media/user_upload/IMG_D9D082386FA8-1-4d43d884-0cfd-4645-9cf4-d6c030985704.jpg

// Que sigue ??? 