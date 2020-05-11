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

	getJournalEntryById(entryID) {
		return fetch(`http://localhost:8088/entries/${entryID}`).then((response) =>
			response.json()
		);
	},

	editJournalEntry(entry, entryID) {
		return fetch(`http://localhost:8088/entries/${entryID}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(entry),
		})
			.then((response) => response.json())
			.then(() => (document.getElementById("journalId").value = ""));
	},
};

export default API;
