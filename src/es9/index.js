// ==== Spread Operator ==== 
//Extrae propiedades de un objeto que aun no se ha contruido. Tambien se utiliza para no tener que destructurar todos los elementos
 
 const obj = {
    name: 'Miguel',
    age: 26,
    country: 'VE'
  };
  
  let { name, ...addInfo } = obj;
  console.log(`name: ${name}`);
  console.log(`additional information: `, addInfo);
  
  // solicitando solo los datos que necesitamos

  let { country, ...nameAndAge } = obj;
  console.log(`name and age: `, nameAndAge);
  
  // ==== Porpagation Properties (Anida 2 elementos en uno) ====
   
  const person = {
    name: 'Miguel',
    age: 26
  };
  
  const personInformation = {
    ...person,
    country: 'VE'
  };
  console.log(`personInformation: `, personInformation);
  
  // ==== Promise Finally ====
   
  const helloWorld = () => {
    return new Promise((resolve, reject) => {
      true
        ? setTimeout(() => {
            resolve('Hello World!');
          }, 3000)
        : reject(new Error('Test Error'));
    });
  };
  
  helloWorld()
    .then(result => console.log('result -> ', result))
    .catch(err => console.log('err -> ', err))
    .finally(() => console.log('finalizó'));
  
  // ==== Regex ====
   
  const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
  const match = regexData.exec('2018-04-28');
  const year = match[1];
  const month = match[2];
  const day = match[3];
  console.log('Date -> ', year, month, day);