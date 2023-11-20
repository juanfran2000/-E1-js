// 1) Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function ejercicio1(num) {
  if (num % 2 === 0) {
    return `el numero ${num} es par`;
  } else {
    return `el numero ${num} es impar`;
  }
}

console.log(ejercicio1(10));

// 2) Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function ejercicio2(a, b) {
  if (a > b) {
    return `${a} es mayor que ${b}`;
  } else if (b > a) {
    return `${b} es mayor que ${a}`;
  } else {
    return "los numeros son iguales";
  }
}

console.log(ejercicio2(1, 2));

// 3) Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
function ejercicio4(num) {
  if (num % 5 === 0) {
    return "tu numero es multiplo de 5";
  } else {
    return "tu numero no es multiplo de 5";
  }
}
console.log(ejercicio4(10));

// 4) Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function ejercicio4(num) {
  for (let i = 0; i <= num; i++) {
    console.log(`faltan ${i} para llegar a tu numero`);
  }
}

ejercicio4(22);

// 5) Crear una función que reciba una palabra y un número por parámetro e imprima por consola esa palabra la cantidad correspondiente al número indicado.

function ejercicio5(palabra, num) {
  for (let i = 0; i < num; i++) {
    console.log(`${i + 1}.${palabra}`);
  }
}

ejercicio5("hola", 4);

// 6) Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

function ejercicio6(array) {
  array.forEach((num) => {
    console.log(num);
  });
}

ejercicio6([1, 2, 3, 4, 5, 6]);

// 7) Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

function ejercicio7(array) {
  let posicion5 = array[4];
  array.filter((num) => {
    if (num !== posicion5) {
      console.log(num);
    }
  });
}
ejercicio7([1, 2, 3, 4, 20, 6, 7, 8, 9, 10]);

// 8 ) Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

function ejercicio8(array, num) {
  array.forEach((arrayNum) => {
    console.log(arrayNum * num);
  });
}

ejercicio8([1, 2, 3, 4, 5, 6, 7, 8], 4);
