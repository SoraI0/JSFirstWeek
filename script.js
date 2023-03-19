function correctnes(a, ifNuN) {
	let isTrue = false;
	if (ifNuN) {
		while (!isTrue) {
			if (a !== null && a.length > 0 && a.length <= 50) {
				isTrue = true;
			} else {
				a = window.prompt('Помилка. Уведіть ще раз:', '');
			}
		}
	} else {
		while (!isTrue) {
			if (a !== null && a !== '' && !isNaN(a)) {
				isTrue = true;
			} else {
				a = window.prompt('Помилка. Уведіть ще раз:', '');
			}
		}
	}
	return a;
}

function detectPersonalLevel() {
	if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
		console.log('Переглянуто доволі мало фільмів');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count === 30) {
		console.log('Ви дефолтний глядач');
	} else if (personalMovieDB.count > 30) {
		console.log('Ви кіноман');
	} else {
		console.log('Відбулась помилка');
	}
}

function showMyDB(isPrivat, movies) {
	if (isPrivat) {
		return;
	}
	console.log(movies);
}

function writeMyGenres() {
	let genres = [];
	for (let i = 0; i < 3; i++) {
		genres[i] = window.prompt(`Ваш улюблений жанр під номером ${i + 1}`);
	}
	return genres;
}

function rememberMyFilm() {
	for (let i = 0; i < personalMovieDB.count; i++) {
		let film, score;
		film = correctnes(window.prompt(`${i + 1} Уведіть назву фільму:`, ''), true);
		score = correctnes(window.prompt(`${i + 1} Уведіть оцінку:`, '', false));
		personalMovieDB.movies[film] = +score;
	}
}

let numberOfFilms = correctnes(window.prompt('Скільки фільмів ви вже переглянули?', ''), false);

const personalMovieDB = {
	count: +numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

rememberMyFilm()
detectPersonalLevel();
showMyDB(personalMovieDB.privat, personalMovieDB);
personalMovieDB.genres = writeMyGenres();







