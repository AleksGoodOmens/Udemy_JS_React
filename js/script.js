"use strict";
// let number = 5;
// const leftBorderWidth = 1;

// number = 2;
// console.log(number);
// console.log(leftBorderWidth);

// const obj = {
//     a: 50
// };

// obj.a = 10;
// console.log(obj);

//! text style
// snake_case
// UPPER_SNAKE_CASE
// Kebab-case
// PascalCase

//! types of data
//! basic types
// let numbers = 45;           // numbers 1,2,3,4
// let stringVar = "Julia";    // string "name"
// let boolVar = true;         // boolean
// null - nothing
// undefined - something
// BigInt - to big number

//! special Objects
// massive [] //!"array"
// function
// date object
// regular выражения
// error

// let humanObj = { //! key: meaning,
//     name: "Julia",
//     age: 20,
//     isMarried: true,
// };
// console.log(humanObj.age);
// let arr = ['plum.png', 'orange.png', 6, {}, []];
// console.log(arr[2]);

// const arr = ['a', 'b', 'c'];
// console.log(arr[1]);

// const arrObj = {
//     0: 'a',
//     1: 'b',
//     2: 'c',

// };
// arrObj.b = '121341';
// arrObj[b] = '123456';

// const obj = { a: 1, b: 2 };
// const persona = {
//     'Anna': 500,
//     'Alice': 800
// };
//! methods for arr
// console.log(arrObj[2]);  //! take element with index 2
// console.log(arrObj['b']);

//!methods array



//! user interface
// const alertMessage = alert("hello");

// const res = confirm("are you okay");

// const answer = prompt("Are toy 18?", "placeholder 18");

// const userAnswers = [];
// userAnswers[0] = prompt('Tell me your Name');
// userAnswers[1] = prompt('Tell me your Surname');
// userAnswers[2] = prompt('Tell me your AgeS');

// alert(`Hello ${userAnswers[0]} ${userAnswers[1]} i am happy with you age ${userAnswers[2]}`);


//! Operators
//!!! Postfix
//  incr++
//  Decr--
//!!! Prefix
//  ++incr
//  --Decr
// let incr = 10,
//     decr = 10;
// console.log(` prefix ${++incr}, ${--decr}`);
// incr = 10;
// decr = 10;
// console.log(` postfix ${incr++}, ${decr--}`);

// //! symbol operator
// console.log(`5 % 2 = ${5 % 2}`);
// console.log(`5 * 2 === 10 ${5 * 2 === 10}`);
// const isChecked = true,
//     isClose = false;
// console.log(`operator isChecked && isClose ${isChecked && isClose}`);
// console.log(`operator isChecked || isClose ${isChecked || isClose}`);
// console.log(`5 + 2 != 7 ${5 + 2 != 7}`);
// console.log(`5 + 2 !== 7 ${5 + 2 !== 7}`);

//! I need complete githowto.com/ru
let numberOfFilms = +prompt("how many films you already seen?", " ");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
let latestMovie = prompt("which movie you see last time", "");
let movieMark = +prompt("which mark you give", '');
personalMovieDB.movies[latestMovie] = movieMark;

console.log(personalMovieDB);