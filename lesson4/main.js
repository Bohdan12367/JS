//classwork

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// class Client{
//     constructor(id,name,surname,email,phone,order= []) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// let arr =[];
// let Client1 = new Client(123,'Vasya1','Qwerty','luasevicboda@gmail.com',992310,['apple','apple','ananas','road']);
// let Client2 = new Client(1234,'Vasya2','Qwerty','luasevicboda@gmail.com',992310,['apple','ananas']);
// let Client3 = new Client(1235,'Vasya3','Qwerty','luasevicboda@gmail.com',992310,['apple','ananas','road']);
// arr.push(Client1,Client2,Client3);
// console.log(arr);
//
// let sort = arr.sort(function (current,next){
//     return current.order.length - next.order.length;
// })
// console.log(sort);


//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//     -- info () - яка виводить всю інформацію про автомобіль
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function Car(model, maker, year, maxSpeed, capacity){
//     this.model = model;
//     this.maker = maker;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.capacity = capacity;
// }
// let car = new Car('camry','toyota',1999,200,15);
//     function drive(){
//     console.log(`Їдемо зі швидкістю ${car.maxSpeed} на годину`);
//     }
//     function info(){
//     console.log(car);
//     }
//     function increaseMaxSpeed (newSpeed){
//         car.maxSpeed+=newSpeed;
//         console.log(car.maxSpeed);
//     }
//     function changeYear (newValue){
//         car.year = newValue;
//         console.log(car.year);
//     }
//     function addDriver (name){
//         let driver = name;
//         car.driver = driver;
//         console.log(car);
//     }
//     drive();
//     info();
//     increaseMaxSpeed(100);
//     changeYear(2021);
//     addDriver('evgen');
//


//(Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//     -- info () - яка виводить всю інформацію про автомобіль
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class Car {
//
//     constructor(model, maker, year, maxSpeed, capacity) {
//         this.model = model;
//         this.maker = maker;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.capacity = capacity;
//     }
//     drive(){
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed}`)
//     }
//     info(){
//         console.log(this);
//     }
//     increaseMaxSpeed (newSpeed){
//         this.maxSpeed+=newSpeed;
//         return this.maxSpeed;
//     }
//     addDriver (name,surname){
//         let driver = {driverName:name,driverSurname:surname}
//         this.driver =driver;
//         return car;
//     }
//
//
// }
// let car = new Car('camry','toyota',1999,200,15);
// car.drive();
// car.info();
// console.log(car.increaseMaxSpeed(200));
// console.log(car.addDriver('igor','demnok'));
//


//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Popel{
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//
//     }
//
// }
// let cinderellas=[
//     new Popel('tamara1',15,36),
//     new Popel('tamara2',13,33),
//     new Popel('tamara3',19,36),
//     new Popel('tamara4',23,34),
//     new Popel('tamara5',17,39),
//     new Popel('tamara6',18,40),
//     new Popel('tamara7',22,33),
//     new Popel('tamara8',26,36),
// ];
// class Princ{
//     constructor(name, age, size_boots) {
//         this.name = name;
//         this.age = age;
//         this.size_boots = size_boots;
//     }
// }
// let princ = new Princ('Igor',20,33);
// for (const cinderella of cinderellas) {
//     if(cinderella.size === princ.size_boots){
//         console.log(`Саме ${cinderella.name} має бути з принцом`);
//     }
// }
// let find = cinderellas.find( function (arr){
//         return arr.size = princ.size_boots;
// })
// console.log(find);


//homework

//- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.
//
// let a = []
// function randomNumber(){
//     for (let i = 0; i < 100; i++) {
//         a.push(Math.round(Math.random() * 100));
//     }
//         return a;
//
// }
// console.log(randomNumber());

// let a = []
// function randomNumber(max,min){
//     for (let i = 0; i < 10; i++) {
//         a.push(Math.round(Math.random() * (max-min)+min));
//     }
//     return a;
//
// }
// console.log(randomNumber(20,10));

//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.

// let a = []
// function randomNumber(max,min){
//     for (let i = 0; i < 10; i++) {
//         a.push(Math.round(Math.random() * (max-min)+min));
//     }
//     return a;
//
// }
// randomNumber(20,10);
//
// let sort = a.sort(function (current,next){
//     return current-next;
// })
// console.log(sort);
//
// let filter  = a.filter(function (arr){
//   if(arr%2 === 0){
//       return arr;
//   }
// })
// console.log(filter);
//
// let map = a.map(mapCallback)
// function mapCallback(arr){
//     arr = 'h';
//     return arr;
// }
// console.log(map);

// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)

//additional
//- Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// class Users{
//     constructor(id,name,email,address,phone) {
//         this.id = id;
//         this.name = name;
//         this.email = email;
//         this.address = address;
//         this.phone = phone;
//     }
// }
// class addresses {
//     constructor(street,suite) {
//         this.street = street;
//         this.suite = suite;
//     }
// }
// let address = new addresses('vul',23);
// let user = new Users(1,'bodia','lukas',address,'0992310')
//
// console.log(user)


