package com.frank.msaphase3.service;

import com.frank.msaphase3.model.Note;
import com.frank.msaphase3.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NoteService {
	@Autowired
	private NoteRepository noteRepository;

	public List<Note> getAllNotes() {
		return noteRepository.findAll();
	}

	public Optional<Note> getSpecificNote(int id) {
		return noteRepository.findById(id);
	}

	public void saveNewNote(Note note) {
		noteRepository.save(note);
	}

	public void deleteNote(int id) {
		noteRepository.deleteById(id);
	}
}
