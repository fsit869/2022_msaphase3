package com.frank.msaphase3.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "note")
@Data
public class Note {
	@Id @GeneratedValue(strategy = GenerationType.AUTO) @Column(name = "id", nullable = false) private Long id;

	@Column(name = "title") private String title;

	@Column(name = "description") private String description;

	@Column(name = "date") private String date;

	@Column(name = "serverity") private Integer serverity;

}