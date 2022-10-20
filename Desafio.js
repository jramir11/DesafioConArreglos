//1. Siempre hambriento
let tengohambre=true;
function siempreHambriento(arr) {
    for (let i=0;i<arr.length;i++) {
        if (arr[i] == "comida") {
            tengohambre=false;
        }
    }

    if (tengohambre) {     //tengohambre=true, no existe comida
        console.log("Tengo hambre")
    } else {
            for (i=0;i<arr.length;i++) {
                if (arr[i] == "comida") {
                    console.log("delicioso");
                }
            }
        }  
}   
siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
siempreHambriento([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"



//2. Filtro paso alto
function highPass(arr, cutoff) {
    let filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]


//3. Mejor que el promedio
function betterThanAverage(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum = array[index] + sum;
    }
    let promedio = sum / array.length

    var count = 0
    for (let index = 0; index < array.length; index++) {
        if (array[index] > promedio) {
            count++
        }
    }

    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta


//4. Arreglo invertido
function reverse(array) {
    let array_reversa = []
    for (let index = 0; index < array.length; index++) {
        array_reversa.unshift(array[index]) 
    }
    return array_reversa;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]



//5. Arreglo de Fibonacci
function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];
    let i=0
    let contador=1
    while (contador<n - 1) {
        suma=0
        suma = fibArr[i]+fibArr[i+1];
        fibArr.push(suma);
        i++;
        contador++;
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
