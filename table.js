function createDataTable(data) {
	const columns = Object.keys(data[0]).map(key => ({ title: key, field: key }));
	const table = new Tabulator("#tennis-stats", {
		data: data,
		columns: columns,
		layout: "fitColumns",
		resizableColumns: false,
		selectable: false,
	});
}

// Chama a função para criar a tabela com os dados de estatísticas dos jogadores
createDataTable(playerStatistics);