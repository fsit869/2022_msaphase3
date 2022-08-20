package com.frank.msaphase3.service;

import com.frank.msaphase3.dto.StudentDto;
import com.frank.msaphase3.dto.UniversityDto;
import com.frank.msaphase3.model.Student;
import com.frank.msaphase3.model.University;
import com.frank.msaphase3.repository.StudentRepository;
import com.frank.msaphase3.repository.UniversityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;
    private UniversityRepository universityRepository;

    public StudentDto getImportantDetails(int student_id) {
        Student student = studentRepository.findById(student_id).orElse(null);

        if (student == null) {
            return null;
        }

        University university = student.getUniversity();
        UniversityDto universityDto = new UniversityDto(university.getId(), university.getUniversityName());
        StudentDto studentDto = new StudentDto(student_id, student.getUpi(), universityDto);
        return studentDto;
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
}
