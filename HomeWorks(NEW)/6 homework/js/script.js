/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */
window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let adv = document.querySelectorAll('.promo__adv img');
    let genre = document.querySelector('.promo__genre');
    let bg = document.querySelector('.promo__bg');
    let movieList = document.querySelector('.promo__interactive-list');
    let addInput = document.querySelector('.adding__input');
    let addForm = document.querySelector('form.add');
    let checkBox = document.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', function () {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkBox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0,22)}...`;
            }

            if (favorite) {
                console.log('Добавляем любимый фильм');
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);

            addForm.reset();
        }

    });



    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    // убрал рекламу
    const deleteAdv = (arr) => {
        adv.forEach(item => {
            item.remove();
        });
    };

    // поменял жанр и фон
    const makeChanges = () => {
        genre.textContent = 'Драма';
        bg.style.backgroundImage = `url('img/bg.jpg')`;
    };


    // сортировка фильмов по алфавиту и нумирация
    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        movieList.innerHTML = '';
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `<li class="promo__interactive-item">${i + 1} ${film}
    <div class="delete"></div>
</li>`;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(movieDB.movies, movieList);
            });
        });
    }


    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
});