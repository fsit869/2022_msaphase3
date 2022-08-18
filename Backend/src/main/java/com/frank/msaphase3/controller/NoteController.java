package com.frank.msaphase3.controller;

import com.frank.msaphase3.model.Note;
import com.frank.msaphase3.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class NoteController {
	@Autowired
	private NoteRepository noteRepository;

	@GetMapping("/notes")
	public ResponseEntity<List<Note>> getAllNotes() {
		return new ResponseEntity<List<Note>>(noteRepository.findAll(), HttpStatus.OK);
	}

	@GetMapping("/notes/{note_id}")
	public ResponseEntity<Note> getSpecificNote(@PathVariable int note_id) {
		Note note = noteRepository.findById(note_id).orElse(null);
		if (note == null) {
			return new ResponseEntity("Note not found", HttpStatus.NOT_FOUND);
		} else {
			return new ResponseEntity<Note>(note, HttpStatus.OK);
		}
	}

	@PostMapping("/notes")
	public ResponseEntity<Void> saveNewNote(@RequestBody Note note) {
		try {
			noteRepository.save(note);
			return new ResponseEntity<Void>(HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
		}
	}

	@DeleteMapping("/notes/")
	public ResponseEntity<Note> deleteSpecificNote(@PathVariable int note_id) {
		noteRepository.deleteById(note_id);

		// Check if empty
		boolean isDeleted = getSpecificNote(note_id).getStatusCode() == HttpStatus.NOT_FOUND;

		if (isDeleted) {
			return new ResponseEntity<>(HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}

//	@PatchMapping(path="/note/{note_id}")
//	public ResponseEntity<Note> patchNote(@PathVariable String note_id, @RequestBody  ) {
//	}
}
