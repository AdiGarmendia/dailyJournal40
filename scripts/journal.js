/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
const journalEntry1 = {
	journalEntryDate: 04 / 17 / 2020,
	conceptsCoveredEntry: "JavaScript syntax",
	textAreaEntry:
		"Im the worst at syntax, need to get syntax for dummies or something",
	moodDayEntry: "OK",
};
const journalEntry2 = {
	journalEntryDate: 04 / 18 / 2020,
	conceptsCoveredEntry: "CSS for dummies",
	textAreaEntry: "Simple and clean, dont get crazy Adrian",
	moodDayEntry: "Happy",
};
const journalEntry3 = {
	journalEntryDate: 04 / 19 / 2020,
	conceptsCoveredEntry: "Daily Journal part 2",
	textAreaEntry: "Ask instructor if this is right, doesnt look right to me.",
	moodDayEntry: "Sad",
};

// Eventually, you will have multiple journal entries, so you need to define an appropriately named variable that will have the value of an array.

// Once you define that variable and give it a default value of a blank array, use the push() method to add the journalEntry object you defined above to the array.

const journalEntryCollection = [];

const pushEntry = function (entry) {
	journalEntryCollection.push(entry);
};

pushEntry(journalEntry1);
pushEntry(journalEntry2);
pushEntry(journalEntry3);
console.log(journalEntryCollection);
