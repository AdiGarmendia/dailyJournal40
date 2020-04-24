const journalEntryComponent = {
	createJournalEntryComponent(journalEntry) {
		return `
	<div>
			<h1>${journalEntry.concept}</h1>
			<p>${journalEntry.entry}<br>${journalEntry.date}</p>
	</div>
	`;
	},
};
export default journalEntryComponent;
