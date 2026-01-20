// TODO1: Import mongoose
const mongoose = require('mongoose');

// TODO2: Create a new schema for Note
// TODO2a: Add 'text' field (String, required)
// TODO2b: Add 'createdAt' field (Date, default to now)

const noteSchema = new mongoose.Schema({
	text: {
		type: String,
		required: [true, "Text required."],
	},

	createdAt: {
		type: Date,
		default: Date.now
	}

});

// TODO3: Export Note model
// Explain: This will allow controllers to create/find notes

const Note = mongoose.model("Note", noteSchema);
module.exports = Note;
