const journalEntryComponent = (journalEntry) => {
	return `
    <section>
        <div class ="journal__Date">${journalEntry.date}</h1>
        <h2>${journalEntry.concept}</h2>
        <h3>${journalEntry.comment}</h3>
        <h4>${journalEntry.mood}</h4>
        <button id="deleteButton--${journalEntry.id}">Delete</button>
        <button id="editButton--${journalEntry.id}">Edit</button>
    </section>
    `;
};
export default journalEntryComponent;
