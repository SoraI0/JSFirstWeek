function correctnes(a) {
	let isTrue = false;
	while (!isTrue) {
		if (a !== null && a.length > 0 && a.length <= 50) {
			isTrue = true;
		} else {
			a = window.prompt('Помилка. Уведіть ще раз:', '');
		}
	}
	return a;
}

let numberOfFilms = correctnes(window.prompt('Скільки фільмів ви вже переглянули?', ''));

const personalMovieDB = {
	count: +numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

for (i = 0; i < personalMovieDB.count; i++) {
	let film, score;
	film = correctnes(window.prompt(`${i + 1} Уведіть назву фільму:`, ''));
	score = correctnes(window.prompt(`${i + 1} Уведіть оцінку:`, ''));
	personalMovieDB.movies[film] = +score;
}

console.log(personalMovieDB.movies);
if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
	console.log('Переглянуто доволі мало фільмів');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count === 30) {
	console.log('Ви дефолтний глядач');
} else if (personalMovieDB.count > 30) {
	console.log('Ви кіноман');
} else {
	console.log('Відбулась помилка');
}



