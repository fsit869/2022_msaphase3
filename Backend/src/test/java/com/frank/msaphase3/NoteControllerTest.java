package com.frank.msaphase3;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.frank.msaphase3.controller.NoteController;
import com.frank.msaphase3.model.Note;
import com.frank.msaphase3.repository.NoteRepository;
import com.frank.msaphase3.service.NoteService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.hamcrest.Matchers.*;

@WebMvcTest(NoteController.class)
public class NoteControllerTest {
	@Autowired MockMvc mockMvc;
	@Autowired ObjectMapper mapper;

	@MockBean NoteService noteService;

	Note NOTE_1 = new Note(0, "Title1", "Desc1", "Date1", 0);
	Note NOTE_2 = new Note(1, "Title2", "Desc2", "Date2", 1);
	Note NOTE_3 = new Note(2, "Title3", "Desc3", "Date3", 2);

	@Test
	public void getAllNotes_success() throws Exception {
		List<Note> notes = new ArrayList<>(Arrays.asList(NOTE_1, NOTE_2, NOTE_3));

		Mockito.when(noteService.getAllNotes()).thenReturn(notes);

		mockMvc.perform(MockMvcRequestBuilders
						.get("/notes")
						.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$", hasSize(3)))
				.andExpect(jsonPath("$[2].title", is("Title3")));
	}

}
