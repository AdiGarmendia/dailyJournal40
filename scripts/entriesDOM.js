import journalEntryComponent from "./entryComponent.js";

const entriesDOM = {
	insertEntry: (e) => {
		const entryContainer = document.querySelector(".entryLog");
		entrySection.innerHTML = "";
		e.forEach((entry) => {
			let entryComponent = journalEntryComponent.createJournalEntryComponent(
				entry
			);
			entryContainer.innerHTML += entryComponent;
		});
	},
};
export default entriesDOM;
