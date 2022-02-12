'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    while ( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function remeberMyFilms() {
    for(let i = 0; i < 2; i++) {
        let film1 = prompt('Один из последних просмотреных фильмов?'),
            grade1 = +prompt('На сколько оцените?');
 
         if(film1 != null && grade1 != null && film1 != '' && grade1 != '' && film1.length < 50){
             personalMovieDB.movies[film1] = grade1;
         } else{
             i--;
         }
         
    }
}

remeberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        alert('Вы посмотрели мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        alert('Вы класический зритель');
    } else if(personalMovieDB.count > 30){
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB () {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}


function writeYoureGenres (arr) {
    for(let i = 1; i < 4; i++) {
        let favoritGenres = prompt(`Ваш любимый жанр под номером ${i}`, '');

        if(favoritGenres == null || favoritGenres == '') {
            i--;
        } else {
            arr.push(favoritGenres);
        }
    }
}

writeYoureGenres(personalMovieDB.genres);

showMyDB();



