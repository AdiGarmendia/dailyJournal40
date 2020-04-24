import API from "./data.js";
import entriesDOM from "./entriesDOM.js";

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
API.getJournalEntries().then(entriesDOM);

// const createEntryComponent = (journalEntry) => {
// 	return `
// 	<div>
// 			<h1>${journalEntry.concept}</h1>
// 			<p>${journalEntry.entry}<br>${journalEntry.date}</p>
// 	</div>
// 	`;
// };

// const entryContainer = document.querySelector(".entryLog");

// fetch("http://localhost:8088/entries")
// 	.then((entries) => entries.json())
// 	.then((parsedEntries) => {
// 		parsedEntries.forEach((entry) => {
// entryComponent = createEntryComponent(entry);
// entryContainer.innerHTML += entryComponent;
// 		});
// 	});
