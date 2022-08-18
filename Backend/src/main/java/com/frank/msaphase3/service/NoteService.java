package com.frank.msaphase3.service;

import com.frank.msaphase3.model.Note;
import com.frank.msaphase3.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NoteService {
	@Autowired
	private NoteRepository noteRepository;

	@Cacheable(value="noteCache")
	public List<Note> getAllNotes() {
		System.out.println("Going sleep for 4 seconds. To simulate slow backend.");
		try {
			Thread.sleep(4000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		return noteRepository.findAll();
	}

	public Optional<Note> getSpecificNote(int id) {
		return noteRepository.findById(id);
	}

	@CacheEvict(value="noteCache", allEntries=true)
	public void saveNewNote(Note note) {
		noteRepository.save(note);
	}

	@CacheEvict(value="noteCache", allEntries=true)
	public void deleteNote(int id) {
		noteRepository.deleteById(id);
	}
}
