import API from "./data.js";
import renderJournalEntries from "./entriesDOM.js";

// API.getJournalEntries().then(renderJournalEntries);
API.getJournalEntries().then((entries) => renderJournalEntries(entries));

const id = document.getElementById("journalId");
const date = document.getElementById("journalDate");
const concept = document.getElementById("conceptsCovered");
const comment = document.getElementById("entryComment");
const mood = document.getElementById("moodDay");

const newJournalEntry = (date, concept, comment, mood) => ({
	date: date,
	concept: concept,
	comment: comment,
	mood: mood,
});

document
	.querySelector(".button__saveEntry")
	.addEventListener("click", (event) => {
		const editedEntry = {
			date: document.querySelector("#journalDate").value,
			concept: document.querySelector("#conceptsCovered").value,
			comment: document.querySelector("#entryComment").value,
			mood: document.querySelector("#moodDay").value,
		};
		function clearForm() {
			date.value = "";
			concept.value = "";
			comment.value = "";
			mood.value = "";
		}
		event.preventDefault();
		if (
			document.querySelector("#conceptsCovered").checkValidity() == false ||
			document.querySelector("#entryComment").checkValidity() == false
		) {
			window.alert("Type right ya dummy.");
		} else if (document.getElementById("journalId").value !== "") {
			API.editJournalEntry(
				editedEntry,
				document.getElementById("journalId").value
			)
				.then(() => API.getJournalEntries())
				.then((entries) => {
					document.querySelector(".entryLog").innerHTML = "";
					renderJournalEntries(entries);
					clearForm();
				});
		} else {
			if (
				document.querySelector("#journalDate").value !== "" &&
				document.querySelector("#conceptsCovered").value !== "" &&
				document.querySelector("#entryComment").value !== "" &&
				document.querySelector("#moodDay").value !== ""
			) {
				const date = document.querySelector("#journalDate").value;
				const concept = document.querySelector("#conceptsCovered").value;
				const comment = document.querySelector("#entryComment").value;
				const mood = document.querySelector("#moodDay").value;
				API.saveJournalEntry(newJournalEntry(date, concept, comment, mood))
					.then(() => API.getJournalEntries())
					.then((entries) => {
						document.querySelector(".entryLog").innerHTML = "";
						renderJournalEntries(entries);
						clearForm();
					});
			} else window.alert("Why ya do dat? Do it right.");
		}
	});
const radioButton = document.getElementsByName("moodDayFilter");
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
	if (event.target.id.startsWith("editButton--")) {
		const entryID = event.target.id.split("--")[1];
		API.getJournalEntryById(entryID).then((entry) => {
			prefillEdit(entry);
		});
	}
	const id = document.getElementById("journalId");
	const date = document.getElementById("journalDate");
	const concept = document.getElementById("conceptsCovered");
	const comment = document.getElementById("entryComment");
	const mood = document.getElementById("moodDay");

	const prefillEdit = (entry) => {
		id.value = entry.id;
		date.value = entry.date;
		concept.value = entry.concept;
		comment.value = entry.comment;
		mood.value = entry.mood;
	};
});
