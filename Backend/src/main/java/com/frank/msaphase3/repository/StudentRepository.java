package com.frank.msaphase3.repository;

import com.frank.msaphase3.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Integer> {
}