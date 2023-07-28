const users = [
	{ id: 1, name: 'Edson' },
	{ id: 2, name: 'Hélio' },
	{ id: 3, name: 'Ylem' },
	{ id: 4, name: 'Francisco' },
	{ id: 5, name: 'Hugo' },
	{ id: 6, name: 'João' },
	{ id: 7, name: 'Leonardo' },
	{ id: 8, name: 'Julia' },
	{ id: 9, name: 'Henrique' },
	{ id: 10, name: 'Daniel' },
	{ id: 11, name: 'Victor' },
	// Adicionar outros jogadores com seus IDs e nomes
];

const gamesData = [
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
]
