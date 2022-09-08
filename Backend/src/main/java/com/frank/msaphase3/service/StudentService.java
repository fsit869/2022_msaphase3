package com.frank.msaphase3.service;

import com.frank.msaphase3.dto.StudentDto;
import com.frank.msaphase3.dto.UniversityDto;
import com.frank.msaphase3.model.Student;
import com.frank.msaphase3.model.University;
import com.frank.msaphase3.repository.StudentRepository;
import com.frank.msaphase3.repository.UniversityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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

    public List<Student> getAllStudentsPaging(int page, int perPage, String sort, boolean ascend) {
        Pageable paging;

        // Find sort direction
        if (ascend) {
            paging = PageRequest.of(page, perPage, Sort.by(sort).ascending());
        } else {
            paging = PageRequest.of(page, perPage, Sort.by(sort).descending());
        }

        Page<Student> pagedResult = studentRepository.findAll(paging);

        if (pagedResult.hasContent()) {
            return pagedResult.getContent();
        } else {
            return new ArrayList<Student>();
        }
    }

    public List<Student> findByUpi(String upi) {
        return studentRepository.findByUpiContainsIgnoreCaseOrderByNameAsc(upi);
    }
}
