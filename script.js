'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

console.log(personalMovieDB);

let film1 = prompt('Один из последних просмотреных фильмов?','');
let grade1 = +prompt('На сколько оцените его?','');
let film2 = prompt('Один из последних просмотреных фильмов?','');
let grade2 = +prompt('На сколько оцените его?','');

personalMovieDB.movies[film1] = grade1;
personalMovieDB.movies[film2] = grade2;


