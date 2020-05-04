import API from "./data";
import entriesDOM from "./entriesDOM.js";

API.getJournalEntries().then(entriesDOM());
