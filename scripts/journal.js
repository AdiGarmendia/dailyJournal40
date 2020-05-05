import API from "./data.js";
import renderJournalEntries from "./entriesDOM.js";

// API.getJournalEntries().then(renderJournalEntries);
API.getJournalEntries().then((entries) => renderJournalEntries(entries));

const newJournalEntry = (date, concept, comment, mood) => ({
	date: date,
	concept: concept,
	comment: comment,
	mood: mood,
});

document
	.querySelector(".button__saveEntry")
	.addEventListener("click", (event) => {
		event.preventDefault();
		if (
			document.querySelector("#conceptsCovered").checkValidity() == false ||
			document.querySelector("#entryComment").checkValidity() == false
		) {
			window.alert("Type right ya dummy.");
		} else {
			if (
				document.querySelector("#journalDate").value !== "" &&
				document.querySelector("#conceptsCovered").value !== "" &&
				document.querySelector("#entryComment").value !== "" &&
				document.querySelector("#moodDay").value !== ""
			) {
				let date = document.querySelector("#journalDate").value;
				let concept = document.querySelector("#conceptsCovered").value;
				let entry = document.querySelector("#entryComment").value;
				let mood = document.querySelector("#moodDay").value;
				API.saveJournalEntry(newJournalEntry(date, concept, entry, mood))
					.then(() => API.getJournalEntries())
					.then((data) => renderJournalEntries(data));
			} else window.alert("Why ya do dat? Do it right.");
		}
	});
