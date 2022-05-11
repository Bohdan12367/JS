// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
//     b) робить шириниу елементу ul 400px
//     c) робить шириниу всіх елементів з класом linkList шириною 50%
//     d) отримує текст який зберігається в елементі з класом listElement2
//     e) отримує всі елементи li та змінює ім колір фону на сірий

//  let color = document.getElementById('main_header');
// console.log(color)
// color.style.color = '#1234';
//
// let width = document.getElementsByTagName('ul');
// console.log(width)
// for (const widthElement of width) {
//     widthElement.style.width = "400px";
// }

// let width = document.getElementsByClassName('linkList');
// for (const widthElement of width) {
//     widthElement.style.width = '50%';
//     widthElement.style.background = 'red';
// }

// let list_el=document.getElementsByClassName('listElement2');
// let list_element=list_el[0];
// console.log(list_element.innerText);

// let li_elem = document.getElementsByTagName('li');
// for (const liElemElement of li_elem) {
//     liElemElement.style.background = 'red';
// }

//- Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

// const form  =document.forms.itemForm;
// const name = form.name;
// const price = form.price;
// const image = form.image;
// const submits = form.submits;
//
// submits.onclick = function (ev){
//     ev.preventDefault();
//
// }












function WakeUp(time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        if(time<7.10){
            console.log('можна спати');
            reject('спи');
        }else{
            console.log('Початок робочого дня')
            resolve('Добрий ранок')
        }
        },300)
    });
}

function Breakfast(food){
    return new Promise( (resolve,reject) =>{
        setTimeout(()=>{
            if(food==='egg'){
                console.log('Сьогодні буде омлет');
                reject('знову те саме');
            }
            else {
                console.log('Сьогодні на сніданок шедевррр');
                resolve('Смачного)');
            }
        },1000)
    })
}

function  Shower(waterTemp){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            console.log('welcome to the Shower')
            if (waterTemp === 'cold') {
                console.log('Не включили теплу воду');
                reject('Знову холодно...');

            } else {
                console.log('Ура,тепла вода');
                resolve('В мене гарний настрій від теплої води')
            }
        },500);
    })

}

function Bus(NumberBus){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Вітаємо вас на зупинці!')
            if(NumberBus===12){
                console.log('Не наш автобус');
                reject('не сідати');
            }else{
                console.log('Ура! Наш автобус')
                resolve('Автобус до роботи')
            }
        },3000)
    })
}

function Dinner(food){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Вітаємо вас у їдальні')
            if (food==='hamburger'){
                console.log('не смачна їжа');
                reject('можливий гастрит');
            }else {
                console.log('Смачний та ситний обід')
                resolve(food);
            }
        },1000)
    })
}

function English(homework){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Welcome to EnglishClub!');
            if(homework===false){
                console.log('Виконай домашнє наступного разу!')
                reject('Погано так робити!');
            }else {
                console.log('Давай перевіримо домашнє завдання')
                resolve('Молодець,домашнє зроблене правильно');
            }
        },2000)
    })
}
function GoToHome(Money){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Час їхати додому');
            if(Money<50){
                console.log('У тебе мало грошей,прийдетьс маршруткою додому');
                reject('заробляй більше!');
            }
            else {
                console.log('Сьогодні можна і на таксі');
                resolve('У нас достатьно грошей на таксі');
            }
        },1000)
    })
}

function Dog(weather){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Треба вигули собаку');
            if(weather==='rain'){
                console.log('Bad weather');
                reject('сьогодні сидимо дома');
            }
            else {
                console.log('Good weather');
                resolve('lets go!');
            }
        },200)
    })
}

function WatchCinema(Time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Вітаємо вас на переглді фільму')
            if(Time>21){
                console.log('треба спати');
                reject('Фільму не буде,бо пізно');
            }
            else {
                console.log('Приємного перегляду');
                resolve('Сьогодні ми глянемо фільм!');
            }
        },800);
    })

}

function GoToSleep(Time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('нас чекають сни')
            if (Time<23){
                console.log('спати зарано');
                reject('можна ще повчитись');
            }
            else {
                console.log('час спати');
                resolve('Надобраніч!');
            }
        },600)

    })
}
WakeUp(7.20)
    .then(value =>{
        console.log(value);
        return Breakfast('bread');
    } )
    .then(value => {
        console.log(value);
        return Shower('hot');
    })
    .then(value => {
        console.log(value);
        return Bus(112);
    })
    .then(value => {
        console.log(value);
        return Dinner('borsch');
    })
    .then(value => {
        console.log(`Я люблю їсти ${value}`);
        return English(true);
    })
    .then(value => {
        console.log(value);
        return GoToHome(90);
    })
    .then(value => {
        console.log(value);
        return Dog('sun');
    })
    .then(value => {
        console.log(value);
        return WatchCinema(20);
    })
    .then(value => {
        console.log(value);
        return GoToSleep(23);
    })
    .then(value => {
        console.log(value);
    })

    .catch(reason => {
        console.log('error day')
        console.log(reason);
    })
