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
				const date = document.querySelector("#journalDate").value;
				const concept = document.querySelector("#conceptsCovered").value;
				const entry = document.querySelector("#entryComment").value;
				const mood = document.querySelector("#moodDay").value;
				API.saveJournalEntry(newJournalEntry(date, concept, entry, mood))
					.then(() => API.getJournalEntries())
					.then((data) => renderJournalEntries(data));
			} else window.alert("Why ya do dat? Do it right.");
		}
	});
const radioButton = document.getElementsByName("moodDay");
radioButton.forEach((moodFilter) => {
	moodFilter.addEventListener("click", (event) => {
		const mood = event.target.value;
		API.getJournalEntries().then((filteredEntries) => {
			let filteredResults = filteredEntries.filter(
				(entry) => entry.mood === mood
			);
			document.querySelector(".entryLog").innerHTML = "";
			renderJournalEntries(filteredResults);
		});
	});
});
document.querySelector(".entryLog").addEventListener("click", (event) => {
	if (event.target.id.startsWith("deleteButton--")) {
		const entryID = event.target.id.split("--")[1];
		API.deleteJournalEntry(entryID)
			.then(() => API.getJournalEntries())
			.then((entries) => {
				document.querySelector(".entryLog").innerHTML = "";
				renderJournalEntries(entries);
			});
	}
});
