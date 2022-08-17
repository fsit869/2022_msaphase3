package com.frank.msaphase3.controller;

import com.frank.msaphase3.model.Note;
import com.frank.msaphase3.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class NoteController {
	@Autowired
	private NoteRepository noteRepository;

	@GetMapping("/note")
	public ResponseEntity<List<Note>> getAllStudents() {
		return new ResponseEntity<List<Note>>(noteRepository.findAll(), HttpStatus.OK);
	}

	@PostMapping("/note")
	public ResponseEntity<Void> saveNewStudent(@RequestBody Note note) {
		try {
			noteRepository.save(note);
			return new ResponseEntity<Void>(HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
		}
	}
}
