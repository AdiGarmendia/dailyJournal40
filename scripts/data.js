const API = {
	getJournalEntries() {
		return fetch("http://localhost:8088/entries").then((response) =>
			response.json()
		);
	},

	saveJournalEntry(newJournalEntry) {
		return fetch("http://localhost:8088/entries", {
			// Replace "url" with your API's URL
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newJournalEntry),
		});
	},
	deleteJournalEntry(entryID) {
		return fetch(`http://localhost:8088/entries/${entryID}`, {
			method: "DELETE",
		}).then((response) => response.json());
	},
};

export default API;
