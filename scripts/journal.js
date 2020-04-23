const createEntryComponent = (journalEntry) => {
	return `
	<div>
			<h1>${journalEntry.concept}</h1>
			<p>${journalEntry.entry}<br>${journalEntry.date}</p>
	</div>
	`;
};

const entryContainer = document.querySelector(".entryLog");

fetch("http://localhost:8088/entries")
	.then((entries) => entries.json())
	.then((parsedEntries) => {
		parsedEntries.forEach((entry) => {
			entryComponent = createEntryComponent(entry);
			entryContainer.innerHTML += entryComponent;
		});
	});
