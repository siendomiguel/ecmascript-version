// Apuntes de ES7

// ==== Includes ====

 let numbers = [1, 2, 3, 7, 8];
 const value = 7;
 
 if (numbers.includes(value)) {
   console.log(`Sí se encuentra el valor ${value}`);
 } else {
   console.log(`No se encuentra el valor ${value}`);
 }
 
 // ==== Operaciones de forma Exponencial ====

 let base = 4;
 let exponent = 4;
 let result = base ** exponent;
 console.log(`Result -> ${result}`);