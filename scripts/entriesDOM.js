import journalEntryComponent from "./entryComponent.js";

const renderJournalEntries = (entries) => {
	entries.forEach((entry) => {
		document.querySelector(".entryLog").innerHTML += journalEntryComponent(
			entry
		);
	});
};

export default renderJournalEntries;
