// controllers/notes.controller.js

// TODO1: Import Note model
const Note = require('../models/Note,js');

// TODO2: Create a function to GET all notes
// Explain: Fetch all notes from MongoDB and send as JSON
exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch notes' });
  }
};

// TODO3: Create a function to POST a new note
// Explain: Get 'text' from request body, save to MongoDB, return created note
exports.createNote = async (req, res) => {
  try {
  // Code here
    const { text } = req.body;
    const newNote = new Note({ text });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create note' });
  }
};

