//classwork
//- створити функцію яка приймає масив та виводить його
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// - створити функцію яка повертає найбільше число з масиву
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// Для виведення використати попередню функцію.
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// let arr =[3,76,44,21]
// function returnArr(a){
//     return a;
// }
//
// console.log(returnArr(arr));

// function returnNumber(a,b,c){
//     if (a < b && a < c) {
//         console.log(a);
//     }
//     if (c < b && c < a) {
//         console.log(c);
//     }
//     if (b < a && b < c) {
//         console.log(b);
//     }
// }
// returnNumber(4,9,2);

// let arr =[3,76,2,21]
// function minNumber(arr){
//     let min = arr[0];
//     for (const arrElement of arr) {
//         if(arrElement<min){
//             min = arrElement;
//
//         }
//     }
//     return min;
//
// }
// console.log(minNumber(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr =[3,76,2,21]
// function add(arr){
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum+=arrElement;
//     }
//     return sum;
// }
// console.log(add(arr));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// Для виведення використати попередню функцію.


// function randomArr(){
//     let arr = [];
//     for (let i = 0; i < 10; i++) {
//         arr.push(Math.round(Math.random()*100));
//
//     }
//     return arr;
// }
//
// console.log(randomArr());
//

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]


// let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}]
// function arrKey(arrays) {
//     let arrayNew = [];
//     for (const array of arrays) {
//         for (const arrayElement in array) {
//             arrayNew.push(arrayElement);
//         }
//     }
//         return arrayNew;
//
// }
//
// console.log(arrKey(arr));


// Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів

//  let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}]
// function arrObj(arrays){
//     let newArray =[];
//     for (const array of arrays) {
//         for (const arrayElement in array) {
//             newArray.push(array[arrayElement])
//         }
//     }
//     return newArray
// }
// console.log(arrObj(arr));

//homework

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - створити функцію яка  створює блок з текстом. Текст задати через аргумент

// arr = [3,5,98,34,-1]
// function Number(arrNumber){
//     let min = 0;
//     let max = 0;
//     for (const arrNumberElement of arrNumber) {
//         if(arrNumberElement<min){
//             min = arrNumberElement;
//         }
//         if(arrNumberElement>max) {
//             max = arrNumberElement;
//         }
//     }
//     console.log(max)
//     return min;
// }
//
// console.log(Number(arr));

// let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, dolor';
// function Div(text){
//     document.write(`<div>${text}</div>`)
// }
// Div(text);

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let text = 'Lorem ipsum dolor sit amet.'
// function ul(text){
//     document.write(`<ul>`)
//     for (let i = 1; i <= 3; i++) {
//         document.write(`<ul>`)
//         document.write(`<il>i${text}</il>`)
//         document.write(`</ul>`)
//     }
//
// }
//
// ul(text)

//additional

//- створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// let arr1 = [1,2,3,4]
// let arr2 = [2,3,4,5]
// let newArr = []
// let a,b;
// function addArr(arr1,arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         newArr.push(arr1[i]+arr2[i])
//
//     }
//     return newArr
// }
// console.log(addArr(arr1,arr2))


//- Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

// let array =['a','b','c']
// for (let i = 1; i < 4; i++) {
//     array.push(i);
// }
//     console.log(array);
//

//let array =[1, 2, 3]
// let array1 = array.reverse();
// console.log(array1)
// array.unshift(4,5,6);
// console.log(array);
// array.push(4,5,6);
// console.log(array);

//- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


// function zeroMover(arr = []) {
//     let zero = []
//     console.log(arr)
//     for (let i = 0; i < arr.length; i++) {
//         const aElement = arr[i];
//         if (aElement === 0) {
//             arr.splice(i, 1);
//             zero.push(0);
//             i--;
//         }
//     }
//     console.log(arr);
//     console.log(zero);
//     console.log(arr.concat(zero));
// }
//
// zeroMover([1,0,6,0,3])
