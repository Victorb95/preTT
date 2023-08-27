const users = [
	{ id: 1, name: 'Edson', rating: 100 },
	{ id: 2, name: 'Hélio', rating: 100 },
	{ id: 3, name: 'Ylem', rating: 100 },
	{ id: 4, name: 'Francisco', rating: 100 },
	{ id: 5, name: 'Hugo', rating: 100 },
	{ id: 6, name: 'João', rating: 100 },
	{ id: 7, name: 'Leonardo', rating: 100 },
	{ id: 8, name: 'Julia', rating: 100 },
	{ id: 9, name: 'Henrique', rating: 100 },
	{ id: 10, name: 'Daniel', rating: 100 },
	{ id: 11, name: 'Victor', rating: 100 },
	{ id: 12, name: 'Angela', rating: 100 },
	{ id: 13, name: 'Fernando', rating: 100 },
	{ id: 14, name: 'Harley', rating: 100 },
	{ id: 15, name: 'Marcelo', rating: 100 },
	{ id: 16, name: 'Gabriel', rating: 100 },
	{ id: 17, name: 'Diego', rating: 100 },
	{ id: 18, name: 'Manfred', rating: 100 },
	{ id: 19, name: 'Davis', rating: 100 },
	// Adicionar outros jogadores com seus IDs e nomes
];

const gamesData = [
	{
		dtRegister: 1693105200000,
		players: [17, 12],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1693105200000,
		players: [16, 17],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1693105200000,
		players: [17, 3],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1693105200000,
		players: [5, 7],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1693105200000,
		players: [5, 16],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1693105200000,
		players: [3, 16],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1693105200000,
		players: [19, 12],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1693105200000,
		players: [12, 15],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1693105200000,
		players: [16, 12],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1693105200000,
		players: [7, 12],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1693105200000,
		players: [5, 3],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1693105200000,
		players: [3, 12],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1693105200000,
		players: [2, 15],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1693105200000,
		players: [2, 19],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1693105200000,
		players: [3, 15],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1693105200000,
		players: [19, 3],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1693105200000,
		players: [7, 3],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1693105200000,
		players: [2, 3],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1693105200000,
		players: [17, 5],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1693105200000,
		players: [17, 7],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1693018800000,
		players: [14, 7],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1693018800000,
		players: [14, 9],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1692500400000,
		players: [2, 5],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1692500400000,
		players: [18, 12],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1692500400000,
		players: [9, 11],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1692500400000,
		players: [9, 15],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1692500400000,
		players: [2, 11],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1692500400000,
		players: [11, 15],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1692500400000,
		players: [5, 11],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1692500400000,
		players: [2, 5],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1692500400000,
		players: [2, 9],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1692500400000,
		players: [2, 15],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1692500400000,
		players: [5, 18],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1692500400000,
		players: [5, 9],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1692500400000,
		players: [5, 15],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1692500400000,
		players: [5, 12],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1692500400000,
		players: [2, 16],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1692500400000,
		players: [16, 11],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1692500400000,
		players: [16, 15],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1692500400000,
		players: [16, 9],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1692500400000,
		players: [16, 5],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1692500400000,
		players: [12, 15],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1692500400000,
		players: [17, 12],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1692500400000,
		players: [16, 12],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1692500400000,
		players: [9, 12],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1692500400000,
		players: [2, 12],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1692500400000,
		players: [11, 12],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1691895600000,
		players: [12, 9],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1691895600000,
		players: [7, 9],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1691290800000,
		players: [5, 13],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1691290800000,
		players: [3, 15],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 1 },
		]
	},
	{
		dtRegister: 1691290800000,
		players: [12, 11],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1691290800000,
		players: [5, 15],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1691290800000,
		players: [13, 15],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1691290800000,
		players: [12, 15],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1691290800000,
		players: [13, 12],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1691290800000,
		players: [5, 12],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1691290800000,
		players: [11, 13],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1691290800000,
		players: [11, 5],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1691290800000,
		players: [11, 15],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1691290800000,
		players: [3, 13],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1691290800000,
		players: [3, 11],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1691290800000,
		players: [3, 12],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1691290800000,
		players: [3, 5],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
			{ player0: 0, player1: 11 },
		]
	},

	{
		dtRegister: 1690686000000,
		players: [3, 1],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},

	{
		dtRegister: 1690686000000,
		players: [14, 13],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},

	{
		dtRegister: 1690686000000,
		players: [14, 3],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1690686000000,
		players: [13, 12],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1690686000000,
		players: [7, 14],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1690686000000,
		players: [2, 7],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1690686000000,
		players: [1, 12],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1690686000000,
		players: [3, 13],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1690686000000,
		players: [14, 12],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1690686000000,
		players: [7, 13],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 1 },
		]
	},
	{
		dtRegister: 1690686000000,
		players: [12, 3],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 1 },
		]
	},
	{
		dtRegister: 1690686000000,
		players: [2, 1],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 1 },
		]
	},
	{
		dtRegister: 1690686000000,
		players: [7, 3],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1690686000000,
		players: [2, 12],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1690686000000,
		players: [2, 13],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1690686000000,
		players: [7, 12],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},







	{
		dtRegister: 1690081200000,
		players: [4, 9],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1690081200000,
		players: [5, 4],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1690081200000,
		players: [6, 9],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1690081200000,
		players: [9, 8],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1690081200000,
		players: [8, 6],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1690081200000,
		players: [5, 9],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1690081200000,
		players: [9, 1],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1690081200000,
		players: [1, 6],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1690081200000,
		players: [1, 8],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1690081200000,
		players: [5, 1],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
			{ player0: 0, player1: 11 },
		]
	},

	{
		dtRegister: 1689476400000,
		players: [6, 9],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1689476400000,
		players: [9, 8],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1689476400000,
		players: [2, 3],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1689476400000,
		players: [3, 11],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },

		]
	},
	{
		dtRegister: 1689476400000,
		players: [2, 10],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1689476400000,
		players: [8, 10],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1689476400000,
		players: [4, 9],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1689476400000,
		players: [3, 6],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1689476400000,
		players: [4, 3],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},

	{
		dtRegister: 1689476400000,
		players: [11, 9],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1689476400000,
		players: [3, 8],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1689476400000,
		players: [2, 6],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1689476400000,
		players: [4, 10],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1689476400000,
		players: [6, 10],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1689476400000,
		players: [2, 11],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1689476400000,
		players: [7, 9],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1689476400000,
		players: [3, 9],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1689476400000,
		players: [11, 7],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1689476400000,
		players: [3, 10],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1689476400000,
		players: [2, 9],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1689476400000,
		players: [7, 3],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 0, player1: 11 },
		]
	},
	{
		dtRegister: 1689476400000,
		players: [9, 10],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
	{
		dtRegister: 1689476400000,
		players: [11, 10],
		sets: [
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
			{ player0: 11, player1: 0 },
		]
	},
]
