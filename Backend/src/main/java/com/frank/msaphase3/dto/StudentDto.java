package com.frank.msaphase3.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public class StudentDto implements Serializable {
    private final Integer id;
    private final String upi;
    private final UniversityDto university;
}
