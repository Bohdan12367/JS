//створити функцію, яка буде переносити елементи зі значенням 0 у кінець\

// function zeroMover(arr = []){
//     let arrNull = []
//     for(let i = 0;i<arr.length;i++){
//         const number = arr[i];
//         if(number === 0) {
//             arr.splice(i,1);
//             arrNull.push(0);
//             i--;
//         }
//     }
//     console.log(arr.concat(arrNull));
//
//
// }
//zeroMover([1,9,0,0,4,2])
//обхід масиву ззаді
// function zeroEnd(arr = []){
//     let arrNull = []
//     for(let i = arr.length;i>0;i--){
//         const number = arr[i];
//         if(number === 0) {
//             arr.splice(i,1);
//             arr.push(0);
//         }
//     }
//     console.log(arr);
//
//
// }
//
// zeroEnd([1,9,0,0,4,2])

//- С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
// - С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//       Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

// a = prompt('Vvedit 1 chuslo:');
// b = prompt('Vvedit 2 chuslo:');
// let a1 = Number(a);
// let b1 = Number(b);
// c = a1+b1;
// alert(c);

// firstName = prompt('Vvedit firstname:');
// lastName = prompt('Vvesit lastname:');
// age = prompt('Vvedit age:');
// alert(`Доброго вечора, ${firstName} ${lastName} Ми з України!`);

//- Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
// console.log(132 > 100 && 45 < 12 );
// console.log(34 > 33 && 23 < 90 );
// console.log(99 > 100 && 45 > 12 );
// console.log(132 > 100 || 45 < 12 );
// console.log(111 > 11 || 45 < 111 );
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));
// console.log(!!'-1');
// console.log(!!-1);
// console.log(!!'0');
// console.log(!!'null');
// console.log(!!'undefined');
// console.log(!!(3/'owu'));
// console.log((111 > 11 || 45 < 111) ||  !!'0');
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));


// - Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

// a = prompt('Vvedit 3 chusla:');
// console.log(a);
// let arr = JSON.parse("["+a+"]");
// // console.log(arr);
// // arr.sort(function (a,b){return a-b});
// //
// // console.log(arr);
// //метод бульбашки
//
// for(let i = 0, promp ;i<arr.length;i++){
//     for(let j = 0;j<arr.length;j++){
//         if(arr[j]>arr[j+1]){
//             promp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = promp;
//         }
//     }
// }
//
// console.log(arr);


// - Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

// isRoadClear = prompt('Чи є машини на дорозі? yes/no');
// color = prompt('Якого кольору світлофор? y/r/g/error');
// if((isRoadClear === 'yes') && (color === 'g')){
//     console.log("йди");
// }
// if((isRoadClear === 'yes') && (color === 'y')){
//     console.log("всеодно чекай");
// }
// if((isRoadClear === 'yes') && (color === 'r')){
//     console.log("стій та чекай")
// }
// if((isRoadClear === 'no') && (color === 'g')){
//     console.log("почекай, поки порушники проїдуть");
// }
// if((isRoadClear === 'no') && (color === 'y')){
//     console.log("чекай")
// }
// if((isRoadClear === 'no') && (color ==='r')){
//     console.log("стій та чекай")
// }
// if(color === 'error'){
//     console.log("роби, що хочеш");
// }


//lesson 2 classwork

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// for (let i = 0; i < 10; i++) {
//     const arrayElement = [i];
//     document.write(`<div>${arrayElement}</div>`);
//
// }s

// for (let i = 0; i < 10; i++) {
//     const arrayElement = [i];
//     document.write(`<div>довільний текст + індекс:${[i]}</div>`);
//
// }

// let i = 0
// while ( i<20){
//     document.write(`<h1>dovilnu tekst ${i}</h1>`)
//     i++;
// }

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи


// arr = [3, 5, 7, 'wrr', 'wrr', 'tuesday', true, false, true]
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     if(typeof (arrElement) === "boolean"){
//         document.write(`<div>myboolean: ${arrElement}</div>`)
//     }
//
// }
//
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     if(typeof (arrElement) === "number"){
//         document.write(`<div>mynumber: ${arrElement}</div>`)
//     }
//
// }
//
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     if(typeof (arrElement) === "string"){
//         document.write(`<div>mystring: ${arrElement}</div>`)
//     }
//
// }


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// let step = 0;
// for (let u = 0; u < 100; u++){
//     console.log(`step :`, step);
//     document.write(`step : ${step} <br>`);
//     step+=2;
// };

//
// for (let u = 0; u < 100; u++){
//     if(u%2 === 0 ) {
//         console.log(`step :`, u);
//         document.write(`step : ${u} <br>`);
//     }
// };


/*
            Використовуючи данні з масиву, за допомоги document.write та циклу
            побудувати структуру по шаблону template1.1
            */

// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// document.write(`<ul>`)
// for (let i = 0; i < listOfItems.length; i++) {
//     const listOfItem = listOfItems[i];
//     document.write(`<li> item of array ${listOfItem}</li>`)
//
// }
// document.write(`</ul>`)


/*
			Використовуючи данні з масиву, за допомоги document.write та циклу
			побудувати структуру по шаблону template2.1 & template2.2. Зробити адекватну стилізацію.
			Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон.
		    Шаблон застосувати до кожного об'єкта в масиві
			*/
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
//
// // for (let i = 0; i < simpsons.length; i++) {
// //     const simpson = simpsons[i];
// //     document.write(`<div>${simpson.name}-${simpson.surname}-${simpson.age}-${simpson.info}-<img src="${simpson.photo}"></div>`)
// // }
//
// for (let i = 0; i < simpsons.length; i++) {
//     const simpson = simpsons[i];
//     document.write(`<div>
//     <h2>${simpson.name} ${simpson.surname}. Age is - ${simpson.age}</h2>
//     <p>${simpson.info}</p>
//     <img src = '${simpson.photo}'>
// </div>`)

// }


///*
// 			Використовуючи данні з масиву, за допомоги document.write та циклу
//             побудувати структуру по шаблону template3.1 Зробити адекватну стилізацію
//             Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//                 */
// 			let products = [
// 				{
// 					title: 'milk',
// 					price: 22,
// 					image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
// 				},
// 				{
// 					title: 'juice',
// 					price: 27,
// 					image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
// 				},
// 				{
// 					title: 'tomato',
// 					price: 47,
// 					image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
// 				},
// 				{
// 					title: 'tea',
// 					price: 15,
// 					image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
// 				},
// 			];
//
//
// document.write(`<div class="products-box">`)
// for (let i = 0; i < products.length; i++) {
//     const product = products[i];
//     document.write(`
// <div class="product-card">
// <h3 class="product-title">${product.title}. Price- ${product.price}UAH
// </h3>
// <img src="${product.image}" alt="">
// </div>`)
// }
// document.write(`</div>`)


//additional

/*За допомогою циклу вивести всю інформацію про користувачів використовуючи шаблон Template 1.1
			* за допомоги стилів, побудувати сітку по 2 об'єкта в лінію
			*
			* */
//
// let usersList = [
//     {
//         id: 1,
//         name: 'Leanne Graham',
//         username: 'Bret',
//         email: 'Sincere@april.biz',
//         address: {
//             street: 'Kulas Light',
//             suite: 'Apt. 556',
//             city: 'Gwenborough',
//             zipcode: '92998-3874',
//             geo: {
//                 lat: '-37.3159',
//                 lng: '81.1496'
//             }
//         },
//         phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//         company: {
//             name: 'Romaguera-Crona',
//             catchPhrase: 'Multi-layered client-server neural-net',
//             bs: 'harness real-time e-markets'
//         }
//     },
//     {
//         id: 2,
//         name: 'Ervin Howell',
//         username: 'Antonette',
//         email: 'Shanna@melissa.tv',
//         address: {
//             street: 'Victor Plains',
//             suite: 'Suite 879',
//             city: 'Wisokyburgh',
//             zipcode: '90566-7771',
//             geo: {
//                 lat: '-43.9509',
//                 lng: '-34.4618'
//             }
//         },
//         phone: '010-692-6593 x09125',
//         website: 'anastasia.net',
//         company: {
//             name: 'Deckow-Crist',
//             catchPhrase: 'Proactive didactic contingency',
//             bs: 'synergize scalable supply-chains'
//         }
//     },
//     {
//         id: 3,
//         name: 'Clementine Bauch',
//         username: 'Samantha',
//         email: 'Nathan@yesenia.net',
//         address: {
//             street: 'Douglas Extension',
//             suite: 'Suite 847',
//             city: 'McKenziehaven',
//             zipcode: '59590-4157',
//             geo: {
//                 lat: '-68.6102',
//                 lng: '-47.0653'
//             }
//         },
//         phone: '1-463-123-4447',
//         website: 'ramiro.info',
//         company: {
//             name: 'Romaguera-Jacobson',
//             catchPhrase: 'Face to face bifurcated interface',
//             bs: 'e-enable strategic applications'
//         }
//     },
//     {
//         id: 4,
//         name: 'Patricia Lebsack',
//         username: 'Karianne',
//         email: 'Julianne.OConner@kory.org',
//         address: {
//             street: 'Hoeger Mall',
//             suite: 'Apt. 692',
//             city: 'South Elvis',
//             zipcode: '53919-4257',
//             geo: {
//                 lat: '29.4572',
//                 lng: '-164.2990'
//             }
//         },
//         phone: '493-170-9623 x156',
//         website: 'kale.biz',
//         company: {
//             name: 'Robel-Corkery',
//             catchPhrase: 'Multi-tiered zero tolerance productivity',
//             bs: 'transition cutting-edge web services'
//         }
//     },
//     {
//         id: 5,
//         name: 'Chelsey Dietrich',
//         username: 'Kamren',
//         email: 'Lucio_Hettinger@annie.ca',
//         address: {
//             street: 'Skiles Walks',
//             suite: 'Suite 351',
//             city: 'Roscoeview',
//             zipcode: '33263',
//             geo: {
//                 lat: '-31.8129',
//                 lng: '62.5342'
//             }
//         },
//         phone: '(254)954-1289',
//         website: 'demarco.info',
//         company: {
//             name: 'Keebler LLC',
//             catchPhrase: 'User-centric fault-tolerant solution',
//             bs: 'revolutionize end-to-end systems'
//         }
//     },
//     {
//         id: 6,
//         name: 'Mrs. Dennis Schulist',
//         username: 'Leopoldo_Corkery',
//         email: 'Karley_Dach@jasper.info',
//         address: {
//             street: 'Norberto Crossing',
//             suite: 'Apt. 950',
//             city: 'South Christy',
//             zipcode: '23505-1337',
//             geo: {
//                 lat: '-71.4197',
//                 lng: '71.7478'
//             }
//         },
//         phone: '1-477-935-8478 x6430',
//         website: 'ola.org',
//         company: {
//             name: 'Considine-Lockman',
//             catchPhrase: 'Synchronised bottom-line interface',
//             bs: 'e-enable innovative applications'
//         }
//     },
//     {
//         id: 7,
//         name: 'Kurtis Weissnat',
//         username: 'Elwyn.Skiles',
//         email: 'Telly.Hoeger@billy.biz',
//         address: {
//             street: 'Rex Trail',
//             suite: 'Suite 280',
//             city: 'Howemouth',
//             zipcode: '58804-1099',
//             geo: {
//                 lat: '24.8918',
//                 lng: '21.8984'
//             }
//         },
//         phone: '210.067.6132',
//         website: 'elvis.io',
//         company: {
//             name: 'Johns Group',
//             catchPhrase: 'Configurable multimedia task-force',
//             bs: 'generate enterprise e-tailers'
//         }
//     },
//     {
//         id: 8,
//         name: 'Nicholas Runolfsdottir V',
//         username: 'Maxime_Nienow',
//         email: 'Sherwood@rosamond.me',
//         address: {
//             street: 'Ellsworth Summit',
//             suite: 'Suite 729',
//             city: 'Aliyaview',
//             zipcode: '45169',
//             geo: {
//                 lat: '-14.3990',
//                 lng: '-120.7677'
//             }
//         },
//         phone: '586.493.6943 x140',
//         website: 'jacynthe.com',
//         company: {
//             name: 'Abernathy Group',
//             catchPhrase: 'Implemented secondary concept',
//             bs: 'e-enable extensible e-tailers'
//         }
//     },
//     {
//         id: 9,
//         name: 'Glenna Reichert',
//         username: 'Delphine',
//         email: 'Chaim_McDermott@dana.io',
//         address: {
//             street: 'Dayna Park',
//             suite: 'Suite 449',
//             city: 'Bartholomebury',
//             zipcode: '76495-3109',
//             geo: {
//                 lat: '24.6463',
//                 lng: '-168.8889'
//             }
//         },
//         phone: '(775)976-6794 x41206',
//         website: 'conrad.com',
//         company: {
//             name: 'Yost and Sons',
//             catchPhrase: 'Switchable contextually-based project',
//             bs: 'aggregate real-time technologies'
//         }
//     },
//     {
//         id: 10,
//         name: 'Clementina DuBuque',
//         username: 'Moriah.Stanton',
//         email: 'Rey.Padberg@karina.biz',
//         address: {
//             street: 'Kattie Turnpike',
//             suite: 'Suite 198',
//             city: 'Lebsackbury',
//             zipcode: '31428-2261',
//             geo: {
//                 lat: '-38.2386',
//                 lng: '57.2232'
//             }
//         },
//         phone: '024-648-3804',
//         website: 'ambrose.net',
//         company: {
//             name: 'Hoeger LLC',
//             catchPhrase: 'Centralized empowering task-force',
//             bs: 'target end-to-end models'
//         }
//     }
// ];
//
// document.write(`<div class="users-box">`)
// for (let i = 0; i < usersList.length; i++) {
//     const usersListElement = usersList[i];
//     document.write(`<div class="user-block">
//                 <h2>${usersListElement.id} - ${usersListElement.name} - ${usersListElement.username} </h2>
//                 <h3>${usersListElement.email} - ${usersListElement.phone}</h3>
//                 <div class="address-block">
//                     <p>City - ${usersListElement.address.city}</p>
//                     <p>Street - ${usersListElement.address.street}</p>
//                     <p>Suite - ${usersListElement.address.suite}</p>
//                     <p>Zip code - ${usersListElement.address.zipcode}</p>
//                     </div>
//                 </div>`)
// }
// document.write(`</div>`)

//- Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
//
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив


// for (let i = 0; i < usersWithId.length; i++) {
//     const users = usersWithId[i];
//     for (let j = 0; j < citiesWithId.length; j++) {
//         const cities = citiesWithId[j];
//         if (users.id === cities.user_id) {
//             usersWithCities = users;
//             usersWithCities.address = cities;
//
//         }
//     }
//     console.log(usersWithCities);
// }

//8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let arr = [true,false,6,87,43,345,'putin','hyulo']
// let number = []
// for (const arrElement of arr) {
//     if(typeof(arrElement) ==="number" ){
//         number.push(arrElement);
//     }
//
// }
// console.log(number);
