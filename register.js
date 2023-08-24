const options = users.map(u => `<option value="${u.id}">${u.name}</option>`).join('');
const player0 = document.querySelector('#player0');
const player1 = document.querySelector('#player1');
const player0Score = document.querySelector('#player0Score');
const player1Score = document.querySelector('#player1Score');
const gameDate = document.querySelector('#gameDate');
const btRegister = document.querySelector('#registerGame button');

[player0, player1].forEach(p => p.innerHTML = options);
function checkInputs() {
	if (gameDate.value && player0.value && player1.value && player0.value != player1.value) return true;
	else return false;
}

btRegister.onclick = (e) => {
	e.preventDefault();

	if (!checkInputs()) return alert('check inputs!');

	let sets = [];
	let parts = gameDate.value.split("-");
	let date = new Date(parts[0], parts[1] - 1, parts[2]);
	console.log('date => ', date);

	let numSets = Number(player0Score.value) + Number(player1Score.value);
	let winner = Number(player0Score.value) > Number(player1Score.value) ? 'player0' : 'player1';
	if (winner == 'player0') {
		for (let i = 0; i < Number(player0Score.value); i++) {
			sets.push({ player0: 11, player1: 0 })
		}
		for (let i = 0; i < numSets - Number(player0Score.value); i++) {
			sets.push({ player0: 0, player1: 11 })
		}
	}
	else if (winner == 'player1') {
		for (let i = 0; i < Number(player1Score.value); i++) {
			sets.push({ player0: 0, player1: 11 })
		}
		for (let i = 0; i < numSets - Number(player1Score.value); i++) {
			sets.push({ player0: 11, player1: 0 })
		}
	}

	const res = {
		dtRegister: date.getTime(),
		players: [Number(player0.value), Number(player1.value)],
		sets
	};

	newGames.push(res);
	console.log('newGames => ', newGames);
	gamesData.unshift(res);
	update();
}
let newGames = [];