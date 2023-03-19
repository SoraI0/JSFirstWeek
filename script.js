const numberOfFilms = +window.prompt("Скільки фільмів ви вже переглянули?", "Уведіть кількість");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = window.prompt("Введіть назву останнього переглянутого фільму:"),
	b = +window.prompt("На скільки оціните його?"),
	c = window.prompt("Введіть назву останнього переглянутого фільму:"),
	d = +window.prompt("На скільки оціните його?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB.movies)


