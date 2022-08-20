package com.frank.msaphase3.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "university")
public class University {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "university_name", nullable = false)
    private String universityName;

    @Column(name = "university_rating", nullable = false)
    private int universityRank;

    @Column(name = "location", nullable = false)
    private String location;


}