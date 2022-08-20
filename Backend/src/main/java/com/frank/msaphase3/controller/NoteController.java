package com.frank.msaphase3.controller;

import com.frank.msaphase3.model.Note;
import com.frank.msaphase3.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class NoteController {
    @Autowired
    private NoteService noteService;

    @GetMapping("/notes")
    public ResponseEntity<List<Note>> getAllNotes() {
        return new ResponseEntity<List<Note>>(noteService.getAllNotes(), HttpStatus.OK);
    }

    @GetMapping("/notes/{note_id}")
    public ResponseEntity<Note> getSpecificNote(@PathVariable int note_id) {
        Note note = noteService.getSpecificNote(note_id).orElse(null);
        if (note == null) {
            return new ResponseEntity("Note not found", HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<Note>(note, HttpStatus.OK);
        }
    }

    @PostMapping("/notes")
    public ResponseEntity<Void> saveNewNote(@RequestBody Note note) {
        try {
            noteService.saveNewNote(note);
            return new ResponseEntity<Void>(HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/notes/{note_id}")
    public ResponseEntity deleteSpecificNote(@PathVariable int note_id) {
        try {
            noteService.deleteNote(note_id);
            return new ResponseEntity<>("Item deleted", HttpStatus.OK);
        } catch (EmptyResultDataAccessException e) {
            return new ResponseEntity<>("ID not found", HttpStatus.NOT_FOUND);
        }
    }

//	@PatchMapping(path="/note/{note_id}")
//	public ResponseEntity<Note> patchNote(@PathVariable String note_id, @RequestBody  ) {
//	}
}
