/* Завдання на урок:

1) Клонувати репозиторій з готовим сайтом із GitHub на свій комп'ютер. У файлі "script.js" виконати завдання, що описані нижче. Після виконання кожного завдання комітити зміни.

2) Видалити всі рекламні блоки зі сторінки (права частина сайту).

3) Зберегти коміт та спробувати надіслати зміни на GitHub. Створити нову гілку із зміненим кодом у своєму GitHub. Надіслати посилання на гілку проєкту на власному репозиторії на GitHub через форму нижче.

4) За допомогою JS змінити жанр фільму, замінити "комедія" на "драма".

5) Змінити задній фон постера з фільмом на зображення "bg.jpg".  Воно лежить в папці img. Реалізувати тільки за допомогою JS.

6) Список фільмів на сторінці сформувати на підставі з даних у файлі "script.js". Відсо2тувати їх за алфавітом.

7) Додати нумерацію виведених фільмів.
 
8) Зберегти всі зміни і надіслати на GitHub.

*/


const movieDB = {
    movies: [
        "Душа",
        "Володар Перснів",
        "Джокер",
        "Тенет",
        "Гаррі Поттер і філософський камінь",
        "Гаррі Поттер і таємна кімната"
    ]
};

movieDB.movies.sort();

const list = document.querySelector('.promo__interactive-list');
list.innerHTML = '';

movieDB.movies.forEach(function(film, i){
    list.innerHTML += `<li class='promo__interactive-item'>${i+1}. ${film}
    <div class='delete'></div></li>`;

});




                        

//---------
const ads = document.querySelector('.promo__adv');
    cont= document.querySelector('.promo__content');
ads.remove();
cont.style.width = 'calc(100% - 300px)';
//-------
const genre = document.querySelector('.promo__genre');
genre.innerHTML = 'драма';
//=======
//const btn = document.querySelector('form.add button');
//btn.onclick = function(){
 //   alert('дякую, що натиснули на кнопку');
//};
// btn.addEventListener('click',function(){
//     alert('дякую, що натиснули на кнопку');
// },{once: true});

function createMovieList(films, parentElement){
    parentElement.innerHTML = "";
    films.forEach(function(film, i){
        parentElement.innerHTML += `<li class='promo__interactive-item'>${i+1}. ${film}
        <div class='delete'></div></li>`;
    
    });

}

const addForm = document.querySelector('form.add');

addForm.addEventListener('submit', function(event){
    event.preventDefault();

    let newFilm = addForm.querySelector('.adding__input').value;
    if (newFilm.length > 21){
        newFilm = newFilm.substring(0,22)+'...';
    }


    console.log(newFilm);
    
    movieDB.movies.push(newFilm);
    console.log(movieDB.movies);

    createMovieList(movieDB.movies, list);
    addForm.reset();
});
const bgPromo = document.querySelector('.promo__bg');

bgPromo.addEventListener('mouseover',function(event){
    event.currentTarget.style.background = 'url(img/bg.jpg) center center/cover no-repeat';
    event.currentTarget.style.transition = '.7s';
});
bgPromo.addEventListener('mouseout',function(event){
    event.currentTarget.style.background = 'url(img/mars.webp) center center/cover no-repeat';
    event.currentTarget.style.transition = '.7s';
});

