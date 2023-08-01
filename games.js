function calculateStats(playerId, gamesData) {
	const player = users.find(user => user.id === playerId);

	if (!player) {
		return null; // Jogador não encontrado, retorna null
	}

	const playerStats = gamesData.reduce((stats, game) => {
		const playerIndex = game.players.indexOf(playerId);

		if (playerIndex !== -1) {
			const setsWon = game.sets.filter(set => set[`player${playerIndex}`] > set[`player${1 - playerIndex}`]).length;
			const setsLost = game.sets.length - setsWon;

			stats.totalGames++;
			stats.setsWon += setsWon;
			stats.setsLost += setsLost;
			stats.wins += setsWon > setsLost ? 1 : 0;
			stats.losses += setsWon < setsLost ? 1 : 0;
		}

		return stats;
	}, {
		id: player.id,
		name: player.name,
		wins: 0,
		losses: 0,
		totalGames: 0,
		setsWon: 0,
		setsLost: 0
	});

	const { initialPoints, winPoints, lossPoints } = pointsConfig;
	const totalWinsPoints = playerStats.wins * winPoints;
	const totalLossesPoints = playerStats.losses * lossPoints;
	playerStats.points = totalWinsPoints - totalLossesPoints + initialPoints;
	playerStats.pointsPerGames = Math.round(playerStats.points / playerStats.totalGames);
	playerStats.winPercent = parseFloat(((playerStats.wins / playerStats.totalGames) * 100).toFixed(2));

	return playerStats;
}

const pointsConfig = {
	initialPoints: 100, // Defina o valor inicial desejado aqui
	winPoints: 10,
	lossPoints: 2
};

const playerStatistics = users.map(user => calculateStats(user.id, gamesData));
playerStatistics.sort((a, b) => b.points - a.points);
// playerStatistics.sort((a, b) => b.performance - a.performance);
console.log('playerStatistics => ', playerStatistics);


function createDataTable(elementId, data, columns) {
	const table = new Tabulator(elementId, {
		data: data,
		columns: columns,
		layout: "fitColumns",
		resizableColumns: false,
		selectable: false,
	});
}



// Chama a função para criar a tabela com os dados de estatísticas dos jogadores
createDataTable('#ttStats', playerStatistics,
	[
		// { title: 'ID', field: 'id' },
		{ title: 'Nome', field: 'name' }, // Se quiser manter a coluna "ID" no final, você pode deixá-la aqui
		{ title: 'Pts', field: 'points' },
		{ title: 'Pts/J', field: 'pointsPerGames' },
		{ title: '%V', field: 'winPercent' },
		{ title: 'V', field: 'wins' },
		{ title: 'D', field: 'losses' },
		{ title: 'J', field: 'totalGames' },
		{ title: 'Sets ganhos', field: 'setsWon' },
		{ title: 'Sets perdidos', field: 'setsLost' },
	]
);


let elems = gamesData.map(game => {
	const player0Id = game.players[0];
	const player1Id = game.players[1];

	const player0Name = users.find(user => user.id === player0Id).name;
	const player1Name = users.find(user => user.id === player1Id).name;

	const player0SetsWon = game.sets.reduce((count, set) => count + (set.player0 > set.player1 ? 1 : 0), 0);
	const player1SetsWon = game.sets.reduce((count, set) => count + (set.player1 > set.player0 ? 1 : 0), 0);

	const dateText = new Date(game.dtRegister).toLocaleDateString();

	return `
	<li>
		<span>${dateText}</span>
		<div class='matchColumn'>
			<div class='playerName'>${player0Name}</div>
			<div class='playerSets'>${player0SetsWon}</div>	
		</div>
		<div class='matchColumn'>
			<div class='playerName'>${player1Name}</div>
			<div class='playerSets'>${player1SetsWon}</div>	
		</div>
	</li>
`
});

document.querySelector('#ttHistory ol').innerHTML = elems.join('');



function calculateMatchStats(playerRating, opponentRating) {	//Order of args matters !

	const expectedScore = 1 / (1 + 10 ** ((opponentRating - playerRating) / 400))	// the expectated score for player A acording to ELO system;

	const k = 32;	// scaling factor
	const scoreChange = { win: k * (1 - expectedScore), loss: -k * expectedScore }

	return scoreChange;
}

console.log('calculateMatchStats(2000,1700) => ', calculateMatchStats(100, 100));







