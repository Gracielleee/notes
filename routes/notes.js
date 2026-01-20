// TODO1: Import Express
const express = require('express');

// TODO2: Import controller functions (getNotes, createNote)
const { getNotes, createNote } = require('../controllers/notes.controller.js');

// TODO3: Create router instance
const router = express.Router();

// TODO4: Define GET /notes route → call getNotes
router.get('/notes', getNotes);

// TODO5: Define POST /notes route → call createNote
router.post('/notes', createNote);

// TODO6: Export router
module.exports = router;