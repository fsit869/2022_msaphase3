package com.frank.msaphase3.repository;

import com.frank.msaphase3.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository<Note, Integer> {
}