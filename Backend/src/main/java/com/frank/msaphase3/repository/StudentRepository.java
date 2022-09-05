package com.frank.msaphase3.repository;

import com.frank.msaphase3.model.Student;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StudentRepository extends JpaRepository<Student, Integer> {
    @Query("select s from Student s order by s.gpa")
    List<Student> findByOrderByGpaAsc(Pageable pageable);

}