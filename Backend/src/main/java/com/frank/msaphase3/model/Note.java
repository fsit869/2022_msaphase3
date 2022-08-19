package com.frank.msaphase3.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "note")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Note {
	@Id @GeneratedValue(strategy = GenerationType.AUTO) @Column(name = "id", nullable = false) private int id;

	@Column(name = "title") private String title;

	@Column(name = "description") private String description;

	@Column(name = "date") private String date;

	@Column(name = "serverity") private Integer serverity;

}