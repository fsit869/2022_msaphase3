package com.frank.msaphase3.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public class UniversityDto implements Serializable {
    private final Integer id;
    private final String universityName;
}
