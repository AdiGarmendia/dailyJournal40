const journalEntries = [
	{
		date: "04 / 17 / 2020",
		concept: "JavaScript syntax",
		entry:
			"Im the worst at syntax, need to get syntax for dummies or something",
		mood: "OK",
	},
	{
		date: "04 / 18 / 2020",
		concept: "CSS for dummies",
		entry: "Simple and clean, dont get crazy Adrian",
		mood: "Happy",
	},
	{
		date: "04 / 19 / 2020",
		concept: "Daily Journal part 2",
		entry: "Ask instructor if this is right, doesnt look right to me.",
		mood: "Sad",
	},
];

const makeJournalEntryComponent = (journalEntry) => {
	return `
	<div>
			<h1>${journalEntry.concept}</h1>
			<p>${journalEntry.entry}<br>${journalEntry.date}</p>
	</div>
	`;
};

const renderJournalEntries = (entries) => {
	const entryContainer = document.querySelector(".entryLog");
	for (let i = 0; i < entries.length; i++) {
		const entry = entries[i];
		entryContainer.innerHTML += makeJournalEntryComponent(entry);
	}
};

renderJournalEntries(journalEntries);
