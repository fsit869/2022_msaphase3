package com.frank.msaphase3.dto;

import lombok.Data;

@Data
public class NoteDto {
    private final String title;
    private final String description;
    private final String date;
    private final Integer serverity;
}
